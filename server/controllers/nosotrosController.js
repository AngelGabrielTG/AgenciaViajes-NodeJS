exports.infoNosotros = (req, res) => {
    //REQ ES LA PETICION Y RES ES LA RESPUESTA
    //SEND PARA IMPRIMIR
    //RENDER PARA QUE BUSQUE LA CARPETA
    res.render('nosotros', {
        //PASAR VARIABLES A LA VISTA
        pagina: 'Sobre Nosotros'
    });
}