import header from "./components/header";

class HomePage {

    constructor() {
        this.header = header
    }
    
    go() {
        cy.visit('/');
    }

}

export default new HomePage()