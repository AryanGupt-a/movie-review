/// <reference types="cypress"/>

it('Add a movie',()=>{
    cy.visit('https://movie-reviews-psi.vercel.app/')
    cy.contains('Add new movie').should('be.visible').click()
    cy.get('#name').should('be.visible').type('my latest movie')
    cy.get('#release').should('be.visible').type('2024-03-15')
    cy.contains('Create Movie').click();
    cy.contains('new movie')
    

})

it('Update name',()=>{
    cy.visit('https://movie-reviews-psi.vercel.app/')
    cy.xpath("(//h1[contains(text(),'new movie')]/ancestor::div[@class='relative']/div/button[@class='mr-3 rounded border border-[#a19fb6] p-1 shadow-sm'])[1]").should('be.visible').click()
    cy.get('#name').clear().type('updated name')
    cy.get('.justify-end > .flex').click()    
})

it('Update ratings',()=>{
    cy.visit('https://movie-reviews-psi.vercel.app/')
    cy.contains('my latest movie').should('be.visible').click()
    cy.contains('Add new review').should('be.visible').click()
})

it('Delete movie',()=>{
    cy.visit('https://movie-reviews-psi.vercel.app/')
    cy.xpath("(//div[@class='relative']//button[@class='rounded border border-[#a19fb6] p-1 shadow-sm'])[1]").should('be.visible').click()
})
