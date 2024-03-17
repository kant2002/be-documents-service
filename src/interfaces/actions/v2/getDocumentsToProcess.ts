import { DocumentType, Documents, UserActionArguments } from '@kant2002-diia-inhouse/types'

import { GetDocumentToProcessOptions } from '@interfaces/services/documents'

export interface CustomActionArguments extends UserActionArguments {
    params: {
        documentTypes: DocumentType[]
        ignoreCache?: boolean
        queries?: GetDocumentToProcessOptions
    }
}

export type ActionResult = Documents
