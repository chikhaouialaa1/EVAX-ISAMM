const express = require("express");
const User = require("../model/userSchema");
const confirmation = require("../model/conifmrationSchema");
const ConfirmationUsers = require("../model/confirmedUsersSchema");
const VaccinesSchema = require("../model/VaccinesSchema");

const Message = require("../model/ContactSchema");
const Centre = require("../model/vaccinationCentreSchema");
const gouvernorat = require("../model/gouvernoratSchema");
const ville = require("../model/ville")
const Operator = require("../model/OperatorSchema");

const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();
var nodemailer = require("nodemailer");
const middlewares = require("../middleware/user-midlewares");
const SECRET_KEY = process.env.SECRET_KEY;
router.use(express.json());

//creat new centre
router.post(
  "/new-vaccination-centre",

  function (req, res) {
    try {
      var centre = req.body;
      console.log(centre);

      Centre.create(centre).then(() => {
        return res.status(200).send("centre created successfully");
      });
    } catch {
      return res.send("error").status(400);
    }
  }
);

//update centre
router.post(
  "/Vaccination-centre-updated",

  function (req, res) {
    try {
      var centreId = req.body._id;
      const { name, gouvernement, manager } = req.body;
      console.log(centreId);
      Centre.updateOne(
        { _id: centreId },
        {
          name: name,
          gouvernement: gouvernement,
          manager: manager,
        },
        res.send("centre updated successfully").status(200),
        (err) => {
          if (err) console.log(err);
          return res.send({ message: "error :" + err });
        }
      );
    } catch {
      return res.send("error").status(400);
    }
  }
);

//delete centre
router.post(
  "/Vaccination-centre-del",

  function (req, res) {
    try {
      var centreId = req.body._id;
      console.log(centreId);
      Centre.deleteOne(
        { _id: centreId },
        () => {
          console.log(centreId);
          return res.send("centre" + centreId + "deleted successfully");
        },
        (err) => {
          if (err) console.log(err);
          return res.send({ message: "error :" + err });
        }
      );
    } catch {
      return res.send("error").status(400);
    }
  }
);

//check specific centre
router.post("/Vaccination-centre-id", function (req, res) {
  //  try{
  var centreId = req.body._id;
  console.log(centreId);
  try {
    Centre.find({ _id: centreId }, (err, data) => {
      if (err) {
        return res.send("error").status(404);
      }
      console.log(data);
      return res.send(data).status(200);
    });
  } catch (err) {
    console.log(err);
  }
});

//check all centres
router.get("/Vaccination-centre-list", function (req, res) {
  Centre.find()
    .populate({ path: "ville", select: "name" })
    .then((vacc) => {
      res.json(vacc);
    });
});

//get all gouvernment
router.get("/gouvernorat", function (req, res) {
  gouvernorat.find({}, (err, data) => {
    return res.send(data).status(200);
  });
});
//check all ville
router.get("/ville", function (req, res) {
  ville
    .find()
    .populate({ path: "gouvernorat", select: "name" })
    .then((v) => {
      res.json(v);
    });
});
//get ville by gouvernorat
router.post("/gouvernorat-id", function (req, res) {
  //  try{
  var gouvId = req.body._id;
  try {
    gouvernorat
      .findOne({ _id: gouvId })
      .populate("ville") // key to populate
      .then((gouv) => {
        res.json(gouv);
      });
  } catch (err) {
    console.log(err);
  }
});

//get Messages
router.get("/Messages", function (req, res) {
  Message.find({}, (err, data) => {
    console.log(data);
    return res.send(data).status(200);
  });
});

module.exports = router;
