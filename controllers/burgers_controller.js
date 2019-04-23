var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");
var orm = require("../config/orm");

router.get("/", function(req, res) {
  // orm.SelectAll(function(error, res) {
  //   if (error) {
  //     return res.json({
  //       message: "cannot query database"
  //     });
  //   } else {
  //     res.render("index");
  //   }
  // });
  // )
  res.json({
    message: "test"
  });
});

// Export routes for server.js
module.exports = router;
