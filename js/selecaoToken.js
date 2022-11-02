const token1 = document.getElementById('token1')
token1.addEventListener("click", function () {
  mostraListaTokens();
})

const quantidadeToken1 = document.getElementById("quantidade");
const output = document.querySelector("output");
let preco;
quantidadeToken1.addEventListener("keyup", function () {
  // console.log(this.value);

  output.textContent = "~$ " + this.value * preco;
});