# Node.js Login App with TDD (Jest)

## Tests

In this project we make use of Unit and Integrations tests

### Unit Tests

This is where we test [Pure Functions](https://medium.freecodecamp.org/what-is-a-pure-function-in-javascript-acb887375dfe), which given the same arguments always returns the same values.

### Integration Tests

This is where we test functions that call api's, database calls, etc.

### Dependencies

- **Jest**

  Universal javascript testing tool suite (test runners, expects, function mocks, stub, coverage, etc.)

- **Nodemon**

  For automatically restart the node server everytime you save

- **Sequelize** - `yarn add sequelize pg`

  Promise-based ORM for Node.js. It supports PostgreSQL, MySQL, SQLite and MSSQL.

- **Sequelize CLI** - `yarn add sequelize-cli`

  Tool to manage migrations with sequelize

### Sequelize CLI Commands

Create the database

`yarn sequelize db:create`

Create a new migration

`yarn sequelize migration:create --name=create-users`

Commit migration to DB

`yarn sequelize db:migrate`
