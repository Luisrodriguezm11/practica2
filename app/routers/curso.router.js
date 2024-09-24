let express = require('express');
let router = express.Router();

const cursos = require('../controllers/curso.controller.js');

router.post('/api/cursos/create', cursos.create);
router.delete('/api/cursos/:id', cursos.delete);
router.put('/api/cursos/:id', cursos.update);
router.get('/api/cursos/:id', cursos.findById);

module.exports = router;
