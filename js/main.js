let cryptos = [];

const limit = 11;

const endpointDaAPI = "https://api.coinstats.app/public/v1/coins?limit=" + limit;

getCoins();

async function getCoins() {
  const res = await fetch(endpointDaAPI);
  cryptos = await res.json();
  cryptos = cryptos.coins;

  console.table(cryptos);

  cryptos.forEach((element) => {
    criaListaTokens(element);
  });

  findStable(cryptos);

  // console.log(cryptos[0].price.toFixed(2));
}

// ********************************************************************

// seleciona a stable coin
function findStable(cryptos) {
  const coin = cryptos.find((element) => element.symbol == "USDC");
  
  const stable = document.getElementById("stableCoin");
  const div2 = stable.querySelector('div')

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
  tokenInput.value = "";
  selecaoDeToken.classList.add("invisivel");
}

// Cria a lista de Token com base na API
const listaTokens = document.querySelector("#listaTokens");

function criaListaTokens(crypto) {
  const li = document.createElement("li");
  li.id = crypto.id;
  li.innerHTML = `
    <div>
      <img src="${crypto.icon}" />
      <p>${crypto.symbol}</p>
    </div>
      <p>${crypto.name}</p>
  `;

  li.addEventListener("click", function () {
    const tokenSelecionado = cryptos.find((element) => element.id == this.id);
    mostraTokenSelecionado(tokenSelecionado);
    preco = tokenSelecionado.price.toFixed(2);
    console.log(tokenSelecionado);

    escondeSecao();
  });

  listaTokens.appendChild(li);
}

const tokenEscolhido = document.getElementById("tokenEscolhido");
const div = tokenEscolhido.querySelector('div')
function mostraTokenSelecionado(coin) {
  div.innerHTML = `
    <p>
      ${coin.symbol} 
    </p>
    <img src="${coin.icon}">
  `;
}

const quantidade = document.getElementById('quantidade');
const output = document.querySelector('output');
let preco;
quantidade.addEventListener('keyup', function() {
  console.log(this.value);

  output.textContent = this.value * preco;
});
