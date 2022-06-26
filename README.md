# Patient Management API

## Requirements
- Create patient profile
- Find patient profile by id
- Find patient profile by username
- Update patient profile by id
- Update patient profile by username and number (Number will specify the nth position of the same patient starting from 1)
- Delete patient profile by id
- Delete patient profile by username and number (Number will specify the nth position of the same patient starting from 1)
- Get all patient by diagnosis (Search with anything that is written inside diagnosis string)
- Get list of all new patient (Initialized but not updated)
- Get list of all old patient (More than one visit)


## Patient: 
 - id (number)
 - username (string)
 - age (number)
 - diagnosis (string)
 - drug list (string)
 - health advice (string)
 - total visit (number)
 - last visit (date)
 - next visit time (number of month)
 - patient type (string, 'old' or 'new')


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
