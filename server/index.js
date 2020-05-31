//IMPORTAR EXPRESS
const express = require('express');
const routes = require('./routes');
const configs = require('./config');

//PATH VA ACCEDER A LOS FILES SYSTEM OSEA A LOS ARCHIVOS
const path = require('path');

const bodyParser = require('body-parser');

//IMPORTAR DATABASE (VIAJES)
/*const db = require('./config/database');

db.authenticate()
    .then(() => console.log('DB CONECTADO'))
    .catch(error => console.log(error));*/

//CONFIGURAR EXPRESS
const app = express();

//HABILITAR PUG
app.set('view engine', 'pug');

//AÑADIR LAS VISTAS
app.set('views', path.join(__dirname, './views'));

//CARPETA ESTATICA LLAMADA PUBLIC
app.use(express.static('public'));

//VALIDAR SI ESTAMOS EN DESARROLLO O  EN PRODUCCION
//ENV VARIABLE DE NODE PARA DETECTAR EL AMBIENTE
const config = configs[app.get('env')];

//CREAMOS LA VARIABLE PARA EL SITIO WEB
app.locals.titulo = config.nombresitio;

//MUESTRA EL AÑO ACTUAL Y GENERA LA RUTA
//NEXT ES EL MIDELWARE(PASA A LA SIGUIENTE FUNCION)
app.use((req, res, next) => {
    //CREAR UNA NUEVA FECHA
    const fecha = new Date();
    //LOCALS SON VARIABLES LOCALES, QUE EL MISMO JS VA RECONOCER
    res.locals.fechaActual = fecha.getFullYear();
    res.locals.ruta = req.path;
    return next();
})

//EJECUTAMOS EL BODY-PARSE
app.use(bodyParser.urlencoded({extended: true}));

//INDEX.JS ROUTES AHI ESTARAN LAS RUTAS
//CARGAR LAS RUTAS
app.use('/', routes());

app.listen(3000);