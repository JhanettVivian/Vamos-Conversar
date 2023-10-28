//Configuração Firebase

var nome = localStorage.getItem("Login");
document.getElementById("nome").innerHTML=nome;

function sair() {
        localStorage.removeItem("Login");
        localStorage.removeItem("nomeSala");
        window.location = "../index.html";
    }
