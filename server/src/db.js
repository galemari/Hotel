//estructura básica para ingresar a la base de datos 
const pg = require ("pg");
const {Pool} = pg;
//creo el objeto con configuracion a la db
const config = {
    host: "localhost",
    port: 5433,
    database: "reservas_hotel",
    user: "postgres",
    password: "1980gale",
};
//como conectar con mysql

const pool = new Pool(config);
module.exports = {pool};