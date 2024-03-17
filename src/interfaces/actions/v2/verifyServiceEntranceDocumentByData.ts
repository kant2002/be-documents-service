import { DocumentInstance, ServiceEntranceActionArguments } from '@kant2002-diia-inhouse/types'

export interface CustomActionArguments extends ServiceEntranceActionArguments {
    params: {
        qrCode: string
    }
}

export type ActionResult = DocumentInstance
