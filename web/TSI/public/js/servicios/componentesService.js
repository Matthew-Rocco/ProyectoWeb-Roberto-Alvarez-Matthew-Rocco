const getComponentes = async(filtro = "todos") => {
    let resp;
    if (filtro == "todos") {
        resp = await axios.get("api/componentes/get");
    } else {
        resp = await axios.get(`api/componentes/filtrar?filtro=${filtro}`);
    }
    return resp.data;
};

const getComponentesMarcas = async(filtro = "todos") => {
    let resp;
    if (filtro == "todos") {
        resp = await axios.get("api/componentes/get");
    } else {
        resp = await axios.get(`api/componentes/filtrarmarcas?filtro=${filtro}`);
    }
    return resp.data;
};

const crearComponentes = async(componente) => {
    let resp = await axios.post("api/componentes/post", componente, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
    return resp.data;
};

const eliminarComponentes = async(id) => {
    try {
        let resp = await axios.post("api/componentes/delete", { id }, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return resp.data == "ok";
    } catch (e) {
        return false;
    }
};


const actualizarComponente = async(componente) => {
    try {
        let resp = await axios.post("api/componentes/actualizar", componente, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return resp.data;
    } catch (e) {
        return false;
    }
};

const buscarPorId = async(id) => {
    let resp = await axios.get(`api/componentes/buscarPorId?id=${id}`);
    return resp.data;
};