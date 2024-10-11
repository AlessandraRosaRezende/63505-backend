### O que é ECMAScript?

**ECMAScript** é a especificação padronizada que define a base da linguagem **JavaScript**. Ela estabelece as regras, detalhes e funcionalidades que os motores de JavaScript devem seguir para implementar a linguagem. O ECMAScript não é uma linguagem por si só, mas sim um padrão que serve de guia para que várias linguagens, incluindo o JavaScript, possam ser implementadas de forma consistente em diferentes plataformas.

### História e Contexto

O ECMAScript foi criado pela **ECMA International**, uma organização responsável por padronizar sistemas de computação e comunicação. A primeira versão do ECMAScript surgiu em 1997, a fim de unificar as diferentes versões de JavaScript que estavam surgindo à época, como forma de garantir interoperabilidade e consistência entre diferentes navegadores.

### **Relação com JavaScript**

JavaScript é uma implementação do ECMAScript, mas com algumas características próprias adicionadas, principalmente no que diz respeito à interação com o DOM (Document Object Model) no navegador. Sempre que o ECMAScript é atualizado com novos recursos, como aconteceu com o **ES6 (ECMAScript 2015)**, as novas versões de JavaScript incorporam esses novos elementos.

### **Principais Versões do ECMAScript**

As versões mais notáveis incluem:

1. **ES3 (1999)**: Trouxe estabilidade e refinamentos para o JavaScript.
2. **ES5 (2009)**: Introduziu várias melhorias, como `strict mode`, suporte a JSON, e métodos avançados de array.
3. **ES6 (2015)**: Uma das maiores atualizações, com adição de recursos importantes como:
   - `let` e `const`
   - Arrow functions (`=>`)
   - Classes
   - Promises
   - Destructuring
   - Template literals

Desde o **ES6**, o ECMAScript é atualizado anualmente com novas melhorias e funcionalidades.

### **Características do ECMAScript:**

- **Compatibilidade**: Os padrões ECMAScript são projetados para funcionar em diferentes plataformas, incluindo navegadores e servidores, garantindo que o JavaScript funcione da mesma forma em qualquer ambiente.
- **Evolução constante**: Desde o ES6, o ECMAScript recebe atualizações anuais para introduzir novos recursos e melhorar o desempenho e a usabilidade da linguagem.
- **Linguagens baseadas em ECMAScript**: Além do JavaScript, outras linguagens seguem o padrão ECMAScript, como o **ActionScript** (usado no Flash) e o **JScript** (usado no Internet Explorer).

### **Exemplos de Recursos ECMAScript (ES6+):**

- **Variáveis (`let` e `const`)**:

  ```javascript
  let nome = "João";
  const idade = 30;
  ```

- **Arrow Functions**:

  ```javascript
  const soma = (a, b) => a + b;
  ```

- **Classes**:

  ```javascript
  class Pessoa {
    constructor(nome, idade) {
      this.nome = nome;
      this.idade = idade;
    }
  }
  ```

- **Promises**:

  ```javascript
  const promessa = new Promise((resolve, reject) => {
    resolve("Operação concluída!");
  });
  ```

Esses são apenas alguns dos muitos recursos que foram introduzidos pelo ECMAScript e implementados no JavaScript.

### Mudanças Importantes do ES6

O ECMAScript 6 (ES6), lançado em 2015, trouxe grandes melhorias e mudanças para o JavaScript, tornando a linguagem mais poderosa, moderna e mais fácil de usar. Algumas das principais mudanças incluem a introdução de novas maneiras de declarar variáveis, melhorias na manipulação de objetos, arrays, funções e muito mais.

Aqui estão algumas das mudanças mais importantes:

---

### 1. **Declaração de Variáveis: `let` e `const`**

#### **`let`**

- O `let` foi introduzido no ES6 como uma alternativa ao `var` para a declaração de variáveis. Diferente do `var`, `let` tem **escopo de bloco**. Isso significa que a variável só existe dentro do bloco `{}` onde foi declarada.
- Evita problemas com escopo de função e elevação (hoisting), que eram comuns com o `var`.

**Exemplo:**

```javascript
let idade = 25;

if (idade > 18) {
  let adulto = true;
  console.log(adulto);  // true
}

console.log(adulto);  // Erro: adulto não está definido fora do bloco
```

