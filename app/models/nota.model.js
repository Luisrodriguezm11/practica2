module.exports = (sequelize, Sequelize) => {
    const Nota = sequelize.define('nota', {
        id_nota: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        id_estudiante: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        fecha_ingreso_mes: {
            type: Sequelize.DATEONLY,
            allowNull: false
        },
        id_curso: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        nota_total: {
            type: Sequelize.FLOAT,
            allowNull: false
        },
        status_curso: {
            type: Sequelize.STRING,
            allowNull: false
        }
    });

    return Nota;
};
