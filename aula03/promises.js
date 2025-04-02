const divisao = (dividendo, divisor) => {
  return new Promise((resolve, reject) => {
    // setTimeout(() => {
      if (divisor === 0) {
        console.log("ïf")
        reject("Não é possível dividir por zero");
      } else {
        console.log("else")
        resolve(dividendo / divisor);
      }
    // }, 2000);
  });
};

// console.log(divisao(4,2));

divisao(4,2)
  .then((result) => console.log(result))
  .catch((error) => console.log(error))

const ehPar = (num) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (num % 2 === 0) {
        resolve(`${num} é Par`);
      } else {
        reject(`${num} não é Par`);
      }
    }, 1000);
  });
};

divisao(4, 0)
  .then((result) => {
    console.log(".then do divisao: ", result);
    ehPar(result)
      .then((result) => {
        divisao(result / 2)
          .then((result) => {
            console.log(".then do ehPar: ", result);
          })
          .catch((error) => {
            console.log(".catch do eh par: ", error);
          })
        console.log(".then do ehPar: ", result);
      })
      .catch((error) => {
        console.log(".catch do eh par: ", error);
      });
  })
  .catch((error) => {
    console.log(".cath do dividir: ", error);
  });