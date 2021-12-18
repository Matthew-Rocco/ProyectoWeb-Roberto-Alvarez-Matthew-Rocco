const cargarTipoComp = async() => {
    let tipos = await getTipoComp();
    let tipoSelect = document.querySelector("#tipocomp-select");
    tipos.forEach(t => {
        let option = document.createElement("option");
        option.innerText = t["nom_tipo_comp"];
        option.value = t["id"];
        tipoSelect.appendChild(option);
    });
}
const cargarTiposComp = async() => {
    let tipos = await getTipoComp();
    let tipoSelect = document.querySelector("#tiposcomp-select");
    tipos.forEach(t => {
        let option = document.createElement("option");
        option.innerText = t["nom_tipo_comp"];
        option.value = t["id"];
        tipoSelect.appendChild(option);
    });
}