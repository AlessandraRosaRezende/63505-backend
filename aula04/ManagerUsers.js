const fs = require('fs').promises;

class ManagerUsers {
  constructor(path) {
    this.path = path
  }

  #lerArquivo = async() => {
    let resultado = await fs.readFile(this.path, 'utf-8');
    const resultadoParsed = await JSON.parse(resultado);
    return resultadoParsed  
  }

  #gravarUsuario = async (data) => {
    const dataToSave = await JSON.stringify(data);
    await fs.writeFile(this.path, dataToSave)
  }

  consultaUsuario = async() => {
    const result = await this.#lerArquivo();
    return result
  }

  criarUsuario = async(nome, sobrenome, idade, curso) => {
    let resultado = await this.#lerArquivo();

    const user = {
      nome,
      sobrenome,
      idade,
      curso
    }
    resultado.push(user);

    await this.#gravarUsuario(resultado)
  }

  consultaByName = async (nome) => {
    const resultadoParsed = await this.#lerArquivo();
    const userFound = resultadoParsed.find((user) => user.nome === nome);
    return userFound;
  };
}

main = async () => {
  const userManager = new ManagerUsers('./data/usuarios.json');

  await userManager.criarUsuario("John", "Doe", '25', "frontend")

  const user = await userManager.consultaUsuario();
  console.log(user);

  await userManager.criarUsuario("Alessandra", "Rezende", '37', "backend");
  const user2 = await userManager.consultaUsuario();
  console.log(user2);

  const userName = await userManager.consultaByName("John");
  console.log(userName);
}

main()