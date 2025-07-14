
const tagName = document.getElementsByTagName("p");
console.log(tagName);
const tagNames = document.getElementsByTagName("p");
console.log(tagNames[1].innerText = "Genilson");
//Linha 1:
// Apply to getElementBy...
// Seleciona todos os elementos <p> (parágrafo) do documento HTML.
// O resultado é uma coleção (parecida com um array) chamada HTMLCollection.
// Cada elemento pode ser acessado pelo índice, por exemplo: tagNames[0], tagNames[1], etc.
// Linha 2:
// Apply to getElementBy...
// Acessa o segundo elemento <p> da coleção (índice 1, pois começa do zero).
// Altera o texto desse elemento para "Genilson" usando innerText.
// O valor "Genilson" é atribuído ao texto do parágrafo e, ao mesmo tempo, é exibido no console pelo console.log.
// Resumindo:
// Essas duas linhas pegam todos os parágrafos da página, mudam o texto do segundo <p> para "Genilson" e mostram "Genilson" no console.
// Se precisar de exemplos visuais ou quiser ver como ficaria no HTML, é só pedir!
