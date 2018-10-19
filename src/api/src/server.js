"use strict";

const express = require("express");
//const serveStatic = require("serve-static");
//const path = require("path");

const app = express();

var api = require("./api.js");


app.use("/api", api);
var server = app.listen(5000, () => console.log(`Listening on port 5000`));
