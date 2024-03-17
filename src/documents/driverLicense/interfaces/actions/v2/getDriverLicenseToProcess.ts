import { DriverLicense, ServiceActionArguments } from '@kant2002-diia-inhouse/types'

export interface CustomActionArguments extends ServiceActionArguments {
    params: {
        itn: string
        ignoreCache?: boolean
    }
}

export type ActionResult = DriverLicense
