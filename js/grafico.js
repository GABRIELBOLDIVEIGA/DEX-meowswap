

// getPrice();

async function getPrice() {
//////////////////////////////////////////////////
let historicoDePreco= [];

let onlyPrice = [];

const tokenEscolhido = document.getElementById("token1");

const moeda = tokenEscolhido.querySelector('p')
// const moeda = "cardano";

const timeFrame = "1w";

const endpointDaAPI_historico = `https://api.coinstats.app/public/v1/charts?period=${timeFrame}&coinId=${moeda.id}`;


//////////////////////////////////////////////////



  const res = await fetch(endpointDaAPI_historico);
  historicoDePreco = await res.json();

  var x = Object.values(historicoDePreco);

  for (var i = x[0].length - 10; i < x[0].length; i++) {
    onlyPrice.push(x[0][i][1]);
  }

  // console.log(onlyPrice);

  creatChart(onlyPrice)
}

function creatChart(preco) {
  const labels = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const data = {
    labels: labels,
    datasets: [
      {
        label: "Price",
        backgroundColor: "hsl(60, 100%, 72%)",
        borderColor: "hsl(60, 100%, 72%)",
        data: preco,
      },
    ],
  };

  const config = {
    type: "line",
    data: data,
    options: {},
  };

  const myChart = new Chart(document.getElementById("myChart"), config);
}

// function creatChart(preco) {
//   const labels = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//   const data = {
//     labels: labels,
//     datasets: [
//       {
//         label: "Price",
//         backgroundColor: "hsl(60, 100%, 72%)",
//         borderColor: "hsl(60, 100%, 72%)",
//         data: preco,
//       },
//     ],
//   };

//   const config = {
//     type: "line",
//     data: data,
//     options: {},
//   };

//   const myChart = new Chart(document.getElementById("myChart"), config);
// }
