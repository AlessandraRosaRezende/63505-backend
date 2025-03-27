use('coder');
db.estudantes.find();

use('coder');
db.estudantes.find({ sexo: "M" })

// Contar o número total de documentos na coleção 'estudantes'
use('coder');
db.estudantes.countDocuments();

// Contar o número de documentos onde o sexo é 'F'
use('coder');
db.estudantes.countDocuments({ sexo: "F" });

use('coder');
db.estudantes.find({}, { nome: 1, correspondência: 1 })

use('coder');
db.estudantes.find().sort({ nome: -1, sobrenome: 1 })

use('coder');
db.estudantes.find().sort({ idade: -1 }).limit(3).skip(1)

use('coder');
db.estudantes.updateMany(
  { $set: { "idade": 22 } }
);

use('coder');
db.estudantes.deleteMany({ sexo: "F" });