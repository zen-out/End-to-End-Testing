// should one test for user behaviors - like what are they seeing?
const Chance = require("chance")
const chance = Chance();
const URL = "http://localhost:3001"
let user_id = 3
context("Problem Submit", () => {
    beforeEach(() => {
        cy.visit(`/forms`)
    })

    it("should be able to render error if there is one", () => {

    })
    it("should be able to handle a post request", () => {
        let problem = chance.sentence()
        cy.get('input[name=problem]').type(problem);
        cy.get('input[name=whatshouldbe]').type(chance.sentence());
        cy.get('input[name=whatactuallyis]').type(chance.sentence());
        cy.get('input[name=hypothesis]').type(chance.sentence());
        cy.get('input[name=plan]').type(chance.sentence());
        cy.get('input[name=email]').type(chance.email());
        cy.get('input[name=status]').first().check();
        cy.get('input[name=importance]').first().check()
        cy.get('input[name=difficulty]').first().check()
        // cy.get('input[name=start]').type(chance.date());
        cy.get('input[name=start]')
            .type('2021-12-05')
        cy.get('input[name=end]')
            .type('2021-12-12')
        // cy.get('input[name=end]').type(chance.date());
        cy.location().should((location) => {
            expect(location.pathname).to.eq(`/dashboard/${user_id}`)
        })
        // expect the button to have the user_id attribute s
        // get query
        cy.get('#post_problem_form')
            .invoke('attr', 'data-user_id')
            .should('equal', `${user_id}`)
        cy.get('#post_problem_form').click();

        cy.get("#show_problem_all")
            .invoke('attr', 'data-user_id')
            .should('equal', `${user_id}`)

        cy.get("#show_problem_all").contains(problem)

        // cy.request(`${URL}/`)
        //     .its('body')
        //     .should('include', 'Testing, the way it should be') // true) => {}) // Yields .nav as first arg

        // then get request 

    })

    it("should be able to render error message if user already exists", () => {
        //    type in email
    })


})