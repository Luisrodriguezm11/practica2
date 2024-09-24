module.exports = (sequelize, Sequelize) => {
    const Curso = sequelize.define('curso', {	
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      nombreCurso: {
        type: Sequelize.STRING
      },
      horarioInicio: {
        type: Sequelize.TIME
      },
      horarioFin: {
        type: Sequelize.TIME
      },
      jornada: {
        type: Sequelize.STRING
      }
    });
    
    return Curso;
  };
  