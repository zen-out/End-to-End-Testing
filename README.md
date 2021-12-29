# How to quickly integrate cucumber, cypress and jest for your test to implement full stack testing

The purpose of this repository is to create a cheatsheet for testing

User Stories
* [ ] Will be able to create and transform and merge cucumber with express
* [ ] provide basic end to end test for get, post, edit and delete 
* [ ] expected time: 3-5 hours. 

Time start: 12:22 pm 

To Do List 
* [x ] install all needed repositores 
```npm install @cucumber/cucumber

```
```npm install cypress```

```npm install assert

```
```npm install superagent --dev```

* [ x] add in scripts

```

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

* [ ] Add test to post 

* [x ] look at example from cypress_examples
* [ x] run the example, make sure it works
* [ ] fill in anything you're missing (e.g., if they're testing for something and you dont have it, follow the repository)
* [ x] check your database 
* [ x] make sure input names are the same (this is what you're going to be referring to when testing)
* [ ] 

follow the exact inputs 

* [ ] Add test to edit
* [ ] add test to delete 

* [ ] check out example for professional enterprises 

* [ ] look at the code snippets on the side

* [ ] provide a full testing scenario for get
* [ ] e.g., loading a page, and then fetching data from the frontend 
* [ ]

* [ ] provide a full testing scenario for post
* [ ] provide a full testing scenario for edit
* [ ] provide full testing scenario for delete
