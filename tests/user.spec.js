const chai = require("chai");
const chaiHttp = require("chai-http");
const user = require("./routes/user");
const translate = require("./routes/translate");
const express = require("express");

const expect = chai.expect;

chai.use(chaiHttp);

const server = () => {
  const app = express();
  const apiPort = 4000;
  const result = {
    message: "Hello World",
    value: 3.5,
    odds: [1, 3, 5, 7, 9],
    person: {
      id: 123,
      name: "Sam Barros",
    },
  };

  app.use("/user", user);
  app.use("/translate", translate);

  app.get("/", (req, res) => {
    res.send(result);
  });

  app.listen(apiPort);

  return app;
};
describe("User signup controller", () => {
  it("Throws error if no body is passed", () => {});
});
