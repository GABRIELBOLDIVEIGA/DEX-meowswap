var input1 = document.getElementById("inputToken1");
var bordaSetaCima = document.getElementById("stroke-border-cima");
var input2 = document.getElementById("inputToken2");
var bordaSetaBaixo = document.getElementById("stroke-border-baixo");

function mudaBorda() {
  var input = document.getElementById("quantidade");
  console.log(input.parentNode.parentNode.id);
  posicao = input.parentNode.parentNode.id;
  console.log(posicao);

  if (posicao == "inputToken1") {
    input1.style.borderColor = "rgb(245, 232, 103)";
    bordaSetaCima.style.stroke = "rgb(245, 232, 103)";

    input2.style.borderColor = "#49333E";
    bordaSetaBaixo.style.stroke = "#49333E";
  }

  if (posicao == "inputToken2") {
    input2.style.borderColor = "rgb(245, 232, 103)";
    bordaSetaBaixo.style.stroke = "rgb(245, 232, 103)";

    input1.style.borderColor = "#49333E";
    bordaSetaCima.style.stroke = "#49333E";
  }
}

function resetaBorda() {
  input1.style.borderColor = "#49333E";
  bordaSetaCima.style.stroke = "#49333E";
  input2.style.borderColor = "#49333E";
  bordaSetaBaixo.style.stroke = "#49333E";
}
