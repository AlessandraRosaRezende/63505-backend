use('coder');
print(db.getName());

use('coder');
db.estudantes.insertOne({
  "nome": "Alessandra",
  "sobrenome": "Rezende",
  "curso": "Matemática",
  "idade": 21,
  "correspondência": "ale.rezende@example.com",
  "sexo": "F"
});

use('coder');
db.estudantes.insertMany([
  {
    "nome": "Ana",
    "sobrenome": "Silva",
    "curso": "Matemática",
    "idade": 21,
    "correspondência": "ana.silva@example.com",
    "sexo": "F"
  },
  {
    "nome": "Bruno",
    "sobrenome": "Souza",
    "curso": "Física",
    "idade": 23,
    "correspondência": "bruno.souza@example.com",
    "sexo": "M"
  },
  {
    "nome": "Carla",
    "sobrenome": "Pereira",
    "curso": "Química",
    "idade": 22,
    "correspondência": "carla.pereira@example.com",
    "sexo": "F"
  },
  {
    "nome": "Diego",
    "sobrenome": "Almeida",
    "curso": "Biologia",
    "idade": 24,
    "correspondência": "diego.almeida@example.com",
    "sexo": "M"
  },
  {
    "nome": "Elisa",
    "sobrenome": "Costa",
    "curso": "História",
    "idade": 20,
    "correspondência": "elisa.costa@example.com",
    "sexo": "F"
  }
]);

// Insert a single student with only name, surname, and course.
use('coder');
db.estudantes.insertOne({
  "nome": "Fernando",
  "sobrenome": "Gomes",
  "curso": "Geografia"
});

use('coder');
db.estudantes.find();

use('coder');
db.estudantes.findOne({ nome: "Fernando" });

use('coder');
db.estudantes.insertOne({
  "nome": "Alessandra",
  "sobrenome": "Rezende",
  "curso": "Matemática",
  "idade": 21,
  "correspondência": "ale.rezende@example.com",
  "sexo": "F"
});

use('coder');
db.estudantes.find();

use('coder');
db.estudantes.find({ nome: "Alessandra" }).pretty();

use('coder');
db.estudantes.findOne({ nome: "Alessandra" });

use('coder');
db.estudantes.find({ sexo: "H" });

use('coder');
db.estudantes.estimatedDocumentCount();

use('coder');
db.estudantes.countDocuments();

use('coder');
db.estudantes.countDocuments({ sexo: "F" });

use('coder');
db.estudantes.countDocuments({ sexo: "M" });

use('coder');
db.estudantes.find({ sexo: {$exists: 0} }); // serve tanto 1 e 0 quanto false e true
