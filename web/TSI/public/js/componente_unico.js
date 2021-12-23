const cargarPagina = (componente, imagen, caracteristicas, nom_carac) => {
    let cuerpo = document.querySelector("#cuerpo");
    cuerpo.innerHTML = "";
    comp = document.createElement("div");
    comp.setAttribute("class", "row mt-4");
    comp.innerHTML = `
        <div class="col-4 col-md-4 col-lg-4 card me-2 ms-4 p-2" id="imagen">  
                <img class="img-thumbnail align-self-center rounded" style="width:85%" src="${imagen.ruta}" alt="componente">
            <p class="fs-2 fw-bolder text-center text-capitalize">${componente.nombre}</p>
            <div id="espacio">
            </div>
        </div>
    `;
    let comp2 = document.createElement("div");
    comp2.setAttribute("class", "col col-md col-lg card p-3");
    comp2.innerHTML = `
        <div class="mb-3">
            <p class="fs-6">${componente.descripcion} </p>
        </div>
    `;
    caracteristicas.forEach(carac => {
        let compcarac = document.createElement("div");
        let nombrecarac;
        nom_carac.forEach(nomc => {
            if (nomc.id == carac.cod_carac) {
                nombrecarac = nomc.nom_carac;
            }
        });
        if (carac.unidad == "vacio") {
            carac.unidad = "";
        }
        if (nombrecarac == "Tamanio") {
            nombrecarac = "Tamaño";
        } else if (nombrecarac == "Tamanio de Tarjeta") {
            nombrecarac = "Tamaño de Tarjeta";
        } else if (nombrecarac == "Tamanio de Ventilador") {
            nombrecarac = "Tamaño de Ventilador";
        }
        compcarac.innerHTML = `
                <div class="row">
                    <div class="col-4 col-md-4 col-lg-4">
                        <p class="fs-6">${nombrecarac}: </p>
                    </div>
                    <div class="col col-md col-lg">
                        <p class="fs-6 fw-bolder">${carac.valor_carac} ${carac.unidad}</p>
                    </div>
                </div>
            `;
        comp2.appendChild(compcarac);
    });

    comp.appendChild(comp2);

    let comp3 = document.createElement("div");
    comp3.innerHTML = `
    <div class="row mt-2">
        <div class="col-6 col-md-6 col-lg-6 card ms-4 me-2 p-2" id="valoraciones">
            <div class="row">
                <div class="col-6 col-md-6 col-lg-6 ms-4 p-2 me-4">
                    <p class="fs-4">Valoraciones</p>
                </div>
                <div class="col col-md col-lg text-end p-2 me-4" id="añadir">
                    <a href="valoracion_comp"><img style="width:13%" src="https://cdn-icons-png.flaticon.com/512/117/117885.png" alt=""></a>
                </div>
            </div>
        </div>
        <div class="col col-md col-lg card p-2 me-4" id="precio_tienda">
            <div class="row">
                <div class="col-6 col-md-6 col-lg-6 ms-2 p-2 me-4">
                    <p class="fs-4">Disponibilidad</p>
                </div>
                <div class="col col-md col-lg text-end p-2 me-4" id="añadir">
                    <a href="comp_tienda"><img style="width:15%" src="https://cdn-icons-png.flaticon.com/512/117/117885.png" alt=""></a>
                </div>
            </div>
        </div>
    </div>
    `;
    //console.log(componente);
    //console.log(caracteristicas);
    //console.log(nom_carac);

    cuerpo.appendChild(comp);
    //cuerpo.appendChild(comp2);
    cuerpo.appendChild(comp3);
}

const cargarListas = async(correo) => {
    let cuerpocargar = document.createElement("div");
    cuerpocargar.setAttribute("class", "text-center");
    cuerpocargar.innerHTML = `
        <label for="lista-select" class="form-label text-center">Añadir a lista</label>
        <div class="ms-4 me-4">
            <select class="form-select" id="lista-select">
                <option value="no"> -- Seleccionar Lista -- </option>
            </select>
        </div>
    `
    let espacio = document.querySelector("#espacio");
    espacio.appendChild(cuerpocargar);

    let listas = await buscarListaPorCorreo(correo);
    let listasSelect = document.querySelector("#lista-select");
    listas.forEach(l => {
        let option = document.createElement("option");
        option.innerText = l["titulo_lista"];
        option.value = l["id"];
        listasSelect.appendChild(option);
    });
}

const cargarCompTienda = async(tiendas, id) => {
    let comptienda = await buscarCompTiendaPorIdComp(id);
    let info = document.querySelector("#precio_tienda");
    let div = document.createElement("div");
    comptienda.forEach(ct => {
        div = document.createElement("div");
        let link_tienda;
        let logo;
        for (let i = 0; i < tiendas.length; i++) {
            if (ct.cod_tienda == tiendas[i].id) {
                nombre_tienda = tiendas[i].nombretienda;
                link_tienda = tiendas[i].linktienda;
                logo = tiendas[i].logo;
            }
        }

        div.innerHTML = `
                <div class="row">
                    <div class="col-4 col-md-4 col-lg-4">
                        <p>$ ${ct.precio_comp}</p>
                    </div>
                    <div class="col-4 col-md-4 col-lg-4">
                        <a href="${ct.link_comp}">Link Directo</a>
                    </div>
                    <div class="col col-md col-lg">
                        <a style="color:black" href="http://www.${link_tienda}"><img class="img-thumbnail" style="width:25%" src="${logo}" alt="logo tienda">${nombre_tienda}</a>
                    </div>
                </div>
        `;
        info.appendChild(div);
    });
}



const cargarValoracion = async(id) => {
    let valoraciones = await buscarValoracionPorIdComp(id);
    let cuerpo = document.querySelector("#valoraciones");
    let div = document.createElement("div");
    valoraciones.forEach(v => {
        div = document.createElement("div");
        div.innerHTML = `
                <div class="row">
                    <div class="col-6 col-md-6 col-lg-6">
                        <p>${v.descripcion}</p>
                    </div>
                    <div class="col-6 col-md-6 col-lg-6">
                    <p>${v.puntos}/10</p>
                    </div>
                </div>
        `;
        cuerpo.appendChild(div);
    });
}



const cargarTiendas = async() => {
    let tiendas = await getTienda();
    let tiendaselect = document.querySelector("#tienda-select");
    tiendas.forEach(t => {
        let option = document.createElement("option");
        option.innerText = t["nombretienda"];
        option.value = t["id"];
        tiendaselect.appendChild(option);
    });
}

document.addEventListener("DOMContentLoaded", async() => {
    let id = parseInt(localStorage["id"]);
    //localStorage.removeItem("id");
    let componente = await buscarPorId(id);
    let imagen = await buscarImagenPorIdComp(id);
    let caracteristicas = await buscarCaracPorIdComp(id);
    let nom_carac = await getCaracteristicas();
    cargarPagina(componente, imagen, caracteristicas, nom_carac);
    let correo = document.querySelector("#correo_usuario").value;
    cargarListas(correo);
    let tiendas = await getTienda();
    cargarCompTienda(tiendas, id);
    cargarValoracion(id);


    document.querySelector("#lista-select").addEventListener("change", async() => {
        if (document.querySelector("#lista-select").value != "no") {
            let listadetalle = {};
            listadetalle.lista_comp = Number(document.querySelector("#lista-select").value) + " " + id;
            listadetalle.cod_lista = Number(document.querySelector("#lista-select").value);
            listadetalle.cod_comp = id;

            let resp = await crearDetalleLista(listadetalle);
            Swal.fire(`Componente agregado a Lista`, "Componente agregado exitosamente", "info")

        }
    });

});