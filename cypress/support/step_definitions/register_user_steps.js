/// <reference types="cypress" />

import { Given, When, Then} from "@badeball/cypress-cucumber-preprocessor"
import home_page from "../pages/home_page"
import register_page from "../pages/register_page"

Given ("I am on register screen", () => {
    home_page.acessRegisterPage()
}),

Given ("I fill name {string}", (nome) => {
    register_page.fillName(nome)
}),

Given ("I fill e-mail {string}", (email) => {
    register_page.fillEmail(email)
})
Given ("I fill password {string}", (password) => {
    register_page.fillPassword(password)
})
When ("I click on Register", () => {
    register_page.doRegister()
}),

Then ("I see {string} on register", (message) => {
    register_page.checkErrorMessage(message)
})