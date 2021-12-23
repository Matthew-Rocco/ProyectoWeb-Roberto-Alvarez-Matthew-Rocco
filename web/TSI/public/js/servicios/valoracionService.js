const crearValoracion = async(valoracion) => {
    let resp = await axios.post("api/valoracion/post", valoracion, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
    return resp.data;
};

const buscarValoracionPorIdComp = async(id) => {
    let resp = await axios.get(`api/valoracion/buscarValoracionPorIdComp?id=${id}`);
    return resp.data;
};