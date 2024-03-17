import { UserActionArguments } from '@kant2002-diia-inhouse/types'

import { DocumentDownloadParams, DocumentDownloadResponse } from '@interfaces/services/documents'

export interface CustomActionArguments extends UserActionArguments {
    params: DocumentDownloadParams
}

export type ActionResult = DocumentDownloadResponse
