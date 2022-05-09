
# CIS4339 Spring 2022

This is Project Group 34's API developed for CIS 4339. Its purpose is to serve information about applicants,
clients, workers, events, etc. There is a backend folder which contains a models subdirectory and a routes subdirectory.
The former serves as a basis by which data can be implemented in MongoDB and the latter establishes the routes of the API,
that is the four CRUD operations as required by the scope of the project. There is also the backbone of the API
which is located in backend.js. in the root of the directory. This has all the router configuration,
port specifications, app usages, and finally the implementation of the external API.




## Installation

This will be the guide for setting up the project to be able to run it.

command to install through npm: 

first navigate to the backend folder in the project-team-15 folder.
then run the following command:                                    npm install
after this has finished installing run this command:               npm start
now the backend has been started.

These are the dependencies for the backend.
__project dependencies__: 

{ 

    "axios": "^0.26.0",
    "cors": "^2.8.5",
    "dotenv": "^10.0.0",
    "express": "^4.17.1",
    "mongoose": "^6.2.4",
    "morgan": "^1.10.0",
    "nodemon": "^2.0.15",
    "stack": "^0.1.0",
    "uuid": "^8.3.2",
    "vite": "^2.9.4"

}

Now you will need to setup the frontend.
first navigate to the frontend folder in the project-team-15 folder.
then run the following command:                                     npm install
after this has finished installing run this command:                npm run dev
now the frontend has been started.

These are the dependencies for the frontend.
__project dependencies__:

{
    "@popperjs/core": "^2.11.5",
    "@vue/cli": "^5.0.4",
    "axios": "^0.26.1",
    "bootstrap": "^5.1.3",
    "bootstrap-vue": "^2.21.2",
    "chart.js": "^3.7.1",
    "chartkick": "^4.1.1",
    "highcharts": "^10.0.0",
    "vue": "^3.2.33",
    "vue-chartjs": "^4.0.6",
    "vue-chartkick": "^1.1.0",
    "vue-datetime-picker": "^0.2.1",
    "vue-router": "^4.0.14"
}



## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`MONGO_URL`



## Model Example

Each schema has a schema like the one shown below showing various details about the specific entries in the schemas. These can be found at the bottom of each of the models in the following path “/backend/models/”. Descriptions of each schema varies based on the topic and material within. 

Family Schema Description: 

 _id: String (uuid.v1 for random value) 

 clientId: Number (Link the activity to client) 

 familyMember : { (nested JSON for family member data for families) 

     firstName : String (first name of family member) 

     lastName : String (last name of family member) 

     gender : Array (gender of family member) 

     birthday : String (birthday of family member) 

     age : Number (age of family member) 

     relation : String (how they are related to applicant) 

     ethnicity : Array (ethnicity of family member) 

     pregnant : Boolean (yes/no if family member is pregnant) 

     whereWorkOrStudy : String (where family member goes to work or school) 

     occupationOrGrade : String (what the actual job is or what grade they are in) 

}


## __Routes__

