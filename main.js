function entrar() {
    var nome = document.getElementById("nome").value;
    localStorage.setItem("Login", nome);
    window.location.replace("screens/salas.html");
}