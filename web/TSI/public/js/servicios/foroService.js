const getHiloForos = async() => {
    let resp = await axios.get("api/hilo_foro/get");
    return resp.data;
};

const crearHiloForo = async(hilo) => {
    let resp = await axios.post("api/hilo_foro/post", hilo, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
    return resp.data;
};

const buscarHiloPorId = async(id) => {
    let resp = await axios.get(`api/hilo_foro/buscarHiloPorId?id=${id}`);
    return resp.data;
}