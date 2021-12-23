const crearCompTienda = async(comptienda) => {
    let resp = await axios.post("api/comp_tienda/post", comptienda, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
    return resp.data;
};

const getCompTienda = async() => {
    let resp = await axios.get("api/comp_tienda/get");
    return resp.data;
};

const buscarCompTiendaPorIdComp = async(id) => {
    let resp = await axios.get(`api/comp_tienda/buscarCompTiendaPorIdComp?id=${id}`);
    return resp.data;
};