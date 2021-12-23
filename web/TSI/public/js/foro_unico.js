const cargarPagina = (hilo, imagen, nombreUser) => {
    let cuerpo = document.querySelector("#cuerpo");
    cuerpo.innerHTML = "";
    comp = document.createElement("div");
    comp.setAttribute("class", "row mt-4");
    comp.innerHTML = `
        <div class="col-4 col-md-4 col-lg-4 card me-2 ms-4 p-2" id="imagen">
                <img class="img-thumbnail align-self-center rounded" id="imagen_foro" style="width:85%" src="${imagen.ruta}" alt="componente">
        </div>
    `;
    let comp2 = document.createElement("div");
    comp2.setAttribute("class", "col col-md col-lg card p-3");
    comp2.innerHTML = `
        <div>
            <p class="fs-1 text-uppercase"  style="margin-bottom: 0">${hilo.titulo} </p>
        </div>
    `;
    let comp25 = document.createElement("div");

    comp25.innerHTML = `
            <div class="row">
                <div class="col-4 col-md-4 col-lg-4 mb-4">
                    <p class="fs-6">${nombreUser}</p>
                 </div>
            </div>
            <div class="row">
                <div class="col col-md col-lg">
                    <p class="fs-5">${hilo.descripcion}</p>
                 </div>
            </div>
         `;
    comp2.appendChild(comp25);


    comp.appendChild(comp2);

    let comp3 = document.createElement("div");
    comp3.innerHTML = `
    <div class="row mt-2">
        <div class="col col-md col-lg card ms-4 me-2 p-2" id="respuestas">
            <div class="row">
                <div class="col-6 col-md-6 col-lg-6 ms-4 p-2 me-4">
                    <p class="fs-4">Respuestas</p>
                </div>
                <div class="col col-md col-lg text-end p-2 me-4">
                    <img style="width:5%" id="añadir" src="https://cdn-icons-png.flaticon.com/512/117/117885.png" alt="">
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


const cargarRespuestas = async(respuestas, correo) => {
    let cuerpo = document.querySelector("#respuestas");
    let div = document.createElement("div");
    respuestas.forEach(async r => {
        nombre = await getNombre(r.correo_user)
        div = document.createElement("div");
        div.innerHTML = `
                <div class="card p-2 mb-2">
                    <div class="row">
                        <div class="col-8 col-md-8 col-lg-8">
                            <div class="col-4 col-md-4 col-lg-4">
                                <p>${nombre}</p>
                            </div>
                            <div>
                            <p>${r.descripcion}</p>
                            </div>
                        </div>
                        <div class="col col-md col-lg text-end" id="espacio-boton-${r.id}">
                        </div>
                    </div>
                </div>
        `;
        cuerpo.appendChild(div);
        let cuerpoboton = document.querySelector(`#espacio-boton-${r.id}`);
        let divboton = document.createElement("div");
        if (r.correo_user == correo) {
            divboton.innerHTML = `
                                    <button class="btn btn-danger" id="id-${r.id}">Eliminar</button>
                                `;
            cuerpoboton.appendChild(divboton);
            document.querySelector(`#id-${r.id}`).addEventListener("click", () => {
                iniciarEliminarRespuesta(r.id);
            })
        }
    });

};

const iniciarEliminarRespuesta = async function(id) {
    let idrespuesta = id;
    let resp = await Swal.fire({ title: "Esta seguro?", text: "Esta operacion es irreversible", icon: "error", showCancelButton: true });

    if (resp.isConfirmed) {
        if (await eliminarRespuesta(id)) {
            let idforo = parseInt(localStorage["id"]);
            let respuestas = await buscarRespForoPorIdHilo(idforo);
            cargarRespuestas(respuestas);
            Swal.fire("Respuesta eliminada", "Respuesta eliminada exitosamente", "info");

            window.location.assign("hilo_foro");
        } else {
            Swal.fire("Error", "No se pudo atender la solicitud", "error");
        }
    } else {
        Swal.fire("Cancelado", "Cancelado a peticion del usuario", "info");
    }
};

const crearRespuesta = async(id, correo, respuestas) => {
    document.querySelector("#añadir").addEventListener("click", () => {
        Swal.fire({
            title: `<strong> Agregar Comentario</strong>`,
            html: `
                    <div class="mb-3">
                        <label for="descripcionresp-txt" class="form-label">Descripcion</label>
                        <textarea id="descripcionresp-txt" class="form-control"></textarea>
                    </div>
                `,
            showCancelButton: true,
            focusConfirm: false,
            confirmButtonText: 'Crear',
            cancelButtonText: 'Salir',
        }).then((result) => {
            if (result.isConfirmed) {
                let resp = {};


                let today = new Date();
                let dd = today.getDate();
                let mm = today.getMonth() + 1; //January is 0!
                let yyyy = today.getFullYear();
                if (dd < 10) {
                    dd = '0' + dd;
                }
                if (mm < 10) {
                    mm = '0' + mm;
                }
                today = yyyy + '-' + mm + '-' + dd;

                resp.cod_foro = id;
                resp.correo_user = correo;
                resp.descripcion = document.querySelector("#descripcionresp-txt").value;
                resp.fecha = today;

                let respforo = crearRespForo(resp);

                window.location.assign("hilo_foro");
            }
        });
    })
}

document.addEventListener("DOMContentLoaded", async() => {
    let id = parseInt(localStorage["id"]);
    let hilo = await buscarHiloPorId(id);
    let imagen = await buscarImagenPorIdHilo(id);

    let correo = document.querySelector("#correo_usuario").value;
    let nombreUser = await getNombre(hilo.correo_user);
    cargarPagina(hilo, imagen, nombreUser);
    respuestas = await buscarRespForoPorIdHilo(id);
    cargarRespuestas(respuestas, correo);
    await crearRespuesta(id, correo, respuestas);
});