const mongoose = require("mongoose");
const uri =
  "mongodb+srv://aarya8702:ABhishek@1234@meancluster0.niijl.mongodb.net/EMP_CRUD?retryWrites=true&w=majority";
mongoose.connect(
  uri,
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
