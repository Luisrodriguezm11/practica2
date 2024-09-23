let express = require('express');
let router = express.Router();
 
const students = require('../controllers/student.controller.js');

router.post('/api/students/create', students.create);

module.exports = router;
