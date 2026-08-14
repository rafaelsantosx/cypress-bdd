/// <reference types="cypress" />

///Elementos
const elements = {
    buttons: {
        register: '#btnRegister'
    },
    fields: {
        name: '#user',
        email: '#email',
        password: '#password'
    },
    messages: {
        error: '.errorLabel',
        successTitle: '#swal2-title',
        successSubtitle: '#swal2-html-container'
    }
}

export default {
    doRegister(){
        cy.get(elements.buttons.register)
            .should('be.visible')
            .click()
    },

    checkErrorMessage(message){
        cy.get(elements.messages.error).should('have.text', message)
    },

    checkSucessMessage(nome){
        cy.get(elements.messages.successTitle)
            .should('be.visible')
            .should('have.text', 'Cadastro realizado!')

        cy.get(elements.messages.successSubtitle)
            .should('be.visible')
            .should('have.text', `Bem-vindo ${nome}`)
    },

    fillName(name){
        cy.get(elements.fields.name).type(name)
    },

    fillEmail(email){
        cy.get(elements.fields.email).type(email)
    },

    fillPassword(password){
        cy.get(elements.fields.password).type(password)
    }
}