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
    let descripcion = document.querySelector("#descripcion-txt").value.trim();
    let modelo = document.querySelector("#modelo-txt").value.trim();
    let marca = document.querySelector("#marca-select").value.trim();

    let errores = [];
    if (nombre === "") {
        errores.push("Debe ingresar un nombre");
    }
    if (descripcion === "") {
        errores.push("Debe ingresar una descripción");
    }
    if (modelo === "") {
        errores.push("Debe ingresar un modelo");
    }


    if (errores.length == 0) {
        let idComponente = this.idComponente;
        let componente = await buscarPorId(idComponente);

        componente.cod_tipo_comp = document.querySelector("#tiposcomp-select").value;
        componente.nombre = document.querySelector("#nombre-txt").value;
        componente.descripcion = document.querySelector("#descripcion-txt").value;
        componente.modelo = document.querySelector("#modelo-txt").value;
        componente.cod_marca = document.querySelector("#marca-select").value;

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
    document.querySelector("#tiposcomp-select").value = componente.cod_tipo_comp;
    document.querySelector("#nombre-txt").value = componente.nombre;
    document.querySelector("#modelo-txt").value = componente.modelo;
    document.querySelector("#marca-select").value = componente.cod_marca;
    document.querySelector("#descripcion-txt").value = componente.descripcion;

    document.querySelector("#actualizar-btn").idComponente = idComponente;
    document.querySelector("#actualizar-btn").addEventListener("click", actualizar);
};


const cargarTabla = (componentes) => {
    let tbody = document.querySelector("#tbody-componente");
    tbody.innerHTML = "";
    for (let i = 0; i < componentes.length; ++i) {
        if (componentes[i].correo_usuario == document.querySelector("#correo_usuario").value) {

            let tr = document.createElement("tr");

            let tdNombre = document.createElement("td");
            tdNombre.innerText = componentes[i].nombre;
            let tdTipoComp = document.createElement("td");

            if (componentes[i].cod_tipo_comp == 1) {
                tdTipoComp.innerText = "Gabinete";
            } else if (componentes[i].cod_tipo_comp == 2) {
                tdTipoComp.innerText = "Placa Madre";
            } else if (componentes[i].cod_tipo_comp == 3) {
                tdTipoComp.innerText = "Procesador";
            } else if (componentes[i].cod_tipo_comp == 4) {
                tdTipoComp.innerText = "Tarjeta de Video";
            } else if (componentes[i].cod_tipo_comp == 5) {
                tdTipoComp.innerText = "Almacenamiento";
            } else if (componentes[i].cod_tipo_comp == 6) {
                tdTipoComp.innerText = "Fuente de Poder";
            } else if (componentes[i].cod_tipo_comp == 7) {
                tdTipoComp.innerText = "Memoria RAM";
            } else if (componentes[i].cod_tipo_comp == 8) {
                tdTipoComp.innerText = "Cooler";
            }

            let tdModelo = document.createElement("td");
            tdModelo.innerText = componentes[i].modelo;

            let tdMarca = document.createElement("td");
            if (componentes[i].cod_marca == 1) {
                tdMarca.innerText = "Kingston";
            } else if (componentes[i].cod_marca == 2) {
                tdMarca.innerText = "Asus";
            } else if (componentes[i].cod_marca == 3) {
                tdMarca.innerText = "Crucial";
            } else if (componentes[i].cod_marca == 4) {
                tdMarca.innerText = "SanDisk";
            } else if (componentes[i].cod_marca == 5) {
                tdMarca.innerText = "Seagate";
            } else if (componentes[i].cod_marca == 6) {
                tdMarca.innerText = "Toshiba";
            } else if (componentes[i].cod_marca == 7) {
                tdMarca.innerText = "WD";
            } else if (componentes[i].cod_marca == 8) {
                tdMarca.innerText = "Corsair";
            } else if (componentes[i].cod_marca == 9) {
                tdMarca.innerText = "Gigabyte";
            } else if (componentes[i].cod_marca == 10) {
                tdMarca.innerText = "MSI";
            } else if (componentes[i].cod_marca == 11) {
                tdMarca.innerText = "Palit";
            } else if (componentes[i].cod_marca == 12) {
                tdMarca.innerText = "Spektra";
            } else if (componentes[i].cod_marca == 13) {
                tdMarca.innerText = "Seasonic";
            } else if (componentes[i].cod_marca == 14) {
                tdMarca.innerText = "Deepcool";
            } else if (componentes[i].cod_marca == 15) {
                tdMarca.innerText = "EVGA";
            } else if (componentes[i].cod_marca == 16) {
                tdMarca.innerText = "Generica";
            }


            let tdDescripcion = document.createElement("td");
            tdDescripcion.innerText = componentes[i].descripcion;

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


            tr.appendChild(tdNombre);
            tr.appendChild(tdTipoComp);
            tr.appendChild(tdModelo);
            tr.appendChild(tdMarca);
            tr.appendChild(tdDescripcion);
            tr.appendChild(tdAcciones);

            tbody.appendChild(tr);
        } else {
            continue;
        }

    }
};

document.querySelector("#tiposcomp-select").addEventListener("change", async() => {
    let filtro = document.querySelector("#tiposcomp-select").value;
    let componentes = await getComponentes(filtro);
    cargarTabla(componentes);
});

/*document.querySelector("#filtro-cbx").addEventListener("change", async() => {
    let filtro = document.querySelector("#filtro-cbx").value;
    let componentes = await getComponentes(filtro);
    cargarTabla(componentes);
});*/

document.addEventListener("DOMContentLoaded", async() => {
    let componentes = await getComponentes();
    cargarTabla(componentes);

    await cargarTipoComp();
    await cargarTiposComp();
    await cargarMarcas();
});