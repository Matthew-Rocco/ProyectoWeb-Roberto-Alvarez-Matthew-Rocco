const getTienda = async (filtro ="todos")=>{
    let resp;
    if(filtro=="todos"){
        resp = await axios.get("api/tienda/get");
    }
    return resp.data;
};

const crearTienda = async (tienda)=>{
    let resp = await axios.post("api/tienda/post", tienda, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
    return resp.data;
};

const eliminarTienda = async (id)=>{
    try{
        let resp = await axios.post("api/tienda/delete", {id}, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return resp.data == "ok";
    }catch(e){
        return false;
    }
};


const actualizarTienda = async (tienda)=>{
    try{
        let resp = await axios.post("api/tienda/actualizar", tienda, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return resp.data;
    }catch(e){
        return false;
    }
};