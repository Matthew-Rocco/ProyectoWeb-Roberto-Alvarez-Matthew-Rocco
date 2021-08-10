const crearLista = async (lista)=>{
    let resp = await axios.post("api/listas/post", lista, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
    return resp.data;
};

const getListas = async ()=>{
    let resp = await axios.get("api/listas/get");
    return resp.data;
};


const eliminarListas = async (id)=>{
    try{
        let resp = await axios.post("api/listas/delete", {id}, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return resp.data == "ok";
    }catch(e){
        return false;
    }
};

const buscarListaPorId = async (id)=>{
    let resp = await axios.get(`api/listas/buscarListaPorId?id=${id}`);
    return resp.data;
}

const actualizarLista = async (lista)=>{
    try{
        let resp = await axios.post("api/listas/actualizar", lista, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return resp.data;
    }catch(e){
        return false;
    }
};

