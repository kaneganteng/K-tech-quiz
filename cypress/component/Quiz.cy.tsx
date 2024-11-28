import Quiz from '../../client/src/components/Quiz'

describe('<Quiz />', () => {
 beforeEach(() => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Quiz />)
  });

  it("should display the Start Quiz button", () => {
    cy.get('button').should('have.text', 'Start Quiz')
  });

  it("should start quiz and display the first question along with the 4 multiple choice options", () => {
    cy.get('button').contains("Start Quiz").click();
  })
})