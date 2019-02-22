# Node.js Login App with TDD (Jest)

### Dependencies

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
