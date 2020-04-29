# Coronavirus Quarantine Patients Monitoring
## Do Bao Khanh and Le Duc Anh
## e1700699 and e1700679
Monitoring the patients being kept in quarantine

## Table of contents
* [Technologies](#Technologies)
* [Configuration](#Configuration)
* [Usage](#Usage)
* [Deployment](#Deployment)
* [Status](#Status)

## Analysis
### Case description
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
|F3|Add new patient|2|
|F4|Add new unit|2|
|F5|Delete patient|2|
|F6|Add role to the user, make sure only admin can delete the unit|3|
|F7|Delete unit|3|

## Technologies
* Back-end (Server):
  * Java 12
  * Spring Boot
  * Spring Security
  * JWT
  * Hibernate, Spring JPA
  * MySQL
* Front-end (Client):
  * ReactJs
  * Redux
  * Ant Design
## Configuration
### Database Configuration
In default, this project uses MySQL Server as the database. In order to use this project, the users should install MySQL Server Workbench, and then run below files respectively:
  * [create-user.sql](https://github.com/dobaokhanh/Coronavirus-Quarantine-Patients-Monitoring/blob/master/Coronavirus-Quarantine-Patients-Monitoring/src/main/resources/db/create-user.sql "create-user"): create user for the database
  * [schema.sql](https://github.com/dobaokhanh/Coronavirus-Quarantine-Patients-Monitoring/blob/master/Coronavirus-Quarantine-Patients-Monitoring/src/main/resources/db/schema.sql "schema"): create schema for the database
  * [role.sql](https://github.com/dobaokhanh/Coronavirus-Quarantine-Patients-Monitoring/blob/master/Coronavirus-Quarantine-Patients-Monitoring/src/main/resources/db/role.sql "roles"): create role values
### Working With IDE
#### Prerequisties
  * Java 12 or newer
  * git command line tool
  * Your prefered IDE
    * Eclipse 
    * STS
    * VS Code
#### Steps
  1. On the command line

`git clone https://github.com/dobaokhanh/Coronavirus-Quarantine-Patients-Monitoring`

  2. Inside Eclipse or STS

`File -> Import -> Maven -> Existing Maven Project`

  3. Run the server
  
   * Run directly in the IDE:
    
`Right click in the project -> Run as -> Maven build... -> In the goal run: exec:java `

   * Run by jar file:

`Right click in the project -> Run as -> Maven buidd... -> In the goal run: clean package install`

Open the command line. Go to the **target** directory under the project directory. Run the command: 

`java -jar Coronavirus-Quarantine-Patients-Monitoring-0.0.1-SNAPSHOT.jar`

  4. Navigate to api
  
Now the server has run. In order to see which APIs are available, go to the url: http://localhost:8080/swagger-ui.html

![picture_alt](https://github.com/dobaokhanh/Coronavirus-Quarantine-Patients-Monitoring/blob/master/public_img/APIDocument.PNG "APIs Document")

## Usage
### Sign in

```

URL in localhost: http://localhost:8080/api/auth/signin
Method: POST
Sign in Request: 

Model schema:

{
  "usernameOrEmail": "string"
  "password": "string"
}

Sign in response:

{
  "accessToken": "string",
  "tokenType": "Bearer "
}
```

### Sign up

```

URL in localhost: http://localhost:8080/api/auth/signup
Method: POST
Sign up Request:

Model schema: 

{
  "email": "string",
  "name": "string",
  "password": "string",
  "username": "string"
}

Sign up Response

{
  "success": "boolean",
  "message": "string"
}

```

### Unit
#### Add new unit
Every request work with Unit have to set the **Authorization** token in the headers.
```
URL in localhost: http://localhost:8080/api/units
Method: POST
Unit Request:

{
  "addrress": "string",
  "name": "string",
  "patients": []
}

Unit Response:

{
  "id": "string",
  "name": "string",
  "address": "string",
  "patients": []
}

```

#### Get unit by id

```
URL in localhost: http://localhost:8080/api/units/{unitId}
Method: GET
Unit Request: 

{
  "addrress": "string",
  "name": "string",
  "patients": []
}

Unit Response:

{
  "id": "string",
  "name": "string",
  "address": "string",
  "patients": []
}
```

## Deployment
Have not deployed yet!

## Status
In progress.
