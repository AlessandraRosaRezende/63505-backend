use('coder');
db.clientes.insertMany([
  { "nome": "Paulo", "idade": 25 },
  { "nome": "João", "idade": 22 },
  { "nome": "Lúcia", "idade": 25 },
  { "nome": "João", "idade": 29 },
  { "nome": "Fred", "idade": 35 },
]);

use('coder');
db.clientes.find({}, {nome:1, _id:0});

use('coder');
db.clientes.find({nome: "João"}, {nome: true, idade:1, _id:0}); // pode ser tanto 1 ou 0 quanto true ou false

use('coder');
db.clientes.find({nome: 'João'}).sort({idade: 1});

use('coder');
db.clientes.find().sort({nome: -1, idade: -1});

use('coder');
db.clientes.find({}, { _id: 0, nome: 1 }).sort({ idade: -1 }).limit(3)

use('coder');
db.clientes.find({}, { _id: 0, nome: 1 }).sort({ idade: -1, nome: -1 }).limit(3)

use('coder');
db.clientes.find({}, { _id: 0, nome: 1 }).sort({ idade: -1 }).limit(3).skip(2)