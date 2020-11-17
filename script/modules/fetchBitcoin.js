export default function fetchBitcoin(url, target) {
  fetch(url)
    .then((response) => response.json())
    .then(({ BRL: { sell } }) => {
      const btcPreco = document.querySelector(target);
      btcPreco.innerText = (100 / sell).toFixed(4);
    })
    .catch((erro) => console.log(Error(erro)));
}
