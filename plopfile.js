module.exports = function generateComponent(plop) {
  plop.setGenerator('Spec', {
    description: 'Creates a spec file and fixture',
    prompts: [
      {
        message: 'EPIC, example:  PIC-123  or  PIC-123, PIC-124 >> ',
        name: 'epic',
        type: 'input',
        validate(value) {
          if (/.+/.test(value)) {
            return true
          }
          return 'No EPIC? No spec! EPIC is Required'
        },
      },
      {
        message: 'number of the file, example: exli-001 >> ',
        name: 'number',
        type: 'input',
        validate(value) {
          if (/.+/.test(value)) {
            return true
          }
          return 'No number? No spec! Number is Required'
        },
      },
    ],
    actions: [
      {
        path: 'cypress/integration/tests/exli-{{dotCase number}}.spec.js',
        skipIfExists: true,
        templateFile: 'plop-templates/spec/spec.plop',
        type: 'add',
      },
      {
        path: 'cypress/fixtures/exli-{{dotCase number}}.data.js',
        skipIfExists: true,
        templateFile: 'plop-templates/spec/data.plop',
        type: 'add',
      },
    ],
  })
}
