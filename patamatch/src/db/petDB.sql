CREATE DATABASE pet_db;
USE pet_db;



CREATE TABLE Animal (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255),
    descricao TEXT,
    sexo VARCHAR(50),
    idade VARCHAR(50),
    porte VARCHAR(50),
    cor VARCHAR(50),
    pelagem VARCHAR(50),
    temperamento VARCHAR(255),
    fotos VARCHAR(255), 
    historico_medico TEXT,
    tutor_id INT,
    FOREIGN KEY (tutor_id) REFERENCES Tutor(id)
);


CREATE TABLE Tutor (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255),
    telefone VARCHAR(20),
    email VARCHAR(255),
    endereco VARCHAR(255)
);


CREATE TABLE Vacina (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255)
);


CREATE TABLE Animal_Vacina (
    animal_id INT,
    vacina_id INT,
    data_aplicacao DATE,
    PRIMARY KEY (animal_id, vacina_id),
    FOREIGN KEY (animal_id) REFERENCES Animal(id),
    FOREIGN KEY (vacina_id) REFERENCES Vacina(id)
);