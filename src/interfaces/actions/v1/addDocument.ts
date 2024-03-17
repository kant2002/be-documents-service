import { UserActionArguments } from '@kant2002-diia-inhouse/types'

export interface CustomActionArguments extends UserActionArguments {
    params: { documentType: string } & Record<string, Record<string, never>>
}

export interface ActionResult {
    success: true
    processCode?: number
}
