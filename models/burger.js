Learn more or give us feedback
// Inside `burger.js`, import `orm.js` into `burger.js`
var orm = require("../config/orm.js");

// Also inside `burger.js`, create the code that will call the ORM functions using burger specific input for the ORM.
var burger = {
    all: function(cb) {
      console.log(orm);
      orm.all("burgers", function(res) {
        cb(res);
      });
    },
    // The variables cols and vals are arrays.
    create: function(cols, vals, cb) {
      orm.create("burgers", cols, vals, function(res) {
        cb(res);
      });
    },
    update: function(objColVals, condition, cb) {
      orm.update("burgers", objColVals, condition, function(res) {
        cb(res);
      });
    },
    delete: function(condition, cb) {
      orm.delete("burgers", condition, function(res) {
        cb(res);
      });
    }
  };
  
  // Export at the end of the `burger.js` file.
  module.exports = burger;