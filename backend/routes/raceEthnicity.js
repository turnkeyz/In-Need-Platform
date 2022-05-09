const express = require("express");
const router = express.Router();
const raceEthnicityModel = require('../models/raceEthnicity');

//get route for raceEthnicity model
  router.get('/', (req, res, next) => {
    raceEthnicityModel.find((error, data) => {
        if (error) {
          return next(error);
        } else if (data === null) {
          res.status(404).send('raceEthnicity document not found.');
        }
        else {
          res.json(data);
        }
    }).sort({ modifyAt: -1 });
  });
  
  //get route for raceEthnicity model by specific id
  router.get('/:id', (req, res, next) => {
    raceEthnicityModel.find({ _id: req.params.id }, (error, data) => {
        if (error) {
            return next(error);
        }
        else if (data === null) {
            res.status(404).send('raceEthnicity info  not found');
        }
        else {
            res.json(data);
        }
    }).sort({ modifyAt: -1 });     // Only return the latest document
});

  //post route for raceEthnicity model
  router.post('/', (req, res, next) => {
    raceEthnicityModel.create(req.body, (error, data) => {
        if (error) {
          console.log('A');
          return next(error)
        } else {
          console.log('B');
          res.send('raceEthnicity info is added to the database');
        }
    });
  });

  //update route for raceEthnicity model
  router.put('/:id', (req, res, next) => {
    raceEthnicityModel.findOneAndUpdate({_id: req.params.id}, {$set:req.body}, (error,data) => {
        if (error) {
          return next(error);
        } else if (data === null){
            res.status(404).send('raceEthnicity info not found');
        } else {
          res.send('raceEthnicity info is updated in the database');
        }
    }).sort({ modifyAt: -1});
  });

  //delete route for raceEthnicity model
  router.delete('/:id', (req, res, next) => {
    raceEthnicityModel.deleteOne({ _id: req.params.id }, (error, data) => {
        if (error) {
          return next(error);
        } else {
          res.status(200).json({
            msg: data});
        }
    });
  });


   router.delete('/raceEthnicityId/:id', (req, res, next) => {
      raceEthnicityModel.deleteOne({ _id: req.params.id }, (error, data) => {
        if (error) {
            return next(error);
        }
        else {
            res.status(200).json({
                msg: data
            });
        }
    });
});

module.exports = router;