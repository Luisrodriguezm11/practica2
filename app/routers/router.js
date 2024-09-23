/*
let express = require('express');
let router = express.Router();
 
const customers = require('../controllers/controller.js');

router.post('/api/customers/create', customers.create);
router.get('/api/customers/all', customers.retrieveAllCustomers);
router.get('/api/customers/onebyid/:id', customers.getCustomerById);
router.get('/api/customers/filteringbyage', customers.filteringByAge);
router.get('/api/customers/pagination', customers.pagination);
router.get('/api/customers/pagefiltersort', customers.pagingfilteringsorting);
router.put('/api/customers/update/:id', customers.updateById);
router.delete('/api/customers/delete/:id', customers.deleteById);

module.exports = router;

let express = require('express');
let router = express.Router();
 
const books = require('../controllers/book.controller.js');

router.post('/api/books/create', books.create);
router.get('/api/books/:id', books.getBookById);
router.put('/api/books/update/:id', books.updateById);
router.delete('/api/books/delete/:id', books.deleteById);

module.exports = router;
*/