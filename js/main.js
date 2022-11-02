let cryptos = [];

const limit = 11;

const endpointDaAPI = "https://api.coinstats.app/public/v1/coins?limit=" + limit;

getCoins();

async function getCoins() {
  const res = await fetch(endpointDaAPI);
  cryptos = await res.json();
  cryptos = cryptos.coins;

  // console.table(cryptos);

  cryptos.forEach((element) => {
    criaListaTokens(element);
  });

  findStableCoin(cryptos);
}

// seleciona a stable coin
function findStableCoin(cryptos) {
  const coin = cryptos.find((element) => element.symbol == "USDC");

  const stable = document.getElementById("token2");
  const div2 = stable.querySelector("div");

  div2.innerHTML = `
    <p>
      ${coin.symbol} 
    </p>
    <img src="${coin.icon}">
  `;
}

// Controla a visibilidade da secao que contem a lista de tokens a serem escolhidos
const selecaoDeToken = document.getElementById("selecaoDeToken");
const tokenInput = selecaoDeToken.querySelector("input");
function mostraListaTokens() {
  selecaoDeToken.classList.remove("invisivel");
  tokenInput.focus();
}

function escondeSecao() {
  selecaoDeToken.classList.add("invisivel");
}

const tokenEscolhido = document.getElementById("token1");
const div = tokenEscolhido.querySelector("div");
function mostraTokenSelecionado(coin) {
  div.innerHTML = `
    <p id="${coin.id}">
      ${coin.symbol} 
    </p>
    <img src="${coin.icon}">
  `;

  quantidadeToken1.disabled = false;
}

const quantidadeToken1 = document.getElementById("quantidade");
const output = document.querySelector("output");
let preco;
quantidadeToken1.addEventListener("keyup", function () {
  console.log(this.value);

  output.textContent = "~$ " + this.value * preco;
});

const btnOff = document.querySelector("[data-btn=off]");
const btnOn = document.querySelector("[data-btn=on]");
btnOff.addEventListener("click", () => {
  btnOn.classList.remove("ativo");
  btnOff.classList.add("ativo");
  btnOn.disabled = false;
  let canvas = document.querySelector("canvas");
  canvas.remove();
});

btnOn.addEventListener("click", () => {
  btnOff.classList.remove("ativo");
  btnOn.classList.add("ativo");
  btnOff.disabled = false;
  btnOn.disabled = true;
  criaCanvas();
  getPrice();
});

function criaCanvas() {
  let secSwap = document.querySelector(".secSwap");
  let seContainer = document.querySelector(".sec-container");
  let canvas = document.createElement("canvas");
  canvas.id = "myChart";

  seContainer.insertBefore(canvas, secSwap);
}
