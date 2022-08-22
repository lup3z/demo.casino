import { faker } from '@faker-js/faker';
const randomEmail = faker.internet.email() // genero un valor email aleatorio
const randomPassword = faker.internet.password().substring(6) // genero una contraseña aleatoria
const randomAnswer = faker.internet.domainWord() // genero un valor de respuesta aleatoria
const randomUser = faker.word.verb() + faker.word.adjective()// genero un user aleatorio
const randomName = faker.name.firstName()// genero un nombre aleatorio
const randomLastName = faker.name.lastName() //genero un apellido aleatorio


describe('tests demo casino', () => {
    beforeEach(() => {
      // Cypress starts out with a blank slate for each test
      // so we must tell it to visit our website with the `cy.visit()` command.
      // Since we want to visit the same URL at the start of all our tests,
      // we include it in our beforeEach function so that it runs before each test
      cy.visit('https://demo.casino')
    })

    it.only('User Registration', () => {
        cy.get('.mfp-close').click()
        cy.get('[data-test="nav-reg-head"]').click()
        cy.get('[data-test="input-email"]').type(randomEmail)
        cy.get('.input__wrapper > label').click()
        cy.get('[data-test="input-password"]').type(randomPassword)
        cy.get('[data-test="input-password_confirmation"]').type(randomPassword)
        cy.get(':nth-child(7) > .input__wrapper > .selectric-wrapper > .selectric > .label').click()
        cy.get(':nth-child(7) > .input__wrapper > .selectric-wrapper > .selectric-items > .selectric-scroll > ul > [data-index="1"]').click()
        cy.get('[data-test="input-secret_answer"]').type(randomAnswer)
        cy.get('[data-test="input-username"]').type(randomUser)
        cy.get('[data-test="input-name"]').type(randomName)
        cy.get('[data-test="input-surname"]').type(randomLastName)
        cy.get('[data-test="control-submit"]').click()
        cy.get('.notification__title').should('contain.text', 'Congratulations!')
        cy.get('.notification__buttons > .button--t1').click()
        cy.get('[data-test="form-avatar"] > .profile__logout > .icon-logout').click()

    })

    it('User Login', () => {
        cy.get('.mfp-close').click()
        cy.get('div.button').click()
        cy.get('[data-test="nav-login-head"]').click()
        cy.get('[data-test="input-username"]').type(randomEmail)
        cy.get('[data-test="input-password"]').type(randomPassword)
        cy.get('[data-test="control-submit"]').click()
        cy.get('.mobile-bar--right > [href="/cabinet/profile/index"]').should('contain.text', 'Profile')

    })
})


  