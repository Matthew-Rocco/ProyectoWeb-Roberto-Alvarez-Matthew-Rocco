
document.querySelector("#registrar-btn").addEventListener("click", async ()=>{
    let name = document.querySelector("#name-txt").value.trim();
    let email = document.querySelector("#email-txt").value.trim();
    let password = document.querySelector("#password-txt").value.trim();

    let errores = [];
    if(name === ""){
        errores.push("Debe ingresar un nombre");
    }
    if(email === ""){
        errores.push("Debe ingresar un email");
    }else{
        let users = await getUsers();
        let userEncontrado = users.find(c=>c.email.toLowerCase() == email.toLowerCase());
        if(userEncontrado != undefined){
            errores.push("Email ya ha sido utilizado")
        }
    }
    if(password === ""){
        errores.push("Debe ingresar una contraseña");
    }

    if(errores.length == 0){
        let user = {};
        user.name = name;
        user.email = email;
        user.password = password;
        
        let res = await crearUsers(user);
        Swal.fire("Usuario Creado", "Usuario creado exitosamente", "info");
    }else{
        Swal.fire({
            title: "Errores de validacion",
            icon: "warning",
            html: errores.join("<br />")
        });
    }
});