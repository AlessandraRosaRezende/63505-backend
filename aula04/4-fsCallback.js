const fs = require("fs");

fs.writeFile(
  "./data/exemploCallback.txt",
  "Hello Coders! Virei um arquivo!",
  (err) => {
    if (err) {
      return console.log("1 - Errouuuu", err);
    }
    // 1
    fs.readFile("./data/exemploCallback.txt", "utf-8", (err, resultado) => {
      // 1, 2
      if (err) {
        return console.log("2 - Errouuuu");
      }
      console.log(resultado);
      fs.appendFile("./data/exemploCallback.txt", " Mais conteúdo! ", (err) => {
        // 1, 2, 3
        if (err) {
          return console.log("3 - Errouuuu");
        }
        fs.readFile("./data/exemploCallback.txt", "utf-8", (err, resultado) => {
          // 1,2,3,4
          if (err) {
            return console.log("4 - Errouuuu");
          }
          console.log(resultado);
        });
      });
    });
  }
);