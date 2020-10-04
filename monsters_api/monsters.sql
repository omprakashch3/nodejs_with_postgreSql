CREATE TABLE monsters(
    id serial,
    name character varying(50),
    peronality character varying(50)
);

CREATE TABLE habitats(
    id serial,
    name character varying(50),
    climate character varying(50),
    temperature int
);

CREATE TABLE lives(
    monster character varying(50),
    habitat character varying(50)
);

INSERT INTO monsters(name,peronality)
VALUES
('fluffy','aggressive'),
('noodles','impatient'),
('rusty','passionate');

INSERT INTO habitats(name,climate,temperature)
VALUES
('desert','dry',100),
('forest','hunted',50),
('mountain','icy',20);

INSERT INTO lives(monster,habitat)
VALUES
('fluffy','desert'),
('noodles','mountain'),
('rusty','forest');

