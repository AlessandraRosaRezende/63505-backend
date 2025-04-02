const fs = require('fs').promises;
const crypto = require('crypto');

const lerArquivo = async () => {
  try {
    const result = await fs.readFile('./data/usuarios.json', 'utf-8');
    const resultParsed = await JSON.parse(result);
    console.log(resultParsed);
    return resultParsed;
  } catch (error) {
    console.log(error);
  }
};

const gravarArquivo = async (dados) => {
  try {
    const data = JSON.stringify(dados)
    console.log(data);
    await fs.writeFile('./data/usuarios.json', data)
  } catch (error) {
    console.log(error);
  }
};

const salvarUsuario = async(usuario) => {
  try {
    const listaUsuario = await lerArquivo();
    console.log(listaUsuario);
    usuario.password = crypto
      .createHash("sha256")
      .update(usuario.password)
      .digest('hex');
    console.log('senha hasheada', usuario.password);
    listaUsuario.push(usuario);
    await gravarArquivo(listaUsuario)
  } catch (error) {
    console.log(error);
  }
}

validarUsuario = async(usuario) => {
  const listaUsuario = await lerArquivo();
  const senhaCriptografada = crypto
    .createHash("sha256")
    .update(usuario.password)
    .digest('hex');

  const usuarioEncontrado = listaUsuario.find((user) => {
    return user.name === usuario.name && user.password === senhaCriptografada;
  })
  console.log(senhaCriptografada);

  if (usuarioEncontrado) {
    console.log('Usuário Logado!');
  } else {
    console.log('Usuário não logado');
  }
}

const main = async() => {
  const result = await lerArquivo();
  await salvarUsuario({ "name": "joão", "password": "teste"})

  validarUsuario({ name: 'joão', password: 'teste'})
}

main()


