// Elementos do DOM
const elemento = document.getElementById("container");
console.log(elemento.innerHTML); // retorna todo o conteúdo HTML que está dentro do elemento selecionado, incluindo as tags HTML
console.log(elemento.innerText); // retorna apenas o texto puro que está dentro do elemento selecionado, sem as tags HTML.
console.log(elemento.innerText = "Ola, mundo"); //Substitui o texto antigo pelo informado atualmente
