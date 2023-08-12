describe('Home Page', () => {
    beforeEach(() => {
      cy.visit('/');
    });
  
    it('displays the header', () => {
      cy.get('h1').should('have.text', 'TODO');
    });
  
    it('adds a new todo', () => {
      const todoTitle = 'New Todo';
      
      cy.get('[type="checkbox"]').check();
      cy.get('[name="title"]').type(`${todoTitle}{enter}`);
      
      cy.contains(todoTitle).should('exist');
    });
    
  
    it('toggles todo completion', () => {
      cy.get('[type="checkbox"]').eq(1).check();
      cy.get('.title').first().should('have.class', 'line-through');
  
      cy.get('[type="checkbox"]').eq(1).uncheck();
      cy.get('.title').first().should('not.have.class', 'line-through');
    });
  
    it('deletes a todo', () => {
      cy.get('.delete-todo-btn').first().click();
      cy.get('.todo-item').should('have.length', 0);
    });
  
    it('filters active todos', () => {
      cy.contains('button','Active').click();
      cy.get('.completed').should('not.exist');
    });
  
    it('filters completed todos', () => {
      cy.contains('button','Completed').click();
      cy.get('.active').should('not.exist');
    });
  
    it('clears completed todos', () => {
      cy.get('[type="checkbox"]').check();
      cy.contains('button', 'Clear Completed').click();
      cy.get('[type="checkbox"]').filter(':checked').should('not.have.length.gt', 1);

    });
  });
  