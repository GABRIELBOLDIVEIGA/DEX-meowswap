const btnSeta = document.getElementById("seta");

const inputToken1 = document.getElementById("inputToken1");
const inputToken2 = document.getElementById("inputToken2");

const price = document.querySelectorAll("[data-preco]");

var listaPreco = [price[0], price[1]];

const nodeTokens = document.querySelectorAll("[data-token]");

var listaAUX = [nodeTokens[0], nodeTokens[1]];

btnSeta.addEventListener("click", function () {
  listaAUX.reverse();
  listaPreco.reverse();

  inputToken1.innerHTML = "";
  inputToken1.appendChild(listaAUX[0]);
  inputToken1.appendChild(listaPreco[0]);
  inputToken2.innerHTML = "";
  inputToken2.appendChild(listaAUX[1]);
  inputToken2.appendChild(listaPreco[1]);
});
