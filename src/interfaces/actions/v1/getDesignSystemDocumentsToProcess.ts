import { UserActionArguments } from '@kant2002-diia-inhouse/types'

import { DocumentsResponse, GetDocumentsRequest } from '@interfaces/services/documents'

export interface CustomActionArguments extends UserActionArguments {
    params: GetDocumentsRequest
}

export type ActionResult = DocumentsResponse
