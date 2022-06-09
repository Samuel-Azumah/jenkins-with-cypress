/**
 * TAB-003
 */
import { defaultDevices } from 'cypress/integration/_helpers/default-devices'
import { baseUrl } from 'cypress/fixtures/shared/environment.js'

import { customer } from 'cypress/fixtures/login-folder/login-.data'

const testSpecName = 'amali-login'
const targetUrl = `${baseUrl}/de/`

defaultDevices.map((device) => {
 describe(`${testSpecName} @@ Usecase description`, () => {

    const [w, h] = device.viewport;

    before(() => {
      cy.viewport(w, h);
      cy.clearCookies({ domain: null });
      cy.visit(targetUrl);
    })

    beforeEach(() => {
      cy.viewport(w, h);
      cy.preserveDefaultCookies();
    })

    it('should login', () => {
      let { email, password } = customer;
      console.log({email,password})
    })

    it('should do something ...', () => {

    })

  })
})
