# Coronavirus Quarantine Patients Monitoring
## Do Bao Khanh and Le Duc Anh
## e1700699 and e1700679
Monitoring the patients being kept in quarantine

## Analysis
### Case description
####	Actors of the solution:
 *	Doctors
 *	Administrators
####	Roles of actors:
 *	Doctors: use the system by retrieving, providing and updating information.
 *	Administrators: operate and administrate the implementation of the system.
####	Tasks the actors would like to do:
 *	Doctors: create/update doctor accounts, create/update/delete patients’ information.
 *	Administrators: install, start up, maintain and shut down the system.
####	Data input:
 *	Data input under various types (string, date/time, numbers, etc.) by authorized actors.
####	Output data type:
 *	Data is saved to database.
 *	Data is displayed as a web page.
####	What kind of algorithms there are:
 *	Authentication algorithm: allows only authorized actors to gain access to the system.
 *	Authorization algorithm: different actors gain different access levels to the system.
 *	Data integrity algorithm: ensures only allowed data is to be input into the system, and only such data will be exported to actors.
 *	Data availability algorithm: ensures which kind of data will be shown to certain actors.

### Table of functional requirement

Priority level
1- Must have
2- Should have
3- Nice to have

|Reference|Description|Priority
|---------|-----------|--------|
|F1|Authentication|1|
|F2|Show all the unit to the table|1|
|F3|Show all the patients to the table|1|
|F4|Add new patient|2|
|F5|Add new unit|2|
|F6|Delete patient|2|
|F7|Add role to the user, make sure only admin can delete the unit|3|
|F8|Delete unit|3|

### Use case diagram

![picture_alt](https://github.com/dobaokhanh/Coronavirus-Quarantine-Patients-Monitoring/blob/master/public_img/UseCase.PNG "Use cases")

### Project plan

![picture_alt](https://github.com/dobaokhanh/Coronavirus-Quarantine-Patients-Monitoring/blob/master/public_img/ProjectPlan1.jpg "Project Plan")
![picture_alt](https://github.com/dobaokhanh/Coronavirus-Quarantine-Patients-Monitoring/blob/master/public_img/ProjectPlan2.jpg "Project Plan Diagram")

### Test plan
*	Account creation test
*	Authentication test
*	Authorization test 
*	Test of patients creation and deletion
*	Test of patients’ information update and retrieval

## Design
### Sequence diagrams
#### Server side

![picture_alt](https://github.com/dobaokhanh/Coronavirus-Quarantine-Patients-Monitoring/blob/master/public_img/ServerSequencediagrams.PNG "Server Sequence diagram")

#### Client side

![picture_alt](https://github.com/dobaokhanh/Coronavirus-Quarantine-Patients-Monitoring/blob/master/public_img/ClientSequenceDiagram.PNG "Client Sequence diagram")

### Package diagram

![picture_alt](https://github.com/dobaokhanh/Coronavirus-Quarantine-Patients-Monitoring/blob/master/public_img/PackageDiagram.PNG "Package diagram")

### Class diagrams

![picture_alt](https://github.com/dobaokhanh/Coronavirus-Quarantine-Patients-Monitoring/blob/master/public_img/ServerClassDiagram.PNG "Server class diagram")

### User stories

- As a doctor working in one unit of quarantine, I would like to see list of patients in my unit

- As a Minister, I would like to see the current Corona Virus quarantine in my country. I would like to see list of units and patients have been kept in quarantine

## Implementation
### Java Spring Boot back end

* Create APIs for the client:
 * Login API: The client would send the LoginRequest payload. The server-side check whether the username/mail and password are correct or not. If correct, send the JWT token to the client in payload
 * Sign up API: The client would send the user SignupRequest. The server-side registers new a account, and send back to the client SignupResponse
* For all the requests belows, the client must include Authorization token to the header in order to call the APIs:
 * Get all units API: In order to optimize the program, the server is not send back all the units to the client. The server would send page of units instead, so the client must specified the page number, and the size of page
 * Get all patients API: In order to optimize the program, the server is not send back all the patients to the client. The server would send page of patients instead, so the client must specified the page number, and the size of page
 * Add new patient API: The client send Patient Request payload to the server. The server add new patient to the database, and send back Patient Response to the client
 * Delete patient API: The client send the Patient Request payload to the server. The server delete the patient from database and send back API response which contains the success in boolean type and the message

### React front-end

* Create table to show all the units
* Create table to show all the patients
* Add a buton and modal form to add new patients
* Add a button to delete patient

## Testing

### Spring Boot test cases

* The APIs would be tested with Postman
 * Add new patient to database by using REST API:
 
![picture_alt](https://github.com/dobaokhanh/Coronavirus-Quarantine-Patients-Monitoring/blob/master/public_img/TestCaseAddNewPatientToDb.PNG)

 * Get patient by id using REST API:
 
 ![picture_alt](https://github.com/dobaokhanh/Coronavirus-Quarantine-Patients-Monitoring/blob/master/public_img/TestCaseGetPatientById.PNG)
 
 * Get all patients using REST API:

![picture_alt](https://github.com/dobaokhanh/Coronavirus-Quarantine-Patients-Monitoring/blob/master/public_img/GetAllPatients.PNG)

## Documentation

* Swagger document for RESTful API:

![picture_alt](https://github.com/dobaokhanh/Coronavirus-Quarantine-Patients-Monitoring/blob/master/public_img/APIDocument.PNG "Swagger")

* [Spring Boot back end](https://github.com/dobaokhanh/Coronavirus-Quarantine-Patients-Monitoring/tree/master/Coronavirus-Quarantine-Patients-Monitoring)

* [React front end](https://github.com/dobaokhanh/Coronavirus-Quarantine-Patients-Monitoring/tree/master/coronavirus-quarantine-patients-monitoring-client)

## Deployment

This project has not been deployed yet
