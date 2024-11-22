use('coder');
db.clientes.insertMany([
  { "nome": "Mateus", "idade": 25 },
  { "nome": "Maria", "idade": 22 },
  { "nome": "Joana", "idade": 25 },
  { "nome": "José", "idade": 29 },
  { "nome": "Frederico", "idade": 35 },
]);

// idade decrescente
use('coder');
db.clientes.find().sort({idade: -1})

// idade crescente
use('coder');
db.clientes.find().sort({ idade: 1 })

// nomes por idade decrescente
use('coder');
db.clientes.find({}, { _id: 0, nome: 1 }).sort({ idade: -1 });

// nomes por idade crescente
use('coder');
db.clientes.find({}, { _id: 0, nome: 1, idade: 1 }).sort({ idade: 1, nome: 1 });

//cliente mais jovem
use('coder');
db.clientes.find().sort({idade: 1}).limit(1)

use('coder');
db.clientes.find().sort({ idade: 1, nome: -1 }).limit(1)

// segundo cliente mais jovem
use('coder');
db.clientes.find().sort({idade: 1}).skip(2).limit(1)

use('coder');
db.clientes.find().sort({ idade: 1, nome: 1 }).skip(2).limit(1)

// clientes chamados João
use('coder');
db.clientes.find({ nome: 'João' })

// clientes chamados João com 29 anos
use('coder');
db.clientes.find({ nome: 'João', idade: 29 })

// clientes chamados Juan ou Lúcia
use('coder');
db.clientes.find({ nome: { $in: ['Juan', 'Lúcia'] } })

// clientes com 25 anos
use('coder');
db.clientes.find({ idade: { $eq: 25 } })

// clientes com idade diferente de 25
use('coder');
db.clientes.find({ idade: { $ne: 25 } })

// clientes com idade maior que 25
use('coder');
db.clientes.find({ idade: { $gt: 25 } })

// clientes com idade menor que 25
use('coder');
db.clientes.find({ idade: { $lte: 25 } })

// clientes com idade entre 26 e 35
use('coder');
db.clientes.find({ idade: { $gte: 26, $lte: 35 } })

// atualizar idade de Fred para 36
use('coder');
db.clientes.updateOne({ nome: 'Fred' }, { $set: { idade: 36 } })

// atualizar idade de João para 30
use('coder');
db.clientes.updateOne({ nome: 'João' }, { $set: { idade: 30 } })

// atualizar idade de todos os Joãos para 30
use('coder');
db.clientes.updateMany({ nome: 'João' }, { $set: { idade: 30 } })

// atualizar idade de todos os clientes com 25 anos para 26 anos
use('coder');
db.clientes.updateMany({ idade: 25 }, { $set: { idade: 26 } })

// contar todos os clientes
use('coder');
db.clientes.countDocuments({})

// deletar todos os clientes chamados João
use('coder');
db.clientes.deleteMany({ nome: 'João' })

// deletar todos os documentos que ficaram com algum valor
use('coder');
db.clientes.deleteMany({})