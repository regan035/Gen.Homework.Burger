// Import MySQL connection.
var connection = require("../config/connection.js");


var orm = {
  selectAll: function(tableInput, cb) {
    var queryString = "SELECT * FROM " + tableInput + ";";
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  create: function(table, obj, cb) {
    var queryString = `INSERT INTO ${table} SET ? `;

    connection.query(queryString, obj, function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },
  // An example of objColVals would be {name: panther, sleepy: true}
  update: function(table, obj, condition, cb) {

    // var condition = {id: 5}
    // var condition = "id = 5"

    var queryString = `UPDATE ${table} SET ? WHERE ${condition}`;
    //UPDATE burgers SET devoured = true WHERE id = 5

    connection.query(queryString, obj, function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },
  delete: function(table, condition, cb) {
    var queryString = `DELETE FROM ${table} WHERE ${condition}`;
    //DELETE FROM burgers WHERE id = 5

    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  }

};

// Export the orm object for the model (cat.js).
module.exports = orm;
