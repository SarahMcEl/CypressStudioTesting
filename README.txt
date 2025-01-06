Add updated files to https://github.com/cypress-io/cypress-example-kitchensink
NOTE: other tests will fail once files are updated!
To test run npx cypress open to open cypress and finish E2E setup.
Then, turn on cypress studio in the cypress.config.js with the following code
`
e2e: {
    experimentalStudio:true,
  },
`
You also have to launch a local server to launch the website on to test.
Then with the Cypress Studio Tool I created the tests to start testing all scenarios of the elements.

Results:
For the first name and last name fields, non-text characters including spaces are allowed and needs to be updated.
For the Date field, the person's date of birth is allowed to be in the future which is not possible and needs to be restricted.
No other errors noted.
