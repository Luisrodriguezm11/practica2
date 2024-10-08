module.exports = (sequelize, Sequelize) => {
    const Student = sequelize.define('student', {
        idEstudiante: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        nombreCompleto: {
            type: Sequelize.STRING,
            allowNull: false
        },
        tutor: {
            type: Sequelize.STRING,
            allowNull: false
        },
        fechaNacimiento: {
            type: Sequelize.DATEONLY,
            allowNull: false
        },
        genero: {
            type: Sequelize.STRING,
            allowNull: false
        },
        ultimoGradoAprobado: {
            type: Sequelize.STRING,
            allowNull: false
        }
    });

    return Student;
};
