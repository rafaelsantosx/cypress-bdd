/// <reference types="cypress" />

const elements = {
    buttons: {
        login: '#btnLogin'
    },
    fields: {
        name: '#user',
        email: '#email',
        password: '#password'
    },
    messages: {
        error: '.invalid_input',
        successTitle: '#swal2-title',
        successSubtitle: '#swal2-html-container'
    }
}

export default{
    doLogin(){
        cy.get(elements.buttons.login).click()
    },

    checkErrorMessage(message){
        cy.get(elements.messages.error).should('have.text', message)
    },

    fillEmail(email){
        cy.get(elements.fields.name).type(email)
    },

    fillPassword (password){
        cy.get(elements.fields.password).type(password)
    },

    checkSucessMessage(email){
        cy.get(elements.messages.successTitle)
            .should('be.visible')
            .should('have.text', 'Login realizado')

        cy.get(elements.messages.successSubtitle)
            .should('be.visible')
            .should('have.text', `Olá, ${email}`)
    }
}