#### **`const`**

- `const` é usado para declarar variáveis que **não podem ser reatribuídas**. Assim como `let`, `const` também possui **escopo de bloco**.
- Diferente de `let`, as variáveis declaradas com `const` **devem ser inicializadas no momento da declaração**.

**Exemplo:**

```javascript
const nome = "Maria";
nome = "Ana";  // Erro: Não é possível reatribuir uma constante
```

#### **Mutabilidade e `const`**

Embora as variáveis declaradas com `const` não possam ser **reatribuidas**, o que significa que você não pode trocar o valor diretamente, **objetos e arrays** declarados como `const` **ainda podem ser modificados**. Isso acontece porque a imutabilidade afeta apenas a referência, e não os valores internos do objeto ou array.

##### **Exemplo de mutabilidade com `const` (Array):**

```javascript
const lista = [1, 2, 3];
lista.push(4);  // Funciona, pois estamos modificando o conteúdo do array
console.log(lista);  // [1, 2, 3, 4]
```

##### **Exemplo de mutabilidade com `const` (Objeto):**

```javascript
const pessoa = { nome: "João", idade: 30 };
pessoa.idade = 31;  // Funciona, pois estamos modificando uma propriedade do objeto
console.log(pessoa);  // { nome: "João", idade: 31 }
```

Apesar de a variável `pessoa` ser constante, suas **propriedades internas** podem ser alteradas. Isso ocorre porque a variável `pessoa` aponta para um objeto na memória, e o que é constante é a referência a esse objeto, não o conteúdo interno.

### **Resumo:**

- **`let`**: Declara variáveis que podem ser reatribuídas e têm escopo de bloco.
- **`const`**: Declara variáveis que não podem ser reatribuídas, mas objetos e arrays ainda podem ter seus conteúdos modificados.
- **Mutabilidade e `const`**: Mesmo usando `const`, objetos e arrays são mutáveis em relação às suas propriedades internas.

Essas mudanças no ES6 tornam a declaração de variáveis mais previsível e segura, especialmente em projetos maiores.



### Tipos de Dados em JavaScript

JavaScript é uma linguagem dinamicamente tipada, o que significa que você não precisa declarar explicitamente o tipo de dado de uma variável. Dependendo do valor atribuído, JavaScript automaticamente define o tipo de dado. Existem dois grandes grupos de tipos de dados em JavaScript: **tipos primitivos** e **objetos**.

---

### **Tipos Primitivos**

1. **`Number` (Número)**

   O tipo `Number` inclui números inteiros e decimais (ponto flutuante). JavaScript usa o mesmo tipo para todos os números, sejam eles inteiros ou fracionados.

   **Exemplos:**

   ```javascript
   let idade = 30;  // Inteiro
   let altura = 1.75;  // Decimal (ponto flutuante)
   ```

2. **`String` (Cadeia de Caracteres)**

   `String` representa uma sequência de caracteres, como texto. Strings podem ser declaradas entre aspas simples (`'...'`), aspas duplas (`"..."`), ou usando crases (`\`...\``) para interpolação de variáveis.

   **Exemplos:**

   ```javascript
   let nome = 'João';  // Aspas simples
   let sobrenome = "Silva";  // Aspas duplas
   let saudacao = `Olá, ${nome}!`;  // Template literal (com crases)
   ```

3. **`Boolean` (Booleano)**

   O tipo `Boolean` possui apenas dois valores: **`true`** (verdadeiro) e **`false`** (falso). Ele é usado em comparações e estruturas condicionais.

   **Exemplo:**

   ```javascript
   let maiorDeIdade = true;
   let menorDeIdade = false;
   ```

4. **`Undefined`**

   Uma variável declarada que **não foi inicializada** com nenhum valor tem o valor `undefined`. Também, se uma função não retorna explicitamente um valor, ela retorna `undefined` por padrão.

   **Exemplo:**

   ```javascript
   let x;
   console.log(x);  // undefined
   ```

5. **`Null`**

   `Null` é um valor intencionalmente vazio, usado para indicar que uma variável **não aponta para nenhum objeto** ou valor. É diferente de `undefined`, que representa a ausência de valor.

   **Exemplo:**

   ```javascript
   let y = null;
   console.log(y);  // null
   ```

