import { AppAction } from '@kant2002-diia-inhouse/diia-app'

import { BadRequestError } from '@kant2002-diia-inhouse/errors'
import { ActionVersion, SessionType } from '@kant2002-diia-inhouse/types'
import { ValidationSchema } from '@kant2002-diia-inhouse/validators'

import DocumentsService from '@services/documents'

import { ActionResult, CustomActionArguments } from '@interfaces/actions/v2/getDocuments'

export default class GetDocumentsAction implements AppAction {
    constructor(private readonly documentsService: DocumentsService) {}

    readonly sessionType: SessionType = SessionType.User

    readonly actionVersion: ActionVersion = ActionVersion.V2

    readonly name: string = 'getDocuments'

    readonly validationRules: ValidationSchema = {
        filter: {
            type: 'array',
            items: { type: 'string', enum: this.documentsService.documentFilters },
            optional: true,
        },
    }

    async handler(args: CustomActionArguments): Promise<ActionResult> {
        const {
            session,
            params: { filter = this.documentsService.documentFiltersBySessionType[session.user.sessionType] },
            headers,
        } = args

        if (!filter) {
            throw new BadRequestError('Filter parameters is not defined')
        }

        return await this.documentsService.getDocuments(session, filter, headers)
    }
}
