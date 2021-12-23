const cargarCategorias = async() => {
    let categorias = await getCategorias();
    let categoriaselect = document.querySelector("#categoria-select");
    categorias.forEach(c => {
        let option = document.createElement("option");
        option.innerText = c["nombre_categoria"];
        option.value = c["id"];
        categoriaselect.appendChild(option);
    });
}