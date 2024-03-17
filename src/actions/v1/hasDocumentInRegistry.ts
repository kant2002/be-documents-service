import { AppAction } from '@kant2002-diia-inhouse/diia-app'

import { ActionVersion, DocumentType, SessionType } from '@kant2002-diia-inhouse/types'
import { ValidationSchema } from '@kant2002-diia-inhouse/validators'

import DocumentsService from '@services/documents'

import { ActionResult, CustomActionArguments } from '@interfaces/actions/v1/hasDocumentInRegistry'

export default class HasDocumentInRegistryAction implements AppAction {
    constructor(private readonly documentsService: DocumentsService) {}

    readonly sessionType: SessionType = SessionType.User

    readonly actionVersion: ActionVersion = ActionVersion.V1

    readonly name: string = 'hasDocumentInRegistry'

    readonly validationRules: ValidationSchema<CustomActionArguments['params']> = {
        documentType: { type: 'string', enum: Object.values(DocumentType) },
    }

    async handler(args: CustomActionArguments): Promise<ActionResult> {
        const {
            params: { documentType },
            session: { user },
        } = args

        return await this.documentsService.hasDocumentInRegistry(documentType, user)
    }
}
