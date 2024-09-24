const db = require('../config/db.config.js');
const Nota = db.Nota;

// Crear y guardar una nueva nota
exports.create = (req, res) => {
    let nota = {};

    try {
        // Construir el objeto nota desde el cuerpo de la solicitud
        nota.id_estudiante = req.body.id_estudiante;
        nota.fecha_ingreso_mes = req.body.fecha_ingreso_mes;
        nota.id_curso = req.body.id_curso;
        nota.nota_total = req.body.nota_total;
        nota.status_curso = req.body.status_curso;

        // Guardar en la base de datos
        Nota.create(nota).then(result => {    
            res.status(200).json({
                message: "Nota creada con éxito con id = " + result.id_nota,
                nota: result,
            });
        });
    } catch (error) {
        res.status(500).json({
            message: "¡Error!",
            error: error.message
        });
    }
};

// Eliminar una nota por id
exports.delete = (req, res) => {
    const id = req.params.id;

    Nota.destroy({ where: { id_nota: id } }).then(result => {
        if (result == 1) {
            res.status(200).json({
                message: "Nota eliminada con éxito"
            });
        } else {
            res.status(404).json({
                message: `No se pudo eliminar la nota con id = ${id}. Tal vez la nota no fue encontrada.`
            });
        }
    }).catch(error => {
        res.status(500).json({
            message: "Error al eliminar la nota con id = " + id,
            error: error.message
        });
    });
};

// Actualizar una nota por id
exports.update = (req, res) => {
    const id = req.params.id;

    Nota.update(req.body, { where: { id_nota: id } }).then(result => {
        if (result == 1) {
            res.status(200).json({
                message: "Nota actualizada con éxito"
            });
        } else {
            res.status(404).json({
                message: `No se pudo actualizar la nota con id = ${id}. Tal vez la nota no fue encontrada o req.body está vacío.`
            });
        }
    }).catch(error => {
        res.status(500).json({
            message: "Error al actualizar la nota con id = " + id,
            error: error.message
        });
    });
};

// Consultar una nota por id
exports.findById = (req, res) => {
    const id = req.params.id;

    Nota.findByPk(id).then(result => {
        if (result) {
            res.status(200).json(result);
        } else {
            res.status(404).json({
                message: `No se encontró una nota con id = ${id}.`
            });
        }
    }).catch(error => {
        res.status(500).json({
            message: "Error al obtener la nota con id = " + id,
            error: error.message
        });
    });
};
