const router = require('express').Router();
const db = require('../db/db');

// Operations by Username
// Update patients by username and number
router.patch('/un/:username/:num', (req, res) => {
  const username = req.params.username;
  const updateNum = req.params.num;
  const updatedPatients = db.updateByUsername(username, updateNum, req.body);
  res.status(200).json({ message: 'Updated successfully', updatedPatients });
});

// Delete a patient by username and number
router.delete('/un/:username/:num', (req, res) => {
  const username = req.params.username;
  const deleteNum = req.params.num;
  const isDeleted = db.deleteByUsername(username, deleteNum);
  // res.status(203).send()
  res.status(203).json({ isDeleted: isDeleted });
});

// Delete all patients by username
router.delete('/un/:username', (req, res) => {
  const username = req.params.username;
  const isDeleted = db.deleteByUsername(username);
  // res.status(203).send()
  res.status(203).json({ isDeleted: isDeleted });
});

// Get patients by username
router.get('/un/:username', (req, res) => {
  const username = req.params.username;
  const patients = db.findByUsername(username);
  res.status(200).json(patients);
});

// Operations by ID
// Get patient by id
router.get('/id/:patientId', (req, res) => {
  const patientId = req.params.patientId;
  const patient = db.findById(patientId);
  res.status(200).json(patient);
});

// Update patient by id
router.patch('/id/:patientId', (req, res) => {
  const patientId = req.params.patientId;
  const patient = db.updateById(patientId, req.body);
  res.status(200).json({ message: 'Updated successfully', patient });
});

// Delete patient by id
router.delete('/id/:patientId', (req, res) => {
  const patientId = req.params.patientId;
  const isDeleted = db.deleteById(patientId);
  // res.status(203).send()
  res.status(203).json({ isDeleted: isDeleted });
});

// Direct operations
// Get patients by diagnosis
router.get('/d/:diagnosis', (req, res) => {
  const diagnosis = req.params.diagnosis;
  const patients = db.getPatientsOfDiagnosis(diagnosis);
  res.status(200).json(patients);
});

// Get all old patients
router.get('/oldPatients', (_req, res) => {
  const patients = db.findOldPatients();
  res.status(200).json(patients);
});

// Get all new patients
router.get('/newPatients', (_req, res) => {
  const patients = db.findNewPatients();
  res.status(200).json(patients);
});

// create new patient
router.post('/new', (req, res) => {
  const { username, age } = req.body;
  const patient = db.create(username, age);

  res.status(201).json({ message: 'Patient created successfully', patient });
});

// Get all patients
router.get('', (_req, res) => {
  const patient = db.find();
  res.status(200).json(patient);
});

module.exports = router;
