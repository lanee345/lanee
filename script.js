// Seleciona o botão e o menu
const botao = document.getElementById("menu-hamburguer");
const menu = document.getElementById("menu");

// Abre e fecha o menu hambúrguer
botao.addEventListener("click", function() {

    menu.classList.toggle("ativo");

    // Altera o ícone do botão
    if (menu.classList.contains("ativo")) {
        botao.innerHTML = "✕";
    } else {
        botao.innerHTML = "☰";
    }

});

// Fecha o menu ao clicar em algum link
const links = document.querySelectorAll("#menu a");

links.forEach(function(link) {
    link.addEventListener("click", function() {
        menu.classList.remove("ativo");
        botao.innerHTML = "☰";
    });
});
