const express = require("express");

const JPO = require("../model/JpoSchema")
const JpoCenter = require("../model/JpoCenterSchema")
const router = express.Router();
require("dotenv").config();

router.use(express.json());



// create jpo
router.post(
    "/new-jpo",
  
    function (req, res) {
      try {
        const jpo = new JPO({
          titre : req.body.titre,  
          date : req.body.date,        
        
      });
      
      
        console.log(jpo);
        jpo.save(function(err, user) {
          console.log(err)
            if (err) return res.json(err);
           
           res.status(200).send("jpo added successfully");
      
          });
       
      
      } catch {
        return res.send("error").status(400);
      }
    }
  );

  //update
  router.put('/jpo-updated/:id', async (req, res) => {
    const filter = {
      _id: req.params.id,
    };
    const updateObject = req.body;
  
    try {
      const updated_jpo = await JPO.findOneAndUpdate(filter, updateObject);
      if (!updated_jpo) {
        return res.status(404).json({ message: 'jpo no found' });
      }
      res.status(203).json({
        message: 'jpo updated with success',
      });
    } catch (err) {
      console.log(err);
      res.status(500).send(err);
    }
  });
  //delete 
  router.post(
    "/jpo-del/:id",
  
    function (req, res) {
      try {
        var jpoId = req.params.id;
        console.log(jpoId);
        JPO.deleteOne(
          { _id: jpoId },
          () => {
            console.log(jpoId);
            return res.send("Jpo " + jpoId + "deleted successfully");
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

  //get by id
  router.get("/jpo-id/:id", function (req, res) {
    //  try{
    var jpoId = req.params.id;
    console.log(jpoId);
    try {
      JPO.find({ _id: jpoId }, (err, data) => {
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

  router.get("/jpo-list", function (req, res) {
    JPO.find({}, (err, data) => {
      return res.send(data).status(200);
    });
  });

//affect center to jpo
router.post(
  "/affect-center-to-jpo",

  function (req, res) {
    try {
      const jpoCenter  = new JpoCenter({
        jpoId : req.body.jpoId,  
        centreId : req.body.centreId, 
        volontaire: req.body.volontaire      
    });
      console.log(jpoCenter);
      jpoCenter.save(function(err, user) {
        console.log(err)
          if (err) return res.json(err);
         
         res.status(200).send("center affected successfully");
    
        });
     
    
    } catch {
      return res.send("error").status(400);
    }
  }
);

//delete

router.get("/jpo-del-center", function (req, res) {
  var idJpo = req.body.jpoId;
  var idCenter = req.body.centreId;
JpoCenter.findOne({jpoId:idJpo, centreId: idCenter}).populate("jpoId centreId volontaire")
.then((jpo) => {
  JpoCenter.deleteOne(
    { _id: jpo._id },
    () => {
      return res.send("Jpo deleted successfully");
    },
    (err) => {
      if (err) console.log(err);
      return res.send({ message: "error :" + err });
    }
  );

});
});
//get jpo-one-center
router.get("/jpo-one-center", function (req, res) {
    var idJpo = req.body.jpoId;
    var idCenter = req.body.centreId;
  JpoCenter.findOne({jpoId:idJpo, centreId: idCenter}).populate("jpoId centreId volontaire")
  .then((jpo) => {
    res.json(jpo);
  });
});
// get jpo all centers
router.get("/jpo-centers/:id", function (req, res) {
  var idJpo = req.params.id;
  JpoCenter.find({jpoId:idJpo}).populate("jpoId centreId volontaire")
  .then((jpo) => {
    res.json(jpo);
  });
    
});
module.exports = router;