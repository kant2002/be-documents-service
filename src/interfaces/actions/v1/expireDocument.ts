import { DocumentType, UserActionArguments } from '@kant2002-diia-inhouse/types'

export interface CustomActionArguments extends UserActionArguments {
    params: {
        documentType: DocumentType
    }
}

export type ActionResult = void
