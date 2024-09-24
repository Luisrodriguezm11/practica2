const express = require('express');
const app = express();
var bodyParser = require('body-parser');

const db = require('./app/config/db.config.js');
db.sequelize.sync({force: true}).then(() => {
  console.log('Drop and Resync with { force: true }');
}); 


let studentRouter = require('./app/routers/student.router.js');
let cursoRouter = require('./app/routers/curso.router.js');
let notaRouter = require('./app/routers/nota.router.js');

const cors = require('cors');
const corsOptions = {
  origin: 'http://localhost:4200',
  optionsSuccessStatus: 200
}
app.use(cors(corsOptions));
app.use(bodyParser.json());


app.use('/', studentRouter);
app.use('/', cursoRouter);
app.use('/', notaRouter);

app.get("/", (req, res) => {
  res.json({ message: "Bienvenido a la API de estudiantes" });
});

const server = app.listen(8000, function () {
  let host = server.address().address;
  let port = server.address().port;
  console.log("App listening at http://%s:%s", host, port); 
});
