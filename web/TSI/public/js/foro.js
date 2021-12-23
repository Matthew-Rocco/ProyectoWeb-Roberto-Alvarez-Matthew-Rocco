const cargarForo = (hilos) => {
    let cuerpo = document.querySelector("#cuerpo");
    cuerpo.innerHTML = "";
    if (hilos.length == 0) {
        let div = document.createElement("div")
        div.innerHTML = `
            <h1 class="m-5 pb-5">El foro esta vacío</h1>
        `
        cuerpo.appendChild(div);
    } else {
        cuerpo.innerHTML = "";

        for (let i = 0; i < hilos.length; i++) {
            let div = document.createElement("div")
            div.setAttribute("class", "mb-2 card");
            div.innerHTML = `
            <a class="nav-link" href="hilo_foro" id="link${i}">
                <div class="btn pt-2" id="hilo-${i}">
                    <p class="fs-2" style="margin-bottom:0" id="titulo-${i}">${hilos[i].titulo}</p>
                    <input type="text" class="form-control d-none" id="id-hilo-${i}"
                    value="${hilos[i].id}">
                </div>
            </a>
        `
            cuerpo.appendChild(div);
        }
    }
}


document.addEventListener("DOMContentLoaded", async() => {
    let hilos = await getHiloForos();
    cargarForo(hilos);


    for (let i = 0; i < hilos.length; i++) {
        document.querySelector(`#link${i}`).addEventListener("click", async() => {
            localStorage.setItem('id', document.querySelector(`#id-hilo-${i}`).value)
        });
    }
});

document.querySelector("#agregar-foro").addEventListener("click", () => {
    window.location.assign("agregar_foro");
});