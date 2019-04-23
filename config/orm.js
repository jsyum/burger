//importing the connection
var connection = require("./connection.js");

// Object Relational Mapper (ORM)

// The ?? signs are for swapping out table or column names
// The ? signs are for swapping out other values
// These help avoid SQL injection
// https://en.wikipedia.org/wiki/SQL_injection
var orm = {
  // selectAll: function(cb) {
  //   connection.query("SELECT * FROM burgers", function(err, data) {
  //     if (err) cb(err, null);
  //     cb(null, data);
  //   });
  // }
  selectAll: function(table, cb) {
    var queryString = "SELECT * FROM ??";
    connection.query(queryString, [table], function(err, res) {
      if (err) throw err;
      console.log(res);
      cb(res);
    });
  }
  // insertOne: function(table, column, value, cb) {
  //   var queryString = "INSERT INTO ?? VALUES ?";
  //   console.log(queryString);
  //   connection.query(queryString, [whatToSelect, table, orderCol], function(
  //     err,
  //     result
  //   ) {
  //     if (err) throw err;
  //     console.log(result);
  //     cb(res);
  //   });
  // }
  //updateOne:
};

//exporting the orm
module.exports = orm;
