//IMPORTAMOS MODELOS
const Testimonial = require('../models/Testimoniales');

exports.infoTestimonio = async (req, res) => {
    const testimoniales = await Testimonial.findAll()
        res.render('testimoniales', {
            pagina: 'Testimoniales',
            testimoniales
        })
}

exports.formTestimonio = async (req, res) => {
    //VALIDAR QUE TODOS LOS CAMPOS ESTEN LLENOS
    let {nombre, correo, mensaje} = req.body;

    let errores = [];
    if(!nombre) {
        errores.push({'mensaje' : 'Agrega tu Nombre'})
    } if(!correo) {
        errores.push({'mensaje' : 'Agrega tu Correo'})
    } if(!mensaje) {
        errores.push({'mensaje' : 'Agrega tu Mensaje'})
    }

    //REVISAR LOS ERRORES
    if(errores.length > 0 ) {
        //MUESTRA LA VISTA CON ERRORES
        const testimoniales= await Testimonial.findAll()
            res.render('testimoniales', {
                pagina: 'Testimoniales',
                testimoniales,
                errores,
                nombre,
                correo,
                mensaje
            })
    } else {
        //ALMACENARLO EN LA BD
        Testimonial.create({
            nombre,
            correo,
            mensaje
        }).then(testimonial => res.redirect('/testimoniales'))
            .catch(error => console.log(error));
    }
}


/*exports.formTestimonio = (req, res) => {
    //VALIDAR QUE TODOS LOS CAMPOS ESTEN LLENOS
    let {nombre, correo, mensaje} = req.body;

    let errores = [];
    if(!nombre) {
        errores.push({'mensaje' : 'Agrega tu Nombre'})
    } if(!correo) {
        errores.push({'mensaje' : 'Agrega tu Correo'})
    } if(!mensaje) {
        errores.push({'mensaje' : 'Agrega tu Mensaje'})
    }

    //REVISAR LOS ERRORES
    if(errores.length > 0 ) {
        //MUESTRA LA VISTA CON ERRORES
        Testimonial.findAll()
            .then(testimoniales => 
                res.render('testimoniales', {
                    pagina: 'Testimoniales',
                    testimoniales,
                    errores,
                    nombre,
                    correo,
                    mensaje
                })
            )
            .catch(error => console.log(error));
    } else {
        //ALMACENARLO EN LA BD
        Testimonial.create({
            nombre,
            correo,
            mensaje
        }).then(testimonial => res.redirect('/testimoniales'))
            .catch(error => console.log(error));
    }
}*/