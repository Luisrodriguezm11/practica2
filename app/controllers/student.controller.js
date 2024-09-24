const db = require('../config/db.config.js');
const Student = db.Student;

// Crear y guardar un nuevo estudiante
exports.create = (req, res) => {
    let student = {};

    try {
        // Construir el objeto estudiante desde el cuerpo de la solicitud
        student.nombreCompleto = req.body.nombreCompleto;
        student.tutor = req.body.tutor;
        student.fechaNacimiento = req.body.fechaNacimiento;
        student.genero = req.body.genero;
        student.ultimoGradoAprobado = req.body.ultimoGradoAprobado;

        // Guardar en la base de datos
        Student.create(student).then(result => {    
            res.status(200).json({
                message: "Estudiante creado con éxito con id = " + result.idEstudiante,
                student: result,
            });
        });
    } catch (error) {
        res.status(500).json({
            message: "¡Error!",
            error: error.message
        });
    }
};

// Eliminar un estudiante por id
exports.delete = (req, res) => {
    const id = req.params.id;

    Student.destroy({ where: { idEstudiante: id } }).then(result => {
        if (result == 1) {
            res.status(200).json({
                message: "Estudiante eliminado con éxito"
            });
        } else {
            res.status(404).json({
                message: `No se pudo eliminar el estudiante con id = ${id}. Tal vez el estudiante no fue encontrado.`
            });
        }
    }).catch(error => {
        res.status(500).json({
            message: "Error al eliminar el estudiante con id = " + id,
            error: error.message
        });
    });
};

// Actualizar un estudiante por id
exports.update = (req, res) => {
    const id = req.params.id;

    Student.update(req.body, { where: { idEstudiante: id } }).then(result => {
        if (result == 1) {
            res.status(200).json({
                message: "Estudiante actualizado con éxito"
            });
        } else {
            res.status(404).json({
                message: `No se pudo actualizar el estudiante con id = ${id}. Tal vez el estudiante no fue encontrado o req.body está vacío.`
            });
        }
    }).catch(error => {
        res.status(500).json({
            message: "Error al actualizar el estudiante con id = " + id,
            error: error.message
        });
    });
};

// Consultar un estudiante por id
exports.findById = (req, res) => {
    const id = req.params.id;

    Student.findByPk(id).then(result => {
        if (result) {
            res.status(200).json(result);
        } else {
            res.status(404).json({
                message: `No se encontró un estudiante con id = ${id}.`
            });
        }
    }).catch(error => {
        res.status(500).json({
            message: "Error al obtener el estudiante con id = " + id,
            error: error.message
        });
    });
};
