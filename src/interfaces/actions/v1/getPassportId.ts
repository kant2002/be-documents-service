import { ServiceActionArguments } from '@kant2002-diia-inhouse/types'

import { PassportId } from '@interfaces/services/documentsExpiration'

export interface CustomActionArguments extends ServiceActionArguments {
    params: {
        mobileUid: string
        userIdentifier: string
    }
}

export type ActionResult = PassportId
