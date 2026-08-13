// 3 - criar as ações da page
/// <reference types="cypress" />

export default {
    acessLogin() {
        cy.visit('/').get('#top_header')

        cy.get('.fa-user').click()
    }
}