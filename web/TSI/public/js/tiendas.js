document.querySelector("#registrartienda-btn").addEventListener("click", async ()=>{
    let nombretienda = document.querySelector("#nombretienda-txt").value.trim();
    let linktienda = document.querySelector("#linktienda-txt").value.trim();

    let errores = [];
    if(nombretienda === ""){
        errores.push("Debe ingresar un nombre");
    }

    if(linktienda === ""){
        errores.push("Debe ingresar un link");
    }

    if(errores.length == 0){
        let tienda = {};
        tienda.nombretienda = nombretienda;
        tienda.descripciontienda = descripciontienda;
        tienda.linktienda = linktienda;
        
        let res = await crearTienda(tienda);
        Swal.fire("Tienda Creada", "Tienda Creada exitosamente", "info");
    }else{
        Swal.fire({
            title: "Errores de validacion",
            icon: "warning",
            html: errores.join("<br />")
        });
    }
});