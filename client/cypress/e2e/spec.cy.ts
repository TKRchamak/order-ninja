describe('Login Form Submission', () => {
  // individual test
  it('test the supplier product add process', () => {
    cy.visit('http://localhost:5173/login');

    // login function call start
    cy.get('#normal_login_email').type('supplier@supplier.com');
    cy.get('#normal_login_password').type('supplier');
    cy.get('button[type="submit"]').click();
    // login function call end
    // cy.url().should('eq', 'http://localhost:5173/dashboard'); // Assuming successful login redirects to '/dashboard'

    cy.wait(5000);

    // Order page start
    cy.get('.ant-menu-item').contains('Order').click();
    cy.wait(3000);

    // product page start
    cy.get('.ant-menu-item').contains('Products').click();
    cy.wait(3000);

    // open product drawer
    cy.get('.ant-btn-primary').contains('Add New Product').click();

    // start fillUp form
    cy.get('#form_item_path_name').type('Banana');
    cy.get('.ant-select-selector').click();
    // cy.get('.ant-select-dropdown-menu-item').contains('Sauces & Pickles').click();
    cy.get('.ant-select-item-option-content').contains('Sauces & Pickles').click();

    cy.get('#form_item_path_description').type('this is Banana');
    cy.get('#form_item_path_unit_size').type('500');
    cy.get('#form_item_path_price').type('1500');
    cy.get('#form_item_path_weight').type(1500);
    cy.get('#form_item_path_stock').type('30');
    cy.get('span').contains('Select File').selectFile('C:\/Users\/tkrch\/OneDrive\/Desktop\/fruites_img\/charlesdeluvio-0v_1TPz1uXw-unsplash.jpg', { action: 'drag-drop' });
    // end fillUp form.

    //submit product create form
    cy.get('span').contains('Submit').click();

    // Order page start
    cy.get('.ant-menu-item').contains('Sales Report').click();
    cy.wait(3000);


    cy.url().should('eq', 'http://localhost:5173/report'); // Assuming successful login redirects to '/dashboard'
    // product page end
  });
})

describe('Login Form Submission', () => {
  // individual test
  it('test the supplier product add process', () => {
    cy.visit('http://localhost:5173/login');

    // login function call start
    cy.get('#normal_login_email').type('business@business.com');
    cy.get('#normal_login_password').type('business');
    cy.get('button[type="submit"]').click();
    // login function call end

    // cy.wait(5000);

    // Order page start
    cy.get('.ant-menu-item').contains('Marketplace').click();
    cy.wait(2000);

    cy.get("input[placeholder='Search...']").type('orange');
    cy.get('.ant-btn.css-dev-only-do-not-override-17a39f8.ant-btn-primary.ant-input-search-button').click();
    // cy.get('._hidden-card-container_14c2r_41')[0]?.click({ force: true })
    cy.contains('Add')?.trigger('mouseover');
    cy.wait(2000);
    // cy.get("svg[data-icon='shopping-cart']").click();
    // cy.wait(2000);
    // cy.get("span").contains("Place Order").click();
    // cy.wait(2000);

    // cy.get('.ant-menu-item').contains('Orders').click();
    // cy.wait(3000);

    // product page start
    // cy.get('.ant-menu-item').contains('Products').click();
    // cy.wait(3000);

    // open product drawer
    // cy.get('.ant-btn-primary').contains('Add New Product').click();

    // start fillUp form
    // cy.get('#form_item_path_name').type('Banana');
    // cy.get('.ant-select-selector').click();
    // cy.get('.ant-select-dropdown-menu-item').contains('Sauces & Pickles').click();
    // cy.get('.ant-select-item-option-content').contains('Sauces & Pickles').click();

    // cy.get('#form_item_path_description').type('this is Banana');
    // cy.get('#form_item_path_unit_size').type('500');
    // cy.get('#form_item_path_price').type('1500');
    // cy.get('#form_item_path_weight').type(1500);
    // cy.get('#form_item_path_stock').type('30');
    // cy.get('span').contains('Select File').selectFile('C:\/Users\/tkrch\/OneDrive\/Desktop\/fruites_img\/charlesdeluvio-0v_1TPz1uXw-unsplash.jpg', { action: 'drag-drop' });
    // end fillUp form.

    //submit product create form
    // cy.get('span').contains('Submit').click();

    // Order page start
    // cy.get('.ant-menu-item').contains('Sales Report').click();
    // cy.wait(3000);


    // cy.url().should('eq', 'http://localhost:5173/marketplace'); // Assuming successful login redirects to '/dashboard'
    // product page end
  });
})
