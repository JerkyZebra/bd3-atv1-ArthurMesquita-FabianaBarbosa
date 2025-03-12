const database = 'BD3-NoSQL-AtlasMongoDB'

use (database);

db['bd3-nosql-atv1'].insertMany([
    {
        "codaluno": "A001",
        "nome": "João Silva",
        "cpf": "123.456.789-00",
        "rg": "MG-12.345.678",
        "telefone_aluno": "(31) 99999-1111",
        "telefone_responsavel": "(31) 98888-2222",
        "email": "joao.silva@email.com",
        "data_nascimento": "2005-03-10"
    },
    {
        "codaluno": "A002",
        "nome": "Maria Oliveira",
        "cpf": "987.654.321-00",
        "rg": "SP-98.765.432",
        "telefone_aluno": "(11) 98888-3333",
        "telefone_responsavel": "(11) 97777-4444",
        "email": "maria.oliveira@email.com",
        "data_nascimento": "2006-06-15"
    },
    {
        "codaluno": "A003",
        "nome": "Carlos Souza",
        "cpf": "111.222.333-44",
        "rg": "RJ-23.456.789",
        "telefone_aluno": "(21) 95555-5555",
        "telefone_responsavel": "(21) 94444-6666",
        "email": "carlos.souza@email.com",
        "data_nascimento": "2004-07-20"
    },
    {
        "codaluno": "A004",
        "nome": "Ana Pereira",
        "cpf": "222.333.444-55",
        "rg": "PR-34.567.890",
        "telefone_aluno": "(41) 97777-7777",
        "telefone_responsavel": "(41) 96666-8888",
        "email": "ana.pereira@email.com",
        "data_nascimento": "2007-09-25"
    },
    {
        "codaluno": "A005",
        "nome": "Lucas Costa",
        "cpf": "333.444.555-66",
        "rg": "BA-45.678.901",
        "telefone_aluno": "(71) 94444-9999",
        "telefone_responsavel": "(71) 93333-0000",
        "email": "lucas.costa@email.com",
        "data_nascimento": "2008-01-30"
    },
    {
        "codaluno": "A006",
        "nome": "Juliana Rocha",
        "cpf": "444.555.666-77",
        "rg": "CE-56.789.012",
        "telefone_aluno": "(85) 93333-1111",
        "telefone_responsavel": "(85) 92222-3333",
        "email": "juliana.rocha@email.com",
        "data_nascimento": "2006-02-18"
    },
    {
        "codaluno": "A007",
        "nome": "Felipe Almeida",
        "cpf": "555.666.777-88",
        "rg": "PE-67.890.123",
        "telefone_aluno": "(81) 92222-4444",
        "telefone_responsavel": "(81) 91111-5555",
        "email": "felipe.almeida@email.com",
        "data_nascimento": "2005-11-05"
    },
    {
        "codaluno": "A008",
        "nome": "Gabriela Santos",
        "cpf": "666.777.888-99",
        "rg": "RS-78.901.234",
        "telefone_aluno": "(51) 91111-6666",
        "telefone_responsavel": "(51) 92222-7777",
        "email": "gabriela.santos@email.com",
        "data_nascimento": "2007-12-12"
    },
    {
        "codaluno": "A009",
        "nome": "Ricardo Martins",
        "cpf": "777.888.999-00",
        "rg": "MG-89.012.345",
        "telefone_aluno": "(31) 98888-4444",
        "telefone_responsavel": "(31) 97777-5555",
        "email": "ricardo.martins@email.com",
        "data_nascimento": "2006-04-25"
    },
    {
        "codaluno": "A010",
        "nome": "Larissa Ferreira",
        "cpf": "888.999.000-11",
        "rg": "SP-90.123.456",
        "telefone_aluno": "(11) 99999-8888",
        "telefone_responsavel": "(11) 98888-9999",
        "email": "larissa.ferreira@email.com",
        "data_nascimento": "2005-08-22"
    }
]);
