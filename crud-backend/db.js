const mongoose = require("mongoose");
mongoose.connect(
  "mongodb://localhost:27017/CRUD",
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (!err) {
      console.log("MongoDb Successfully Connected!");
    } else {
      console.log(
        "Error in Db Connection:  " + JSON.stringify(err, undefined, 2)
      );
    }
  }
);
module.exports = mongoose;