6. **`Symbol` (ES6)**

   O tipo `Symbol` foi introduzido no ES6 e representa valores únicos. Eles são usados para criar identificadores únicos para propriedades de objetos.

   **Exemplo:**

   ```javascript
   let simbolo1 = Symbol('id');
   let simbolo2 = Symbol('id');
   console.log(simbolo1 === simbolo2);  // false (símbolos são sempre únicos)
   ```

7. **`BigInt` (ES2020)**

   `BigInt` foi introduzido no ECMAScript 2020 e permite trabalhar com números inteiros **muito grandes** que ultrapassam o limite de precisão do tipo `Number`.

   **Exemplo:**

   ```javascript
   let numeroGrande = 1234567890123456789012345678901234567890n;  // Sufixo 'n' para BigInt
   ```

---

### **Objetos em JavaScript**

Além dos tipos primitivos, JavaScript também tem **Objetos**, que são estruturas mais complexas para armazenar coleções de dados e funcionalidades. Aqui estão os tipos de objetos mais comuns:

1. **Objeto (`Object`)**

   Um objeto é uma coleção de pares **chave-valor**. Cada valor pode ser de qualquer tipo, incluindo funções, arrays e outros objetos.

   **Exemplo:**

   ```javascript
   let pessoa = {
     nome: "Ana",
     idade: 28,
     saudacao: function() {
       return `Olá, meu nome é ${this.nome}.`;
     }
   };
   
   console.log(pessoa.nome);  // Ana
   console.log(pessoa.saudacao());  // Olá, meu nome é Ana.
   ```

2. **Array**

   Arrays são um tipo especial de objeto que armazena uma lista de elementos, que podem ser acessados pelo seu índice (começando do 0).

   **Exemplo:**

   ```javascript
   let lista = [1, 2, 3, 4, 5];
   console.log(lista[0]);  // 1 (acessa o primeiro elemento)
   ```

3. **Funções (`Function`)**

   Funções também são objetos em JavaScript. Elas são blocos de código reutilizáveis que podem ser chamados ou invocados.

   **Exemplo:**

   ```javascript
   function soma(a, b) {
     return a + b;
   }
   
   console.log(soma(2, 3));  // 5
   ```

---

### **Diferenças entre Tipos Primitivos e Objetos**

- **Tipos primitivos** são **imutáveis**, o que significa que, quando você atribui ou altera o valor de uma variável que contém um tipo primitivo, um novo valor é criado.
- **Objetos** são **mutáveis**, o que significa que podem ser alterados diretamente, e sua referência na memória permanece a mesma.

**Exemplo de Imutabilidade (Primitivo):**

```javascript
let a = 10;
let b = a;  // b recebe uma cópia do valor de a
a = 20;
console.log(b);  // 10 (b não é afetado pela mudança de a)
```

**Exemplo de Mutabilidade (Objeto):**

```javascript
let obj1 = { nome: "João" };
let obj2 = obj1;  // obj2 recebe a referência de obj1
obj1.nome = "Maria";
console.log(obj2.nome);  // Maria (ambos apontam para o mesmo objeto)
```

---

JavaScript tem uma variedade de tipos de dados primitivos e complexos que permitem a criação de código flexível e poderoso. Com o entendimento desses tipos, você pode manipular valores com eficiência, seja em estruturas simples ou em objetos complexos.

### O que é uma Função em JavaScript?

Uma **função** em JavaScript é um bloco de código reutilizável que pode ser chamado em diferentes partes do programa. Funções permitem encapsular um conjunto de instruções para realizar uma tarefa ou calcular um valor. Elas ajudam a modularizar o código, tornando-o mais organizado, fácil de manter e reutilizar.

---

### **Declaração de Funções**

Existem diferentes maneiras de declarar e definir funções em JavaScript:

