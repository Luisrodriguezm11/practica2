
/*
const express = require('express');
const app = express();

var bodyParser = require('body-parser');
 
const db = require('./app/config/db.config.js');
  
// force: true will drop the table if it already exists
db.sequelize.sync({force: true}).then(() => {
  console.log('Drop and Resync with { force: true }');
}); 

let router = require('./app/routers/router.js');
let employeerouter = require('./app/routers/employee.router.js');

let roomrouter = require('./app/routers/room.router.js');

let reservation = require('./app/routers/reservation.router.js');


const cors = require('cors')
const corsOptions = {
  origin: 'http://localhost:4200',
  optionsSuccessStatus: 200
}
app.use(cors(corsOptions));
app.use(bodyParser.json());


app.use('/', router);
app.use('/', employeerouter);

app.use('/', roomrouter);
app.use('/', reservation);

app.get("/",(req,res) => {
  
  res.json({mesage:"Bienvenido Estudiantes de UMG"});
})

// Create a Server
const server = app.listen(8000, function () {
 
  let host = server.address().address
  let port = server.address().port
 
  console.log("App listening at http://%s:%s", host, port); 
})

const express = require('express');
const app = express();
var bodyParser = require('body-parser');

const db = require('./app/config/db.config.js');
db.sequelize.sync({force: true}).then(() => {
  console.log('Drop and Resync with { force: true }');
}); 

let router = require('./app/routers/router.js');
let prestamoRouter = require('./app/routers/prestamo.router.js');

const cors = require('cors');
const corsOptions = {
  origin: 'http://localhost:4200',
  optionsSuccessStatus: 200
}
app.use(cors(corsOptions));
app.use(bodyParser.json());

app.use('/', router);
app.use('/', prestamoRouter);

app.get("/", (req, res) => {
  res.json({ mesage: "Bienvenido a la API de libros" });
});

const server = app.listen(8000, function () {
  let host = server.address().address;
  let port = server.address().port;
  console.log("App listening at http://%s:%s", host, port); 
});*/

const express = require('express');
const app = express();
var bodyParser = require('body-parser');

const db = require('./app/config/db.config.js');
db.sequelize.sync({force: true}).then(() => {
  console.log('Drop and Resync with { force: true }');
}); 

//let router = require('./app/routers/router.js');
//let prestamoRouter = require('./app/routers/prestamo.router.js');
let studentRouter = require('./app/routers/student.router.js');

const cors = require('cors');
const corsOptions = {
  origin: 'http://localhost:4200',
  optionsSuccessStatus: 200
}
app.use(cors(corsOptions));
app.use(bodyParser.json());

//app.use('/', router);
//app.use('/', prestamoRouter);
app.use('/', studentRouter);

app.get("/", (req, res) => {
  res.json({ message: "Bienvenido a la API de estudiantes" });
});

const server = app.listen(8000, function () {
  let host = server.address().address;
  let port = server.address().port;
  console.log("App listening at http://%s:%s", host, port); 
});
