DROP TABLE IF EXISTS Estadios, Guardias, Inc_est, Incidencias, Usuarios, estadios, guardias, inc_est, incidencias, usuarios;
DROP TABLE IF EXISTS estadios CASCADE;
CREATE TABLE estadios (
    id_estadio integer NOT NULL,
    nombre varchar,
    mapa varchar,
    ubicacion varchar,
    CONSTRAINT id_estadio_pk PRIMARY KEY (id_estadio)
);

DROP TABLE IF EXISTS guardias CASCADE;
CREATE TABLE guardias (
    id_guardia integer NOT NULL,
    nombre varchar,
    email varchar,
    contrasena varchar,
    CONSTRAINT id_guardia_pk PRIMARY KEY (id_guardia)
);

DROP TABLE IF EXISTS incidencias CASCADE;
CREATE TABLE incidencias (
    id_incidencia integer NOT NULL,
    tipo varchar,
    descripcion varchar,
    foto varchar,
    realizado date,
    ubicacion varchar,
    CONSTRAINT id_incidencia_pk PRIMARY KEY (id_incidencia)
);

DROP TABLE IF EXISTS usuarios CASCADE;
CREATE TABLE usuarios (
    id_usuario integer NOT NULL,
    nombre varchar,
    email varchar,
    contrasena varchar,
    CONSTRAINT id_usuario_pk PRIMARY KEY (id_usuario)
);

DROP TABLE IF EXISTS inc_est CASCADE;
CREATE TABLE inc_est (
    id_incidencia integer not null,
    id_estadio integer not null,
    FOREIGN KEY (id_incidencia) REFERENCES incidencias(id_incidencia),
    FOREIGN KEY (id_estadio) REFERENCES estadios(id_estadio)
);