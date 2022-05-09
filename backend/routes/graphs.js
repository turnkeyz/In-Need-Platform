const express = require('express');
const router = express.Router();

let client = require('../models/client')

//setting up route for graph
router.get('/', (req, res, next) => {
  client.aggregate([
    { "$group": {"_id": "$raceEthnicity","count": { "$sum": 1 } } },
    { "$group": {"_id": null, "counts": { "$push": { "k": "$_id", "v": "$count" }}}},
    { "$replaceRoot": {"newRoot": { "$arrayToObject": "$counts" }}},
  ])
  .exec((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.send(data[0]);
      console.log(data[0]);
    }
  })
}); //end of get request
  
module.exports = router;