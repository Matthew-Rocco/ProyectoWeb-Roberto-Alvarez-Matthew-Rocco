const getImagenes = async() => {
    let resp = await axios.get("api/imagenes/get");
    return resp.data;
};

const buscarImagenPorIdComp = async(id) => {
    let resp = await axios.get(`api/imagenes/buscarImagenPorIdComp?id=${id}`);
    return resp.data;
};

const buscarImagenPorIdHilo = async(id) => {
    let resp = await axios.get(`api/imagenes/buscarImagenPorIdHilo?id=${id}`);
    return resp.data;
}

const crearImagen = async(imagen) => {
    let resp = await axios.post("api/imagenes/post", imagen, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
    return resp.data;
};