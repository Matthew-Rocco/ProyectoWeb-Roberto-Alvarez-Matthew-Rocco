const cargarTiposC = async()=>{
    let tipos = await getTiposComp();
    let tipoSelect = document.querySelector("#tipo-actualizar");
    tipos.forEach(t => {
        let option = document.createElement("option");
        option.innerText = t;
        tipoSelect.appendChild(option);
    });
}
document.addEventListener("DOMContentLoaded", ()=>{
    cargarTiposC();
});