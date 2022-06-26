const shortid = require('shortid');

class Patient {
  /**
   * @param {string} username 
   * @param {number} age 
   * @param {string} diagnosis 
   * @param {Array<string>} drugList 
   * @param {string} healthAdvice 
   * @param {number} totalVisit 
   * @param {date} lastVisit 
   * @param {date} nextVisitTime 
   * @param {number} patientType 
   */
  constructor(username, age) {
    this.id = shortid.generate();
    this.username = username;
    this.age = age;
    this.diagnosis = '';
    this.drugList = [];
    this.healthAdvice = '';
    this.totalVisit = 1;
    this.lastVisit = new Date();
    this.nextVisitAfter = 3;
    this.patientType = 'new';
  }
}

module.exports = Patient;
