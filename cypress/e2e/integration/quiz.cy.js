describe('React Tech Quiz Website', () => {
    beforeEach(() => {
        cy.visit('/');
    });

    it("should display the 'Start Quiz' button", () => {
        // this should start the quiz
        cy.get('button').contains('Start Quiz');

    });

    it("after clicking the 'Start Quiz' button, a question with 4 options should be displayed", () => {
        cy.get('button').contains('Start Quiz').click();
        cy.get('.card').should('be.visible');
    });
    
    it("should be given 4 multiple choices that can be clicked", () => {
        cy.get('button').contains('Start Quiz').click();
        cy.get('.card').should('be.visible');
        cy.get('button').contains('1').should('be.visible');
        cy.get('button').contains('2').should('be.visible');
        cy.get('button').contains('3').should('be.visible');
        cy.get('button').contains('4').should('be.visible');
    });

    it("should take you to the next questions after clicking one of the multiple choices", () => {
        cy.get('button').contains('Start Quiz').click();
        cy.get('.card').should('be.visible');
        cy.get('button').contains('1');
        cy.get('button').contains('2');
        cy.get('button').contains('3');
        cy.get('button').contains('4').click();
        cy.get('.card').should('be.visible');
    });

    it("should take you to the next question after clicking one of the multiple choices, repeated for 10 questions and take you to the quiz completed page", () => {
        // Start the quiz
        cy.get('button').contains('Start Quiz').click();
    
        // Loop through 10 questions
        for (let i = 1; i <= 10; i++) {
            // Question card should be visible
            cy.get('.card').should('be.visible');
    
            // Have 4 multiple choice options on the page
            cy.get('button').contains('1').should('exist');
            cy.get('button').contains('2').should('exist');
            cy.get('button').contains('3').should('exist');
            cy.get('button').contains('4').should('exist');
    
            // Click option 4
            cy.get('button').contains('4').click();
    
            // Ensure the next question loads after the click, except for the last question
            if (i < 10) {
                cy.get('.card').should('be.visible'); 
            } else {
                // After the last question, check the quiz completion page
                cy.get('.alert-success').should('be.visible'); // Adjust based on your completion selector
                cy.get('button').contains('Take New Quiz').click();
            }
        }
    });
})