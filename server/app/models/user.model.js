const sql = require("./db.js");

const User = function(user) {
    this.name = user.name;
};

User.create = (newUser, result) => {
    sql.query("INSERT INTO user SET ?", newUser, (err, res) => {
        if (err) {
          console.log("error: ", err);
          result(err, null);
          return;
        }
    
        console.log("created customer: ", { id: res.id });
        result(null, { id: res.id });
    });    
};