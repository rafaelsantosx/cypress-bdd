/// <reference types="cypress" />

export default {
    doRegister(){
        cy.get('#btnRegister')
            .should('be.visible')
            .click()
    },

    checkErrorMessage(message){
        cy.get('.errorLabel').should('have.text', message)
    },

    fillName(name){
        cy.get('#user').type(name)
    },

    fillEmail(email){
        cy.get('#email').type(email)
    },
    
    fillPassword(password){
        cy.get('#password').type(password)
    }
}