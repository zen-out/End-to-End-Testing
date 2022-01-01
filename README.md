# How to quickly integrate cucumber, cypress and jest for your test to implement full stack testing

The purpose of this repository is to create a cheatsheet for testing

User Stories
* [ ] Will be able to create and transform and merge cucumber with express
* [ ] provide basic end to end test for get, post, edit and delete 
* [ ] expected time: 3-5 hours. 

Time start: 12:22 pm 

To Do List 
* [x ] install all needed repositores 
` ` ` npm install @cucumber/cucumber ` `  ` `  ` ` npm install cypress ` `  ` `  ` ` npm install json-server ` `  ` `  ` ` npm install cypress-fill-command ` `  ` `  ` ` npm install cypress-wait-until ` `  ` `  ` ` npm install @testing-library/cypress ` `  ` `  ` ` npm install cypress-localstorage-commands ` `  ` `  ` ` npm install chance ` `  ` `  ` ` npm install assert ` `  ` ` ``npm install superagent --dev

```

* [ x ] in cypress/support/index: 

```

import 'cypress-fill-command'
import '@testing-library/cypress/add-commands'
// Import commands.js using ES2015 syntax:
import './commands'
// Alternatively you can use CommonJS syntax:
// require('./commands')
import 'cypress-wait-until'; 
import "cypress-real-events/support"; 

```

* [x ] add in env variables 
cypress.json (root)

```

{

    "env": {
        "URL": "http://localhost:3002",
        "new_problem_trigger": "new_problem_trigger",
        "post_problem_form": "post_problem_form",
        "show_problem_all": "show_problem_all",
        "show_problem_one": "show_problem_one",
        "edit_problem_trigger": "edit_problem_trigger",
        "edit_problem_form": "edit_problem_form",
        "email": "lesleyc@bu.edu",
        "password": "password"
    }

}
let URL = Cypress.env("URL")
   beforeEach(() => {

        cy.visit(URL)
        // visits page and logs in 
        // cy.login(email, password)
    })

```

* [ x] add in reoccuring scripts
e.g., open modal, submit form 

```

Cypress. Commands.add("submitModal", (table) => {

    Cypress.log({
        name: "submitModal",
        message: ` should close ${table}`

    })
    // 
    let trigger = `.${table}_trigger`

    let modal = `.${table}_modal`

    let form = `.${table}_form`

    cy.get(form).submit()
    cy.get(modal).should('have.class', 'out')

})

```

* [x ] Create feature files in cypress/integration
  

```gherkin
  Feature: Google Main Page

  I want to open a search engine
  
  @focus
  Scenario: Opening a search engine page
    Given I open Google page
    Then I see "Google" in the title
  ```

* [ x] write scenario

```
Feature: Cheatsheet: Add tasks to create cheatsheet so it's easier for everyone to learn and get shit done

  Scenario:
    Given that the user has been using the same library for a while
    And they recognize the patterns in their work
    When they use that library again
    Then they can see all the tasks related to that problem / technology
```

* [ x] run vscode extension: generate steps from feature file 
* [x ] in that file, replace all given when with it (run regularly because the extensions don't let you visualize what's happening)

```
 ./node_modules/.bin/cypress/open
```

* [ x] npm run cypress:open

* [ ] Add test to get 

Think about what the user will actually be affected by. 

E.g., 
* What would be bad if it was broken?

* Being able to post an item 

- 
- 

* [ ] get

```
  it("should load items into show_problem_all", () => {
        // visit 
        // the items of show_problem_all should have length of at least three
        cy.get('.show_problem_all').find('.show_problem_one').its("length").should("be.greaterThan", 10)

    })
```

* [ ] post 

```
  it("closes new_problem_modal on form submit", () => {
        // clicks trigger
        cy.openModal("new_problem")
        const checkFunction = () =>
            cy.get("input[name=problem]").fill("problem_input")
        cy.waitUntil(checkFunction)
        cy.submitModal("new_problem")
        cy.get(".show_problem_all").first().should("contain.text", "problem_input")
    })
```

* [ ] edit 

```
 it("edit problem modal contains input value and has input id", () => {
        cy.openModal("new_problem")
        const checkFunction = () =>
            cy.get("input[name=problem]").fill("hello")
        cy.waitUntil(checkFunction)
        cy.submitModal("new_problem")
        cy.wait(5000)
        cy.get(".edit_problem_trigger").first().click()
        cy.wait(2000)
        cy.get("input[name=id]").invoke('val').should('not.be.empty')
        cy.wait(2000)
        cy.get("input[name=problem]").should("have.value", "hello")
    })

```

