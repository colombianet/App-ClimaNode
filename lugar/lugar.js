const axios = require('axios');

const getLugarLatLng = async(dir) => {

    const encodedURL = encodeURI(dir);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedURL}`,
        headers: { 'X-RapidAPI-Key': '0372db1c27mshfae7af0e6b04509p1eec64jsn279bfebe2fbf' }
    });

    const coordenadas = await instance.get()

    if (coordenadas.data.Results.length === 0) {
        throw new Error(`No hay resultados para ${ dir }`);
    }

    const resp = coordenadas.data.Results[0];

    const direccion = resp.name;
    const lat = resp.lat;
    const lng = resp.lon;

    return {
        direccion,
        lat,
        lng
    };
}

module.exports = {
    getLugarLatLng
}