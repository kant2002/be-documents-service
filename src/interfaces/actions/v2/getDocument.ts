import { DocumentType, UserActionArguments } from '@kant2002-diia-inhouse/types'

import { GetDocumentResponse } from '@interfaces/services/documents'

export interface CustomActionArguments extends UserActionArguments {
    params: {
        documentType: DocumentType
        documentId: string
    }
}

export type ActionResult = GetDocumentResponse
