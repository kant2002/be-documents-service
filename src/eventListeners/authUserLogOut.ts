import { EventBusListener, InternalEvent } from '@kant2002-diia-inhouse/diia-queue'
import { ValidationSchema } from '@kant2002-diia-inhouse/validators'

import DocumentsExpirationService from '@services/documentsExpiration'

import { EventPayload } from '@interfaces/eventListeners/authUserLogOut'

export default class AuthUserLogOutEventListener implements EventBusListener {
    constructor(private readonly documentsExpirationService: DocumentsExpirationService) {}

    readonly event: InternalEvent = InternalEvent.AuthUserLogOut

    readonly validationRules: ValidationSchema = {
        userIdentifier: { type: 'string' },
        mobileUid: { type: 'string' },
    }

    async handler(message: EventPayload): Promise<void> {
        const { mobileUid, userIdentifier } = message

        await this.documentsExpirationService.removeUserExpirationsByMobileUid(mobileUid, userIdentifier)
    }
}
