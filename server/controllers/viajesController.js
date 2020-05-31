//IMPORTAMOS MODELOS
const Viaje = require('../models/Viajes');

/*exports.infoViajes = (req, res) => {
    Viaje.findAll()
        .then(viajes => res.render('viajes', {
            pagina: 'Proximos Viajes',
            viajes
        }))
        .catch(error => console.log(error))
}*/

//UTILIZANDO ASYNC / AWAIT
exports.infoViajes = async (req, res) => {
    const viajes = await Viaje.findAll()
        res.render('viajes', {
            pagina: 'Proximos Viajes',
            viajes
        });
}

exports.infoViaje = async (req, res) => {
    const viaje = await Viaje.findByPk(req.params.id)
        res.render('viaje', {
            viaje
        })
}