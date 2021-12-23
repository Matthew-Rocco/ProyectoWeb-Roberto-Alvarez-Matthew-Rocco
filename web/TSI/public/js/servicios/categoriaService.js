const getCategorias = async() => {
    let resp;
    resp = await axios.get("api/categorias/get");
    return resp.data;
};


const crearCategoriaForo = async(categoria) => {
    let resp = await axios.post("api/categoria_foro/post", categoria, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
    return resp.data;
};

const buscarCategoriaPorIdHilo = async(id) => {
    let resp = await axios.get(`api/categoria_foro/buscarCategoriaPorIdHilo?id=${id}`);
    return resp.data;
}