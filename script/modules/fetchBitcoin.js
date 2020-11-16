export default function initFetchBitcoin() {
  fetch("https://blockchain.info/ticker")
    .then((response) => response.json())
    .then(({ BRL: { sell } }) => {
      const btcPreco = document.querySelector(".btc-preco");
      btcPreco.innerText = (100 / sell).toFixed(4);
    })
    .catch((erro) => console.log(Error(erro)));
}
