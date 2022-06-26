const Patient = require('../models/Patient');

class MyDB {
  constructor() {
    this.patients = [];
  }

  /**
   * Create new patient
   * @param {string} username
   * @param {number} age
   * @returns {Patient}
   */
  create(username, age) {
    const patient = new Patient(username, age);
    this.patients.push(patient);
    return patient;
  }

  /**
   * Get array of all patients
   * @returns {Array<Patient>}
   */
  find() {
    return this.patients;
  }

  /**
   * Get array of all new patients
   * @returns {Array<Patient>}
   */
  findNewPatients() {
    return this.patients.filter((patient) => patient.patientType === 'new');
  }

  /**
   * Get array of all old patients
   * @returns {Array<Patient>}
   */
  findOldPatients() {
    return this.patients.filter((patient) => patient.patientType === 'old');
  }

  /**
   * Get patients according to diagnosis
   * @param {string} diagnosis
   * @returns {Array<Patient>}
   */
  getPatientsOfDiagnosis(diagnosis) {
    return this.patients.filter((patient) =>
      patient.diagnosis.includes(diagnosis)
    );
  }

  /**
   * Get patient by id
   * @param {number} id
   * @returns {Patient}
   */
  findById(id) {
    return this.patients.find(
      /**
       * @param {Patient} patient
       * @returns {Patient}
       */
      (patient) => patient.id === id
    );
  }

  /**
   * Get patient by username
   * @param {string} username
   * @returns {Array<Patient>}
   */
  findByUsername(username) {
    return this.patients.filter(
      /**
       * @param {Patient} patient
       * @returns {Patient}
       */
      (patient) => patient.username === username
    );
  }

  /**
   * Update patient by id
   * @param {number} id
   * @param {{id: number, username: string, age: number, diagnosis: string, drugList: string, healthAdvice: string, totalVisit:number, lastVisit: Date, nextVisitTime: number, patientType: string}} patientBody
   * @returns {Patient}
   */
  updateById(id, patientBody) {
    const patient = this.findById(id);

    patient.username = patientBody.username ?? patient.username;
    patient.age = patientBody.age ?? patient.age;
    patient.diagnosis = patientBody.diagnosis ?? patient.diagnosis;
    patient.drugList = patientBody.drugList ?? patient.drugList;
    patient.healthAdvice = patientBody.healthAdvice ?? patient.healthAdvice;
    patient.totalVisit = patientBody.totalVisit ?? patient.totalVisit + 1;
    patient.lastVisit = new Date();
    patient.nextVisitTime = patientBody.nextVisitTime ?? patient.nextVisitTime;
    patient.patientType = 'old';

    return patient;
  }

  /**
   * Update patients by username
   * @param {string} username
   * @param {{id: number, username: string, age: number, diagnosis: string, drugList: string, healthAdvice: string, totalVisit:number, lastVisit: Date, nextVisitAfter: number, patientType: string}} patientBody
   * @param {number} updateNum start from 1
   * @returns {Array<Patient>}
   */
  updateByUsername(username, updateNum, patientBody) {
    let updatedPatients = [];
    let userCount = 0;

    let patient = this.patients.find((aPatient) => {
      if (aPatient.username === username) {
        userCount++;
        // updateNum is detected as string value
        if (updateNum == userCount) return aPatient;
      }
    });

    patient.id = patientBody.id ?? patient.id;
    patient.username = patientBody.username ?? patient.username;
    patient.age = patientBody.age ?? patient.age;
    patient.diagnosis = patientBody.diagnosis ?? patient.diagnosis;
    patient.drugList = patientBody.drugList ?? patient.drugList;
    patient.healthAdvice = patientBody.healthAdvice ?? patient.healthAdvice;
    patient.totalVisit = patientBody.totalVisit ?? patient.totalVisit + 1;
    patient.lastVisit = new Date();
    patient.nextVisitAfter =
      patientBody.nextVisitAfter ?? patient.nextVisitAfter + 3;
    patient.patientType = 'old';

    updatedPatients.push(patient);
    return updatedPatients;
  }

  /**
   * Delete patient by id
   * @param {number} id
   * @returns {boolean}
   */
  deleteById(id) {
    const index = this.patients.findIndex((patient) => patient.id === id);

    if (index !== -1) {
      this.patients.splice(index, 1);
      return true;
    } else return false;
  }

  /**
   * Delete patient by username
   * @param {string} username
   * @param {number} deleteNum
   * @returns {boolean}
   */
  deleteByUsername(username, deleteNum) {
    let index = 0;
    let userCount = 0;
    let bool = false;

    while (index < this.patients.length) {
      if (this.patients[index].username !== username) {
        index++;
        continue;
      }
      userCount++;

      console.log(typeof userCount);
      console.log(typeof deleteNum);
      console.log(deleteNum == userCount);
      console.log();

      if (!deleteNum) {
        this.patients.splice(index, 1);
        bool = true;
      } else {
        // deleteNum is detected as string
        if (deleteNum == userCount) {
          this.patients.splice(index, 1);
          return true;
        }
        index++;
      }
    }
    return bool;
  }
}

const myDB = new MyDB();
module.exports = myDB;
