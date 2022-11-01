const token = document.querySelectorAll("[data-token]");

token.forEach((element) => {
  element.addEventListener("click", function () {
    mostraListaTokens();
    
    
  });
});
