import { GrpcService } from '@kant2002-diia-inhouse/diia-app'

import { AnalyticsService } from '@kant2002-diia-inhouse/analytics'
import { CryptoDeps } from '@kant2002-diia-inhouse/crypto'
import { DatabaseService } from '@kant2002-diia-inhouse/db'
import { QueueDeps } from '@kant2002-diia-inhouse/diia-queue'
import { HealthCheck } from '@kant2002-diia-inhouse/healthcheck'
import { HttpDeps } from '@kant2002-diia-inhouse/http'
import { I18nService } from '@kant2002-diia-inhouse/i18n'
import { RedisDeps } from '@kant2002-diia-inhouse/redis'

import Utils from '@utils/index'

import { AppConfig } from '@interfaces/config'
import { ProvidersDeps } from '@interfaces/providers'

export type InternalDeps = {
    appUtils: Utils
}

export type AppDeps = {
    config: AppConfig
    healthCheck: HealthCheck
    database: DatabaseService
    analytics: AnalyticsService
    i18n: I18nService
    grpcService: GrpcService
} & InternalDeps &
    ProvidersDeps &
    QueueDeps &
    RedisDeps &
    CryptoDeps &
    HttpDeps
