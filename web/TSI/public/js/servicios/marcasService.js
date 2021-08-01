const getTiposComp = async ()=>{
    let resultado = await axios.get("api/tipocomp/get");
    return resultado.data;
}