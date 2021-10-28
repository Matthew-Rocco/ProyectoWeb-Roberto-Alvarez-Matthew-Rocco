const actualizar = async function(){


    let tipocomp = document.querySelector("#tipo-actualizar").value.trim();
    let nombre = document.querySelector("#nombre-txt").value.trim();
    let precio = document.querySelector("#precio-txt").value.trim();
    let descripcion = document.querySelector("#descripcion-txt").value.trim();
    let linkcomp = document.querySelector("#link-txt").value.trim();

    let errores = [];
    if(nombre === ""){
        errores.push("Debe ingresar un nombre");
    }
    if(precio === ""){
        errores.push("Debe ingresar un precio");
    }else if(isNaN(precio)){
        errores.push("El precio debe ser numerico");
    }else if(+precio < 0){
        errores.push("El precio no debe ser negativo");
    }
    if(descripcion === ""){
        errores.push("Debe ingresar una descripción");
    }
    if(linkcomp === ""){
        errores.push("Debe ingresar un link");
    }

    if(errores.length == 0){
        let idComponente = this.idComponente;
        let componente = await buscarPorId(idComponente);
    
        componente.tipocomp = document.querySelector("#tipo-actualizar").value;
        componente.nombre = document.querySelector("#nombre-txt").value;
        componente.precio = +document.querySelector("#precio-txt").value;
        componente.descripcion = document.querySelector("#descripcion-txt").value;
        componente.linkcomp = document.querySelector("#link-txt").value;
    
        let resp = await Swal.fire({title: "Actualizar Componente", text:"Desea actualizar el componente?",icon:"question",showCancelButton:true});
    
        if(resp.isConfirmed){
            if(await actualizarComponente(componente)){
                actualizarComponente(componente);
                let filtro = document.querySelector("#filtro-cbx").value;
                let componentes = await getComponentes(filtro);
                cargarTabla(componentes);
                Swal.fire("Componente actualizado", "Componente actualizado exitosamente", "info");
            }else{
                Swal.fire("Error", "No se pudo atender la solicitud", "error");
            }
        } else {
            Swal.fire("Cancelado","Cancelado a peticion del usuario", "info");
        }
    }else{
        Swal.fire({
            title: "Errores de validacion",
            icon: "warning",
            html: errores.join("<br />")
        });
    }



    
};

const iniciarActualizacion = async function(){
    let idComponente = this.idComponente;
    document.location.href='http://localhost:8084/TSI/public/actualizar_componente';
    let componente = await buscarPorId(idComponente);
    document.querySelector("#tipo-actualizar").value = componente.tipocomp;
    document.querySelector("#nombre-txt").value = componente.nombre;
    document.querySelector("#precio-txt").value = componente.precio;
    document.querySelector("#descripcion-txt").value = componente.descripcion;
    document.querySelector("#link-txt").value = componente.linkcomp;

    document.querySelector("#actualizar-btn").idComponente = idComponente;
    document.querySelector("#actualizar-btn").addEventListener("click", actualizar);
};