const getCaracteristicas = async() => {
    let resp = await axios.get("api/caracteristicas/get");
    return resp.data;
};