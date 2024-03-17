import { MoleculerService } from '@kant2002-diia-inhouse/diia-app'

import Logger from '@kant2002-diia-inhouse/diia-logger'
import { mockInstance } from '@kant2002-diia-inhouse/test'
import { ActionVersion } from '@kant2002-diia-inhouse/types'

import SuperGenService from '@services/superGen'

describe(`Service ${SuperGenService.name}`, () => {
    const logger = mockInstance(Logger)
    const moleculerService = mockInstance(MoleculerService)

    const service = new SuperGenService(moleculerService, logger)

    describe(`method: ${service.generatePdf.name}`, () => {
        it('should return certificate file', async () => {
            const result = { file: 'file' }
            const document = {}

            jest.spyOn(moleculerService, 'act').mockResolvedValueOnce(result)

            expect(await service.generatePdf({ document }, 'templateName')).toBe(result.file)
            expect(moleculerService.act).toHaveBeenCalledWith(
                'SuperGen',
                { name: 'templateName', actionVersion: ActionVersion.V1 },
                { params: { document } },
            )
        })
    })
})
