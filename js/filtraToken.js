const words = ["spray", "limit", "elite", "exuberant", "destruction", "present"];

const filtroToken = document.getElementById("filtroToken");

filtroToken.addEventListener("keyup", function () {
  const result = cryptos.filter((word) => word.id.includes(this.value));

  listaTokens.innerHTML = "";
  result.forEach((element) => {
    criaListaTokens(element);
  });
});
