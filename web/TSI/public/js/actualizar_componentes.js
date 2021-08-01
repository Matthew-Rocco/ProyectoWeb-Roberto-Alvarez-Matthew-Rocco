const cargarTiposComp = async()=>{
    let tipos = await getTiposComp();
    let tipoSelect = document.querySelector("#tipocomp-select");
    tipos.forEach(t => {
        let option = document.createElement("option");
        option.innerText = t;
        tipoSelect.appendChild(option);
    });
}
document.addEventListener("DOMContentLoaded", ()=>{
    cargarTiposComp();
});


document.querySelector("#actualizar-btn").addEventListener("click", async ()=>{
    let idComponente = document.querySelector("#");
    let tipocomp = document.querySelector("#tipocomp-select").value.trim();
    let nombre = document.querySelector("#nombre-txt").value.trim();
    let precio = document.querySelector("#precio-txt").value.trim();
    let descripcion = document.querySelector("#descripcion-txt").value.trim();
    let linkcomp = document.querySelector("#link-txt").value.trim();

    let errores = [];
    if(nombre === ""){
        errores.push("Debe ingresar un nombre");
    }

    if(linkcomp === ""){
        errores.push("Debe ingresar un link");
    }else{
        let componentes = await getComponentes();
        let componenteEncontrado = componentes.find(c=>c.linkcomp.toLowerCase() == linkcomp.toLowerCase());
        if(componenteEncontrado != undefined){
            errores.push("El componente de esa tienda ya existe")
        }
    }
    if(precio === ""){
        errores.push("Debe ingresar un precio");
    }else if(isNaN(precio)){
        errores.push("El precio debe ser numerico");
    }else if(+precio < 0){
        errores.push("El precio no debe ser negativo");
    }

    if(errores.length == 0){
        let componente = {};
        componente.id = idComponente
        componente.tipocomp = tipocomp;
        componente.nombre = nombre;
        componente.precio = precio;
        componente.descripcion = descripcion;
        componente.linkcomp = linkcomp;
        
        let res = await actualizarComponentes(componente);
        Swal.fire("Componente Actualizado", "Componente actualizado exitosamente", "info");
    }else{
        Swal.fire({
            title: "Errores de validacion",
            icon: "warning",
            html: errores.join("<br />")
        });
    }
});