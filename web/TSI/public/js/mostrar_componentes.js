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
    document.querySelector("#marca-select").value = componente.marca;
    document.querySelector("#modelo-txt").value = componente.modelo;
    document.querySelector("#descripcion-txt").value = componente.descripcion;
    document.querySelector("#link-txt").value = componente.linkcomp;

    document.querySelector("#actualizar-btn").idComponente = idComponente;
    document.querySelector("#actualizar-btn").addEventListener("click", actualizar);
};


/*const buscarImagen = async function(id) {
    let imagen = await buscarImagenPorIdComp(id);
    let ruta = imagen['ruta'];
    return ruta;
}*/

const cargarTabla = (componentes, imagenes) => {
    /*let tbody = document.querySelector("#tbody-componente");
    tbody.innerHTML = "";*/
    let cuerpo = document.querySelector("#cuerpo");
    cuerpo.innerHTML = "";
    for (let i = 0; i < componentes.length; ++i) {
        /*let tr = document.createElement("tr");

        let tdNombre = document.createElement("td");
        tdNombre.innerText = componentes[i].nombre;
        let tdTipoComp = document.createElement("td");*/
        let nombretipo;
        if (componentes[i].cod_tipo_comp == 1) {
            nombretipo = "Gabinete";
        } else if (componentes[i].cod_tipo_comp == 2) {
            nombretipo = "Placa Madre";
        } else if (componentes[i].cod_tipo_comp == 3) {
            nombretipo = "Procesador";
        } else if (componentes[i].cod_tipo_comp == 4) {
            nombretipo = "Tarjeta de Video";
        } else if (componentes[i].cod_tipo_comp == 5) {
            nombretipo = "Almacenamiento";
        } else if (componentes[i].cod_tipo_comp == 6) {
            nombretipo = "Fuente de Poder";
        } else if (componentes[i].cod_tipo_comp == 7) {
            nombretipo = "Memoria RAM";
        } else if (componentes[i].cod_tipo_comp == 8) {
            nombretipo = "Cooler";
        }
        /*tdTipoComp.innerText = nombretipo;

        let tdModelo = document.createElement("td");
        tdModelo.innerText = componentes[i].modelo;

        let tdMarca = document.createElement("td");*/
        let nombremarca;
        if (componentes[i].cod_marca == 1) {
            nombremarca = "Kingston";
        } else if (componentes[i].cod_marca == 2) {
            nombremarca = "Asus";
        } else if (componentes[i].cod_marca == 3) {
            nombremarca = "Crucial";
        } else if (componentes[i].cod_marca == 4) {
            nombremarca = "SanDisk";
        } else if (componentes[i].cod_marca == 5) {
            nombremarca = "Seagate";
        } else if (componentes[i].cod_marca == 6) {
            nombremarca = "Toshiba";
        } else if (componentes[i].cod_marca == 7) {
            nombremarca = "WD";
        } else if (componentes[i].cod_marca == 8) {
            nombremarca = "Corsair";
        } else if (componentes[i].cod_marca == 9) {
            nombremarca = "Gigabyte";
        } else if (componentes[i].cod_marca == 10) {
            nombremarca = "MSI";
        } else if (componentes[i].cod_marca == 11) {
            nombremarca = "Pali";
        } else if (componentes[i].cod_marca == 12) {
            nombremarca = "Spektra";
        } else if (componentes[i].cod_marca == 13) {
            nombremarca = "Seasonic";
        } else if (componentes[i].cod_marca == 14) {
            nombremarca = "Deepcool";
        } else if (componentes[i].cod_marca == 15) {
            nombremarca = "EVGA";
        } else if (componentes[i].cod_marca == 16) {
            nombremarca = "Generica";
        }

        /*tdMarca.innerText = nombremarca;


        let tdDescripcion = document.createElement("td");
        tdDescripcion.innerText = componentes[i].descripcion;

        let tdImagen = document.createElement("td");
        tdImagen.innerHTML = '<img src=' + componentes[i].url_imagen + ' class="img-thumbnail rounded-3">';

        tr.appendChild(tdNombre);
        tr.appendChild(tdTipoComp);
        tr.appendChild(tdModelo);
        tr.appendChild(tdMarca);
        tr.appendChild(tdDescripcion);
        tr.appendChild(tdImagen);

        tbody.appendChild(tr);*/

        //console.log(imagenes[i].ruta)
        for (let j = 0; j < imagenes.length; ++j) {

            if ([imagenes[j].cod_comp] == componentes[i].id) {
                ruta = imagenes[j].ruta;
            }
        }
        /*let imagen = await buscarImagen(componentes[i].id);
        console.log(imagen);*/

        const cuerpocomp = document.createElement("div");
        cuerpocomp.setAttribute("class", "col-3 col-md-3 col-lg-3 mb-2");
        cuerpocomp.innerHTML = `
        <a class="nav-link" href="componente" id="link${i}">
            <div class="card" style="width: 18rem;">
                <img class="rounded img-thumbnail p-1 m-1 align-self-center" style="width:85%" src="${ruta}" alt="foto_componente">
                <div class="card-body">
                    <ul class="navbar-nav" style="color:black">
                        <li><p class="fs-5 text-capitalize">${componentes[i].nombre}</p></li>
                        <li><p class="fs-6">Modelo: ${componentes[i].modelo}</p></li>
                        <li><p class="fs-6">Marca: ${nombremarca}</p></li>
                        <li><p class="fs-6">${nombretipo}</p></li>
                    </ul>
                    <div class="d-none" id="id${i}" value="${componentes[i].id}">${componentes[i].id}</div>
                </div>
            </div>
        </a>
        `;
        cuerpo.appendChild(cuerpocomp);

    }
};


document.querySelector("#tipocomp-select").addEventListener("change", async() => {
    let filtro = document.querySelector("#tipocomp-select").value;
    let componentes = await getComponentes(filtro);
    let imagenes = await getImagenes();
    cargarTabla(componentes, imagenes);
    let filtrom = document.querySelector("#marca-select");
    filtrom.value = "todos";
});

document.querySelector("#marca-select").addEventListener("change", async() => {
    let filtromarca = document.querySelector("#marca-select").value;
    let componentesmarca = await getComponentesMarcas(filtromarca);
    let imagenes = await getImagenes();
    cargarTabla(componentesmarca, imagenes);
    let filtrot = document.querySelector("#tipocomp-select");
    filtrot.value = "todos";
});

document.addEventListener("DOMContentLoaded", async() => {
    await cargarTipoComp();
    await cargarMarcas();
    let componentes = await getComponentes();
    let imagenes = await getImagenes();
    cargarTabla(componentes, imagenes);

    /*for (let i = 0; i < componentes.length; i++) {
        componente = "#" + componentes[i].id;
        if (componente == document.querySelector("#" + componentes[i].id)) {
            document.querySelector("#link" + componentes[i].id).addEventListener("click", async() => {
                localStorage.setItem('id', document.querySelector("#" + componentes[i].id).innerHTML)
            });
        }
    }*/
    for (let i = 0; i < componentes.length; i++) {
        document.querySelector(`#link${i}`).addEventListener("click", async() => {
            localStorage.setItem('id', document.querySelector(`#id${i}`).innerHTML)
        });
    }
});