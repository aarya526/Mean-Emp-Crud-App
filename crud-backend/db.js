const mongoose = require("mongoose");
const uri =
  "mongodb+srv://aarya526:ABHISHEk1234@abhishek.vccrq.mongodb.net/CRUD?retryWrites=true&w=majority";
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
