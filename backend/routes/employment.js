const express = require("express");
const router = express.Router()
const employmentModel = require('../models/employment');


router.post('/', (req, res, next) => {
    employmentModel.create(req.body, (error, data) => {
        if (error) {
            return next(error);
        }
        else {
            res.send('Client employment info is added to the database.');
        }
    });
});



router.get('/', (req, res, next) => {
    employmentModel.find((error, data) => {
        if (error) {
            return next(error);
        }
        else if (data === null) {
            res.status(404).send('Client employment  not found');
        }
        else {
            res.json(data);
        }
    }).sort({ modifyAt: -1 });  
});


router.get('/:id', (req, res, next) => {
    employmentModel.findOneAndUpdate({clientId: req.params.id}, {$set:req.body}, (error, data) => {
        if (error) {
            return next(error);
        }
        else if (data === null) {
            res.status(404).send('Client employment found');
        }
        else {
            res.json(data);
        }
    }).sort({ modifyAt: -1 }); 
});

//update route for employmentModel model
router.put('/:id', (req, res, next) => {
    employmentModel.findOneAndUpdate({clientId: req.params.id}, {
        $set: req.body
      }, (error,data) => {
        if (error) {
          return next(error);
        } else if (data === null){
            res.status(404).send('employmentModel info not found');
        } else {
            res.send('employmentModel is edited via PUT');
            console.log('employmentModel successfully updated!', data)
        }
    }).sort({ modifyAt: -1});
  });

router.delete('/:id', (req, res, next) => {
    employmentModel.deleteOne({ clientId: req.params.id }, (error, data) => {
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

router.delete('/employmentId/:id', (req, res, next) => {
    employmentModel.deleteOne({ _id: req.params.id }, (error, data) => {
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

module.exports = router