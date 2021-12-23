document.querySelector("#crear-btn").addEventListener("click", async() => {

    correo = document.querySelector("#correo_usuario").value;

    let titulo = document.querySelector("#titulo-txt").value.trim();
    let descripcion = document.querySelector("#descripcion-txt").value.trim();

    let url_imagen = document.querySelector("#imagen").value.trim();

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

    let errores = [];
    if (titulo == "") {
        errores.push("Debe ingresar un titulo");
    } else if (titulo.length > 100) {
        errores.push("Debe ingresar un titulo mas corto");
    }
    if (descripcion == "") {
        errores.push("Debe ingresar una descripcion");
    } else if (descripcion.length > 500) {
        errores.push("Debe ingresar una descripcion mas corta");
    }

    if (errores.length == 0) {
        let hilo = {};

        hilo.correo_usuario = correo;
        hilo.titulo = titulo;
        hilo.descripcion = descripcion;
        hilo.fecha = today;

        let res = await crearHiloForo(hilo);

        let hiloforo = await getHiloForos();
        numhiloforo = hiloforo.length - 1; //1
        codhiloforo = hiloforo[numhiloforo]["id"];

        let imagen = {};
        imagen.ruta = url_imagen;
        imagen.cod_comp = null;
        imagen.cod_hilo_foro = codhiloforo;
        imagen.cod_resp_foro = null;

        let resp = await crearImagen(imagen);

        let catforo = {};
        catforo.cat_foro = document.querySelector("#categoria-select").value + " " + codhiloforo;
        catforo.cod_foro = codhiloforo;
        catforo.cod_categoria = document.querySelector("#categoria-select").value;

        let resp2 = await crearCategoriaForo(catforo);

        Swal.fire("Hilo agregado", "Hilo Agregado Exitosamente", "info")
            .then((result) => {
                if (result.isConfirmed) {
                    window.location.assign("foro");
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
    await cargarCategorias();
});