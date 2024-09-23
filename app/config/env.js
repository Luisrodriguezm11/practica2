const env = {
  database: 'practica_parcial',//Database
  username: 'practica_parcial_user',//Username
  password: 'P5lTpYiXNc7pyJDKJWDrG7ky08oIRzZV',//password
  host: 'dpg-crop7se8ii6s73bf074g-a.oregon-postgres.render.com',
  dialect: 'postgres',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};

module.exports = env;