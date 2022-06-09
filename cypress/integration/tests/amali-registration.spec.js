/**
 * TAB-004
 */
// import { defaultDevices } from 'cypress/integration/_helpers/default-devices'
// import { baseUrl } from 'cypress/fixtures/shared/environment.js'

// import { customer } from 'cypress/fixtures//registration-.data'

// const testSpecName = 'amali-registration'
// const targetUrl = `${baseUrl}/de/`

// defaultDevices.map((device) => {
//  describe(`${testSpecName} @@ Usecase description`, () => {

//     const [w, h] = device.viewport;

//     before(() => {
//       cy.viewport(w, h);
//       cy.clearCookies({ domain: null });
//       cy.visit(targetUrl);
//     })

//     beforeEach(() => {
//       cy.viewport(w, h);
//       cy.preserveDefaultCookies();
//     })

//     it('should login', () => {
//       let { email, password } = customer;
//       console.log({email,password})
//     })

//     it('should do something ...', () => {

//     })

//   })
// })

// describe('test', () => {
//   it('Should login as a regular customer', () => {
//     cy.viewport(1440, 900)
//     cy.initializeAutoheal('xxXMskIv6kof')
//     cy.visit('https://t-new.exlibris.ch/de/')
//     cy.get('//div/*[normalize-space(.)="Jetzt anmelden"]', 2).click()
//     cy.get('#text-field_val-email', 3).type('samuel.azumah@nexum.com')
//     cy.get('#text-field_val-password', 4).type('1234567')
//     cy.get('.login-module-submit>button', 5).click()
//     cy.autoheal()
//   })
// })

describe.skip('test', () => {
  it('Should add an item to cart and navigate to step 1', () => {
    cy.viewport(1440, 900)
    //cy.initializeAutoheal('w53ZYhwVYrzc');
    cy.visit('https://a-new.exlibris.ch/de/filme/bd-blu-ray/')
    cy.get(
      '//*[contains(text(),"Spider-Man: No Way Home")]/ancestor-or-self::div/div[2]/div[2]/div/button[2]/*[@name="warenkorb"]',
      2,
    ).click()
    cy.get('div>div:nth-child(2)>div:nth-child(2)>div>div>div>div>div', 3).should(
      'include.text',
      '1',
    )
    cy.get('div>div:nth-child(3)>[type="button"]', 4).click()
    cy.get('div>div:nth-child(1)>[type="button"]', 5).should(
      'include.text',
      'Weiter zu Adresse & Lieferung',
    )
    // cy.autoheal();
  })
})

describe('test', () => {
  it('Should login, add item to cart and to proceed to step 1', () => {
    cy.viewport(1440, 900)
    cy.initializeAutoheal('UTgVCgEef91d')
    cy.visit('https://t-new.exlibris.ch/de/suche/?q=buch')
    cy.get('//div/*[normalize-space(.)="Jetzt anmelden"]', 2).click()
    cy.get('#text-field_val-email', 3).type('samuel.azumah@nexum.com')
    cy.get('#text-field_val-email', 4).should('include.text', 'samuel.azumah@nexum.com')
    cy.get('#text-field_val-password', 5).type('1234567')
    cy.get('#text-field_val-password', 6).should('include.text', '1234567')
    cy.get('.login-module-submit>button', 7).should('include.text', 'Anmelden')
    cy.get('.login-module-submit>button', 8).click()
    cy.get('header>div:nth-child(1)>div:nth-child(2)>div>span', 9).should(
      'include.text',
      'Willkommen Frau Azumah, schön sind Sie da!',
    )
    cy.get(
      'span:nth-child(1) > a > div > div:nth-child(3) > div:nth-child(3) > div > button[type="button"]:nth-child(2) > svg > use',
      10,
    ).click()
    cy.get('div>div:nth-child(2)>div:nth-child(2)>div>div>div>div>div', 11).should(
      'include.text',
      '1',
    )
    cy.get('div>div:nth-child(2)>div:nth-child(2)>div>div>div>div>div', 12).click()
    cy.get('div>div:nth-child(1)>[type="button"]', 13).should(
      'include.text',
      'Weiter zu Adresse & Lieferung',
    )
    cy.autoheal()
  })
})
