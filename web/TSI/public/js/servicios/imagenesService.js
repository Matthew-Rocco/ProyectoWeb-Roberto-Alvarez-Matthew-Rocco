const getImagenes = async() => {
    let resp = await axios.get("api/imagenes/get");
    return resp.data;
};

const crearImagen = async(imagen) => {
    let resp = await axios.post("api/imagenes/post", imagen, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
    return resp.data;
};