import { ServiceActionArguments } from '@kant2002-diia-inhouse/types'

import { ExpireDocumentRequest } from '@src/generated'

export interface CustomActionArguments extends ServiceActionArguments {
    params: ExpireDocumentRequest
}

export type ActionResult = void
