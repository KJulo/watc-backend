DROP TABLE IF EXISTS Estadios, Guardias, Incidencias, Usuarios, estadios, guardias, incidencias, usuarios CASCADE;
DROP TABLE IF EXISTS usuarios CASCADE;
CREATE TABLE usuarios (
    id_usuario serial NOT NULL,
    nombre varchar,
    email varchar,
    contrasena varchar,
    id_incidencia int,
    CONSTRAINT id_usuario_pk PRIMARY KEY (id_usuario)
);

DROP TABLE IF EXISTS incidencias CASCADE;
CREATE TABLE incidencias (
    id_incidencia serial NOT NULL,
    tipo varchar,
    descripcion varchar,
    foto varchar,
    fechaEmitida date,
    ubicacion varchar,
    isResuelta boolean,
    id_usuario int,
    id_estadio int,
    CONSTRAINT id_incidencia_pk PRIMARY KEY (id_incidencia)
);

CREATE TABLE estadios (
    id_estadio serial NOT NULL,
    nombre varchar,
    mapa varchar,
    ubicacion varchar,
    id_incidencia int,
    id_guardia int,
    CONSTRAINT id_estadio_pk PRIMARY KEY (id_estadio)
);

DROP TABLE IF EXISTS guardias CASCADE;
CREATE TABLE guardias (
    id_guardia serial NOT NULL,
    nombre varchar,
    email varchar,
    contrasena varchar,
    id_estadio int,
    CONSTRAINT id_guardia_pk PRIMARY KEY (id_guardia)
);

ALTER TABLE usuarios
ADD CONSTRAINT id_incidencia_fk FOREIGN KEY(id_incidencia) REFERENCES incidencias(id_incidencia);

ALTER TABLE incidencias
ADD CONSTRAINT id_usuario_fk FOREIGN KEY (id_usuario) REFERENCES usuarios(id_usuario),
ADD CONSTRAINT id_estadio_fk FOREIGN KEY (id_estadio) REFERENCES estadios(id_estadio);

ALTER TABLE estadios
ADD CONSTRAINT id_incidencia_fk FOREIGN KEY (id_incidencia) REFERENCES incidencias(id_incidencia),
ADD CONSTRAINT id_guardia_fk FOREIGN KEY (id_guardia) REFERENCES guardias(id_guardia);


ALTER TABLE guardias
ADD CONSTRAINT id_estadio_fk FOREIGN KEY (id_estadio) REFERENCES estadios(id_estadio);



SELECT * from incidencias;
INSERT INTO incidencias(tipo,descripcion,realizado,ubicacion,id_usuario) VALUES('A','A',DATE(),"a",1)