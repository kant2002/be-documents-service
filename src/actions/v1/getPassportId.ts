import { AppAction } from '@kant2002-diia-inhouse/diia-app'

import { ActionVersion, SessionType } from '@kant2002-diia-inhouse/types'
import { ValidationSchema } from '@kant2002-diia-inhouse/validators'

import DocumentsExpirationService from '@services/documentsExpiration'

import { ActionResult, CustomActionArguments } from '@interfaces/actions/v1/getPassportId'

export default class GetPassportIdAction implements AppAction {
    constructor(private readonly documentsExpirationService: DocumentsExpirationService) {}

    readonly sessionType: SessionType = SessionType.None

    readonly actionVersion: ActionVersion = ActionVersion.V1

    readonly name: string = 'getPassportId'

    readonly validationRules: ValidationSchema = {
        mobileUid: { type: 'string' },
        userIdentifier: { type: 'string' },
    }

    async handler(args: CustomActionArguments): Promise<ActionResult> {
        const { mobileUid, userIdentifier } = args.params

        return await this.documentsExpirationService.getPassportId(mobileUid, userIdentifier)
    }
}
