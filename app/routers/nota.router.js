let express = require('express');
let router = express.Router();

const notas = require('../controllers/nota.controller.js');

router.post('/api/notas/create', notas.create);
router.delete('/api/notas/:id', notas.delete);
router.put('/api/notas/:id', notas.update);
router.get('/api/notas/:id', notas.findById);

module.exports = router;
