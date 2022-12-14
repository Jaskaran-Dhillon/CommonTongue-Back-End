require("dotenv").config();
const express = require("express");
const cors = require("cors");
const user = require("./routes/user");
const translate = require("./routes/translate");
const bodyParser = require("body-parser");
const rateLimit = require("express-rate-limit");
const sequelize = require("./util/database");

const app = express();

app.options("*", cors());
app.use(
  cors({
    allowedHeaders: ["authorization", "Content-Type"], 
    exposedHeaders: ["authorization"], 
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
  })
);

sequelize
  .sync()
  .then((result) => {
    app.listen(parseInt(process.env.PORT));
  })
  .catch((e) => {
    console.log("Failed to sync", e);
  });

const limiter = rateLimit({
  windowMs: 1 * 60 * 1000,
  max: 20,
  standardHeaders: true,
  legacyHeaders: false,
  handler: (req, res) => {
    res.status(429).send({ error: "Request limit reached" });
  },
});

app.use(bodyParser.json());
app.use(limiter);

app.use("/user", user);
app.use("/translate", translate);

app.get("*", (req, res) => {
  res.status(404).send({ error: "Invalid path" });
});
