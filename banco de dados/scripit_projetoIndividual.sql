CREATE DATABASE Projeto_Individual;

USE Projeto_Individual;

drop database Projeto_Individual;

CREATE TABLE usuario (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
    nickname VARCHAR(10),
	email VARCHAR(70),
	senha VARCHAR(8)
);

CREATE TABLE comentario (
	id INT AUTO_INCREMENT,
    titulo VARCHAR(100),
	descricao VARCHAR(150),
	fkUsuario INT,
	FOREIGN KEY (fkUsuario) REFERENCES usuario(id),
    PRIMARY KEY (id, fkUsuario)
);

CREATE TABLE quiz (
	id INT AUTO_INCREMENT,
	pontuacao INT,
	data DATE,
	fkUsuario INT,
	FOREIGN KEY (fkUsuario) REFERENCES usuario(id),
    PRIMARY KEY (id, fkUsuario)
    );

INSERT INTO usuario values 
(null, "Lucas", "Lukinhas", "lucas@lol.com", "1234"),
(null, "Paula", "Paulinha", "paula@lol.com", "1234"),
(null, "Kaue", "Kauezito", "kaue@lol.com", "1234"),
(null, "Victor", "1035268", "victor@lol.com", "1234");

select * from usuario;
desc usuario;


INSERT INTO comentario VALUES
(null,"feedback", "Adorei o site, achei bem completo e o quiz foi bem divertido", 1),
(null, "feedback", "O quiz é bem completo, mas o site precisa adicionar mais cor na aparencia", 2),
(null,"covertida kkkk", "Não sou muito fã de kpop, mas adorei conhecer esse grupo", 3),
(null,"Adorei", "Mais um grupo adicionado a minha lista", 4);

select * from comentario;
desc comentario;

desc quiz;
INSERT INTO quiz VALUES
(null, 30,"2022-06-12", 1),
(null, 100,"2022-11-20", 2),
(null, 52,"2022-10-04", 3),
(null, 94,"2022-11-10", 4),
(null, 63,"2022-11-15", 1);

select * from comentario;


select nickname,
		pontuacao 
from usuario as u left join quiz as q
		on u.id = q.fkUsuario 
order by pontuacao desc limit 5;

    
    select * from usuario as u left join comentario as c
	on u.id = c.fkUsuario;

select * from quiz as q join usuario as u
	on q.fkUsuario = u.id
	join comentario as c 
    on u.id = c.fkUsuario;
    
    
select * 
from usuario as u left join quiz as q
		on u.id = q.fkUsuario ;

SELECT ( 
CASE
    WHEN exists (select * from comentario where fkUsuario = 4)  THEN 1
    ELSE 0
END) as 'exists';

