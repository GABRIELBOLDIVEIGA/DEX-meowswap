let cryptosCoinGecko = [];

const endpointDaAPI2 = "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Ccardano%2CApeCoin%2CChainlink%2CLitecoin%2CUniswap%2CPolkadot%2CPolygon%2CSolana%2CBNB%2CEthereum&vs_currencies=usd";

get100cryptos();

async function get100cryptos() {
  const res = await fetch(endpointDaAPI2);
  cryptosCoinGecko = await res.json();

  console.table(cryptosCoinGecko);

  console.log(cryptosCoinGecko.apecoin.usd)
}
