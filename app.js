const express = require("express");
const morgan = require("morgan");

const routes = require("./routes");

const app = express();

app.use(morgan("dev"));
app.set("view engine", "pug");

app.use(routes);

module.exports = app;
