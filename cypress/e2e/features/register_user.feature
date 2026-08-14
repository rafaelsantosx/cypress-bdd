Feature: Register User
    Eu como cliente
    Quero me cadastrar na aplicação
    Para fazer um pedido de compra

    Background: Acces register screen
        Given I am on register screen

    Scenario: Campo nome vazio
        When I click on Register
        Then I see "O campo nome deve ser prenchido" on register

    Scenario: Campo e-mail vazio
        And I fill name "Rafael Santos De Oliveira"
        When I click on Register
        Then I see "O campo e-mail deve ser prenchido corretamente" on register

    Scenario: Campo e-mail inválido
        And I fill name "Rafael Santos De Oliveira"
        And I fill e-mail "invalidEmail"
        When I click on Register
        Then I see "O campo e-mail deve ser prenchido corretamente" on register

    Scenario: Campo senha vazio
        And I fill name "Rafael Santos De Oliveira"
        And I fill e-mail "rafaelsantos@gmail.com"
        When I click on Register
        Then I see "O campo senha deve ter pelo menos 6 dígitos" on register

    Scenario: Campo senha inválido
        And I fill name "Rafael Santos De Oliveira"
        And I fill e-mail "rafaelsantos@gmail.com"
        And I fill password "123"
        When I click on Register
        Then I see "O campo senha deve ter pelo menos 6 dígitos" on register

    @focus
    Scenario: Cadastro de usuário com sucesso
        And I fill my registration details
        When I click on Register
        Then I see message success on Register