1. **Função Declarada (Function Declaration)**

   Uma **função declarada** é definida com a palavra-chave `function`, seguida pelo nome da função, uma lista de parâmetros (entre parênteses) e o bloco de código (entre chaves) que a função executará.

   **Sintaxe:**

   ```javascript
   function nomeDaFuncao(parâmetro1, parâmetro2) {
     // Bloco de código a ser executado
   }
   ```

   **Exemplo:**

   ```javascript
   function saudacao(nome) {
     return `Olá, ${nome}!`;
   }
   
   console.log(saudacao("João"));  // Retorna "Olá, João!"
   ```

2. **Função Expressa (Function Expression)**

   Uma **função expressa** é uma função anônima atribuída a uma variável. A principal diferença é que esse tipo de função não pode ser chamada antes de sua definição (ao contrário das funções declaradas).

   **Sintaxe:**

   ```javascript
   const nomeDaFuncao = function(parâmetro1, parâmetro2) {
     // Bloco de código a ser executado
   };
   ```

   **Exemplo:**

   ```javascript
   const saudacao = function(nome) {
     return `Olá, ${nome}!`;
   };
   
   console.log(saudacao("Maria"));  // Retorna "Olá, Maria!"
   ```

3. **Arrow Functions (Funções de Seta)**

   Introduzidas no ES6, as **arrow functions** são uma sintaxe mais concisa para definir funções. Elas são particularmente úteis quando a função é simples e não requer um bloco complexo de código.

   **Sintaxe:**

   ```javascript
   const nomeDaFuncao = (parâmetro1, parâmetro2) => {
     // Bloco de código a ser executado
   };
   ```

   Se houver apenas um parâmetro, os parênteses podem ser omitidos. E se o corpo da função contiver apenas uma linha, as chaves e a palavra-chave `return` também podem ser omitidas.

   **Exemplo:**

   ```javascript
   const saudacao = nome => `Olá, ${nome}!`;
   
   console.log(saudacao("Ana"));  // Retorna "Olá, Ana!"
   ```

---

### **Chamando uma Função**

Para executar o bloco de código dentro de uma função, você "chama" a função pelo nome, passando os valores (argumentos) que ela espera.

**Exemplo de chamada de função:**

```javascript
function soma(a, b) {
  return a + b;
}

console.log(soma(2, 3));  // Retorna 5
```

---

### **Parâmetros e Argumentos**

- **Parâmetros** são variáveis listadas na definição da função e agem como **espaços reservados** para os valores que serão passados quando a função for chamada.
- **Argumentos** são os valores reais que você passa para a função quando a chama.

**Exemplo:**

```javascript
function multiplicar(x, y) {  // x e y são parâmetros
  return x * y;
}

console.log(multiplicar(4, 5));  // 4 e 5 são os argumentos
```

### **Funções com Valor Padrão para Parâmetros (ES6)**

A partir do ES6, você pode definir **valores padrão** para os parâmetros de uma função. Se nenhum valor for passado, o valor padrão será usado.

**Exemplo:**

```javascript
function saudacao(nome = "Visitante") {
  return `Olá, ${nome}!`;
}

console.log(saudacao());  // Retorna "Olá, Visitante!"
```

---

### **Funções Aninhadas (Funções dentro de Funções)**

Uma função pode ser definida dentro de outra função. As funções internas só podem ser acessadas dentro do escopo da função onde foram definidas.

**Exemplo:**

```javascript
function saudacao(nome) {
  function criarMensagem() {
    return `Olá, ${nome}!`;
  }
  return criarMensagem();
}

console.log(saudacao("Pedro"));  // Retorna "Olá, Pedro!"
```

---

### **Funções como Valores de Retorno**

Em JavaScript, funções são tratadas como objetos de primeira classe, o que significa que podem ser passadas como argumentos para outras funções, retornadas por funções, e atribuídas a variáveis.

**Exemplo:**

```javascript
function criarSaudacao(nome) {
  return function() {
    return `Olá, ${nome}!`;
  };
}

const saudacaoPedro = criarSaudacao("Pedro");
console.log(saudacaoPedro());  // Retorna "Olá, Pedro!"
```

---
Uma função em JavaScript é uma das ferramentas mais fundamentais e poderosas da linguagem. Elas permitem reutilização de código, organização e encapsulamento de lógica. Com as novas sintaxes e recursos, como `arrow functions` e valores padrão de parâmetros, as funções em JavaScript ficaram ainda mais flexíveis e poderosas.



### JavaScript e ECMAScript 8 (ES8)

