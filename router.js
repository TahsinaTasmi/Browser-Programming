const express = require("express");
const lib = require("../services/index");
const method = require("../controller/index");
const route = express.Router();

route.get("/", lib.HomeRouter);
route.get("/addData", lib.addData);
route.get("/update", lib.update);

// API

route.get("/measurement", method.find);
route.post("/measurement", method.addData);
route.delete("/measurement", method.delete);
route.put("/measurement", method.update);

module.exports = route;
