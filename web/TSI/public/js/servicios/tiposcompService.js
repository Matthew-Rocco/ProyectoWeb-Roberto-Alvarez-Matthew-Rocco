const getTipoComp = async() => {
    let resp;
    resp = await axios.get("api/tiposcomp/get");
    return resp.data;
};