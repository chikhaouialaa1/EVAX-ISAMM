const express = require("express");
const User = require("../model/userSchema");
const confirmation = require("../model/conifmrationSchema");
const confirnatedUser = require("../model/confirmedUsersSchema");
const registerdUser = require("../model/userSchema");
const VaccinesSchema = require("../model/VaccinesSchema");
const Vaccine = require("../model/Vaccine");
const VaccinStock = require("../model/VaccinesSchema");

const Message = require("../model/ContactSchema");
const Centre = require("../model/vaccinationCentreSchema");
const gouvernorat = require("../model/gouvernoratSchema");
const ville = require("../model/ville");
const Operator = require("../model/OperatorSchema");
const volontaire = require("../model/VolontaireSchema");
const pharmacie = require("../model/pharmacieSchema");

const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();
var nodemailer = require("nodemailer");
const middlewares = require("../middleware/user-midlewares");
const vaccinationCentreSchema = require("../model/vaccinationCentreSchema");
const { db } = require("../model/userSchema");
const VolontaireSchema = require("../model/VolontaireSchema");
const SECRET_KEY = process.env.SECRET_KEY;
router.use(express.json());

//creat new centre
router.post(
  "/new-vaccination-centre",

  function (req, res) {
    try {
      const centre = new Centre({
        name: req.body.name,
        ville: req.body.ville,
        manager: req.body.manager,
        capacity: req.body.capacity,
        isPharmacie: req.body.isPharmacie,
      });

      console.log(centre);
      centre.save(function (err, user) {
        console.log(err);
        if (err) return res.json(err);

        res.status(200).send("centre added successfully");
      });
    } catch {
      return res.send("error").status(400);
    }
  }
);

