import { UserActionArguments } from '@kant2002-diia-inhouse/types'

import { PassportByInnRegistrationInfo, PassportInfo } from '@interfaces/providers/dms'

export interface CustomActionArguments extends UserActionArguments {
    params: {
        digitalPassportRegistration?: boolean
    }
}

export interface ActionResult {
    passport?: PassportInfo
    registration: PassportByInnRegistrationInfo
}
