const cargarListas = (listas) => {
    let cuerpo = document.querySelector("#listas")
    if (listas.length == 0) {
        let div = document.createElement("div")
        div.innerHTML = `
            <p class="fs-5">Vacio</p>
        `;

        cuerpo.appendChild(div);
    } else {
        cuerpo.innerHTML = "";
        for (let i = 0; i < listas.length; i++) {
            let div = document.createElement("div")
            div.setAttribute("class", "m-2 card");
            div.innerHTML = `
            <div class="btn pt-2" id="lista-${i}">
                <p style="margin-bottom:0" id="titulo-${i}">${listas[i].titulo_lista}</p>
                <input type="text" class="form-control d-none" id="id-lista-${i}"
                value="${listas[i].id}">
            </div>
        `
            cuerpo.appendChild(div);
        }
    }
}

document.querySelector("#agregar-btn").addEventListener("click", async() => {
    let resp = await Swal.fire({
        title: '<strong>Crear Lista</strong>',
        html: `
            <div class="mb-3">
                <label for="nombreLista-txt" class="form-label">Nombre de Lista</label>
                <input type="text" id="nombreLista-txt" class="form-control">
            </div>
            `,
        showCancelButton: true,
        focusConfirm: false,
        confirmButtonText: 'Crear',
        cancelButtonText: 'Cancelar',
    })
    if (resp.isConfirmed) {
        let listacreada = {};
        listacreada.titulo_lista = document.querySelector("#nombreLista-txt").value;
        listacreada.correo_usuario = document.querySelector("#correo_usuario").value;


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

        listacreada.fecha = today;

        let resp = await crearLista(listacreada);

        let correo = document.querySelector("#correo_usuario").value;
        let listas = await buscarListaPorCorreo(correo);
        cargarListas(listas)

        Swal.fire("Lista Creada", "Lista creada exitosamente", "info")
    }
});