router.put("/Vaccination-centre-updated/:id", async (req, res) => {
  const filter = {
    _id: req.params.id,
  };
  const updateObject = req.body;

  try {
    const updated_center = await Centre.findOneAndUpdate(filter, updateObject);
    if (!updated_center) {
      return res.status(404).json({ message: "center no found" });
    }
    res.send("success")
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
});
//update centre
/*
router.post(
  "/Vaccination-centre-updated/:id",

  function (req, res) {
    try {
      var centreId = req.params.id;
      const { name,  manager, capacity } = req.body;
      console.log(centreId);
      Centre.updateOne(
        { _id: centreId },
        {
          name: name,
          manager: manager,
          capacity:capacity
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
);*/

//delete centre
router.post(
  "/Vaccination-centre-del/:id",

  function (req, res) {
    try {
      var centreId = req.params.id;
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
router.get("/Vaccination-centre-id/:id", function (req, res) {
  //  try{
  var centreId = req.params.id;
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

//gestion volontaire
//new volontaire
/*router.post(
  "/new-volontaire",

  async function (req, res) {
    try {
    
      console.log(req.body)
      const { username, email, password, role, gouvernorat, ville, centre } =
      req.body;
      encryptedPassword = await bcrypt.hash(password, 10);
      ville.find({ _id: req.body.ville }, (err, data1) => {
        if (err) {
         console.log(err)
        }else{
          gouvernorat.find({ _id: req.body.gouvernorat }, (err, data2) => {
            if (err) {
             console.log(err)
            }else{
      const vol = await volontaire.create({
        username, email:email.toLowerCase(), password: encryptedPassword, role, ville_name:data1[0].name,gouv_name:data2[0].name,gouvernorat, ville, centre
      })
      console.log(ville_name
      )
        return res.status(200).send(vol);
      
    }}) } }) }catch {
      return res.send("error").status(400);
    }
  }
);*/
router.post("/new-volontaire", async function (req, res) {
  let name = "";
  encryptedPassword = await bcrypt.hash(req.body.password, 10);

  ville.find({ _id: req.body.ville }, (err, data1) => {
    if (err) {
      console.log(err);
    } else {
      gouvernorat.find({ _id: req.body.gouvernorat }, (err, data2) => {
        if (err) {
          console.log(err);
        } else {
          Centre.find({ _id: req.body.centre }, (err, data3) => {
            if (err) {
              console.log(err);
            } else {
              ville_name = data1[0].name;
              gouv_name = data2[0].name;
              center_name = data3[0].name;
              console.log(name);

              const Volont = new VolontaireSchema({
                username: req.body.username,

                email: req.body.email.toLowerCase(),
                password: encryptedPassword,
                role: req.body.role,
                gouvernorat: req.body.gouvernorat,
                ville: req.body.ville,
                centre: req.body.centre,
                ville_name: ville_name,
                gouv_name: gouv_name,
                center_name: center_name,
              });
              console.log(Volont);
              Volont.save(function (err, user) {
                console.log(err);
                if (err) return res.json(err);
                console.log(user);
                return res.send(user).status(200);
              });
            }
          });
        }
      });
    }
  });
});

//get all volontaire
router.get("/volontaire", function (req, res) {
  volontaire.find().then((vol) => {
    res.json(vol);
  });
});

// get by id
router.get("/Volontaire-id/:id", function (req, res) {
  //  try{
  var volId = req.params.id;
  console.log(volId);
  try {
    volontaire.find({ _id: volId }, (err, data) => {
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

// delete volontaire
router.post(
  "/Volontaire-del/:id",

  function (req, res) {
    try {
      var volId = req.params.id;
      console.log(volId);
      volontaire.deleteOne(
        { _id: volId },
        () => {
          console.log(volId);
          return res.send("volontaire" + volId + "deleted successfully");
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
//update
/*router.post(
  "/volontaire-update",

  function (req, res) {
    try {
      var volontaireID = req.body._id;
      const { username, email, password, role, gouvernorat, ville, centre } =
        req.body;

      volontaire.updateOne(
        { _id: volontaireID },
        {
          username: username,
          email: email,
          password: password,
          role: role,
          gouvernorat: gouvernorat,
          ville: ville,
          centre: centre,
        },
        res.send("volontaire updated successfully").status(200),
        (err) => {
          if (err) console.log(err);
          return res.send({ message: "error :" + err });
        }
      );
    } catch {
      return res.send("error").status(400);
    }
  }
);*/

router.post("/Volontaire-id/:id", function (req, res) {
  //  try{
  console.log(req.body);
  var volId = req.params.id;
  const vol = new VolontaireSchema({
    _id: volId,
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
    gouvernorat: req.body.gouvernorat,
    center_name: req.body.center_name,
    ville_name: req.body.ville_name,
    gouv_name: req.body.gouv_name,
  });

  console.log(req.body.username);
  VolontaireSchema.findOneAndUpdate(
    { _id: volId },
    vol,
    { new: true },
    (err, contact) => {
      if (err) {
        console.log(err);
        res.status(400).json(err);
      }
      return res.send(vol).status(200);
    }
  );
});

router.post("/Vaccin", function (req, res) {
  const vaccin = new Vaccine({
    vaccineName: req.body.vaccineName,
  });

  console.log(vaccin);
  vaccin.save(function (err, user) {
    console.log(err);
    if (err) return res.json(err);

    return res.send(user).status(200);
  });
});

router.post("/Add_Vaccin", function (req, res) {
  const vaccin = new VaccinesSchema({
    vaccineName: req.body.vaccineName,
  });

  console.log(vaccin);
  vaccin.save(function (err, user) {
    console.log(err);
    if (err) return res.json(err);

    return res.send(user).status(200);
  });
});
router.get("/vaccins", function (req, res) {
  Vaccine.find({}, (err, data) => {
    return res.send(data).status(200);
  });
});

//check specific centre
router.get("/Vaacin-id/:id", function (req, res) {
  //  try{
  var centreId = req.params.id;
  console.log(centreId);
  try {
    Vaccine.find({ _id: centreId }, (err, data) => {
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
router.post("/Vaccin-id/:id", function (req, res) {
  //  try{
  var centreId = req.params.id;
  const vaccin = new Vaccine({
    _id: centreId,
    vaccineName: req.body.Vaccin.vaccineName,
  });

  console.log(req.body.Vaccin.vaccineName);
  Vaccine.findOneAndUpdate(
    { _id: centreId },
    vaccin,
    { new: true },
    (err, contact) => {
      if (err) {
        console.log(err);
        res.status(400).json(err);
      }
    }
  );
});

router.post("/VaccinCenter", function (req, res) {
  let name = "";
  Vaccine.find({ _id: req.body.vaccin }, (err, data1) => {
    if (err) {
      console.log(err);
    } else {
      Centre.find({ _id: req.body.id }, (err, data2) => {
        if (err) {
          console.log(err);
        } else {
          VaccinesSchema.findOne(
            { centerID: req.body.id, vaccinID: req.body.vaccin },
            (err, data) => {
              if (!data) {
                name = data1[0].vaccineName;
                Cname = data2[0].name;
                console.log(name);

                const vaccin = new VaccinesSchema({
                  centerID: req.body.id,
                  vaccinID: req.body.vaccin,
                  vaccineName: name,
                  centerName: Cname,
                  quantity: req.body.quantity,
                });
                console.log(vaccin);
                vaccin.save(function (err, user) {
                  console.log(err);
                  if (err) return res.json(err);
                  console.log(user);
                  return res.send(user).status(200);
                });
              } else {
                data.quantity =
                  Number(data.quantity) + Number(req.body.quantity);
                VaccinesSchema.findOneAndUpdate(
                  { centerID: req.body.id, vaccinID: req.body.vaccin },
                  data,
                  { new: true },
                  (err, contact) => {
                    if (err) {
                      console.log(err);
                      res.status(400).json(err);
                    }
                    console.log(data.quantity);
                    return res.send(data).status(200);
                  }
                );
              }
            }
          );
        }
      });
    }
  });
});

router.get("/Vaacin-stock/:id", function (req, res) {
  //  try{
  var centreId = req.params.id;
  console.log(centreId + "aaaaaaaaaaaaaaaaa");
  try {
    VaccinesSchema.find({ centerID: centreId }, (err, data) => {
      if (err) {
        return res.send("error").status(404);
      }
      console.log("ddddddddddddddddddd");
      console.log(data);
      console.log("ddddddddddddddddddd");

      return res.send(data).status(200);
    });
  } catch (err) {
    console.log(err);
  }
});

router.post(
  "/Vaccin-del/:id",

  function (req, res) {
    try {
      var centreId = req.params.id;
      console.log(centreId);
      Vaccine.deleteOne(
        { _id: centreId },
        () => {
          console.log(centreId);
          return res.send("vaccin" + centreId + "deleted successfully");
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

//Stat

//Registres USers stat

router.get("/nbRegistred", async (req, res) => {
  let result = await registerdUser.countDocuments({});
  console.log(result);
  res.json(result);
});

router.get("/nbvaccinated", async (req, res) => {
  let result = await confirnatedUser.countDocuments({
    doseOne: false,
    doseTwo: false,
  });
  console.log(result);
  res.json(result);
});
router.get("/nbvaccinatedOne", async (req, res) => {
  let result = await confirnatedUser.countDocuments({
    doseOne: true,
    doseTwo: false,
  });
  console.log(result);
  res.json(result);
});

router.get("/vaccinStat", function (req, res) {
  VaccinStock.find({}, (err, data) => {
    return res.send(data).status(200);
  });
});

module.exports = router;
