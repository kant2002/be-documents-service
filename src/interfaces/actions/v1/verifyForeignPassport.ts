import { AppUserActionHeaders, UserActionArguments } from '@kant2002-diia-inhouse/types'

import { ForeignPassportInstance } from '@interfaces/providers/eis'

interface ActionHeaders extends AppUserActionHeaders {
    token: string
}

export interface CustomActionArguments extends UserActionArguments<ActionHeaders> {
    params: {
        otp: string
    }
}

export type ActionResult = ForeignPassportInstance
