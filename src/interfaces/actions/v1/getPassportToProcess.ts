import { UserActionArguments } from '@kant2002-diia-inhouse/types'

import { Passport } from '@interfaces/providers/eis'

export interface CustomActionArguments extends UserActionArguments {
    params: {
        handlePhoto?: boolean
    }
}

export type ActionResult = Passport
