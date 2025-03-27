const fs = require("fs").promises;

const operacoesAsync = async () => {
  try {
    let resultado = await fs.readFile("./data/data.json", "utf-8");
    console.log("antes", typeof resultado, resultado);

    const resultadoParsed = JSON.parse(resultado);
    // resultadoParsed.forEach(element => {
    //   console.log(element.name)
    // });
  
    console.log("depois", typeof resultadoParsed, resultadoParsed);
  } catch (error) {
    console.log("Error", error);
  }
};

operacoesAsync();