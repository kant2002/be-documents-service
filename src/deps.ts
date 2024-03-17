import { asClass, asValue } from 'awilix'

import { DepsFactoryFn, DepsResolver, GrpcService } from '@kant2002-diia-inhouse/diia-app'

import { AnalyticsService } from '@kant2002-diia-inhouse/analytics'
import { AuthService, CryptoDeps, CryptoService, HashService, IdentifierService } from '@kant2002-diia-inhouse/crypto'
import { DatabaseService, DbType } from '@kant2002-diia-inhouse/db'
import DiiaLogger from '@kant2002-diia-inhouse/diia-logger'
import {
    EventBus,
    EventMessageHandler,
    EventMessageValidator,
    ExternalCommunicator,
    ExternalCommunicatorChannel,
    ExternalEventBus,
    InternalQueueName,
    Queue,
    QueueDeps,
    ScheduledTask,
    ScheduledTaskQueueName,
    Task,
} from '@kant2002-diia-inhouse/diia-queue'
import { HealthCheck } from '@kant2002-diia-inhouse/healthcheck'
import { HttpDeps, HttpService } from '@kant2002-diia-inhouse/http'
import { I18nService } from '@kant2002-diia-inhouse/i18n'
import { CacheService, PubSubService, RedisDeps, RedlockService, StoreService } from '@kant2002-diia-inhouse/redis'
import { HttpProtocol } from '@kant2002-diia-inhouse/types'

import Utils from './utils'

import { getProvidersDeps as getDocumentsProvidersDeps } from '@src/documents/deps'

import { getProvidersDeps } from '@providers/index'

import { AppDeps, InternalDeps } from '@interfaces/application'
import { AppConfig } from '@interfaces/config'

export default (config: AppConfig): ReturnType<DepsFactoryFn<AppConfig, AppDeps>> => {
    const { redis, store, rabbit, db, healthCheck, auth, identifier } = config

    const providersDeps = {
        ...getProvidersDeps(config),
        ...getDocumentsProvidersDeps(config),
    }
    const internalDeps: DepsResolver<InternalDeps> = {
        appUtils: asClass(Utils).singleton(),
    }

    const cryptoDeps: DepsResolver<CryptoDeps> = {
        auth: asClass(AuthService, { injector: () => ({ authConfig: auth }) }).singleton(),
        identifier: asClass(IdentifierService, { injector: () => ({ identifierConfig: identifier }) }).singleton(),
        crypto: asClass(CryptoService).singleton(),
        hash: asClass(HashService).singleton(),
    }

    const queueDeps: DepsResolver<QueueDeps> = {
        queue: asClass(Queue, { injector: () => ({ connectionConfig: rabbit }) }).singleton(),
        eventMessageHandler: asClass(EventMessageHandler).singleton(),
        eventMessageValidator: asClass(EventMessageValidator).singleton(),
        eventBus: asClass(EventBus, {
            injector: (c) => ({
                queueProvider: c.resolve<Queue>('queue').getInternalQueue(),
                queueName: InternalQueueName.QueueDocuments,
            }),
        }).singleton(),
        scheduledTask: asClass(ScheduledTask, {
            injector: (c) => ({
                queueProvider: c.resolve<Queue>('queue').getInternalQueue(),
                queueName: ScheduledTaskQueueName.ScheduledTasksQueueDocuments,
            }),
        }).singleton(),
        task: asClass(Task, {
            injector: (c) => ({ queueProvider: c.resolve<Queue>('queue').getInternalQueue() }),
        }).singleton(),
        externalEventBus: asClass(ExternalEventBus, {
            injector: (c) => ({ queueProvider: c.resolve<Queue>('queue').getExternalQueue() }),
        }).singleton(),
        external: asClass(ExternalCommunicator).singleton(),
        externalChannel: asClass(ExternalCommunicatorChannel).singleton(),
    }

    const redisDeps: DepsResolver<RedisDeps> = {
        cache: asClass(CacheService, { injector: () => ({ redisConfig: redis }) }).singleton(),
        pubsub: asClass(PubSubService, { injector: () => ({ redisConfig: redis }) }).singleton(),
        store: asClass(StoreService, { injector: () => ({ storeConfig: store }) }).singleton(),
        redlock: asClass(RedlockService, { injector: () => ({ storeConfig: store }) }).singleton(),
    }

    const httpDeps: DepsResolver<HttpDeps> = {
        httpService: asClass(HttpService, { injector: () => ({ protocol: HttpProtocol.Http }) }).singleton(),
        httpsService: asClass(HttpService, { injector: () => ({ protocol: HttpProtocol.Https }) }).singleton(),
    }

    return {
        config: asValue(config),
        logger: asClass(DiiaLogger, { injector: () => ({ options: { logLevel: process.env.LOG_LEVEL } }) }).singleton(),
        healthCheck: asClass(HealthCheck, { injector: (c) => ({ container: c.cradle, healthCheckConfig: healthCheck }) }).singleton(),
        database: asClass(DatabaseService, { injector: () => ({ dbConfigs: { [DbType.Main]: db } }) }).singleton(),
        i18n: asClass(I18nService).singleton(),
        analytics: asClass(AnalyticsService).singleton(),
        grpcService: asClass(GrpcService, { injector: (c) => ({ container: c }) }).singleton(),
        ...providersDeps,
        ...internalDeps,
        ...cryptoDeps,
        ...queueDeps,
        ...httpDeps,
        ...redisDeps,
    }
}
