import { AppAction } from '@kant2002-diia-inhouse/diia-app'

import { ActionVersion, SessionType } from '@kant2002-diia-inhouse/types'
import { ValidationSchema } from '@kant2002-diia-inhouse/validators'

import DocumentsService from '@services/documents'

import { ActionResult, CustomActionArguments } from '@interfaces/actions/v6/getDocuments'

export default class GetDocumentsAction implements AppAction {
    constructor(private readonly documentsService: DocumentsService) {}

    readonly sessionType: SessionType = SessionType.User

    readonly actionVersion: ActionVersion = ActionVersion.V6

    readonly name: string = 'getDocuments'

    readonly validationRules: ValidationSchema<CustomActionArguments['params']> = {
        filter: {
            type: 'array',
            items: {
                type: 'string',
                enum: [
                    ...this.documentsService.documentFilters,
                    ...Object.values(this.documentsService.documentFiltersBySessionTypeAndFeature)
                        .map((val) => Object.values(val))
                        .flat()
                        .flat(),
                ],
            },
            optional: true,
        },
    }

    async handler(args: CustomActionArguments): Promise<ActionResult> {
        const {
            params: { filter = this.documentsService.getDocumentsFilterForSession(args.session) },
            headers,
        } = args

        return await this.documentsService.getDocuments(args.session, filter, headers, { designSystem: true })
    }
}
