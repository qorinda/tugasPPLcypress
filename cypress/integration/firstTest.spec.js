/// <reference types="Cypress"/>

describe('My first test suite', () =>{
    it('First test', () => {
        cy.visit('/')
        cy.contains('Form').click();
        cy.contains('Form Layout').click()
    })

    it('My Second test suite, Inline', () => {
        cy.get('input[placeholder="Jane Doe"]').type('Qorinda Yulvarisma')
        cy.get('[placeholder="Email"][type="text"]').type('qorindayulvarisma123@gmail.com')
        cy.get('.custom-checkbox').first().click()
        cy.get('[status="primary"][type="submit"]')
        cy.contains('Submit')
    });

    it('My Three test suite, Using the Grid', () => {
        cy.get('#inputEmail1').type('qorindayulvarisma123@gmail.com')
        cy.get('#inputPassword2').type('1234578')
        cy.get('.text').contains('Option 1').click()
        cy.get('.text').contains('Option 2').click()
        cy.get('[status="primary"][type="submit"]')
        cy.contains('Sign in')
    });

    it('My Four test suite, Basic', () => {
        cy.get('#exampleInputEmail1').type('qorindayulvarisma123@gmail.com')
        cy.get('#exampleInputPassword1').type('12345678')
        cy.get('.custom-checkbox').eq(1).click()
        cy.get('[status="danger"][type="submit"]')
        cy.contains('Submit')
    });

    it('My Five test suite, Labels', () => {
        cy.get('[placeholder="Recipients"]').type('Qorinda Yulvarisma')
        cy.get('[placeholder="Subject"]').type('Project Cypress')
        cy.get('textarea[placeholder="Message"]').type('Tugas Pegujian Perangkat Lunak (PPL) - TI3A - Cypress')
        cy.get('[status="success"][type="submit"]')
        cy.contains('Send')
    });

    
    it('My Six test suite, Block', () => {
        cy.get('#inputFirstName').type('Qorinda')
        cy.get('#inputLastName').type('Yulvarisma')
        cy.get('#inputEmail').type('qorindayulvarisma123@gmail.com')
        cy.get('#inputWebsite').type('tugas ppl qorinda')
        cy.get('[status="primary"][type="submit"]')
        cy.contains('Submit')
    });

    it('My Seven test suite, Horizontal', () => {
        cy.get('#inputEmail3').type('qorindayulvarisma123@gmail.com')
        cy.get('#inputPassword3').type('12345678')
        cy.get('.custom-checkbox').last().click()
        cy.get('[status="warning"][type="submit"]')
        cy.contains('Sign in')
    });
})