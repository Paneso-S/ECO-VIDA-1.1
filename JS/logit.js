console.log('hola');
const user = {
    "email":"admin@admin.com",
    "passwor" : "admin123",
    "user" : "admin"
}

const formulario = document.getElementById("iniciarsesion");

formulario.addEventListener("submit",function (event) {
    event.preventDefault();
    let Correo =document.getElementById("Correo").value;
    let password= document.getElementById("password").value;
    if (user.email === Correo && user.passwor === password) {
        sessionStorage.setItem("user", user.user);
        window.location.href="./tablatiposR.html"
        return
    }
    formulario.reset();
      return alert("usurio no encontrado")
    console.log("entre");

})