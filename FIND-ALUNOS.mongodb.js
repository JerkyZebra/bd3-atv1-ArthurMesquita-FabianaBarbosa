const database = 'BD3-NoSQL-AtlasMongoDB';

use(database);

/* Essa linha seleciona todos os alunos sem filtragem, deixar os colchetes vazios retornara todos os dados*/
db['bd3-nosql-atv1'].find({})

