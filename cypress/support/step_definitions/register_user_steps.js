/// <reference types="cypress" />

import { Given, When, Then} from "@badeball/cypress-cucumber-preprocessor"
import home_page from "../pages/home_page"
import register_page from "../pages/register_page"

const email = 'rafael@gmail.com'
const nome = 'Rafael Santos De Oliveira'

Given ("I am on register screen", () => {
    home_page.acessRegisterPage()
})

Given ("I fill name {string}", (nome) => {
    register_page.fillName(nome)
})

Given ("I fill e-mail {string}", (email) => {
    register_page.fillEmail(email)
})
Given ("I fill password {string}", (password) => {
    register_page.fillPassword(password)
})
Given ("I fill my registration details", () => {
    register_page.fillName(nome)
    register_page.fillEmail(email)
    register_page.fillPassword('123456789')
})

When ("I click on Register", () => {
    register_page.doRegister()
})

Then ("I see {string} on register", (message) => {
    register_page.checkErrorMessage(message)
})

Then ("I see message success on Register", () => {
    register_page.checkSucessMessage(nome)
})