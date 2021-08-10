const cargarCombosListas= async ()=>{
    let almacenamientoSelect = document.querySelector("#gabinete-select");
    let componentes = await getComponentes("Gabinete");
    //let preciogab = document.querySelector("#preciogab-txt");

    for(let i=0; i < componentes.length; ++i){
        let option = document.createElement("option");
        option.innerText = componentes[i].nombre + " $" + componentes[i].precio;
        almacenamientoSelect.appendChild(option);
    };

    almacenamientoSelect = document.querySelector("#placamadre-select");
    componentes = await getComponentes("Placa Madre");
    for(let i=0; i < componentes.length; ++i){
        let option = document.createElement("option");
        option.innerText = componentes[i].nombre + " $" + componentes[i].precio;
        almacenamientoSelect.appendChild(option);
    };

    almacenamientoSelect = document.querySelector("#procesador-select");
    componentes = await getComponentes("Procesador");
    for(let i=0; i < componentes.length; ++i){
        let option = document.createElement("option");
        option.innerText = componentes[i].nombre + " $" + componentes[i].precio;
        almacenamientoSelect.appendChild(option);
    };

    almacenamientoSelect = document.querySelector("#tarjetavideo-select");
    componentes = await getComponentes("Tarjeta de Video");
    for(let i=0; i < componentes.length; ++i){
        let option = document.createElement("option");
        option.innerText = componentes[i].nombre + " $" + componentes[i].precio;
        almacenamientoSelect.appendChild(option);
    };

    almacenamientoSelect = document.querySelector("#almacenamiento-select");
    componentes = await getComponentes("Almacenamiento");
    for(let i=0; i < componentes.length; ++i){
        let option = document.createElement("option");
        option.innerText = componentes[i].nombre + " $" + componentes[i].precio;
        almacenamientoSelect.appendChild(option);
    };

    almacenamientoSelect = document.querySelector("#fuentepoder-select");
    componentes = await getComponentes("Fuente de Poder");
    for(let i=0; i < componentes.length; ++i){
        let option = document.createElement("option");
        option.innerText = componentes[i].nombre + " $" + componentes[i].precio;
        almacenamientoSelect.appendChild(option);
    };

    almacenamientoSelect = document.querySelector("#ram-select");
    componentes = await getComponentes("Memoria RAM");
    for(let i=0; i < componentes.length; ++i){
        let option = document.createElement("option");
        option.innerText = componentes[i].nombre + " $" + componentes[i].precio;
        almacenamientoSelect.appendChild(option);
    };

    almacenamientoSelect = document.querySelector("#cooler-select");
    componentes = await getComponentes("Cooler");
    for(let i=0; i < componentes.length; ++i){
        let option = document.createElement("option");

        option.innerText = componentes[i].nombre + " $" + componentes[i].precio;
        almacenamientoSelect.appendChild(option);
    };
};


