let express = require('express');
let router = express.Router();

const students = require('../controllers/student.controller.js');

router.post('/api/students/create', students.create);
router.delete('/api/students/:id', students.delete);
router.put('/api/students/:id', students.update);
router.get('/api/students/:id', students.findById);

module.exports = router;
