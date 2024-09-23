module.exports = (sequelize, Sequelize) => {
	const Student = sequelize.define('student', {	
	  id: {
			type: Sequelize.INTEGER,
			autoIncrement: true,
			primaryKey: true
    },
	  firstName: {
			type: Sequelize.STRING
	  },
	  lastName: {
			type: Sequelize.STRING
	  },
	  idNumber: {
			type: Sequelize.STRING
    },
    copyrightby: {
      type: Sequelize.STRING,
      defaultValue: 'UMG Antigua'
    }
	});
	
	return Student;
};
