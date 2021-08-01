const cargarTiposComp = async ()=>{
    let filtroCbx = document.querySelector("#filtro-cbx");

    let tipos = await getTiposComp();
    tipos.forEach(t=>{
        let option = document.createElement("option");
        option.innerText = t;
        option.value = t;
        filtroCbx.appendChild(option);
    });
};

const iniciarEliminacion = async function(){
    let id = this.idComponente;
    let resp = await Swal.fire({title: "Esta seguro?", text:"Esta operacion es irreversible",icon:"error",showCancelButton:true});

    if(resp.isConfirmed){
        if(await eliminarComponentes(id)){
            let componentes = await getComponentes();
            cargarTabla(componentes);
            Swal.fire("Componente eliminado", "Componente eliminado exitosamente", "info");
        }else{
            Swal.fire("Error", "No se pudo atender la solicitud", "error");
        }
    } else {
        Swal.fire("Cancelado","Cancelado a peticion del usuario", "info");
    }
};

const iniciarActualizacion = async function(){
    window.location.href = "actualizar_componente";
}


const cargarTabla = (componentes)=>{
    let tbody = document.querySelector("#tbody-componente");
    tbody.innerHTML = "";
    for(let i=0; i < componentes.length; ++i){
        let tr = document.createElement("tr");

        let tdNombre = document.createElement("td");
        tdNombre.innerText = componentes[i].nombre;
        let tdTipoComp = document.createElement("td");
        tdTipoComp.innerText = componentes[i].tipocomp;
        let tdPrecio = document.createElement("td");
        tdPrecio.innerText = componentes[i].precio;
        let tdDescripcion = document.createElement("td");
        tdDescripcion.innerText = componentes[i].descripcion;
        let tdLink = document.createElement("td");
        tdLink.innerText = componentes[i].linkcomp;
        let tdAcciones = document.createElement("td");

        let botonEliminar = document.createElement("button");
        botonEliminar.innerText = "Eliminar";
        botonEliminar.classList.add("btn","btn-danger");
        botonEliminar.idComponente = componentes[i].id;
        botonEliminar.addEventListener("click", iniciarEliminacion)
        tdAcciones.appendChild(botonEliminar);

        let botonActualizar = document.createElement("button");
        botonActualizar.innerText = "Actualizar";
        botonActualizar.classList.add("btn","btn-primary");
        botonActualizar.idComponente = componentes[i].id;
        botonActualizar.addEventListener("click", iniciarActualizacion);
        tdAcciones.appendChild(botonActualizar);

        tr.appendChild(tdNombre);
        tr.appendChild(tdTipoComp);
        tr.appendChild(tdPrecio);
        tr.appendChild(tdDescripcion);
        tr.appendChild(tdLink);
        tr.appendChild(tdAcciones);

        tbody.appendChild(tr);
    }
};

document.addEventListener("change", async ()=>{
    let filtro = document.querySelector("#filtro-cbx").value;
    let componentes = await getComponentes(filtro);
    cargarTabla(componentes);
});

document.addEventListener("DOMContentLoaded", async ()=>{
    await cargarTiposComp();
    let componentes = await getComponentes();
    cargarTabla(componentes);
});