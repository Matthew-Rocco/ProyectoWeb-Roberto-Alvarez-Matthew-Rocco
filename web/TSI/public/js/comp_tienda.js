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

document.querySelector("#registrar-btn").addEventListener("click", async() => {

    let idcomp = localStorage["id"];
    let componente = await buscarPorId(idcomp);
    correo = componente.correo_usuario;

    let tienda = document.querySelector("#tienda-select").value.trim();
    let precio = document.querySelector("#precio-txt").value.trim();
    let link = document.querySelector("#tienda-link").value.trim();

    let errores = [];
    if (precio == 0) {
        errores.push("Debe ingresar un precio");
    } else if (precio < 990) {
        errores.push("Debe ingresar un precio valido");
    }
    if (link == "") {
        errores.push("Debe ingresar un url");
    }

    if (errores.length == 0) {
        let comptienda = {};

        comptienda.cod_comp_tienda = idcomp + " " + tienda;
        comptienda.cod_comp = idcomp;
        comptienda.cod_tienda = tienda;
        comptienda.correo_usuario = correo;
        comptienda.precio_comp = precio;
        comptienda.link_comp = link;

        let res = await crearCompTienda(comptienda);

        Swal.fire("Precio agregado", "Precio Agregado a Componente Exitosamente", "info")
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

document.addEventListener("DOMContentLoaded", async() => {
    await cargarTiendas();
});