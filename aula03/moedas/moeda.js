// https://docs.awesomeapi.com.br/api-de-moedas

const axios = require("axios");

const fetch = async (de, para) => {
  try {
    const baseURL = "http://economia.awesomeapi.com.br/lat/";
    const url = `${baseURL}${de}-${para}`;
    console.log(url)
    const { data } = await axios.get(url);
    return data;
  } catch (err) {
    console.log(err);
  }
};

const main = async () => {
  try {
    const resposta = await fetch("USD", "BRL");
    console.log(resposta)
    //const dolar = +resposta.USDBRL.high;
    const dolar = Number(resposta.USDBRL.high);
    console.log(`Um Dolar equivale aproximadamente ${dolar.toFixed(2)} reais`);
  } catch (error) {
    console.log(error);
  }
};

main();
