import { DocumentType } from '@kant2002-diia-inhouse/types'

export interface EventPayload {
    userIdentifier: string
    documentTypes: DocumentType[]
}
