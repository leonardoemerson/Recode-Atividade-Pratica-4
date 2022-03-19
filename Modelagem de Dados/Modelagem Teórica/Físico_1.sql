/* Lógico_1: */

CREATE TABLE Agencia (
    idAgencia INTEGER PRIMARY KEY,
    cnpj CHAR(14),
    endereco VARCHAR(255),
    telefone CHAR(15),
    email VARCHAR(255)
);

CREATE TABLE Cliente (
    idCliente INTEGER PRIMARY KEY,
    nome VARCHAR(255),
    cpf CHAR(11),
    rg CHAR(14),
    endereco VARCHAR(255)
);

CREATE TABLE Destino (
    idDestino INTEGER PRIMARY KEY,
    endereco VARCHAR(255),
    nome VARCHAR(255),
    preco FLOAT,
    qtdVagas INTEGER
);

CREATE TABLE Contrata (
    fk_Cliente_idCliente INTEGER,
    fk_Agencia_idAgencia INTEGER,
    Destino Destino
);

CREATE TABLE Possui (
    fk_Destino_idDestino INTEGER,
    fk_Agencia_idAgencia INTEGER
);

CREATE TABLE Viaja (
    fk_Cliente_idCliente INTEGER,
    fk_Destino_idDestino INTEGER,
    Data TIMESTAMP
);
 
ALTER TABLE Contrata ADD CONSTRAINT FK_Contrata_1
    FOREIGN KEY (fk_Cliente_idCliente)
    REFERENCES Cliente (idCliente)
    ON DELETE RESTRICT;
 
ALTER TABLE Contrata ADD CONSTRAINT FK_Contrata_2
    FOREIGN KEY (fk_Agencia_idAgencia)
    REFERENCES Agencia (idAgencia)
    ON DELETE RESTRICT;
 
ALTER TABLE Possui ADD CONSTRAINT FK_Possui_1
    FOREIGN KEY (fk_Destino_idDestino)
    REFERENCES Destino (idDestino)
    ON DELETE RESTRICT;
 
ALTER TABLE Possui ADD CONSTRAINT FK_Possui_2
    FOREIGN KEY (fk_Agencia_idAgencia)
    REFERENCES Agencia (idAgencia)
    ON DELETE SET NULL;
 
ALTER TABLE Viaja ADD CONSTRAINT FK_Viaja_1
    FOREIGN KEY (fk_Cliente_idCliente)
    REFERENCES Cliente (idCliente)
    ON DELETE RESTRICT;
 
ALTER TABLE Viaja ADD CONSTRAINT FK_Viaja_2
    FOREIGN KEY (fk_Destino_idDestino)
    REFERENCES Destino (idDestino)
    ON DELETE RESTRICT;