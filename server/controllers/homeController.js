//IMPORTAMOS MODELOS
const Viaje = require('../models/Viajes');
const Testimonial = require('../models/Testimoniales');

exports.consultasHomePage = async (req, res) => {
    const viajes = await Viaje.findAll({ limit: 3 });
    const testimoniales = await Testimonial.findAll({limit: 3 })

    res.render('index', {
        pagina: 'Proximos Viajes',
        clase: 'home',
        viajes,
        testimoniales
    })
}

/*
exports.consultasHomePage = (req, res) => {
    //ARREGLO DE PROMISES
    const promises = [];
    //POSICION 0
    promises.push(Viaje.findAll({
        limit: 3
    }))
    //POSICION 1
    promises.push(Testimonial.findAll({
        limit: 3
    }))

    //PASAR EL PROMISE Y EJECUTARLO
    const resultado = Promise.all(promises);

    //REQ ES LA PETICION Y RES ES LA RESPUESTA
    //SEND PARA IMPRIMIR
    //RENDER PARA QUE BUSQUE LA CARPETA
    resultado.then(resultado => res.render('index', {
        pagina: 'Proximos Viajes',
        clase: 'home',
        viajes : resultado[0],
        testimoniales : resultado[1]
    }))
    .catch(error => console.log(error))
}*/