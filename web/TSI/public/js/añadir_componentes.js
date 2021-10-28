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

document.querySelector("#registrar-btn").addEventListener("click", async ()=>{
    let tipocomp = document.querySelector("#tipocomp-select").value.trim();
    let nombre = document.querySelector("#nombre-txt").value.trim();
    let valoracion = document.querySelector("#valoracion-txt").value.trim();
    let descripcion = document.querySelector("#descripcion-txt").value.trim();
    let imagen = document.querySelector("#imagen").value.trim();

    let errores = [];
    if(nombre === ""){
        errores.push("Debe ingresar un nombre");
    }

    if(imagen === ""){
        errores.push("Debe ingresar una imagen");
    }

    if(valoracion === ""){
        errores.push("Debe ingresar una valoracion");
    }else if(isNaN(valoracion)){
        errores.push("La valoracion debe ser numerica");
    }else if(valoracion < 0){
        errores.push("La valoracion no debe ser negativa");
    }else if(valoracion > 10){
        errores.push("La valoracion debe estar entre 0 y 10");
    }

    if(descripcion === ""){
        errores.push("Debe ingresar una descripcion");
    }

    if(errores.length == 0){
        let componente = {};
        componente.tipocomp = tipocomp;
        componente.nombre = nombre;
        componente.valoracion = valoracion;
        componente.descripcion = descripcion;
        componente.imagen = imagen;
        
        let res = await crearComponentes(componente);
        Swal.fire("Componente Creado", "Componente creado exitosamente", "info");
    }else{
        Swal.fire({
            title: "Errores de validacion",
            icon: "warning",
            html: errores.join("<br />")
        });
    }
});