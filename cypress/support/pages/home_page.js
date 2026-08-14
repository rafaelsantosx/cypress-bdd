// 3 - criar as ações da page
/// <reference types="cypress" />

const elements = {
    buttons: {
        login: '.fa-user',
        register: '.fa-lock'
    }
}


export default {
    acessLogin() {
        cy.visit('/').get('#top_header')

        cy.get(elements.buttons.login).click()
    },

    acessRegisterPage() {
        cy.visit('/').get('#top_header')

        cy.get(elements.buttons.register).click()
    }
}