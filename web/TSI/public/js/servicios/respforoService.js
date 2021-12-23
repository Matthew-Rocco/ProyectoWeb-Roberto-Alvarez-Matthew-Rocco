const crearRespForo = async(hilo) => {
    let resp = await axios.post("api/resp_foro/post", hilo, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
    return resp.data;
};

const buscarRespForoPorIdHilo = async(id) => {
    let resp = await axios.get(`api/resp_foro/buscarRespForoPorIdHilo?id=${id}`);
    return resp.data;
}

const eliminarRespuesta = async(id) => {
    try {
        let resp = await axios.post("api/resp_foro/delete", { id }, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return resp.data == "ok";
    } catch (e) {
        return false;
    }
};