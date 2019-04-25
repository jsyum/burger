var express = require("express");
var router = express.Router();

// Import the model (burger.js) to use its database functions

var burger = require("../models/burger.js");
var orm = require("../config/orm");

router.get("/", function(req, res) {
  burger.all(function(data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});
//   res.json({
//     message: "test"
//   });
// });
// });

// Export routes for server.js
module.exports = router;
