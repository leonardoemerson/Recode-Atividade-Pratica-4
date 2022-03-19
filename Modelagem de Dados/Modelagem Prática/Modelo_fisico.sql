CREATE TABLE Clientes (
    idCliente int unique auto_increment NOT NULL,
    nome nvarchar(255) NOT NULL,
    cpf char(11) NOT NULL,
    rg char(14) NOT NULL,
    endereco nvarchar(255) NOT NULL,
    CONSTRAINT PK_Clientes PRIMARY KEY (idCliente)
); 

CREATE TABLE Destinos (
    idDestino int unique auto_increment NOT NULL,
    endereco nvarchar(255) NOT NULL,
    nome nvarchar(255) NOT NULL,
    preco float NOT NULL,
    qtdVagas int NOT NULL,
    CONSTRAINT PK_Destinos PRIMARY KEY (idDestino)
);
CREATE TABLE Agencias (
    idAgencia int auto_increment NOT NULL,
    cnpj char(14) NOT NULL,
    endereco nvarchar(255) NOT NULL,
    telefone char(15) NOT NULL,
    email nvarchar(255) NOT NULL,
    CONSTRAINT PK_Agencias PRIMARY KEY (idAgencia)
);