O **ECMAScript 8**, também conhecido como **ES2017**, trouxe algumas funcionalidades importantes para o JavaScript, complementando as melhorias que haviam sido introduzidas nas versões anteriores (como ES6). Essas adições visam facilitar a escrita de código mais eficiente e a manipulação de operações assíncronas, além de fornecer ferramentas mais poderosas para desenvolvedores.

Aqui estão as principais mudanças e novos recursos introduzidos pelo ES8 (ECMAScript 2017):

---

### **1. `async/await`**

O recurso mais aguardado do ES8 foi a introdução do **`async/await`**, que facilita o trabalho com operações assíncronas, tornando o código assíncrono mais fácil de ler e escrever.

Antes do ES8, o código assíncrono era tratado com **Promises** ou callbacks, o que poderia tornar o código mais difícil de entender e gerenciar. O `async/await` simplifica essa abordagem, permitindo que você escreva código assíncrono de maneira mais síncrona.

#### **Como funciona?**

- A palavra-chave **`async`** é usada para declarar que uma função é assíncrona.
- A palavra-chave **`await`** é usada dentro de funções assíncronas para "esperar" pela resolução de uma `Promise`. Ela pausa a execução da função até que a `Promise` seja resolvida ou rejeitada.

**Exemplo:**

```javascript
function esperar(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function exemploAsync() {
  console.log('Esperando 1 segundo...');
  await esperar(1000);
  console.log('1 segundo passou!');
}

exemploAsync();
```

No exemplo acima, o código "espera" o tempo especificado antes de continuar a execução, mas sem bloquear outras operações.

---

### **2. `Object.entries()`**

O método **`Object.entries()`** foi introduzido para converter um objeto em uma matriz (array) de pares chave-valor. Isso é útil quando você deseja iterar sobre as propriedades de um objeto.

**Exemplo:**

```javascript
const pessoa = {
  nome: "João",
  idade: 30
};

const entradas = Object.entries(pessoa);
console.log(entradas);
// Saída: [["nome", "João"], ["idade", 30]]
```

Agora você pode iterar sobre esse array usando `for...of` ou outros métodos de array.

---

### **3. `Object.values()`**

O método **`Object.values()`** retorna um array contendo apenas os **valores** das propriedades de um objeto.

**Exemplo:**

```javascript
const pessoa = {
  nome: "João",
  idade: 30
};

const valores = Object.values(pessoa);
console.log(valores);  // Saída: ["João", 30]
```

---

### **4. `Object.getOwnPropertyDescriptors()`**

Este método retorna todos os **descritores de propriedade** de um objeto, incluindo as características da propriedade, como enumerável, configurável e valores `get` e `set`.

**Exemplo:**

```javascript
const pessoa = {
  nome: "João",
  get idade() {
    return 30;
  }
};

const descritores = Object.getOwnPropertyDescriptors(pessoa);
console.log(descritores);
/*
Saída:
{
  nome: { value: 'João', writable: true, enumerable: true, configurable: true },
  idade: { get: [Function: get idade], set: undefined, enumerable: true, configurable: true }
}
*/
```

Isso é útil ao criar objetos complexos ou ao copiar propriedades de um objeto para outro.

---

### **5. String Padding: `padStart()` e `padEnd()`**

Esses métodos permitem preencher uma string com caracteres adicionais até atingir um determinado comprimento.

- **`padStart()`**: Preenche no início da string.
- **`padEnd()`**: Preenche no final da string.

**Exemplo:**

```javascript
let numero = '5';

console.log(numero.padStart(3, '0'));  // Saída: "005"
console.log(numero.padEnd(3, '0'));    // Saída: "500"
```

Esse recurso é útil quando você deseja garantir que os valores sigam um formato específico, como IDs ou números de cartão de crédito.

---

### **6. `Trailing Commas` em Funções**

O ES8 permite que você adicione uma **vírgula ao final de uma lista de parâmetros** em funções, chamadas de função, e literais de objetos. Isso ajuda a evitar erros quando você precisa adicionar ou remover parâmetros e facilita a formatação de código.

**Exemplo:**

