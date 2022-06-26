# Patient Management API

- create patient profile
- find patient profile by id
- find patient profile by username
- update patient profile by id
- update patient profile by username
- delete patient profile by id
- delete patient profile by username
- get all patient by diagnosis
- get list of all new patient (only one visit)
- get list of all old patient (more than one visit)


## Patient: 
 - id
 - username
 - age
 - diagnosis
 - drug list
 - health advice
 - total visit
 - last visit
 - next visit time
 - patient type


## Routes: 
 - /patients/un/:username/:num - PATCH - update patients by username and number
 - /patients/un/:username/:num - DELETE - delete patients by username and number
 - /patients/un/:username - DELETE - delete patients by username
 - /patients/un/:username - GET - get patients by username

 - /patients/id/:patientId - GET - get patient by id
 - /patients/id/:patientId - PATCH - update patient by id
 - /patients/id/:patientId - DELETE - delete patient by id

 - /patients/d/:diagnosis - GET - get all patient via diagnosis
 - /patients/oldPatients - GET - find all old patients
 - /patients/newPatients - GET - find all new patients
 - /patients/new - POST - create new patient
 - /patients - GET - find all patient