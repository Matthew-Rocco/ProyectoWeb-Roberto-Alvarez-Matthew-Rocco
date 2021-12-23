const getUsers = async(filtro = "todos") => {
    let resp;
    if (filtro == "todos") {
        resp = await axios.get("api/users/get");
    } else {
        resp = await axios.get(`api/users/filtrar?filtro=${filtro}`);
    }
    return resp.data;
};

const getNombre = async(correo) => {
    let resp = await axios.get(`api/users/getNombre?correo=${correo}`);
    return resp.data;
};


const crearUsers = async(user) => {
    let resp = await axios.post("api/users/post", user, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
    return resp.data;
};

const eliminarUsers = async(id) => {
    try {
        let resp = await axios.post("api/users/delete", { id }, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return resp.data == "ok";
    } catch (e) {
        return false;
    }
};


const actualizarUsers = async(user) => {
    try {
        let resp = await axios.post("api/users/actualizar", user, {
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
    let resp = await axios.get(`api/users/buscarPorId?id=${id}`);
    return resp.data;
};