```javascript
function exemploFuncao(
  param1,
  param2,
  param3,  // A vírgula no final é permitida agora
) {
  console.log(param1, param2, param3);
}

exemploFuncao('a', 'b', 'c');
```

---

### **7. Melhorias em Promises: `Promise.prototype.finally()`**

O método **`finally()`** foi adicionado às `Promises`. Ele permite que você execute código, independentemente de a `Promise` ter sido resolvida com sucesso ou rejeitada.

**Exemplo:**

```javascript
fetch('https://api.exemplo.com/dados')
  .then(response => response.json())
  .catch(error => console.error('Erro:', error))
  .finally(() => console.log('Operação concluída'));
```

O bloco `finally` será executado independentemente do resultado da `Promise`, permitindo que você faça ações de "limpeza" ou finalize processos, independentemente do sucesso ou erro.

---
O **ES8 (ECMAScript 2017)** trouxe várias melhorias para a linguagem JavaScript, tornando-a mais poderosa e acessível. Os recursos como `async/await`, métodos úteis para objetos (`Object.entries()` e `Object.values()`), e funcionalidades adicionais para strings e promises, simplificam o desenvolvimento, especialmente ao trabalhar com operações assíncronas e manipulação de objetos.

Essas melhorias são fundamentais para a criação de aplicações modernas e otimizadas, facilitando o trabalho do desenvolvedor e permitindo a escrita de código mais limpo e legível.

### JavaScript e ECMAScript 9 (ES9)

O **ECMAScript 9**, também conhecido como **ES2018**, trouxe várias melhorias importantes para o JavaScript, com novos recursos que focam em melhorar a eficiência e simplicidade do código. As mudanças foram mais incrementais em comparação com versões anteriores, mas ainda assim, impactaram a forma como desenvolvedores escrevem código.

Aqui estão os principais recursos introduzidos no ES9 (ECMAScript 2018):

---

### **1. `Rest/Spread` para Objetos**

O ES6 introduziu o **spread operator (`...`)** para arrays, que permite copiar e combinar arrays de forma simples. No ES9, esse recurso foi expandido para **objetos**, permitindo manipular, clonar e combinar objetos de maneira mais eficiente.

#### **Spread (`...`) em Objetos**

O spread operator agora pode ser usado para clonar e combinar propriedades de objetos.

**Exemplo:**

```javascript
const pessoa = { nome: "João", idade: 30 };
const detalhes = { cidade: "São Paulo", pais: "Brasil" };

const novaPessoa = { ...pessoa, ...detalhes };
console.log(novaPessoa); 
// Saída: { nome: "João", idade: 30, cidade: "São Paulo", pais: "Brasil" }
```

#### **Rest (`...`) em Objetos**

O rest operator permite extrair parte de um objeto, agrupando o restante das propriedades em uma nova variável.

**Exemplo:**

```javascript
const pessoa = { nome: "João", idade: 30, cidade: "São Paulo" };
const { nome, ...detalhes } = pessoa;
console.log(nome);  // Saída: "João"
console.log(detalhes);  // Saída: { idade: 30, cidade: "São Paulo" }
```

---

### **2. `for await...of` para Iteração Assíncrona**

O **`for await...of`** foi introduzido no ES9 para iterar sobre objetos assíncronos, como Promises que são resolvidas sequencialmente.

Esse recurso é particularmente útil quando você está lidando com **streams de dados assíncronos**, como chamadas de API que retornam uma lista de Promises.

**Exemplo:**

```javascript
async function processarDados() {
  const promessas = [
    Promise.resolve(1),
    Promise.resolve(2),
    Promise.resolve(3),
  ];

  for await (let valor of promessas) {
    console.log(valor);  // Saída: 1, 2, 3
  }
}

processarDados();
```

No exemplo acima, o `for await...of` espera que cada `Promise` seja resolvida antes de passar para o próximo valor.

---

### **3. `Promise.prototype.finally()`**

Embora já tivesse sido mencionado em ES8, o método **`finally()`** se consolidou com o ES9, oferecendo uma forma de executar código após a resolução ou rejeição de uma Promise.

Ele é especialmente útil para liberar recursos ou finalizar operações assíncronas, independentemente do resultado da operação.

**Exemplo:**

