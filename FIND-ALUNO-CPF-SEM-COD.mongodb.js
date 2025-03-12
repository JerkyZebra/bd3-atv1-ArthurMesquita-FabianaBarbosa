const database = 'BD3-NoSQL-AtlasMongoDB';

use(database);

/* Essa linha vai retornar os dados do aluno Carlos Souza sem o seu código. O número 0 exclui o campo "codaluno" do filtro*/
db['bd3-nosql-atv1'].find({ "cpf": "111.222.333-44" }, { "codaluno": 0 } )
