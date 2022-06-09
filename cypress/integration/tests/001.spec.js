/**
 * Sample Test2
 */

import { getTestSpecName } from 'lib/testSpecName'
import { defaultDevices as devices } from 'cypress/integration/_helpers/default-devices'

const testSpecName = getTestSpecName(__filename)

devices.forEach((device) => {
  const targetUrl = 'https://www.youtube.com/'
  describe(`${testSpecName} @@ Shop Login - ${device.name}`, () => {
    const [w, h] = device.viewport

    before(() => {
      cy.viewport(w, h)
      cy.clearCookies({ domain: null })
    })

    beforeEach(() => {
      cy.viewport(w, h)
    })

    afterEach(function () {
      if (this.currentTest.state === 'failed') {
        Cypress.runner.stop()
      }
    })

    it('Should visit page', () => {
      cy.visit(targetUrl)
    })
  })
})
