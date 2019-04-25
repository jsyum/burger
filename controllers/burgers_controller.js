var express = require("express");
var router = express.Router();

// Import the model (burger.js) to use its database functions

var burger = require("../models/burger.js");
var orm = require("../config/orm");
// var burgerData =

router.get("/", function(req, res) {
  burger.all(function(data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});
router.post("/api/burgers", function(req, res) {
  burger.create(["burger_name"], [req.body.name], function(result) {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
  });
});

// Export routes for server.js
module.exports = router;
