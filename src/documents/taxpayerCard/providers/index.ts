import { asClass } from 'awilix'

import { DepsResolver } from '@kant2002-diia-inhouse/diia-app'

import DocumentsDrfoProvider from './drfo'

import { ProvidersDeps } from '@src/documents/taxpayerCard/interfaces/providers'

export function getProvidersDeps(): DepsResolver<ProvidersDeps> {
    return {
        documentsDrfoProvider: asClass(DocumentsDrfoProvider).singleton(),
    }
}
