const { User } = require("../../src/app/models");

describe("Authentication", () => {
  it("should create a new user", async () => {
    const user = await User.create({
      name: "Placeholder",
      email: "placeholder@node.com.br",
      password_hash: "123123"
    });

    expect(user.email).toBe("placeholder@node.com.br");
  });
});
