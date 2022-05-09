//import and load express app on a port we want to use
const express = require('express')
const app = express()
const port = 8080;
const dotenv = require("dotenv");
const axios = require("axios");
dotenv.config();
//const cors = require('cors'); // to alow the frontend to access the api****Mo

const mongoose = require("mongoose");  // Require mongoose library

// making our configuration file with an environment variable and requiring it


//runs the connection request if successful

//Load up our other libraries (mongoose for schema and morgan for logging help)

//Adding better logging functionality
const morgan = require("morgan");


// Import cors module.
const cors = require('cors');
app.use(cors())


//In the production systems, we should not hardcode the sensitive data like API Keys, 
//Secret Tokens, etc directly within the codebase (based on the Twelve factor App method). 
// We will pass them as environment variables. This module helps us to load environment variables from a .env file into process.env


// setting up mongoose DB connection
mongoose
  .connect("MONGO_URL")   // read environment varibale from .env

  .then(() => {
    console.log("Database connection Success!");
    app.listen(port, () => console.log(`Hello world app listening on port ${port}!`));
  })
  //if error in connecting for some reason it is logged
  .catch((err) => {
    console.error("Mongo Connection Error", err);
  });

//Declare the port
const PORT = process.env.PORT || 8080;

//req.body
app.use(express.json()); 
//enable incoming request logging in dev mode
app.use(morgan("dev"));
app.use(cors()); //to access the api from frontend****Mo

// Setting up routers
//route clients
const clientsRouter = require('./routes/clients')
app.use('/clients', clientsRouter)
//router client doc
const clientsDocRouter = require('./routes/clientDoc')
app.use('/clients-doc', clientsDocRouter)
// router education
const education = require('./routes/education')
app.use('/education', education)
// router contact
const contact = require('./routes/contact')
app.use('/contact', contact)
// router employment
const employment = require('./routes/employment')
app.use('/employment', employment)
// router residence
const residence = require('./routes/residence')
app.use('/residence', residence)

//event router 
const event = require('./routes/event')
app.use('/event', event)

//router family
const family = require('./routes/family')
app.use('/family', family)
//router health
const health = require('./routes/health')
app.use('/health', health)
//router income
const income = require('./routes/income')
app.use('/income', income)
//router intake
const intake = require('./routes/intake')
app.use('/intake', intake)
//router worker
const worker = require('./routes/worker')
app.use('/worker', worker) 
//router for raceEthnicity
const raceEthnicity = require('./routes/raceEthnicity')
app.use('/raceEthnicity', raceEthnicity)  //raceEthnicity
const graphs = require('./routes/graphs')
app.use('/graphs', graphs)
const organization = require('./routes/organization')
app.use('/organizations',organization)
//end routers setting

//index page
app.get('/', (req, res) => {
  //we will send a string back
  res.send('Welcome to Team 15\'s Index Page for the Project!')
});


const ClientModel = require('../backend/models/client');

//external api implementation
// this function grabs all data from the api
app.get('/externalInfo/:id', (req,res,next) => {
  try {
     ClientModel.find({ clientId: req.params.id }, (error, data) => {
      if (error) {
          return next(error);
      }
      else if (Object.keys(data).length === 0) { //https://bobbyhadz.com/blog/javascript-check-if-object-is-empty
          res.status(404).send('Client not found');
      }
      else {
        console.log('Client found, matching information in external API......' , data);
        var url = `https://cis-4339.herokuapp.com/api/v1/data/${data[0].firstName}/${data[0].lastName}/${data[0].phoneNumber}`
          externalApi(url, res);
          
      }
    }).sort({ modifyAt: -1 }).limit(1);
    } catch (err) {
    res.status(500).json({ message: err });
    console.log('error') 
    }
   });


   //https://www.geeksforgeeks.org/how-to-make-get-call-to-an-api-using-axios-in-javascript/ 
   //used this as a reference to building this function for axios
function externalApi(path,res){
  axios.get(path).then(
    (response) => {
      var results = response.data;
      res.status(200).json(response.data);
      console.log(results);
    },
    (error) => {
      res.status(500).json({ message: error + ' Could not find client in external API'});
      console.log(error);
      console.log('Could not find client in external API' );
    }
  );
}
// https://cis-4339.herokuapp.com/api/v1/data
// https://cis-4339.herokuapp.com/api/v1/data/Fiona/Smith/987-3595-89