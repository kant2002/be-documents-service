import { AppUserActionHeaders, DriverLicense, UserActionArguments } from '@kant2002-diia-inhouse/types'

interface ActionHeaders extends AppUserActionHeaders {
    token: string
}

export interface CustomActionArguments extends UserActionArguments<ActionHeaders> {
    params: {
        otp: string
    }
}

export type ActionResult = DriverLicense
