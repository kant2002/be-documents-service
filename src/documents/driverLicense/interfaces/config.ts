import { DocumentType } from '@kant2002-diia-inhouse/types'

export interface PluginConfig {
    [DocumentType.DriverLicense]: {
        providerIsEnabled: boolean
        returnExpired: boolean
    }
}
