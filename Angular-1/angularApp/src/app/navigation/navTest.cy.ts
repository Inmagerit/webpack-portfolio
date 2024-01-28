import { NavigationComponent } from "./navigation.component";

describe('test load', () => {
    it('mount navigation', () =>{
        cy.mount(NavigationComponent);
        cy.get('p').should('exist')
        
    })
})