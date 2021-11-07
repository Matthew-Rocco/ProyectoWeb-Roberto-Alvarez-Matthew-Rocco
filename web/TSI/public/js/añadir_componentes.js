const cargarTiposComp = async() => {
    let tipos = await getTiposComp();
    let tipoSelect = document.querySelector("#tipocomp-select");
    tipos.forEach(t => {
        let option = document.createElement("option");
        option.innerText = t;
        tipoSelect.appendChild(option);
    });
}

document.querySelector("#registrar-btn").addEventListener("click", async() => {
    let tipocomp = Number(document.querySelector("#tipocomp-select").value.trim());
    let nombre = document.querySelector("#nombre-txt").value.trim();
    let marca = Number(document.querySelector("#marca-select").value.trim());
    let modelo = document.querySelector("#modelo-txt").value.trim();
    let descripcion = document.querySelector("#descripcion-txt").value.trim();
    let url_imagen = document.querySelector("#imagen").value.trim();
    let correo_usuario = document.querySelector("#correo_usuario").value;



    let errores = [];
    if (nombre === "") {
        errores.push("Debe ingresar un nombre");
    }

    if (imagen === "") {
        errores.push("Debe ingresar una imagen");
    }

    if (modelo === "") {
        errores.push("Debe ingresar un modelo");
    }

    if (descripcion === "") {
        errores.push("Debe ingresar una descripcion");
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
        componente.url_imagen = url_imagen;
        //componente.cod_imagen = cod_imagen;
        componente.correo_usuario = correo_usuario;

        let res = await crearComponentes(componente);
        Swal.fire("Componente Creado", "Componente creado exitosamente", "info");
    } else {
        Swal.fire({
            title: "Errores de validacion",
            icon: "warning",
            html: errores.join("<br />")
        });
    }
});