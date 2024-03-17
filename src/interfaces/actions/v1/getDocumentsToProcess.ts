import { DocumentType, UserActionArguments } from '@kant2002-diia-inhouse/types'

import { CommonDocument, Documents } from '@interfaces/services/documents'

export interface CustomActionArguments extends UserActionArguments {
    params: {
        filter?: DocumentType[]
    }
}

export type ActionResult = Documents<CommonDocument>
