const commander = require("commander");

const program = new commander.Command();

program
  .option("-d", "Variável para debug", false)
  .option("-p <porta>", "Porta do servidor", "8080")
  .option("--mode <mode>", "Modo de trabalho", "produção")
  .requiredOption("-u <user>", "Usuário utilizando o aplicativo", "Nenhum usuário declarado")
  .option("-l, --letters [letters...]", "Letras específicas");

program.argument("[args...]", "Argumentos adicionais"); // Argumentos adicionais

program.parse(process.argv);

console.log("Opções:", program.opts());
console.log("Argumentos adicionais:", program.args);