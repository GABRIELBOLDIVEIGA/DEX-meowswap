const filtroToken = document.getElementById("filtroToken");

filtroToken.addEventListener("keyup", function () {
  const result = cryptos.filter((word) => {
    let wordId = word.id.toUpperCase();
    let wordName = word.name.toUpperCase();
    let wordSymbol = word.symbol.toUpperCase();
    let entrada = this.value.toUpperCase();

    if (wordId.includes(entrada) || wordName.includes(entrada) || wordSymbol.includes(entrada)) {
      return true;
    } else {
      return false;
    }
  });

  listaTokens.innerHTML = "";
  result.forEach((element) => {
    criaListaTokens(element);
  });
});