document.querySelector("#registrar-btn").addEventListener("click", async ()=>{
    let precio;
    let titulo = document.querySelector("#titulo-txt").value.trim();

    let gabinete = ((document.querySelector("#gabinete-select").value).split("$"))[0];
    precio = +((document.querySelector("#gabinete-select").value).split("$"))[1];

    let placamadre = ((document.querySelector("#placamadre-select").value).split("$"))[0];
    precio = precio + +((document.querySelector("#placamadre-select").value).split("$"))[1];

    let procesador = ((document.querySelector("#procesador-select").value).split("$"))[0];
    precio = precio + +((document.querySelector("#procesador-select").value).split("$"))[1];

    let tarjetavideo = ((document.querySelector("#tarjetavideo-select").value).split("$"))[0];
    precio = precio + +((document.querySelector("#tarjetavideo-select").value).split("$"))[1];

    let almacenamiento = ((document.querySelector("#almacenamiento-select").value).split("$"))[0];
    precio = precio + +((document.querySelector("#almacenamiento-select").value).split("$"))[1];

    let fuentepoder = ((document.querySelector("#fuentepoder-select").value).split("$"))[0];
    precio = precio + +((document.querySelector("#fuentepoder-select").value).split("$"))[1];

    let ram = ((document.querySelector("#ram-select").value).split("$"))[0];
    precio = precio + +((document.querySelector("#ram-select").value).split("$"))[1];

    let cooler = ((document.querySelector("#cooler-select").value).split("$"))[0];
    precio = precio + +((document.querySelector("#cooler-select").value).split("$"))[1];

    let errores = [];
    if(titulo === ""){
        errores.push("Debe ingresar un titulo");
    }

    if(errores.length == 0){
        let lista = {};
        lista.titulo = titulo;
        lista.gabinete = gabinete;
        lista.placamadre = placamadre;
        lista.procesador = procesador;
        lista.tarjetavideo = tarjetavideo;
        lista.almacenamiento = almacenamiento;
        lista.fuentepoder = fuentepoder;
        lista.ram = ram;
        lista.cooler = cooler;
        lista.precio = precio;
        
        
        let res = await crearLista(lista);
        Swal.fire("Lista Creada", "Lista creada exitosamente", "info");
        window.location.href = "mi_lista";
    }else{
        Swal.fire({
            title: "Errores de validacion",
            icon: "warning",
            html: errores.join("<br />")
        });
    }
});




const iniciarEliminacion = async function(){
    let id = this.idLista;
    let resp = await Swal.fire({title: "Esta seguro?", text:"Esta operacion es irreversible",icon:"error",showCancelButton:true});

    if(resp.isConfirmed){
        if(await eliminarListas(id)){
            let listas = await getListas();
            cargarTabla(listas);
            Swal.fire("Lista eliminada", "Lista eliminada exitosamente", "info");
        }else{
            Swal.fire("Error", "No se pudo atender la solicitud", "error");
        }
    } else {
        Swal.fire("Cancelado","Cancelado a peticion del usuario", "info");
    }
};

const actualizar = async function(){
    let idLista = this.idLista;
    let lista = await buscarListaPorId(idLista);
    let molde = this.parentNode.parentNode;
    lista.titulo = molde.querySelector(".titulo-txt").value;
    lista.gabinete = molde.querySelector(".gabinete-txt").value;
    lista.placamadre = molde.querySelector(".placamadre-txt").value;
    lista.procesador = molde.querySelector(".procesador-txt").value;
    lista.tarjetavideo = molde.querySelector(".tarjetavideo-txt").value;
    lista.almacenamiento = molde.querySelector(".almacenamiento-txt").value;
    lista.fuentepoder = molde.querySelector(".fuentepoder-txt").value;
    lista.ram = molde.querySelector(".ram-txt").value;
    lista.cooler = molde.querySelector(".cooler-txt").value;
    lista.precio = +molde.querySelector(".precio-txt").value;

    await actualizarLista(lista);
    await Swal.close();
    
    let listas = await getListas();
    cargarTabla(listas);
};


const iniciarActualizacion = async function(){
    let idLista = this.idLista;
    let lista = await buscarListaPorId(idLista);
    let molde = document.querySelector(".molde-actualizar").cloneNode(true);
    molde.querySelector(".titulo-txt").value = lista.titulo;
    molde.querySelector(".gabinete-txt").innerText = lista.gabinete;
    molde.querySelector(".placamadre-txt").innerText = lista.placamadre;
    molde.querySelector(".procesador-txt").innerText = lista.procesador;
    molde.querySelector(".tarjetavideo-txt").innerText = lista.tarjetavideo;
    molde.querySelector(".almacenamiento-txt").innerText = lista.almacenamiento;
    molde.querySelector(".fuentepoder-txt").innerText = lista.fuentepoder;
    molde.querySelector(".ram-txt").innerText = lista.ram;
    molde.querySelector(".cooler-txt").innerText = lista.cooler;
    molde.querySelector(".precio-txt").innerText = lista.precio;

    molde.querySelector(".actualizar-btn").idLista = idLista;
    molde.querySelector(".actualizar-btn").addEventListener("click", actualizar);
    await Swal.fire({
        title:"Actualizar",
        html: molde,
        confirmButtonText: "Cerrar"
    });
}

