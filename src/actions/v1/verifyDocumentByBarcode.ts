import { AppAction } from '@kant2002-diia-inhouse/diia-app'

import { ActionVersion, DocumentType, SessionType } from '@kant2002-diia-inhouse/types'
import { ValidationSchema } from '@kant2002-diia-inhouse/validators'

import DocumentVerificationService from '@services/documentVerification'

import { ActionResult, CustomActionArguments } from '@interfaces/actions/v1/verifyDocumentByBarcode'

export default class VerifyDocumentByBarcodeAction implements AppAction {
    constructor(private readonly documentVerificationService: DocumentVerificationService) {}

    readonly sessionType: SessionType = SessionType.None

    readonly actionVersion: ActionVersion = ActionVersion.V1

    readonly name: string = 'verifyDocumentByBarcode'

    readonly validationRules: ValidationSchema = {
        documentType: { type: 'string', enum: Object.values(DocumentType) },
        barcode: { type: 'string' },
        branchId: { type: 'objectId' },
    }

    async handler(args: CustomActionArguments): Promise<ActionResult> {
        const {
            params: { barcode, documentType },
        } = args

        return await this.documentVerificationService.verifyDocumentByBarcode(documentType, barcode)
    }
}
