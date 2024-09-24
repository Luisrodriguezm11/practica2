const db = require('../config/db.config.js');
const Curso = db.Curso;


exports.create = (req, res) => {
  let curso = {};

  try {
    
    curso.nombreCurso = req.body.nombreCurso;
    curso.horarioInicio = req.body.horarioInicio;
    curso.horarioFin = req.body.horarioFin;
    curso.jornada = req.body.jornada;


    Curso.create(curso).then(result => {    
      res.status(200).json({
        message: "Curso creado con éxito con id = " + result.id,
        curso: result,
      });
    });
  } catch (error) {
    res.status(500).json({
      message: "¡Error!",
      error: error.message
    });
  }
};

// Eliminar un curso por id
exports.delete = (req, res) => {
  const id = req.params.id;

  Curso.destroy({ where: { id: id } }).then(result => {
    if (result == 1) {
      res.status(200).json({
        message: "Curso eliminado con éxito"
      });
    } else {
      res.status(404).json({
        message: `No se pudo eliminar el curso con id = ${id}. Tal vez el curso no fue encontrado.`
      });
    }
  }).catch(error => {
    res.status(500).json({
      message: "Error al eliminar el curso con id = " + id,
      error: error.message
    });
  });
};

// Actualizar un curso por id
exports.update = (req, res) => {
  const id = req.params.id;

  Curso.update(req.body, { where: { id: id } }).then(result => {
    if (result == 1) {
      res.status(200).json({
        message: "Curso actualizado con éxito"
      });
    } else {
      res.status(404).json({
        message: `No se pudo actualizar el curso con id = ${id}. Tal vez el curso no fue encontrado o req.body está vacío.`
      });
    }
  }).catch(error => {
    res.status(500).json({
      message: "Error al actualizar el curso con id = " + id,
      error: error.message
    });
  });
};

// Consultar un curso por id
exports.findById = (req, res) => {
  const id = req.params.id;

  Curso.findByPk(id).then(result => {
    if (result) {
      res.status(200).json(result);
    } else {
      res.status(404).json({
        message: `No se encontró un curso con id = ${id}.`
      });
    }
  }).catch(error => {
    res.status(500).json({
      message: "Error al obtener el curso con id = " + id,
      error: error.message
    });
  });
};
