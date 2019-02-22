const routes = require("express").Router();
const { User } = require("./app/models");

User.create({
  name: "Placeholder",
  email: "placeholder@node.com.br",
  password_hash: "123123123123"
});

module.exports = routes;
