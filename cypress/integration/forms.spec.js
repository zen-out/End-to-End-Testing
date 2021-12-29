let route = "http://localhost:3001"
const Chance = require("chance")
const chance = Chance();

context("Actions", () => {
    beforeEach(() => {
        cy.visit(`/forms`)
    })

    it("should be able to render error if there is one", () => {

    })
    it("should be able to handle a post request", () => {
        //    type in email
        cy.get("input[name=email]").type(chance.email())
        cy.get('input[name=lastName]').type(chance.last())
        // type in name
        cy.get('input[name=firstName]').type(chance.first())
        // type in password
        cy.get("input[name=password]").type(chance.animal())
        // post 
        // should redirect me to dashbaord

        cy.get("#signup_form_btn").click()
        // 
    })
    it("should be able to render error message if user already exists", () => {
        //    type in email
        let email = chance.email()
        let first = chance.first()
        let last = chance.last()
        let password = chance.animal()
        cy.get("input[name=email]").type(email)
        cy.get('input[name=lastName]').type(last)
        // type in name
        cy.get('input[name=firstName]').type(first)
        // type in password
        cy.get("input[name=password]").type(password)
        // post 
        // should redirect me to dashbaord
        cy.get("#signup_form_btn").click()

        cy.reload()
        cy.get("input[name=email]").type(email)
        cy.get('input[name=lastName]').type(last)
        // type in name
        cy.get('input[name=firstName]').type(first)
        // type in password
        cy.get("input[name=password]").type(password)
        cy.get("#signup_form_btn").click()
        cy.get('.error').contains('Error: ')
    })
})