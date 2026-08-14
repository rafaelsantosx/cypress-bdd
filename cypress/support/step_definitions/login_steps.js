// 2 - transformar o gherkin em método/ação
/// <reference types="cypress" />

import { Given, When, Then} from "@badeball/cypress-cucumber-preprocessor"
import home_page from '../pages/home_page'
import login_page from '../pages/login_page'

const email = 'rafael@gmail.com'

Given ("I am on login screen", () => {
    home_page.acessLogin()
})

Given ("I fill e-mail", () => {
    login_page.fillEmail('rafael@gmail.com')
})

Given ("I fill my credencials", () => {
    login_page.fillEmail(email)
    login_page.fillPassword('abcd12345')
})

When ("I click on login", () =>{
    login_page.doLogin()
})

Then ("I see the message {string}", (message) =>{
    login_page.checkErrorMessage(message)
})

Then ("I see sucess message", () => {
    login_page.checkSucessMessage(email)
})