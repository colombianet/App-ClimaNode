const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');
const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        demand: true,
        descripcion: 'Lugar de donde se desea obtener el clima'
    }
}).argv;


const getData = async(direccion) => {

    try {

        const coordenadas = await lugar.getLugarLatLng(direccion);
        const temperatura = await clima.getClima(coordenadas.lat, coordenadas.lng);
        return `El clima de ${coordenadas.direccion} es ${temperatura}`;

    } catch (error) {
        return `No se pudo determinar el clima de ${direccion}`;
    }

}

getData(argv.direccion)
    .then(console.log)
    .catch(console.log);