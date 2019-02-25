const bcrypt = require("bcryptjs");

const { User } = require("../../src/app/models");
const truncate = require("../utils/truncate");

describe("User", () => {
  beforeEach(async () => {
    await truncate();
  });

  it("should encrypt user password", async () => {
    const user = await User.create({
      name: "Placeholder",
      email: "placeholder@node.com.br",
      password: "123123"
    });

    const compareHash = await bcrypt.compare(user.password, user.password_hash);

    expect(compareHash).toBe(true);
  });
});
