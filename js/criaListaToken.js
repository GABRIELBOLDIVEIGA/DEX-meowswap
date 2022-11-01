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

    preco = tokenSelecionado.price.toFixed(2);
    // console.log(tokenSelecionado);

    mostraTokenSelecionado(tokenSelecionado);
    escondeSecao();
  });

  listaTokens.appendChild(li);
}

