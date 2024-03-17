import { DocumentType } from '@kant2002-diia-inhouse/types'

export interface PluginConfig {
    [DocumentType.TaxpayerCard]: {
        cardExpirationTimeOnSuccessSec: number
        cardExpirationTimeOnConfirmingSec: number
        cardExpirationTimeOnNotConfirmedSec: number
    }
}
