const cargarMarcas = async() => {
    let marcas = await getMarcas();
    let marcasSelect = document.querySelector("#marca-select");
    marcas.forEach(m => {
        let option = document.createElement("option");
        option.innerText = m["nom_marca"];
        option.value = m["id"];
        marcasSelect.appendChild(option);
    });
}