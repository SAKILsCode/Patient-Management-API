const db = require('../db/db')

const patient1 = db.create('SAKIL', 23)
// const patient2 = db.create('SAKIL', 23)
// const patient3 = db.create('SAKIL', 23)

// const updatedPatients = db.updateByUsername('SAKIL', 	{
//   "username": "SAKIL",
//   "age": 23,
//   "diagnosis": "arthitis, fever",
//   "drugList": "napa, salphasalazine",
//   "healthAdvice": "regular exercise",
//   "lastVisit": "2022-06-26T03:47:56.007Z",
//   "nextVisitTime": 3
// }, 3)

const isDeleted = db.deleteByUsername('SAKIL', 2)

// const isDeleted2 = db.deleteByUsername('SAKIL')

// console.log(updatedPatients);
console.log(isDeleted);
// console.log(isDeleted2);

console.log(patient1);
// console.log(patient2);
// console.log(patient3);