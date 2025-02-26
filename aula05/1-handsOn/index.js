const gerarNumeroAleatorio = () => {
  const numeros = Math.floor(Math.random() *20) +1;
  return numeros
};

const geraLista = (limit) => {
  const array = new Array(limit);
  for (let i = 0; i < limit; i++) {
    array[i] = gerarNumeroAleatorio();
  }
  console.log(array);
  return array;
}

const contagemDeNumeros = (lista) => {
  const numeros = {}
  lista.forEach((numero) => {
    console.log(numero, numeros[numero]);
    if (!numeros[numero]) {
      numeros[numero] = 1
    } else {
      numeros[numero] += 1
    }
  });
  return numeros;
}

const main = () => {
  const lista = geraLista(10);
  console.log(lista);
  const contagem = contagemDeNumeros(lista);
  console.log(contagem);
}

main();