* [ ] delete 

```
it("should delete from problem", () => {
        cy.openModal("new_problem")
        cy.wait(2000)
        cy.get("#new_whatshouldbe_input").type("dontdeletethis", {
            overwrite: true
        })
        cy.wait(2000)
        cy.submitModal("new_problem")
        cy.wait(2000)
        cy.openModal("new_problem")
        cy.wait(2000)
        cy.get("#new_whatshouldbe_input").type("deleteThis", {
            overwrite: true
        })
        cy.submitModal("new_problem")
        cy.wait(2000)
        cy.get(".delete_problem_btn").first().click()
        cy.wait(2000)
        cy.get(".show_problem_all .show_problem_one").first().should("contain.text", "dontdeletethis")
    })
```

* [ ] Add test to post 

* [x ] look at example from cypress_examples
* [ x] run the example, make sure it works

```bash
cd ./cypress_examples/lesley/logging-in...
# start local server
npm start &
# run Cypress tests headlessly
npm run cypress:run
```

* [x ] fill in anything you're missing (e.g., if they're testing for something and you dont have it, follow the repository)
* [ x] check your database 
* [ x] make sure input names are the same (this is what you're going to be referring to when testing)
* [x ] ended up adding response and request cookies and middleware -> think the real problem is that the login isn't working but yah maybe should document this later 
* [x ] create a class called middleware 
* [ x] language 
* [x ] login sessions
* [ ] 
* [ ] implement it for each page 
request -> login (then will setSession )

```jscd
    let id = user.id
    // set cookie
    res.cookie("user_id", user.id, {
        maxAge: 900000,
        httpOnly: true
    });
    res.cookie("user_email", user.email, {
        maxAge: 900000,
        httpOnly: true
    });
    res.cookie("theme", "cute", {
        maxAge: 900000,
        httpOnly: true
    });
    req.session.user_id = user.id
    req.session.cookie.theme = "cute"
    req.session.cookie.user_id = user.id
    req.session.email = user.email
```

follow the exact inputs 

```
cy.get(button).should('be.visible').click()
// class
cy.get("show_problem_one").should('have.class', 'modal-active').and("have.attr", key, value)
```

```
   cy.get(".show_cheatsheet_all").first().should("contain.text", "problem_input")
```

click on child  -  e.g., 

```

```

* [ ] add test to delete 
* [ ] 
* [ ] check out example for professional enterprises 

* [ ] look at the code snippets on the side

* [ ] provide a full testing scenario for get
* [ ] e.g., loading a page, and then fetching data from the frontend 
* [ ]

* [ ] provide a full testing scenario for post
* [ ] provide a full testing scenario for edit
* [ ] provide full testing scenario for delete

Flow: 

* Should actually open the browser and write in english what is happening at every step 
- 

Packages to install: 
* jquery 
- 

inputs 

```
$('.checked').should.be.checked;
```

should have length 

```

cy.get('li.selected').should('have.length', 3)

```

text

```

// should have text 
cy.get(".show_problem_all").first().should("contain.text", "problem_input")
// assert the element's text content is exactly the given text
cy.get('#user-name').should('have.text', 'Joe Smith')
// assert the element's text includes the given substring
cy.get('#address').should('include.text', 'Atlanta')
// retry until this span does not contain 'click me'
cy.get('a').parent('span.help').should('not.contain', 'click me')
// the element's text should start with "Hello"
cy.get('#greeting')
  .invoke('text')
  .should('match', /^Hello/)
// tip: use cy.contains to find element with its text
// matching the given regular expression
cy.contains('#a-greeting', /^Hello/)

// should have class
cy.get(modal).should('have.class', 'out')
cy.get('form').find('input').should('not.have.class', 'disabled')

// should have attr
cy.get(".show_problem_all .show_problem_one").first().should("have.attr", "data-problem_id", `TEST_ID` )

// input should have value 
cy.get("input[name=whatshouldbe]").invoke('val').should('not.be.empty')
cy.get("input[name=id]").should("have.value", `TEST_ID` )
cy.get('textarea').should('have.value', 'foo bar baz')

// broadly 
cy.get(modal).should("be.visible")
cy.get('#loading').should('not.be.visible')
cy.findByText('Eventually Exists').should('exist')
cy.findByText('Does Not Exist').should('not.exist')

// length 
cy.get('.todo-item').should('have.length', 2).and('have.class', 'completed')
cy.get('li.selected').should('have.length', 3)
cy.get('li.todo').should('not.have.length', 2)
```
