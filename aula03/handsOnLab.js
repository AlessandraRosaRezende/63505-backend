const soma = (num1, num2) => {
  return new Promise((resolve, reject) => {
    if (num1 === 0 || num2 === 0) {
      reject("Operação desnecessária");
    }
    const result = num1 + num2;
    if (result < 0) {
      reject("A calculadora só deve retornar resultados positivos")
    } else {
      resolve(result)
    }
  })
}

const subtracao = (num1, num2) => {
  return new Promise((resolve, reject) => {
    if (num1 === 0 || num2 === 0) {
      reject("Operação inválida");
    }
    const result = num1 - num2;
    if (result < 0) {
      reject("Subtração - A calculadora só deve retornar resultados positivos")
    } else {
      resolve(result)
    }
  })
}

const multiplicacao = (num1, num2) => {
  return new Promise((resolve, reject) => {
    if (num1 < 0 || num2 < 0) {
      reject("Operação inválida");
    }
    const result = num1 * num2;
    if (result < 0) {
      reject("A calculadora só deve retornar resultados positivos")
    } else {
      resolve(result)
    }
  })
}

const divisao = (num1, num2) => {
  return new Promise((resolve, reject) => {
    if (num1 < 0 || num2 < 0) {
      reject("Operação inválida");
    }
    const result = num1 / num2;
    if (result < 0) {
      reject("A calculadora só deve retornar resultados positivos")
    } else {
      resolve(result)
    }
  })
}

const calculos = async () => {
  try {
    const somatorio = await soma(10, 20)
    console.log('soma: ', somatorio);

    const subtraindo = await subtracao(10, 20)
    console.log('subtracao: ', subtraindo);
  } catch (error) {
    console.log(error);
  }
}

calculos()