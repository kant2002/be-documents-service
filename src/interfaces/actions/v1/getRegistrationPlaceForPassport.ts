import { UserActionArguments } from '@kant2002-diia-inhouse/types'

export interface CustomActionArguments extends UserActionArguments {
    params: {
        unzr: string
    }
}

export interface ActionResult {
    currentRegistrationPlaceUA: string
}
