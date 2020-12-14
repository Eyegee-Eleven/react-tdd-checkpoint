describe('Homepage', () =>{
    beforeEach(() =>{
        cy.visit('/');
    })
    it("should display one (1) movie", () =>{
        //assert
        expect(cy.get('img').should('exist'))
    })
})
















