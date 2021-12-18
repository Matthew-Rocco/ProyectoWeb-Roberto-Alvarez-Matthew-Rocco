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

        let resp = await crearImagen(imagen);

        Swal.fire("Componente Creado", "Componente creado exitosamente", "info");
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