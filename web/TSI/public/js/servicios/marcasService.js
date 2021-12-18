const getMarcas = async() => {
    let resp;
    resp = await axios.get("api/marcas/get");
    return resp.data;
};