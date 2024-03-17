import { UserActionArguments } from '@kant2002-diia-inhouse/types'

import { GetInternalPassportWithRegistrationRequest, GetInternalPassportWithRegistrationResponse } from '@src/generated'

export interface CustomActionArguments extends UserActionArguments {
    params: GetInternalPassportWithRegistrationRequest
}

export type ActionResult = GetInternalPassportWithRegistrationResponse
