//Learn more or give us feedback
// Inside `burger.js`, import `orm.js` into `burger.js`
var orm = require("../config/orm.js");

// Also inside `burger.js`, create the code that will call the ORM functions using burger specific input for the ORM.
var burger = {
    all: function(cb) {
      console.log(orm);
      orm.selectAll("burgers", function(res) {
        cb(res);
      });
    },
    // The variables cols and vals are arrays.
    create: function(obj, cb) {
      orm.create("burgers", obj, function(res) {
        cb(res);
      });
    },
    update: function(condition, cb) {
      orm.update("burgers", {devoured: true}, condition, cb);
    },
    delete: function(condition, cb) {
      orm.delete("burgers", condition, cb)
    }
  };
  
  // Export at the end of the `burger.js` file.
  module.exports = burger;