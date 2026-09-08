console.log("Hola");
const user = [
{
  "email": "admin@admin.com",
  "passwor": "admin123",
  "user": "admin"
},
{
  "email": "admin@admin.com",
  "passwor": "admin123",
  "user": "est",
},
{
  "email": "admin@admin.com",
  "passwor": "admin123",
  "user": "maes",
}
//dos formas 
]
function iniciosesion(email,passwor){
  for (let index = 0; index < user.length; index++){
    const element =user[index];
    console.log("elemento",element.email);
    console.log("elemento",element.passwor);
    console.log("elemento",element.user);
  }
  }



const formulario = document.getElementById("iniciarsesion");

formulario.addEventListener("submit", function (event) {
  event.preventDefault();
  let Correo = document.getElementById("Correo").value;
  let password = document.getElementById("password").value;
  if (user.email === Correo && user.passwor === password) {
    sessionStorage.setItem("user", user.user);
    window.location.href = "./tablatiposR.html"
    return
  }
  formulario.reset();
  return alert("usuario no encontrado")
//una forma
  for (const element of user){
    if (element.email=== email && element.passwor===password){
      usuarioencontrado = element;
      break
    }

  }
  if(usuarioencontrado){
    sessionStorage.setItem("user", element.user);
    alert("encontrado");
  }else {
    alert("no encontrado");
  }
  //tresera forma
  let  usuarioencontrado = user.find(element =>
    element.email === email && element.passwor === password
  );







})