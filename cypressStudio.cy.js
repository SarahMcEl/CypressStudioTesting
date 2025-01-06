describe('Cypress Studio Demo', () => {
  describe('Fields for name, DOB and gender with submit button functionality', () =>{
    /* ==== Test Created with Cypress Studio ==== */
    it('First Name Field and Submit Button Output', function() {
      /* ==== Generated with Cypress Studio ==== */
      cy.visit('http://127.0.0.1:9999/app/index.html');
      cy.get('#FirstNameField').clear('J');
      cy.get('#FirstNameField').type('John');
      cy.get('#SubmitButton').click();
      cy.get('#results').click();
      cy.get('#results').should('have.text', 'Not enough information to print results enter at least first name, last name, and date of birth')
      /* ==== End Cypress Studio ==== */
    });

    /* ==== Test Created with Cypress Studio ==== */
    it('Last Name Field and Submit Button Output', function() {
      /* ==== Generated with Cypress Studio ==== */
      cy.visit('http://127.0.0.1:9999/app/index.html');
      cy.get('#LastNameField').clear('Kelley');
      cy.get('#LastNameField').type('Kelley');
      cy.get('#SubmitButton').click();
      cy.get('#results').click();
      cy.get('#results').should('have.text', 'Not enough information to print results enter at least first name, last name, and date of birth')
      /* ==== End Cypress Studio ==== */
    });


    /* ==== Test Created with Cypress Studio ==== */
    it('Date of Birth and Submit Button Output', function() {
      /* ==== Generated with Cypress Studio ==== */
      cy.visit('http://127.0.0.1:9999/app/index.html');
      cy.get('#DateField').click();
      cy.get('#SubmitButton').click();
      cy.get('#results').click();
      cy.get('#results').should('have.text', 'Not enough information to print results enter at least first name, last name, and date of birth')
      /* ==== End Cypress Studio ==== */
    });

    /* ==== Test Created with Cypress Studio ==== */
    it('Male Gender and Submit Button Output', function() {
      /* ==== Generated with Cypress Studio ==== */
      cy.visit('http://127.0.0.1:9999/app/index.html');
      cy.get('#MaleRadioButton').check();
      cy.get('#SubmitButton').click();
      cy.get('#results').click();
      cy.get('#results').should('have.text', 'Not enough information to print results enter at least first name, last name, and date of birth')
      /* ==== End Cypress Studio ==== */
    });

    /* ==== Test Created with Cypress Studio ==== */
    it('Female Gender and Submit Button Output', function() {
      /* ==== Generated with Cypress Studio ==== */
      cy.visit('http://127.0.0.1:9999/app/index.html');
      cy.get('#FemaleRadioButton').check();
      cy.get('#SubmitButton').click();
      cy.get('#results').click();
      cy.get('#results').should('have.text', 'Not enough information to print results enter at least first name, last name, and date of birth')
      /* ==== End Cypress Studio ==== */
    });

    /* ==== Test Created with Cypress Studio ==== */
    it('Full Name and Submit Button Output', function() {
      /* ==== Generated with Cypress Studio ==== */
      cy.visit('http://127.0.0.1:9999/app/index.html');
      cy.get('#FirstNameField').clear('John');
      cy.get('#FirstNameField').type('John');
      cy.get('#LastNameField').clear('Kelley');
      cy.get('#LastNameField').type('Kelley');
      cy.get('#SubmitButton').click();
      cy.get('#results').click();
      cy.get('#results').should('have.text', 'Not enough information to print results enter at least first name, last name, and date of birth')
      /* ==== End Cypress Studio ==== */
    });

    /* ==== Test Created with Cypress Studio ==== */
    it('Full Name, DOB, Gender and Submit Button Output', function() {
      /* ==== Generated with Cypress Studio ==== */
      cy.visit('http://127.0.0.1:9999/app/index.html');
      cy.get('#FirstNameField').clear('Sarah');
      cy.get('#FirstNameField').type('Sarah');
      cy.get('#LastNameField').clear('Kelley');
      cy.get('#LastNameField').type('Kelley');
      cy.get('#DateField').clear('0002-04-07');
      cy.get('#DateField').type('2003-04-07');
      cy.get('#FemaleRadioButton').check();
      cy.get('#SubmitButton').click();
      cy.get('#results').click();
      cy.get('#results').should('have.text', 'Sarah Kelley was born on 2003-04-07')
      /* ==== End Cypress Studio ==== */
    });

    /* ==== Test Created with Cypress Studio ==== */
    it('Numbers and Symbols Added Test Output', function() {
      /* ==== Generated with Cypress Studio ==== */
      cy.visit('http://127.0.0.1:9999/app/index.html');
      cy.get('#FirstNameField').clear('J0hn');
      cy.get('#FirstNameField').type('J0hn');
      cy.get('#LastNameField').clear('Ke!!ey');
      cy.get('#LastNameField').type('Ke!!ey');
      cy.get('#DateField').clear('2025-01-07');
      cy.get('#DateField').type('2023-01-01');
      cy.get('#MaleRadioButton').check();
      cy.get('#SubmitButton').click();
      cy.get('#results').click();
      /* ==== End Cypress Studio ==== */
    });

    /* ==== Test Created with Cypress Studio ==== */
    it('Space Names Test Output', function() {
      /* ==== Generated with Cypress Studio ==== */
      cy.visit('http://127.0.0.1:9999/app/index.html');
      cy.get('#FirstNameField').clear(' ');
      cy.get('#FirstNameField').type('   ');
      cy.get('#LastNameField').clear(' ');
      cy.get('#LastNameField').type('   ');
      cy.get('#DateField').clear('0002-02-02');
      cy.get('#DateField').type('2022-02-02');
      cy.get('#MaleRadioButton').check();
      cy.get('#SubmitButton').click();
      cy.get('#results').click();
      /* ==== End Cypress Studio ==== */
    });

    /* ==== Test Created with Cypress Studio ==== */
    it('Future DOB Test Output', function() {
      /* ==== Generated with Cypress Studio ==== */
      cy.visit('http://127.0.0.1:9999/app/index.html');
      cy.get('#FirstNameField').clear('John');
      cy.get('#FirstNameField').type('John');
      cy.get('#LastNameField').clear('Kelley');
      cy.get('#LastNameField').type('Kelley');
      cy.get('#DateField').clear('0002-02-02');
      cy.get('#DateField').type('2099-02-02');
      cy.get('#FemaleRadioButton').check();
      cy.get('#SubmitButton').click();
      cy.get('#results').click();
      /* ==== End Cypress Studio ==== */
    });
  });
  describe('Checklist boxes and completed button tests', () => {
    /* ==== Test Created with Cypress Studio ==== */
    it('One Check Box Test Output', function() {
      /* ==== Generated with Cypress Studio ==== */
      cy.visit('http://127.0.0.1:9999/app/index.html');
      cy.get('#first').check();
      cy.get('#CompletedList').click();
      cy.get('#completedResults').click();
      cy.get('#completedResults').should('have.text', 'You still have 5 items to check off')
       /* ==== End Cypress Studio ==== */
    });

    /* ==== Test Created with Cypress Studio ==== */
    it('Two Checkbox Test Output', function() {
      /* ==== Generated with Cypress Studio ==== */
      cy.visit('http://127.0.0.1:9999/app/index.html');
      cy.get('#first').check();
      cy.get('#second').check();
      cy.get('#CompletedList').click();
      cy.get('#completedResults').click();
      cy.get('#completedResults').should('have.text', 'You still have 4 items to check off')
      /* ==== End Cypress Studio ==== */
    });

    /* ==== Test Created with Cypress Studio ==== */
    it('Three Checkbox Test Output', function() {
      /* ==== Generated with Cypress Studio ==== */
      cy.visit('http://127.0.0.1:9999/app/index.html');
      cy.get('#first').check();
      cy.get('#second').check();
      cy.get('#third').check();
      cy.get('#CompletedList').click();
      cy.get('#completedResults').click();
      cy.get('#completedResults').should('have.text', 'You still have 3 items to check off')
      /* ==== End Cypress Studio ==== */
    });

    /* ==== Test Created with Cypress Studio ==== */
    it('Four Checkbox Test Output', function() {
      /* ==== Generated with Cypress Studio ==== */
      cy.visit('http://127.0.0.1:9999/app/index.html');
      cy.get('#first').check();
      cy.get('#second').check();
      cy.get('#third').check();
      cy.get('#fourth').check();
      cy.get('#CompletedList').click();
      cy.get('#completedResults').click();
      cy.get('#completedResults').should('have.text', 'You still have 2 items to check off')
      /* ==== End Cypress Studio ==== */
    });

    /* ==== Test Created with Cypress Studio ==== */
    it('Five Checkbox Test Output', function() {
      /* ==== Generated with Cypress Studio ==== */
      cy.visit('http://127.0.0.1:9999/app/index.html');
      cy.get('#first').check();
      cy.get('#second').check();
      cy.get('#third').check();
      cy.get('#fourth').check();
      cy.get('#fifth').check();
      cy.get('#CompletedList').click();
      cy.get('#completedResults').click();
      cy.get('#completedResults').should('have.text', 'You still have 1 items to check off')
      /* ==== End Cypress Studio ==== */
    });

    /* ==== Test Created with Cypress Studio ==== */
    it('All Checkbox Test Output', function() {
      /* ==== Generated with Cypress Studio ==== */
      cy.visit('http://127.0.0.1:9999/app/index.html');
      cy.get('#first').check();
      cy.get('#second').check();
      cy.get('#third').check();
      cy.get('#fourth').check();
      cy.get('#fifth').check();
      cy.get('#sixth').check();
      cy.get('#CompletedList').click();
      cy.get('#completedResults').click();
      cy.get('#completedResults').should('have.text', 'You completed your checklist!!')
      /* ==== End Cypress Studio ==== */
    });
  });
});


