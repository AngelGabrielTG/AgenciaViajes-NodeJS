//IMPORTAMOS EXPRESS PARA TENER ACCESO A SUS METODOS
const express = require('express');
const router = express.Router();

//IMPORTAMOS CONTROLLERS
const nostrosC = require('../controllers/nosotrosController');
const homeC = require('../controllers/homeController');
const viajeC = require('../controllers/viajesController');
const testimoniC = require('../controllers/testimonController');

module.exports = function() {
    //USE RESPONDE A TODOS LOS VERBOS DE HTTP (PUT, DELETE, POST)
    //GET SOLO RESPONDE A GET
    router.get('/', homeC.consultasHomePage);
    router.get('/nosotros', nostrosC.infoNosotros);
    router.get('/viajes', viajeC.infoViajes);
    router.get('/viajes/:id', viajeC.infoViaje);
    router.get('/testimoniales', testimoniC.infoTestimonio);
    router.post('/testimoniales', testimoniC.formTestimonio)

    /*
    router.get('/nosotros', (req, res) => {
        //REQ ES LA PETICION Y RES ES LA RESPUESTA
        //SEND PARA IMPRIMIR
        //RENDER PARA QUE BUSQUE LA CARPETA
        res.render('nosotros', {
            //PASAR VARIABLES A LA VISTA
            pagina: 'Sobre Nosotros'
        });
    });*/
    
    return router;
}