const cargarTabla = (listas)=>{
    let tbody = document.querySelector("#tbody-listas");
    tbody.innerHTML = "";
    for(let i=0; i < listas.length; ++i){
        
        let tr1 = document.createElement("tr");
        let tr2 = document.createElement("tr");
        let tr3 = document.createElement("tr");
        let tr4 = document.createElement("tr");
        let tr5 = document.createElement("tr");
        let tr6 = document.createElement("tr");
        let tr7 = document.createElement("tr");
        let tr8 = document.createElement("tr");
        let tr9 = document.createElement("tr");
        let tr10 = document.createElement("tr");
        let tr11 = document.createElement("tr");
        

        let tdTitulo = document.createElement("td");
        tdTitulo.innerText = "Titulo: " + listas[i].titulo;

        let tdGabinete = document.createElement("td");
        tdGabinete.innerText = "Gabinete: " + listas[i].gabinete;

        let tdPlacaMadre = document.createElement("td");
        tdPlacaMadre.innerText = "Placa Madre: " + listas[i].placamadre;

        let tdProcesador = document.createElement("td");
        tdProcesador.innerText = "Procesador: " + listas[i].procesador;

        let tdTarjetaVideo = document.createElement("td");
        tdTarjetaVideo.innerText = "Tarjeta de Video: " + listas[i].tarjetavideo;

        let tdAlmacenamiento = document.createElement("td");
        tdAlmacenamiento.innerText = "Almacenamiento: " + listas[i].almacenamiento;

        let tdFuentePoder = document.createElement("td");
        tdFuentePoder.innerText = "Fuente de Poder: " + listas[i].fuentepoder;

        let tdRAM = document.createElement("td");
        tdRAM.innerText = "Memoria RAM: " + listas[i].ram;

        let tdCooler = document.createElement("td");
        tdCooler.innerText = "Cooler: " + listas[i].cooler;

        let tdAcciones = document.createElement("td");

        let botonEliminar = document.createElement("button");
        botonEliminar.innerText = "Eliminar";
        botonEliminar.classList.add("btn","btn-danger");
        botonEliminar.idLista = listas[i].id;
        botonEliminar.addEventListener("click", iniciarEliminacion)
        tdAcciones.appendChild(botonEliminar);

        let tdPrecio = document.createElement("td");
        tdPrecio.innerText = "Precio Final: $" + listas[i].precio;

        let botonActualizar = document.createElement("button");
        botonActualizar.innerText = "Actualizar";
        botonActualizar.classList.add("btn","btn-primary");
        botonActualizar.idLista = listas[i].id;
        botonActualizar.addEventListener("click", iniciarActualizacion);
        tdAcciones.appendChild(botonActualizar);

        tr1.appendChild(tdTitulo);
        tr2.appendChild(tdGabinete);
        tr3.appendChild(tdPlacaMadre);
        tr4.appendChild(tdProcesador);
        tr5.appendChild(tdTarjetaVideo);
        tr6.appendChild(tdAlmacenamiento);
        tr7.appendChild(tdFuentePoder);
        tr8.appendChild(tdRAM);
        tr9.appendChild(tdCooler);
        tr10.appendChild(tdPrecio);
        tr11.appendChild(tdAcciones);

        tbody.appendChild(tr1);
        tbody.appendChild(tr2);
        tbody.appendChild(tr3);
        tbody.appendChild(tr4);
        tbody.appendChild(tr5);
        tbody.appendChild(tr6);
        tbody.appendChild(tr7);
        tbody.appendChild(tr8);
        tbody.appendChild(tr9);
        tbody.appendChild(tr10);
        tbody.appendChild(tr11);
    }
};


document.addEventListener("DOMContentLoaded", async ()=>{
    await cargarCombosListas();
    let listas = await getListas();
    cargarTabla(listas);
});