const express = require("express");
const router = express.Router();
const organizationModel = require('../models/organization');

//get route for organization model
//Get all organizations in the collection
  router.get('/', (req, res, next) => {
    organizationModel.find((error, data) => {
        if (error) {
          return next(error);
        } else if (Object.keys(data).length === 0) { //https://bobbyhadz.com/blog/javascript-check-if-object-is-empty
          res.status(404).send('organization document not found.');
        }
        else {
          res.json(data);
        }
    }).sort({ modifyAt: -1 });
  });
  
  //get route for organization model by specific id
  router.get('/:id', (req, res, next) => {
    organizationModel.find({ _id: req.params.id }, (error, data) => {
        if (error) {
            return next(error);
        }
        else if (Object.keys(data).length === 0) { //https://bobbyhadz.com/blog/javascript-check-if-object-is-empty
            res.status(404).send('organization info  not found');
        }
        else {
            res.json(data);
        }
    })
});

  //post route for organization model
  router.post('/', (req, res, next) => {
    organizationModel.create(req.body, (error, data) => {
        if (error) {
          console.log('A');
          return next(error)
        } else {
          console.log('B');
          res.send('organization info is added to the database');
          console.log('organization successfully Added!', data)
        }
    });
  });

  //update route for organization model
  router.put('/:id', (req, res, next) => {
    organizationModel.findOneAndUpdate({_id: req.params.id}, {
        $set: req.body
      }, (error,data) => {
        if (error) {
          return next(error);
        } else if (data === null){ // this works here but didn't work in the other case when using find()
            res.status(404).send('organization info not found');
        } else {
            res.send('organization is edited via PUT');
            console.log('organization successfully updated!', data)
        }
    }).sort({ modifyAt: -1});
  });

  //delete route for organization model
  router.delete('/:id', (req, res, next) => {
    organizationModel.deleteOne({ _id: req.params.id }, (error, data) => {
        if (error) {
          return next(error);
        } else {
          res.status(200).json({
            msg: data});
        }
    });
  });

module.exports = router;