These are all the basic routes that can be used. They can get more specific by adding a specific ID. e.g.: /clients/12345 (This is purely an example and doesn't imply a functioning route. This will be covered more in each respective route as it needs clarification on a case-by-case basis.) 

 
 

/clients  

This route contains all the information about clients. We have implemented all CRUD operations for clients. We successfully created clients using POST method. We can get all clients at a time, also we are able to fetch the data based on id provided. We also implemented an aggregate function to get client data based on last name provide. And we also implemented an update and delete method for clients based on id provided. 

 
 

/clients-doc 

This route contains all the information about clients' documents such as ssn, and driver license. We have implemented all CRUD operations for clientDoc models. We successfully created clients using POST method. We can get all client documents at a time. We can fetch the client documents not only from id provided, but we can also do it from their ssn. We also implemented a get function to get client document edit history. And we also implemented an update and delete method for client documents based on id provided.  

 
 

/education 

The education route contains education information for clients. Our team has implemented all CRUD functionality for this route where we can successfully add education info using POST method. We also have implemented GET method to fetch all data and DELETE method based on id provided. PUT method can update the info based on id provided. 
 

/contact 

Our team implemented contact route for clients contact info. We have successfully implemented crud operations where with POST method we can post the new contacts for client id. We can fetch and update data based on id provided. We also can delete data based on client id and unique contactid. 
 
 

/employment 

The employment route contains our clients’ employment information. We have successfully implemented all crud functionality for employment where we can insert data using POST method, read all data or based on id using GET method. We can also update data based on id provided using PUT method and can delete data based on id provided using DELETE method. We also can delete data based on unique employment id provided. 
 
 

/residence 

 
The employment route contains our clients’ residential information. We have successfully implemented all crud functionality for employment where we can insert data using POST method, read all data or based on id using GET method. We can also update data based on id provided using PUT method and can delete data based on id provided using DELETE method. We also can delete data based on unique residence id provided. 
 

/event 

The employment route contains our clients’ event information. We have successfully implemented all crud functionality for employment where we can insert data using POST method, read all data or based on id using GET method. We can also update data based on id provided using PUT method and can delete data based on id provided using DELETE method.  
 
 

/family 

This route contains all the information about families. We have implemented all CRUD operations for the /family route. We successfully created new families using the POST method. We can get all family entries at a time, also we can fetch the data based on a provided id. e.g.: localhost:3000/family/1. If a family document or an entry in the family table, requested by id, doesn’t exist a status code of 404 is returned. This means the page or resource is not found. We can also update a document in the family collection by id. Lastly, we have implemented the ability to delete all the information in the family collection or a specific document identified by id in the same format as previously mentioned. If a CRUD operation is successful, it returns a code of 200. 

/health 

This route contains all the information about health. We have implemented all CRUD operations for the /health route. We successfully created new health documents using the POST method. We can get all health documents at one time, also we can fetch the data based on a provided id. e.g.: localhost:3000/health/1. If a family document or an entry in the family table, requested by id, doesn’t exist a status code of 404 is returned. This means the page or resource is not found. We can also update a document in the health collection by id. Lastly, we have implemented the ability to delete all the information in the health collection or a specific document identified by id in the same format as previously mentioned. If a CRUD operation is successful, it returns a code of 200. 

/income 

This route contains all the information about income. We have implemented all CRUD operations for the /income route. We successfully created new income using the POST method. We can get all income documents at one time, also we can fetch the data based on a provided id. e.g.: localhost:3000/income/1. If a income document or an entry in the income table, requested by id, doesn’t exist a status code of 404 is returned. This means the page or resource is not found. We can also update a document in the family collection by id. Lastly, we have implemented the ability to delete all the information in the income collection or a specific document identified by id in the same format as previously mentioned. If a CRUD operation is successful, it returns a code of 200. 

/intake 

This route contains all the information about intake forms. We have implemented all CRUD operations for the /intake route. We successfully created new intake forms using the POST method. We can get all intake entries at one time, also we can fetch the data based on a provided id. e.g.: localhost:3000/intake/1. If an intake document or an entry in the intake table, requested by id, doesn’t exist a status code of 404 is returned. This means the page or resource is not found. We can also update a document in the intake collection by id. Lastly, we have implemented the ability to delete all the information in the intake collection or a specific document identified by id in the same format as previously mentioned. If a CRUD operation is successful, it returns a code of 200. 

/worker 

This route contains all the information about workers. We have implemented all CRUD operations for the         /worker route. We successfully created new workers using the POST method. We can get all worker entries at one time, also we can fetch the data based on a provided id. e.g.: localhost:3000/worker/1. If a worker document or an entry in the worker table, requested by id, doesn’t exist a status code of 404 is returned. This means the page or resource is not found. We can also update a document in the family collection by id. Lastly, we have implemented the ability to delete all the information in the family collection or a specific document identified by id in the same format as previously mentioned. If a CRUD operation is successful, it returns a code of 200. 

 

 
 
 

Explaining the crud operations utilizing the family model. 
This will explain the different functions that are covered by the API that we have created for this project. We covered the basics as well as specifically grabbing information based on IDs. The outputs are logged in Postman. We can see a return code of 200 for each functioning crud operation as well as a 404 error for an intentionally incorrect get request. 

 
 

This is a basic GET function for the family route that will retrieve all documents that are in the family collection and serves as a template to be compared against the rest of the routes in our API. 

/ GET http://localhost:3000/family 200 45 ms  
Network Request Headers Content-Type: application/json User-Agent: PostmanRuntime/7.29.0 Accept: / Postman-Token: 1d3eb49b-fdbb-4969-b899-f2d9eecad434 Host: localhost:3000 Accept-Encoding: gzip, deflate, br Connection: keep-alive Content-Length: 383 

 

Below this will be a response body from Postman for the get request for a family id of “1231241” specified. 

{ 

        "familyMember": { 

            "firstName": "John", 

            "lastName": "Snow", 

            "gender": [ 

                "male" 

            ], 

            "birthday": "01/12/1433", 

            "age": 36, 

            "relation": "Father", 

            "ethnicity": [ 

                "caucasian" 

            ], 

            "pregnant": false, 

            "whereWorkOrStudy": "Walmart", 

            "occupationOrGrade": "Shelf Stocker" 

        }, 

        "_id": "b49ee5b0-9b64-11ec-a9df-ade3c291354c", 

        "clientId": 1231241, 

        "__v": 0 

    } 

 
 

This is a basic POST function that will post a new document to the family collection and serves as a template to be compared against the rest of the routes in our API. 

/ POST http://localhost:3000/family 200 51 ms  
Network Request Headers Content-Type: application/json User-Agent: PostmanRuntime/7.29.0 Accept: / Postman-Token: db50dd8a-2f09-449c-a631-4ae4b71ad5d4 Host: localhost:3000 Accept-Encoding: gzip, deflate, br Connection: keep-alive Content-Length: 336 

 
 

This is a basic PUT function that will update a specified document to the family collection and serves as a template to be compared against the rest of the routes in our API. 

/ PUT http://localhost:3000/family/1231241 200 56 ms  
Network Request Headers Content-Type: application/json User-Agent: PostmanRuntime/7.29.0 Accept: / Postman-Token: aafcf84e-9fc4-401b-9bda-4e4826e6ae1e Host: localhost:3000 Accept-Encoding: gzip, deflate, br Connection: keep-alive Content-Length: 340 

 
 

This is a basic DELETE function that will delete a specified document to the family collection and serves as a template to be compared against the rest of the routes in our API.  

/ DELETE http://localhost:3000/family/4444 200 49 ms  
Network Request Headers Content-Type: application/json User-Agent: PostmanRuntime/7.29.0 Accept: / Postman-Token: eeb4170c-5e56-4747-a396-1cca539c71f7 Host: localhost:3000 Accept-Encoding: gzip, deflate, br Connection: keep-alive Content-Length: 336 

 

This is a basic GET function that will not work due to the id not existing in the family collection. It would have to first be made via a post and this was not done, thus the resulting postman response below. 

GET http://localhost:3000/family/0666 

Error: connect ECONNREFUSED 127.0.0.1:3000 

Request Headers 

Content-Type: application/json 

User-Agent: PostmanRuntime/7.29.0 

Accept: */* 

Postman-Token: 19e935ba-8705-4776-ab30-5c454a3ba176 

Host: localhost:3000 

Accept-Encoding: gzip, deflate, br 

Connection: keep-alive 

## __external API__ 

For the external API we first created a route in our backend.js file named /externalInfo/:id 
where you would insert the id of the client that you are seeking to find more information about instead of :id.
If the client data is found it is then matched against information in the external API to see if there is an entry that matches
up against the first name, last name, and the phone number. It then queries our axios function which takes two arguments,
a path and a response. If successful it will return a 200 status and the response.data in a json format. Otherwise,
it returns a status code 500 and shows in the console log that the client was not found in the external API.   


## __errors__

200 OK status code			Indicates the request has succeeded. 

 
 

404 resource or page doesn’t exist	This happens if the specified document does not exist or the route 					does not exist. 

 
 

500 internal server error			The server doesn’t know what to do and returns an error. This is 					used for our external API to handle errors that aren’t either a 200 or 					a 404. 


## Authors

- [Kyler telge](https://github.com/turnkeyz)
- [Mo Khalil](https://github.com/Mo60)
- [Sufiaan Shaikh](https://github.com/sufiaan)
## Acknowledgements

 - [Axios Help](https://www.geeksforgeeks.org/how-to-make-get-call-to-an-api-using-axios-in-javascript/)
 - [API documentation](https://github.com/Medium/medium-api-docs#2-authentication)

