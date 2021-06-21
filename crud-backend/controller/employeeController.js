const express = require("express");
var router = express.Router();

var { Employee } = require("../model/employee");
//=>localhost:3000/employees
router.get("/", (req, res) => {
  Employee.find((err, docs) => {
    if (!err) {
      console.log(docs);
      res.send(docs);
    } else {
      console.log(
        "Error in retrieving employees : " + JSON.stringify(err, undefined, 2)
      );
    }
  });
});
var ObjectId = require("mongoose").Types.ObjectId;
router.get("/:id", (req, res) => {
  if (!ObjectId.isValid(req.params.id)) {
    return res
      .status(400)
      .send(`No Record Found with given id : ${req.params.id}`);
  } else {
    Employee.findById(req.params.id, (err, docs) => {
      if (!err) {
        res.send(docs);
      } else {
        console.log(
          "Error in retrieving employee : " + JSON.stringify(err, undefined, 2)
        );
      }
    });
  }
});
router.put("/:id", (req, res) => {
  if (!ObjectId.isValid(req.params.id)) {
    return res
      .status(400)
      .send(`No Record Found with given id : ${req.params.id}`);
  } else {
    var emp = {
      name: req.body.name,
      position: req.body.position,
      office: req.body.office,
      salary: req.body.salary,
    };
    Employee.findByIdAndUpdate(
      req.params.id,
      { $set: emp },
      { new: true },
      (err, docs) => {
        if (!err) {
          res.send(docs);
        } else {
          console.log(
            "Error in Updating employee : " + JSON.stringify(err, undefined, 2)
          );
        }
      }
    );
  }
});
router.delete("/:id", (req, res) => {
  if (!ObjectId.isValid(req.params.id)) {
    return res
      .status(400)
      .send(`No Record Found with given id : ${req.params.id}`);
  } else {
    Employee.findByIdAndRemove(req.params.id, (err, docs) => {
      if (!err) {
        res.send(docs);
      } else {
        console.log(
          "Error in Updating employee : " + JSON.stringify(err, undefined, 2)
        );
      }
    });
  }
});

router.post("/", (req, res) => {
  var employee = new Employee({
    name: req.body.name,
    position: req.body.position,
    office: req.body.office,
    salary: req.body.salary,
  });
  employee.save((err, docs) => {
    if (!err) {
      res.send(docs);
    } else {
      console.log(
        "Error in saving employee : " + JSON.stringify(err, undefined, 2)
      );
    }
  });
});

module.exports = router;
