
const iniciarEliminacionTienda = async function(){
    let id = this.idTienda;
    let resp = await Swal.fire({title: "Esta seguro?", text:"Esta operacion es irreversible",icon:"error",showCancelButton:true});

    if(resp.isConfirmed){
        if(await eliminarTienda(id)){
            let tienda = await getTienda();
            cargarTabla(Tienda);
            Swal.fire("Tienda eliminada", "Tienda eliminada exitosamente", "info");
        }else{
            Swal.fire("Error", "No se pudo atender la solicitud", "error");
        }
    } else {
        Swal.fire("Cancelado","Cancelado a peticion del usuario", "info");
    }
};

const actualizar = async function(){
    let idTienda = this.idTienda;
    let tienda = await buscarPorId(idTienda);

    tienda.nombretienda = document.querySelector("#nombretienda-txt").value;
    tienda.descripciontienda = document.querySelector("#descripciontienda-txt").value;
    tienda.linktienda = document.querySelector("#linktienda-txt").value;

    actualizarComponente(tienda);


    let resp = await Swal.fire({title: "Actualizar Tienda", text:"Desea actualizar la Tienda?",icon:"question",showCancelButton:true});

    if(resp.isConfirmed){
        if(await actualizarComponente(componente)){
            let tienda = await getTienda(filtro);
            cargarTabla(tienda);
            Swal.fire("Tienda ACtualizada", "Tienda Actualizada exitosamente", "info");
        }else{
            Swal.fire("Error", "No se pudo atender la solicitud", "error");
        }
    } else {
        Swal.fire("Cancelado","Cancelado a peticion del usuario", "info");
    }
};

const iniciarActualizacionTienda = async function(){
    let idTienda = this.idTienda;
    let tienda = await buscarPorId(idTienda);
    document.querySelector("#nombretienda-txt").value = tienda.nombretienda;
    document.querySelector("#descripciontienda-txt").value = tienda.descripciontienda;
    document.querySelector("#linktienda-txt").value = tienda.linktienda;

    document.querySelector("#actualizartienda-btn").idTienda = idTienda;
    document.querySelector("#actualizartienda-btn").addEventListener("click", actualizar);
};


const cargarTabla = (tiendas)=>{
    let tbody = document.querySelector("#tbody-tienda");
    tbody.innerHTML = "";
    for(let i=0; i < tiendas.length; ++i){
        let tr = document.createElement("tr");

        let tdNombretienda = document.createElement("td");
        tdNombretienda.innerText = tiendas[i].nombretienda;
        let tdDescripciontienda = document.createElement("td");
        tdDescripciontienda.innerText = tiendas[i].descripciontienda;
        let tdLinktienda = document.createElement("td");
        tdLinktienda.innerText = tiendas[i].linktienda;
        let tdAccionestienda = document.createElement("td");

        let botonEliminar = document.createElement("button");
        botonEliminar.innerText = "Eliminar";
        botonEliminar.classList.add("btn","btn-danger");
        botonEliminar.idTiendas = tiendas[i].id;
        botonEliminar.addEventListener("click", iniciarEliminacionTienda)
        tdAccionestienda.appendChild(botonEliminar);

        let botonActualizar = document.createElement("button");
        botonActualizar.innerText = "Actualizar";
        botonActualizar.classList.add("btn","btn-primary");
        botonActualizar.idTienda = tiendas[i].id;
        botonActualizar.addEventListener("click", iniciarActualizacionTienda);
        tdAccionestienda.appendChild(botonActualizar);

        tr.appendChild(tdNombretienda);
        tr.appendChild(tdDescripciontienda);
        tr.appendChild(tdLinktienda);
        tr.appendChild(tdAccionestienda);

        tbody.appendChild(tr);
    }
};

document.addEventListener("DOMContentLoaded", async ()=>{
    let tiendas = await getTienda();
    cargarTabla(tiendas);
});
