document.querySelector("#registrar-btn").addEventListener("click", async() => {

    let idcomp = localStorage["id"];
    let componente = await buscarPorId(idcomp);
    correo = componente.correo_usuario;

    let puntos = Number(document.querySelector("#puntos-txt").value.trim());
    let comentario = document.querySelector("#comentario-txt").value.trim();

    let errores = [];
    if (puntos == 0) {
        errores.push("Debe ingresar una puntuacion");
    }
    if (puntos > 10) {
        errores.push("Valoracion fuera de rango");
    }
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

    if (errores.length == 0) {
        let valoracion = {};

        valoracion.valoracion_user = idcomp + " " + correo + " " + today;
        valoracion.cod_comp = idcomp;
        valoracion.correo_user = correo;
        valoracion.descripcion = comentario;
        valoracion.puntos = puntos;
        valoracion.fecha = today;

        let res = await crearValoracion(valoracion);

        Swal.fire("Valoracion agregada", "Valoracion Agregada a Componente Exitosamente", "info")
            .then((result) => {
                if (result.isConfirmed) {
                    window.location.assign("componente");
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