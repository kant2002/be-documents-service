import { Localization, UserActionArguments } from '@kant2002-diia-inhouse/types'

export interface CustomActionArguments extends UserActionArguments {
    params: {
        documentId: string
        localization?: Localization
    }
}
