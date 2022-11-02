const conectarCarteira = document.querySelector('.conectarCarteira')
const secWallet = document.querySelector('.secWallet')
const fechar = document.getElementById('fechar-secWallet')

// console.log(conectarCarteira)
// console.log(secWallet)

conectarCarteira.addEventListener('click', function() {
  secWallet.classList.remove('invisivel')
})

fechar.addEventListener('click', function() {
  secWallet.classList.add('invisivel')
})