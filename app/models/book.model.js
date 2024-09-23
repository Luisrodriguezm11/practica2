module.exports = (sequelize, Sequelize) => {
    const Book = sequelize.define('book', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      nombre: {
        type: Sequelize.STRING
      },
      editorial: {
        type: Sequelize.STRING
      },
      autor: {
        type: Sequelize.STRING
      },
      genero: {
        type: Sequelize.STRING
      },
      paisAutor: {
        type: Sequelize.STRING
      },
      numeroPaginas: {
        type: Sequelize.INTEGER
      },
      anioEdicion: {
        type: Sequelize.DATE
      },
      precio: {
        type: Sequelize.DECIMAL(10, 2)
      }
    });
  
    return Book;
  }
  