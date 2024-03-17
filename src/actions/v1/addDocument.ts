import { AppAction } from '@kant2002-diia-inhouse/diia-app'

import { BadRequestError } from '@kant2002-diia-inhouse/errors'
import { ActionVersion, SessionType } from '@kant2002-diia-inhouse/types'
import { ValidationSchema } from '@kant2002-diia-inhouse/validators'

import DocumentsService from '@services/documents'

import { ActionResult, CustomActionArguments } from '@interfaces/actions/v1/addDocument'

export default class AddDocumentAction implements AppAction {
    constructor(private readonly documentsService: DocumentsService) {}

    readonly sessionType: SessionType = SessionType.User

    readonly actionVersion: ActionVersion = ActionVersion.V1

    readonly name: string = 'addDocument'

    readonly validationRules: ValidationSchema = {
        documentType: { type: 'string', enum: Object.keys(this.documentsService.addDocumentStrategies) },
    }

    async handler(args: CustomActionArguments): Promise<ActionResult> {
        const {
            params: { documentType, ...rest },
            session: {
                user: { identifier: userIdentifier },
            },
            headers: { mobileUid },
        } = args

        const documentDataFromRest = documentType in rest && rest[documentType]

        if (!documentDataFromRest) {
            throw new BadRequestError(`Expected request body for ${documentType}`)
        }

        const processCode = await this.documentsService.addDocument({
            documentType,
            userIdentifier,
            mobileUid,
            data: documentDataFromRest,
        })

        return {
            success: true,
            processCode,
        }
    }
}
