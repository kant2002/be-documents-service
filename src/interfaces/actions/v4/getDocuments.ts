import { DocumentType, UserActionArguments } from '@kant2002-diia-inhouse/types'

import { DocumentWithCover, DocumentsWithOrder } from '@interfaces/services/documents'

export interface CustomActionArguments extends UserActionArguments {
    params: {
        filter: DocumentType[]
    }
}

export type ActionResult = DocumentsWithOrder<DocumentWithCover>
