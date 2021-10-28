
const iniciarEliminacion = async function(){
    let id = this.idUser;
    let resp = await Swal.fire({title: "Esta seguro?", text:"Esta operacion es irreversible",icon:"error",showCancelButton:true});

    if(resp.isConfirmed){
        if(await eliminarUsers(id)){
            let users = await getUsers();
            cargarTabla(users);
            Swal.fire("Usuario eliminado", "Usuario eliminado exitosamente", "info");
        }else{
            Swal.fire("Error", "No se pudo atender la solicitud", "error");
        }
    } else {
        Swal.fire("Cancelado","Cancelado a peticion del usuario", "info");
    }
};

const actualizar = async function(){
    let idUser = this.idUser;
    let user = await buscarPorId(idUser);

    user.name = document.querySelector("#name-txt").value;
    user.email = +document.querySelector("#email-txt").value;
    user.password = document.querySelector("#password-txt").value;


    let resp = await Swal.fire({title: "Actualizar Usuario", text:"Desea actualizar el Usuario?",icon:"question",showCancelButton:true});

    if(resp.isConfirmed){
        if(await actualizarUsers(user)){
            actualizarUsers(user);
            let filtro = document.querySelector("#filtro-cbx").value;
            let users = await getUsers(filtro);
            cargarTabla(users);
            Swal.fire("Usuario Actualizado", "Usuario actualizado exitosamente", "info");
        }else{
            Swal.fire("Error", "No se pudo atender la solicitud", "error");
        }
    } else {
        Swal.fire("Cancelado","Cancelado a peticion del usuario", "info");
    }
};

const iniciarActualizacion = async function(){
    let idUser = this.idUser;
    let user = await buscarPorId(idUser);
    document.querySelector("#name-txt").value = user.name;
    document.querySelector("#email-txt").value = user.email;
    document.querySelector("#password-txt").value = user.password;

    document.querySelector("#actualizar-btn").idUser = idUser;
    document.querySelector("#actualizar-btn").addEventListener("click", actualizar);
};


const cargarTabla = (users)=>{
    let tbody = document.querySelector("#tbody-user");
    tbody.innerHTML = "";
    for(let i=0; i < users.length; ++i){
        let tr = document.createElement("tr");

        let tdNombre = document.createElement("td");
        tdNombre.innerText = users[i].name;
        let tdEmail = document.createElement("td");
        tdEmail.innerText = users[i].email;
        let tdPassword = document.createElement("td");
        tdPassword.innerText = "**********";
        let tdAcciones = document.createElement("td");

        let botonEliminar = document.createElement("button");
        botonEliminar.innerText = "Eliminar";
        botonEliminar.classList.add("btn","btn-danger");
        botonEliminar.idComponente = users[i].id;
        botonEliminar.addEventListener("click", iniciarEliminacion)
        tdAcciones.appendChild(botonEliminar);

        let botonActualizar = document.createElement("button");
        botonActualizar.innerText = "Actualizar";
        botonActualizar.classList.add("btn","btn-primary");
        botonActualizar.idComponente = users[i].id;
        botonActualizar.addEventListener("click", iniciarActualizacion);
        tdAcciones.appendChild(botonActualizar);

        tr.appendChild(tdNombre);
        tr.appendChild(tdEmail);
        tr.appendChild(tdPassword);
        tr.appendChild(tdAcciones);

        tbody.appendChild(tr);
    }
};

document.addEventListener("DOMContentLoaded", async ()=>{
    let users = await getUsers();
    cargarTabla(users);
});