```javascript
fetch('https://api.exemplo.com/dados')
  .then(response => response.json())
  .catch(error => console.error('Erro:', error))
  .finally(() => console.log('Operação concluída'));
```

O bloco `finally` sempre será executado, independentemente de a Promise ser resolvida com sucesso ou rejeitada.

---

### **4. Expressões Regulares Melhoradas**

O ES9 trouxe várias melhorias para o uso de expressões regulares (regex), tornando-as mais eficientes e poderosas.

#### **Lookbehind Assertions**

As **lookbehind assertions** permitem verificar se há um padrão **antes** de uma determinada parte da string.

**Exemplo:**

```javascript
const regex = /(?<=\$)\d+/;
const resultado = "Preço: $100".match(regex);
console.log(resultado);  // Saída: ["100"]
```

Neste exemplo, a regex procura por um número que venha imediatamente após o caractere `$`.

#### **DotAll Mode (`/s` flag)**

O **modo DotAll** permite que o ponto (`.`) em uma regex combine **quaisquer caracteres**, incluindo quebras de linha. Antes do ES9, o ponto não combinava com caracteres de nova linha (`\n`).

**Exemplo:**

```javascript
const texto = "Olá\nMundo";
const regex = /Olá.Mundo/s;
console.log(regex.test(texto));  // Saída: true
```

Sem o `/s` flag, a regex não corresponderia, pois o ponto não combinaria com a nova linha.

#### **Named Capture Groups**

**Named capture groups** permitem que você dê nome a grupos de captura em expressões regulares, facilitando a leitura e o acesso aos grupos.

**Exemplo:**

```javascript
const regex = /(?<ano>\d{4})-(?<mes>\d{2})-(?<dia>\d{2})/;
const resultado = regex.exec("2023-09-11");

console.log(resultado.groups.ano);  // Saída: "2023"
console.log(resultado.groups.mes);  // Saída: "09"
console.log(resultado.groups.dia);  // Saída: "11"
```

Agora é possível acessar os valores capturados usando os nomes definidos em vez de depender da ordem dos grupos.

---

### **5. Asynchronous Iteration Protocol**

O ES9 introduziu o **Protocolo de Iteração Assíncrona**, que permite definir objetos iteráveis assíncronos personalizados. Isso é especialmente útil para lidar com fluxos de dados de maneira assíncrona.

Para criar um objeto iterável assíncrono, é necessário implementar o método **`[Symbol.asyncIterator]()`**.

**Exemplo:**

```javascript
const meuObjeto = {
  async *[Symbol.asyncIterator]() {
    yield "Primeiro";
    yield "Segundo";
    yield "Terceiro";
  }
};

(async () => {
  for await (let valor de meuObjeto) {
    console.log(valor);
  }
})();
```

Isso permite iterar sobre dados que são retornados de forma assíncrona, sem a necessidade de trabalhar diretamente com Promises.

---

### **6. Melhorias no Método `Object.getOwnPropertyDescriptors()`**

O método **`Object.getOwnPropertyDescriptors()`**, introduzido no ES8, foi aprimorado no ES9 para facilitar a **clonagem profunda** de objetos, preservando suas propriedades e descritores.

Agora, ao combinar esse método com o `Object.defineProperties()`, é possível copiar objetos inteiros, incluindo seus descritores de propriedades.

**Exemplo:**

```javascript
const pessoa = {
  nome: "Maria",
  get saudacao() {
    return `Olá, ${this.nome}`;
  }
};

const clonePessoa = Object.defineProperties({}, Object.getOwnPropertyDescriptors(pessoa));
console.log(clonePessoa.saudacao);  // Saída: "Olá, Maria"
```

---
O **ECMAScript 9 (ES2018)** introduziu várias melhorias úteis que ajudam a tornar o código JavaScript mais eficiente, legível e fácil de manipular, especialmente no que diz respeito à manipulação de objetos e operações assíncronas. Recursos como o `for await...of`, melhorias em expressões regulares e o uso expandido do spread/rest operator são ferramentas poderosas que facilitam o desenvolvimento de aplicações mais modernas e robustas.

Essas mudanças no ES9 continuam a evoluir a linguagem JavaScript, tornando-a mais adequada para enfrentar os desafios de desenvolvimento no lado do cliente e do servidor.

