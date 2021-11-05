const cargarTiposComp = async(select) => {
    let filtroCbx = select;

    let tipos = await getTiposComp();
    tipos.forEach(t => {
        let option = document.createElement("option");
        option.innerText = t;
        option.value = t;
        filtroCbx.appendChild(option);
    });
};

const iniciarEliminacion = async function() {
    let id = this.idComponente;
    let resp = await Swal.fire({ title: "Esta seguro?", text: "Esta operacion es irreversible", icon: "error", showCancelButton: true });

    if (resp.isConfirmed) {
        if (await eliminarComponentes(id)) {
            let componentes = await getComponentes();
            cargarTabla(componentes);
            Swal.fire("Componente eliminado", "Componente eliminado exitosamente", "info");
        } else {
            Swal.fire("Error", "No se pudo atender la solicitud", "error");
        }
    } else {
        Swal.fire("Cancelado", "Cancelado a peticion del usuario", "info");
    }
};

const actualizar = async function() {

    let nombre = document.querySelector("#nombre-txt").value.trim();
    let precio = document.querySelector("#precio-txt").value.trim();
    let descripcion = document.querySelector("#descripcion-txt").value.trim();
    let linkcomp = document.querySelector("#link-txt").value.trim();

    let errores = [];
    if (nombre === "") {
        errores.push("Debe ingresar un nombre");
    }
    if (precio === "") {
        errores.push("Debe ingresar un precio");
    } else if (isNaN(precio)) {
        errores.push("El precio debe ser numerico");
    } else if (+precio < 0) {
        errores.push("El precio no debe ser negativo");
    }
    if (descripcion === "") {
        errores.push("Debe ingresar una descripción");
    }
    if (linkcomp === "") {
        errores.push("Debe ingresar un link");
    }

    if (errores.length == 0) {
        let idComponente = this.idComponente;
        let componente = await buscarPorId(idComponente);

        componente.tipocomp = document.querySelector("#tipo-actualizar").value;
        componente.nombre = document.querySelector("#nombre-txt").value;
        componente.precio = +document.querySelector("#precio-txt").value;
        componente.descripcion = document.querySelector("#descripcion-txt").value;
        componente.linkcomp = document.querySelector("#link-txt").value;

        let resp = await Swal.fire({ title: "Actualizar Componente", text: "Desea actualizar el componente?", icon: "question", showCancelButton: true });

        if (resp.isConfirmed) {
            if (await actualizarComponente(componente)) {
                actualizarComponente(componente);
                let filtro = document.querySelector("#filtro-cbx").value;
                let componentes = await getComponentes(filtro);
                cargarTabla(componentes);
                Swal.fire("Componente actualizado", "Componente actualizado exitosamente", "info");
            } else {
                Swal.fire("Error", "No se pudo atender la solicitud", "error");
            }
        } else {
            Swal.fire("Cancelado", "Cancelado a peticion del usuario", "info");
        }
    } else {
        Swal.fire({
            title: "Errores de validacion",
            icon: "warning",
            html: errores.join("<br />")
        });
    }




};

const iniciarActualizacion = async function() {
    //document.location.href='http://localhost:8084/TSI/public/actualizar_componente';
    let idComponente = this.idComponente;
    let componente = await buscarPorId(idComponente);
    document.querySelector("#tipo-actualizar").value = componente.tipocomp;
    document.querySelector("#nombre-txt").value = componente.nombre;
    document.querySelector("#precio-txt").value = componente.precio;
    document.querySelector("#descripcion-txt").value = componente.descripcion;
    document.querySelector("#link-txt").value = componente.linkcomp;

    document.querySelector("#actualizar-btn").idComponente = idComponente;
    document.querySelector("#actualizar-btn").addEventListener("click", actualizar);
};


const cargarTabla = (componentes) => {
    let tbody = document.querySelector("#tbody-componente");
    tbody.innerHTML = "";
    for (let i = 0; i < componentes.length; ++i) {
        let tr = document.createElement("tr");

        let tdNombre = document.createElement("td");
        tdNombre.innerText = componentes[i].nombre;
        let tdTipoComp = document.createElement("td");
        tdTipoComp.innerText = componentes[i].tipocomp;
        let tdValoracion = document.createElement("td");
        tdValoracion.innerText = componentes[i].valoracion;
        let tdDescripcion = document.createElement("td");
        tdDescripcion.innerText = componentes[i].descripcion;

        let tdImagen = document.createElement("td");
        let imgImagen = document.createElement("img");
        imgImagen.setAttribute("src", "{{asset('" + componentes[i].imagen + "')}}");
        tdImagen.appendChild(imgImagen);

        let tdAcciones = document.createElement("td");

        let botonEliminar = document.createElement("button");
        botonEliminar.innerText = "Eliminar";
        botonEliminar.classList.add("btn", "btn-danger");
        botonEliminar.idComponente = componentes[i].id;
        botonEliminar.addEventListener("click", iniciarEliminacion)
        tdAcciones.appendChild(botonEliminar);

        let botonActualizar = document.createElement("button");
        botonActualizar.innerText = "Actualizar";
        botonActualizar.classList.add("btn", "btn-primary");
        botonActualizar.idComponente = componentes[i].id;
        botonActualizar.addEventListener("click", iniciarActualizacion);
        tdAcciones.appendChild(botonActualizar);


        /*let formularioactualizar = document.createElement("form");
        formularioactualizar.setAttribute("action", "actualizar_componente");
        formularioactualizar.setAttribute("method", "post");
        formularioactualizar.id = componentes[i].id;
        formularioactualizar.innerHTML = "<span name='Id' style='display:none'>" + componentes[i].id + "</span> <input class='btn ' type='submit' name='botonId' value='Actualizar' id=" + componentes[i].id + ">";
        tdAcciones.appendChild(formularioactualizar);*/


        tr.appendChild(tdNombre);
        tr.appendChild(tdTipoComp);
        tr.appendChild(tdValoracion);
        tr.appendChild(tdDescripcion);
        tr.appendChild(tdImagen);
        tr.appendChild(tdAcciones);

        tbody.appendChild(tr);


    }
};

document.querySelector("#filtro-cbx").addEventListener("change", async() => {
    let filtro = document.querySelector("#filtro-cbx").value;
    let componentes = await getComponentes(filtro);
    cargarTabla(componentes);
});

document.addEventListener("DOMContentLoaded", async() => {
    await cargarTiposComp(document.querySelector("#filtro-cbx"));
    await cargarTiposComp(document.querySelector("#tipo-actualizar"));
    let componentes = await getComponentes();
    cargarTabla(componentes);
});