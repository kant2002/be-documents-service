import { AppAction } from '@kant2002-diia-inhouse/diia-app'

import { ActionVersion, SessionType } from '@kant2002-diia-inhouse/types'
import { ValidationSchema } from '@kant2002-diia-inhouse/validators'

import DocumentVerificationService from '@services/documentVerification'

import { ActionResult, CustomActionArguments } from '@interfaces/actions/v1/verifyDocument'

export default class VerifyDocumentAction implements AppAction {
    constructor(private readonly documentVerificationService: DocumentVerificationService) {}

    readonly sessionType: SessionType = SessionType.User

    readonly actionVersion: ActionVersion = ActionVersion.V1

    readonly name: string = 'verifyDocument'

    readonly validationRules: ValidationSchema = {
        qrCode: { type: 'string' },
    }

    async handler(args: CustomActionArguments): Promise<ActionResult> {
        const { params, headers } = args

        return await this.documentVerificationService.verifyDocumentByData(params, headers)
    }
}
