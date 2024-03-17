import { PortalUserActionArguments } from '@kant2002-diia-inhouse/types'

export type CustomActionArguments = PortalUserActionArguments

export interface ActionResult {
    address: string
    koatuu?: string
    communityCode?: string
}
