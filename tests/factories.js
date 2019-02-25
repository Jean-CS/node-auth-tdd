const { factory } = require("factory-girl");
const { User } = require("../src/app/models");

factory.define("User", User, {
  name: "Placeholder",
  email: "placeholder@node.com.br",
  password: "123456"
});

module.exports = factory;
