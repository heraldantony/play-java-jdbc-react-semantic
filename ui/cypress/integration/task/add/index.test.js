describe("Task", () => {
  before(() => {
    // programmatically log us in without needing the UI

    cy.login("test", "test123");
  });
  beforeEach(function() {
    // before each test, we can automatically preserve the
    // 'JWT_TOKEN' cookies. this means they
    // will not be cleared before the NEXT test starts.
    //

    // Cypress.Cookies.preserveOnce("JWT_TOKEN")
    Cypress.Cookies.defaults({
      whitelist: "JWT_TOKEN"
    });
  });
  it("Should be able to add new Task", () => {
    cy.visit("/addTask");

    cy.get("input[name=title]").as("title");

    cy
      .get("@title")
      .invoke("width")
      .should("be.gt", 0);

    cy
      .get("@title")
      .type("Et eos voluptas nostrum atque numquam adipisci.", { force: true });

    cy.get("textarea[name=description]").as("description");

    cy
      .get("@description")
      .type(
        "Vero perspiciatis amet molestiae non voluptas non error voluptas voluptatibus. Cum alias numquam dignissimos ipsum aut similique officiis deserunt placeat. Impedit autem ut natus consequatur quae a hic nam. Possimus qui reprehenderit dolore sapiente quia.",
        { force: true }
      );

    cy
      .get("button.ui.button")
      .contains("Add Job")
      .click({ force: true });

    cy.get("input[name=search]").clear({ force: true });
    cy
      .get("input[name=search]")
      .type('"District Program Planner"', { force: true });
    cy
      .get("div.modal button.ui.button")
      .contains("Search")
      .click({ force: true });
    cy
      .get("div.modal td button.ui.icon.button")
      .contains("Add Job")
      .click({ force: true });
    cy.get("a.ui.button").contains("District Program Planner");
    cy
      .get("button.ui.button")
      .contains("Add Job")
      .click({ force: true });
    cy.get("input[name=search]").clear({ force: true });
    cy
      .get("input[name=search]")
      .type('"District Creative Planner"', { force: true });
    cy
      .get("div.modal button.ui.button")
      .contains("Search")
      .click({ force: true });
    cy
      .get("div.modal td button.ui.icon.button")
      .contains("Add Job")
      .click({ force: true });
    cy.get("a.ui.button").contains("District Creative Planner");
    cy
      .get("a.ui.button")
      .contains("District Program Planner")
      .next()
      .click({ force: true });
    cy
      .get("form.ui.form div")
      .contains("District Program Planner")
      .should("not.exist");
    cy
      .get("button.ui.button")
      .contains("Add Job")
      .click({ force: true });
    cy.get("input[name=search]").clear({ force: true });
    cy
      .get("input[name=search]")
      .type('"District Program Planner"', { force: true });
    cy
      .get("div.modal button.ui.button")
      .contains("Search")
      .click({ force: true });
    cy
      .get("div.modal td button.ui.icon.button")
      .contains("Add Job")
      .click({ force: true });
    cy.get("a.ui.button").contains("District Program Planner");

    //save Task
    cy.get("button.add-button").click({ force: true });
    cy.get("div.ui.message p").should("contain", "Task saved");
  });
});
