import { DocumentType, UserActionArguments } from '@kant2002-diia-inhouse/types'

import { Document, DocumentsWithOrder } from '@interfaces/services/documents'

export interface CustomActionArguments extends UserActionArguments {
    params: {
        filter: DocumentType[]
    }
}

export type ActionResult = DocumentsWithOrder<Document>
