import { DocumentType, UserActionArguments } from '@kant2002-diia-inhouse/types'

export interface CustomActionArguments extends UserActionArguments {
    params: {
        documentType: DocumentType
        documentId: string
        force?: boolean
    }
}

export interface ActionResult {
    success: true
    processCode?: number
}
