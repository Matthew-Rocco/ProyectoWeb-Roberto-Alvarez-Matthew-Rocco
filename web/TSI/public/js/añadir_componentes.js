document.querySelector("#registrar-btn").addEventListener("click", async() => {
    let tipocomp = Number(document.querySelector("#tipocomp-select").value.trim());
    let nombre = document.querySelector("#nombre-txt").value.trim();
    let marca = Number(document.querySelector("#marca-select").value.trim());
    let modelo = document.querySelector("#modelo-txt").value.trim();
    let descripcion = document.querySelector("#descripcion-txt").value.trim();
    let url_imagen = document.querySelector("#imagen").value.trim();
    let correo_usuario = document.querySelector("#correo_usuario").value;


    let duplicado = 0;

    let errores = [];
    if (nombre === "") {
        errores.push("Debe ingresar un nombre");
    } else {
        let componentes = await getComponentes();
        let nombreEncontrado = componentes.find(c => c.nombre.toLowerCase() == nombre.toLowerCase());
        if (nombreEncontrado != undefined) {
            duplicado++;
        }
    }

    if (url_imagen === "") {
        errores.push("Debe ingresar una imagen");
    }

    if (modelo === "") {
        errores.push("Debe ingresar un modelo");
    } else {
        let componentes = await getComponentes();
        let modeloEncontrado = componentes.find(c => c.modelo.toLowerCase() == modelo.toLowerCase());
        let marcaEncontrado = componentes.find(c => c.cod_marca == marca);
        if (modeloEncontrado != undefined && marcaEncontrado != undefined) {
            duplicado++;
        }
    }

    if (descripcion === "") {
        errores.push("Debe ingresar una descripcion");
    }

    if (duplicado > 0) {
        errores.push("El componente ya existe");
    }

    if (tipocomp == 1) {

        let fforma = document.querySelector("#fforma-txt").value.trim();
        let bahias = document.querySelector("#bahias-txt").value.trim();
        let espvent = document.querySelector("#espvent-txt").value.trim();
        let dim = document.querySelector("#dim-txt").value.trim();

        if (fforma == "" || bahias == "" || espvent == "" || dim == "") {
            errores.push("Falta ingresar caracteristicas");
        }

    } else if (tipocomp == 2) {

        let fforma = document.querySelector("#fforma-txt").value.trim();
        let socket = document.querySelector("#socket-txt").value.trim();
        let salida = document.querySelector("#salida-txt").value.trim();
        let conectores = Number(document.querySelector("#conectores-txt").value.trim());
        let slotmem = Number(document.querySelector("#slotmem-txt").value.trim());
        let tipomem = document.querySelector("#tipomem-txt").value.trim();
        let maxmem = Number(document.querySelector("#maxmem-txt").value.trim());
        let velocidad = Number(document.querySelector("#velocidad-txt").value.trim());
        let almacenamiento = document.querySelector("#almacenamiento-txt").value.trim();

        if (fforma == "" || socket == "" || salida == "" || conectores == 0 || slotmem == 0 || tipomem == "" || maxmem == 0 || velocidad == 0 || almacenamiento == "") {
            errores.push("Falta ingresar caracteristicas");
        }

    } else if (tipocomp == 3) {

        let velocidad = Number(document.querySelector("#velocidad-txt").value.trim());
        let consumo = Number(document.querySelector("#consumo-txt").value.trim());
        let mgpu = document.querySelector("#mgpu-txt").value.trim();
        let fgpu = Number(document.querySelector("#fgpu-txt").value.trim());
        let cnucleos = Number(document.querySelector("#cnucleos-txt").value.trim());

        if (velocidad == 0 || consumo == 0 || cnucleos == 0) {
            errores.push("Falta ingresar caracteristicas");
        }

    } else if (tipocomp == 4) {

        let mgpu = document.querySelector("#mgpu-txt").value.trim();
        let tipomem = document.querySelector("#tipomem-txt").value.trim();
        let cantmem = Number(document.querySelector("#cantmem-txt").value.trim());
        let velocidadmem = Number(document.querySelector("#velocidadmem-txt").value.trim());
        let salida = document.querySelector("#salida-txt").value.trim();
        let tamañot = Number(document.querySelector("#tamañot-txt").value.trim());
        let consumo = Number(document.querySelector("#consumo-txt").value.trim());
        let dim = document.querySelector("#dim-txt").value.trim();

        if (mgpu == "" || tipomem == "" || cantmem == 0 || velocidadmem == 0 || salida == "" || tamañot == 0 || consumo == 0 || dim == "") {
            errores.push("Falta ingresar caracteristicas");
        }

    } else if (tipocomp == 5) {

        let capacidad = Number(document.querySelector("#capacidad-txt").value.trim());
        let interfaz = document.querySelector("#interfaz-txt").value.trim();

        if (capacidad == 0 || interfaz == "") {
            errores.push("Falta ingresar caracteristicas");
        }

    } else if (tipocomp == 6) {

        let formfuente = document.querySelector("#formfuente-txt").value.trim();
        let potfuente = Number(document.querySelector("#potfuente-txt").value.trim());
        let tamvent = Number(document.querySelector("#tamvent-txt").value.trim());
        let dim = document.querySelector("#dim-txt").value.trim();
        let conectores = document.querySelector("#conectores-txt").value.trim();

        if (formfuente == "" || potfuente == 0 || tamvent == 0 || dim == "" || conectores == "") {
            errores.push("Falta ingresar caracteristicas");
        }

    } else if (tipocomp == 7) {

        let tiporam = document.querySelector("#tiporam-txt").value.trim();
        let capram = Number(document.querySelector("#capram-txt").value.trim());
        let frecram = Number(document.querySelector("#frecram-txt").value.trim());

        if (tiporam == "" || capram == 0 || frecram == 0) {
            errores.push("Falta ingresar caracteristicas");
        }

    } else {

        let tamaño = Number(document.querySelector("#tamaño-txt").value.trim());
        let grosor = Number(document.querySelector("#grosor-txt").value.trim());
        let cantidad = Number(document.querySelector("#cantidad-txt").value.trim());

        if (tamaño == 0 || grosor == 0 || cantidad == 0) {
            errores.push("Falta ingresar caracteristicas");
        }

    }



    if (errores.length == 0) {

        /*let imagen_ruta = {};
        imagen_ruta.ruta = url_imagen

        crearImagen(imagen_ruta);

        let imagenes = await getImagenes();

        let cod_imagen = imagenes.length;*/



        let componente = {};
        componente.tipocomp = tipocomp;
        componente.nombre = nombre;
        componente.marca = marca;
        componente.modelo = modelo;
        componente.descripcion = descripcion;
        //componente.url_imagen = url_imagen;
        //componente.cod_imagen = cod_imagen;
        componente.correo_usuario = correo_usuario;


        let res = await crearComponentes(componente);

        let comp = await getComponentes();
        numcomp = comp.length - 1; //1
        comp = comp[numcomp]["id"];

        guardarCaracComp(comp);

        let imagen = {};
        imagen.ruta = url_imagen;
        imagen.cod_comp = comp;
        imagen.cod_hilo_foro = null;
        imagen.cod_resp_foro = null;

        let id = comp;

        localStorage.setItem('id', id);

        let resp = await crearImagen(imagen);

        Swal.fire("Componente Creado", "Componente creado exitosamente", "info")
            .then((result) => {
                if (result.isConfirmed) {
                    window.location.assign("comp_tienda");
                }
            });
    } else {
        Swal.fire({
            title: "Errores de validacion",
            icon: "warning",
            html: errores.join("<br />")
        });
    }
});

document.addEventListener("DOMContentLoaded", async() => {
    await cargarTipoComp();
    await cargarMarcas();
});