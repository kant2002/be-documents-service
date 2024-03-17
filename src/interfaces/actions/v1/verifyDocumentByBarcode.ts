import { ObjectId } from 'bson'

import { DocumentType, ServiceActionArguments } from '@kant2002-diia-inhouse/types'

import { Document } from '@interfaces/services/documents'

export interface CustomActionArguments extends ServiceActionArguments {
    params: {
        documentType: DocumentType
        barcode: string
        branchId: ObjectId
    }
}

export type ActionResult = Document
