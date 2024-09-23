/*const db = require('../config/db.config.js');
const Book = db.Book;

// Crear un nuevo libro
exports.create = (req, res) => {
    let book = {};

    try {
        book.nombre = req.body.nombre;
        book.editorial = req.body.editorial;
        book.autor = req.body.autor;
        book.genero = req.body.genero;
        book.paisAutor = req.body.paisAutor;
        book.numeroPaginas = req.body.numeroPaginas;
        book.anioEdicion = req.body.anioEdicion;
        book.precio = req.body.precio;

        Book.create(book).then(result => {
            res.status(200).json({
                message: "Libro creado exitosamente con id = " + result.id,
                book: result,
            });
        });
    } catch (error) {
        res.status(500).json({
            message: "Error!",
            error: error.message
        });
    }
}

// Obtener un libro por ID
exports.getBookById = (req, res) => {
  let bookId = req.params.id;

  Book.findByPk(bookId)
      .then(book => {
          res.status(200).json({
              message: "Libro obtenido exitosamente con id = " + bookId,
              book: book
          });
      })
      .catch(error => {
        console.log(error);
        res.status(500).json({
            message: "Error!",
            error: error
        });
      });
}

// Actualizar un libro por ID
exports.updateById = async (req, res) => {
    try {
        let bookId = req.params.id;
        let book = await Book.findByPk(bookId);

        if (!book) {
            res.status(404).json({
                message: "No se encontró un libro con id = " + bookId,
                error: "404"
            });
        } else {
            let updatedBook = {
                nombre: req.body.nombre,
                editorial: req.body.editorial,
                autor: req.body.autor,
                genero: req.body.genero,
                paisAutor: req.body.paisAutor,
                numeroPaginas: req.body.numeroPaginas,
                anioEdicion: req.body.anioEdicion,
                precio: req.body.precio
            }

            let result = await Book.update(updatedBook, { returning: true, where: { id: bookId } });

            if (!result) {
                res.status(500).json({
                    message: "Error -> No se pudo actualizar el libro con id = " + req.params.id,
                    error: "No se pudo actualizar",
                });
            }

            res.status(200).json({
                message: "Libro actualizado exitosamente con id = " + bookId,
                book: updatedBook,
            });
        }
    } catch (error) {
        res.status(500).json({
            message: "Error -> No se pudo actualizar el libro con id = " + req.params.id,
            error: error.message
        });
    }
}

// Eliminar un libro por ID
exports.deleteById = async (req, res) => {
    try {
        let bookId = req.params.id;
        let book = await Book.findByPk(bookId);

        if (!book) {
            res.status(404).json({
                message: "No existe un libro con id = " + bookId,
                error: "404",
            });
        } else {
            await book.destroy();
            res.status(200).json({
                message: "Libro eliminado exitosamente con id = " + bookId,
                book: book,
            });
        }
    } catch (error) {
        res.status(500).json({
            message: "Error -> No se pudo eliminar el libro con id = " + req.params.id,
            error: error.message,
        });
    }
}
*/