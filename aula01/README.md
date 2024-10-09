### Aula: Princípios da Programação Back End com JavaScript e o MERN Stack

---

### **Diferenças entre Front End e Back End**

**Front End:**
- Lida com a interface do usuário e interações.
- Executa no navegador (client-side).
- Focado em design, layout e interatividade usando HTML, CSS e JavaScript.
- Comunica-se com o back end via HTTP para enviar e buscar dados.

**Back End:**
- Lida com a lógica de negócios, manipulação de dados e segurança.
- Executa no servidor (server-side).
- Responsável por processar solicitações, acessar bancos de dados e fornecer APIs para o front end.
- Usa linguagens como JavaScript (Node.js), Python, Ruby e Java.

---

### **Introdução ao MERN Stack**

O MERN Stack é um conjunto de tecnologias para o desenvolvimento full stack, com foco em JavaScript:

1. **MongoDB**: Banco de dados NoSQL orientado a documentos.
2. **Express.js**: Framework para Node.js, usado para criar APIs e gerenciar rotas.
3. **React**: Biblioteca JavaScript para criar interfaces de usuário dinâmicas e reativas.
4. **Node.js**: Ambiente de tempo de execução JavaScript que executa no servidor.

---

### **O que é JavaScript?**

JavaScript é uma linguagem de programação de alto nível usada tanto no **front end** quanto no **back end**. Aqui estão os **tipos de dados básicos**:

- **Number**: Números inteiros ou decimais.
- **String**: Cadeias de caracteres.
- **Boolean**: Valores lógicos (`true` ou `false`).
- **Undefined**: Uma variável foi declarada, mas não recebeu valor.
- **Null**: Representa a ausência intencional de valor.
- **Object**: Coleções de pares chave-valor.
- **Array**: Listas ordenadas de valores.
- **Function**: Blocos de código reutilizáveis.

---

### **Variáveis em JavaScript**

- **`var`**: Declara variáveis com escopo global ou de função. Permite redeclaração.
- **`let`**: Declara variáveis com escopo de bloco. Mais previsível que `var`.
- **`const`**: Declara constantes de escopo de bloco. Não pode ser reatribuída.

Exemplo:
```javascript
let nome = "João";
const PI = 3.14;
```

---

### **O que é Node.js?**

**Node.js** é um ambiente de tempo de execução para JavaScript no lado do servidor. Ele permite executar JavaScript fora do navegador, permitindo que você crie servidores e aplicativos back end com JavaScript.

#### **Vantagens do Node.js**:
- Alta escalabilidade devido ao seu modelo assíncrono e orientado a eventos.
- Usar a mesma linguagem (JavaScript) no front end e no back end.

---

### **Instalando o Node.js**

1. Acesse o site oficial do Node.js: [https://nodejs.org/](https://nodejs.org/).
2. Faça o download da versão recomendada para o seu sistema operacional (Windows, macOS, Linux).
3. Siga as instruções do instalador.

#### **Verificar a instalação:**
Após instalar, abra o **Terminal** ou **Prompt de Comando** e digite:
```bash
node -v
```
Isso deve retornar a versão do Node.js instalada.

---

### **Executando JavaScript com Node.js e no Navegador**

#### **No Navegador:**
Você pode executar JavaScript diretamente no navegador usando o Console de Desenvolvedor.

1. Abra o navegador (Chrome, Firefox, etc.).
2. Pressione `F12` ou `Ctrl + Shift + I` para abrir as Ferramentas de Desenvolvedor.
3. Vá até a aba **Console** e digite código JavaScript.

Exemplo no console:
```javascript
console.log("Olá, Mundo!");
```

#### **Com Node.js:**
Crie um arquivo `.js` e execute-o no terminal.

1. Crie um arquivo `app.js` com o seguinte código:
   ```javascript
   console.log("Executando JavaScript com Node.js");
   ```

2. No terminal, execute o arquivo:
   ```bash
   node app.js
   ```

Isso irá imprimir no terminal:
```
Executando JavaScript com Node.js
```

#### **Diferença entre Node.js e o Navegador:**
- **No Navegador**: JavaScript é usado para interagir com o DOM (Document Object Model), manipulando elementos HTML e eventos de usuário.
- **No Node.js**: JavaScript é usado para tarefas de servidor, como acessar bancos de dados, lidar com arquivos e executar lógica de negócios.

---

### **O que é VS Code?**

**Visual Studio Code (VS Code)** é um editor de código-fonte desenvolvido pela Microsoft. Ele é amplamente utilizado para desenvolvimento, pois oferece suporte para várias linguagens de programação, incluindo JavaScript, além de possuir uma grande variedade de extensões.

#### **Como instalar o VS Code:**

1. Acesse o site oficial: [https://code.visualstudio.com/](https://code.visualstudio.com/).
2. Faça o download da versão apropriada para o seu sistema operacional.
3. Siga o assistente de instalação.

#### **Principais Recursos:**
- **Realce de Sintaxe**: Para várias linguagens, facilitando a leitura do código.
- **IntelliSense**: Autocompletar código, ajuda com dicas enquanto você digita.
- **Terminal embutido**: Executar comandos diretamente dentro do editor.
- **Controle de Versão**: Integração com Git.

#### **Executando código no VS Code:**
1. Abra um arquivo `.js` no VS Code.
2. Para rodar um arquivo JavaScript diretamente, use o terminal embutido:
   - Acesse `Terminal > New Terminal` no menu.
   - Digite o comando para executar com Node.js:
     ```bash
     node nomeDoArquivo.js
     ```

---

Nesta aula, vimos os conceitos de **front end** e **back end**, exploramos o **MERN Stack** com foco no **Node.js** como back end e como **JavaScript** é utilizado em ambos os contextos. Além disso, aprendemos a instalar e usar o **Node.js** para executar código JavaScript e discutimos o uso do **VS Code** como ambiente de desenvolvimento.

Agora você está pronto para começar a programar tanto no front end quanto no back end com JavaScript e Node.js!