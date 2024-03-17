import { DocumentInstance, UserActionArguments } from '@kant2002-diia-inhouse/types'

export interface CustomActionArguments extends UserActionArguments {
    params: {
        qrCode: string
    }
}

export type ActionResult = DocumentInstance
