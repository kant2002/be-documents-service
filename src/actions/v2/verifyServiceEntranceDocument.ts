import { AppAction } from '@kant2002-diia-inhouse/diia-app'

import { ActionVersion, DocumentType, SessionType } from '@kant2002-diia-inhouse/types'
import { ValidationSchema } from '@kant2002-diia-inhouse/validators'

import DocumentVerificationService from '@services/documentVerification'

import { ActionResult, CustomActionArguments } from '@interfaces/actions/v2/verifyServiceEntranceDocument'

export default class VerifyServiceEntranceDocumentAction implements AppAction {
    constructor(private readonly documentVerificationService: DocumentVerificationService) {}

    readonly sessionType: SessionType = SessionType.ServiceEntrance

    readonly actionVersion: ActionVersion = ActionVersion.V2

    readonly name: string = 'verifyServiceEntranceDocument'

    readonly validationRules: ValidationSchema<CustomActionArguments['params']> = {
        documentType: { type: 'string', enum: Object.values(DocumentType) },
        otp: { type: 'uuid' },
    }

    async handler(args: CustomActionArguments): Promise<ActionResult> {
        const {
            params: { documentType, otp },
            headers: { token },
        } = args

        return await this.documentVerificationService.verifyDocument({
            otp,
            documentType,
            token,
            designSystem: true,
        })
    }
}
