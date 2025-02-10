const divisao = (dividendo, divisor) => {
  return new Promise((resolve, reject) => {
    // setTimeout(() => {
    if (divisor === 0) {
      console.log("ïf")
      reject("Não é possível dividir por zero");
    } else if (divisor === 1) {
      reject("Não quero dividir por 1")
    } else {
      console.log("else")
      resolve(dividendo / divisor);
    }
    // }, 2000);
  });
};

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

// divisao(4, 2)
//   .then((result) => {
//     console.log(".then do divisao: ", result);
//     ehPar(result)
//       .then((result) => {
//         divisao(result / 2)
//           .then((result) => {
//             console.log(".then do ehPar: ", result);
//           })
//           .catch((error) => {
//             console.log(".catch do eh par: ", error);
//           })
//         console.log(".then do ehPar: ", result);
//       })
//       .catch((error) => {
//         console.log(".catch do eh par: ", error);
//       });
//   })
//   .catch((error) => {
//     console.log(".cath do dividir: ", error);
//   });

const final = async () => {
  try {
    const valor1 = await divisao(4,2);
    const valor2 = await ehPar(valor1);
    console.log('com await', valor2);

    const valor3 = await divisao(4, 1);
    const valor4 = await ehPar(valor3);
    console.log('com await', valor4);
  } catch(error) {
    console.log('erro do await: ', error);
  }
}

final()