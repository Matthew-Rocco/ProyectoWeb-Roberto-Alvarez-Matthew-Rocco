const getCaracComp = async() => {
    let resp = await axios.get("api/caraccomp/get");
    return resp.data;
};

const buscarCaracPorIdComp = async(id) => {
    let resp = await axios.get(`api/caraccomp/buscarCaracPorIdComp?id=${id}`);
    return resp.data;
};

const crearCaracComp = async(caraccomp) => {
    let resp = await axios.post("api/caraccomp/post", caraccomp, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
    return resp.data;
};