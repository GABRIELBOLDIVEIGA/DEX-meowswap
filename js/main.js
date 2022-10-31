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


  // console.log(cryptos[0].price.toFixed(2));
}