const mostrarLista = (listas) => {
    for (let i = 0; i < listas.length; i++) {
        let g = 0,
            pm = 0,
            p = 0,
            tv = 0,
            a = 0,
            fp = 0,
            r = 0,
            c = 0;
        document.querySelector(`#lista-${i}`).addEventListener("click", async() => {
            let idlista = document.querySelector(`#id-lista-${i}`).value;
            let titulo = document.querySelector(`#titulo-${i}`).innerHTML;
            let detallelista = await buscarDetallePorIdLista(idlista);
            let componentes = [];
            detallelista.forEach(async detalle => {
                let componente = await buscarCaracPorIdComp(detalle.cod_comp);
                componentes.push(componente)
            });
            Swal.fire({
                title: `<strong> ${titulo} </strong>`,
                html: `
                    <div class="mb-3" id="detalle">
                    </div>
                    `,
                showCancelButton: true,
                focusConfirm: false,
                confirmButtonText: 'Comprobar Compatibilidad',
                cancelButtonText: 'Salir',
            }).then((result) => {
                if (result.isConfirmed) {
                    let compatibilidad = [];
                    let fforma,
                        fforma1,
                        fforma2,
                        fforma3,
                        fpinc,
                        plat,
                        gpui,
                        mgpu,
                        interfaz,
                        atx = 0,
                        matx = 0,
                        miniitx = 0,
                        ventinc = 0,
                        espaciosvent = 0,
                        slots = 0,
                        maxmem = 0,
                        velocidad = 0,
                        consumo = 0,
                        capram = 0,
                        pot = 0,
                        amd = 0,
                        intel = 0,
                        fre = 0;
                    for (let g = 0; g < componentes.length; g++) {
                        for (let j = 0; j < componentes[g].length; j++) {
                            if (componentes[g][j].cod_carac == 1) {
                                fforma = componentes[g][j].valor_carac.toUpperCase();
                                fforma = fforma.split(" ");
                                if (fforma.length == 3) {
                                    fforma1 = fforma[0]
                                    fforma2 = fforma[1]
                                    fforma3 = fforma[2]

                                    if (fforma1 == "ATX") {
                                        atx = atx + 1;
                                    } else if (fforma1 == "MATX") {
                                        matx = matx + 1;
                                    } else if (fforma1 == "MINI-ITX") {
                                        miniitx = miniitx + 1;
                                    }
                                    if (fforma2 == "ATX") {
                                        atx = atx + 1;
                                    } else if (fforma2 == "MATX") {
                                        matx = matx + 1;
                                    } else if (fforma2 == "MINI-ITX") {
                                        miniitx = miniitx + 1;
                                    }
                                    if (fforma3 == "ATX") {
                                        atx = atx + 1;
                                    } else if (fforma3 == "MATX") {
                                        matx = matx + 1;
                                    } else if (fforma3 == "MINI-ITX") {
                                        miniitx = miniitx + 1;
                                    }
                                } else if (fforma.length == 2) {
                                    fforma1 = fforma[0];
                                    fforma2 = fforma[1];

                                    if (fforma1 == "ATX") {
                                        atx = atx + 1;
                                    } else if (fforma1 == "MATX") {
                                        matx = matx + 1;
                                    } else if (fforma1 == "MINI-ITX") {
                                        miniitx = miniitx + 1;
                                    }
                                    if (fforma2 == "ATX") {
                                        atx = atx + 1;
                                    } else if (fforma2 == "MATX") {
                                        matx = matx + 1;
                                    } else if (fforma2 == "MINI-ITX") {
                                        miniitx = miniitx + 1;
                                    }
                                } else {
                                    fforma1 = fforma[0];
                                    if (fforma1 == "ATX") {
                                        atx = atx + 1;
                                    } else if (fforma1 == "MATX") {
                                        matx = matx + 1;
                                    } else if (fforma1 == "MINI-ITX") {
                                        miniitx = miniitx + 1;
                                    }
                                }
                            }
                            if (componentes[g][j].cod_carac == 3) {
                                ventinc = parseInt(componentes[g][j].valor_carac);
                            }
                            if (componentes[g][j].cod_carac == 5) {
                                fpinc = componentes[g][j].valor_carac.toUpperCase();
                                if (fpinc == "SI") {
                                    fpinc = 1;
                                } else if (fpinc = "NO") {
                                    fpinc = 0;
                                }
                            }
                            if (componentes[g][j].cod_carac == 8) {
                                plat = componentes[g][j].valor_carac;
                                if (plat == "AMD") {
                                    amd++;
                                } else if (plat == "Intel") {
                                    intel++;
                                }
                            }
                            if (componentes[g][j].cod_carac == 13) {
                                slots = parseInt(componentes[g][j].valor_carac);
                            }
                            if (componentes[g][j].cod_carac == 15) {
                                maxmem = parseInt(componentes[g][j].valor_carac);
                            }
                            if (componentes[g][j].cod_carac == 16) {
                                velocidad = parseInt(componentes[g][j].valor_carac);
                            }
                            if (componentes[g][j].cod_carac == 19) {
                                consumo = parseInt(componentes[g][j].valor_carac);
                            }
                            if (componentes[g][j].cod_carac == 20) {
                                gpui = componentes[g][j].valor_carac;
                                if (gpui == "SI") {
                                    gpui = 1;
                                } else if (gpui = "NO") {
                                    gpui = 0;
                                }
                            }
                            if (componentes[g][j].cod_carac == 32) {
                                if (parseInt(componentes[g][j].valor_carac) < 50) {
                                    capram = capram + parseInt(componentes[g][j].valor_carac);
                                }
                            }
                            if (componentes[g][j].cod_carac == 35) {
                                pot = parseInt(componentes[g][j].valor_carac);
                            }
                            if (componentes[g][j].cod_carac == 37) {
                                fre = parseInt(componentes[g][j].valor_carac);
                            }
                        }
                    }

                    if (capram > maxmem) {
                        compatibilidad.push("La RAM a superado el maximo de memoria soportada por el procesador");
                    }
                    if (consumo > pot) {
                        compatibilidad.push("El consumo es mayor a la potencia de la fuente de poder");
                    }
                    if (ventinc == 0 && c == 0) {
                        compatibilidad.push("La lista no incluye ventiladores");
                    }
                    if (slots < r) {
                        compatibilidad.push("Ingresó más tarjetas RAM de las que soporta la placa madre");
                    }
                    if (velocidad < fre) {
                        compatibilidad.push("Puede que la placa madre no soporte la frecuencia de la tarjeta RAM");
                    }
                    if (amd > 0 && intel > 0) {
                        compatibilidad.push("La placa madre y el procesador no son compatibles");
                    }
                    if (fpinc == 0 && fp == 0) {
                        compatibilidad.push("No a ingresado fuente de poder");
                    }
                    if (fpinc != 0 && fp != 0) {
                        compatibilidad.push("A ingresado mas de una fuente de poder, verifique que el gabinete incluye una");
                    }
                    if (gpui == 0 && tv == 0) {
                        compatibilidad.push("No a ingresado una tarjeta de video");
                    }
                    if (gpui != 0 && tv != 0) {
                        compatibilidad.push("A ingresado mas de una tarjeta de video, omita este mensaje si no quiere la integrada");
                    }
                    if (atx < 2 && matx < 2 && miniitx < 2 && atx > 0 && matx > 0 && miniitx > 0) {
                        compatibilidad.push("El gabinete y la fuente de poder no son compatibles");
                    }
                    if (g == 0) {
                        compatibilidad.push("No a ingresado un Gabinete");
                    }
                    if (g > 1) {
                        compatibilidad.push("A ingresado mas de un Gabinete");
                    }
                    if (pm == 0) {
                        compatibilidad.push("No a ingresado una Placa Madre");
                    }
                    if (pm > 1) {
                        compatibilidad.push("A ingresado mas de una Placa Madre");
                    }
                    if (p == 0) {
                        compatibilidad.push("No a ingresado un Procesador");
                    }
                    if (p > 1) {
                        compatibilidad.push("A ingresado mas de un procesador");
                    }
                    if (tv == 0) {
                        compatibilidad.push("No a ingresado una Tarjeta de Video, y el procesador no incluye una");
                    }
                    if (tv > 1) {
                        compatibilidad.push("A ingresado mas de una Tarjeta de Video");
                    }
                    if (a == 0) {
                        compatibilidad.push("No a ingresado un Almacenamiento");
                    }
                    if (fp == 0) {
                        compatibilidad.push("No a ingresado una Fuente de Poder, asegurese que el gabinete incluya una");
                    }
                    if (fp > 1) {
                        compatibilidad.push("A ingresado mas de una Fuente de poder");
                    }
                    if (r == 0) {
                        compatibilidad.push("No a ingresado una tarjeta RAM");
                    }
                    if (c == 0) {
                        compatibilidad.push("No a ingresado un Cooler");
                    }
                    Swal.fire({
                        title: '<strong>Compatibilidad</strong>',
                        html: compatibilidad.join("<br />"),
                    })

                    g = 0,
                        pm = 0,
                        p = 0,
                        tv = 0,
                        a = 0,
                        fp = 0,
                        r = 0,
                        c = 0;
                }
            });
            let cuerpo = document.querySelector("#detalle");
            if (detallelista.length != 0) {
                detallelista.forEach(async dl => {
                    let componente = await buscarPorId(dl.cod_comp);
                    let div = document.createElement("div");
                    if (componente.cod_tipo_comp == 1) {
                        div.innerHTML = `
                        <p class="fs-4 fw-bold">Gabinete</p>
                        <p>${componente.nombre}</p>                  
                        `;
                        g++;
                    } else if (componente.cod_tipo_comp == 2) {

                        div.innerHTML = `
                        <p class="fs-4 fw-bold">Placa Madre</p>
                        <p>${componente.nombre}</p>
                        `;
                        pm++;
                    } else if (componente.cod_tipo_comp == 3) {
                        div.innerHTML = `
                        <p class="fs-4 fw-bold">Procesador</p>
                        <p>${componente.nombre}</p>
                        `;
                        p++;
                    } else if (componente.cod_tipo_comp == 4) {
                        div.innerHTML = `
                        <p class="fs-4 fw-bold">Tarjeta de Video</p>
                        <p>${componente.nombre}</p>
                        `;
                        tv++;
                    } else if (componente.cod_tipo_comp == 5) {
                        div.innerHTML = `
                        <p class="fs-4 fw-bold">Almacenamiento</p>
                        <p>${componente.nombre}</p>
                        `;
                        a++;
                    } else if (componente.cod_tipo_comp == 6) {
                        div.innerHTML = `
                        <p class="fs-4 fw-bold">Fuente de Poder</p>
                        <p>${componente.nombre}</p>
                        `;
                        fp++;
                    } else if (componente.cod_tipo_comp == 7) {
                        div.innerHTML = `
                        <p class="fs-4 fw-bold">RAM</p>
                        <p>${componente.nombre}</p>
                        `;
                        r++;
                    } else {
                        div.innerHTML = `
                        <p class="fs-4 fw-bold">Cooler</p>
                        <p>${componente.nombre}</p>
                        `;
                        c++;
                    }
                    cuerpo.appendChild(div);
                });
            } else {
                let div = document.createElement("div");
                div.innerHTML = `<p>Vaya a Agregar Componentes</p>`;
                cuerpo.appendChild(div);
            }
        });
    }
}

document.addEventListener("DOMContentLoaded", async() => {
    let correo = document.querySelector("#correo_usuario").value;
    let listas = await buscarListaPorCorreo(correo);
    cargarListas(listas);
    mostrarLista(listas);
});