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
    console.log(this);
  });

  listaTokens.appendChild(li);
}
