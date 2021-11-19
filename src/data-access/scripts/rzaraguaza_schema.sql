-- mie 17 nov 2021
-- Model: rzaraguaza   Version: 0.0

drop schema if exists rzaraguaza cascade;
create schema rzaraguaza;

create table if not exists rzaraguaza.liga (
	liga_id SERIAL primary key,
	division VARCHAR(10)

);

create table if not exists rzaraguaza.equipo (
	equipo_id SERIAL primary key,
  	nombre_equipo VARCHAR(45),
  	liga_id INT,
  	escudo TEXT,
  	pj INT,
  	pg INT,
  	pe INT,
  	pp INT,
  	gf INT,
  	gc INT,
  	dg INT,
  	ta INT,
  	tr INT,
  	puntos INT,
 	constraint fk_liga_id
 		foreign key (liga_id)
 			references rzaraguaza.liga (liga_id)
 			on delete cascade
 			on update cascade
);

create table if not exists rzaraguaza.partido (
	partido_id SERIAL primary key,
	local_id INT,
	visitante_id INT,
	datos_local JSON,
	datos_visitante JSON,
	
	constraint fk_local_id
		foreign key (local_id)
			references rzaraguaza.equipo (equipo_id)
			on delete cascade
			on update cascade,
	constraint fk_visitante_id
		foreign key (visitante_id)
			references rzaraguaza.equipo (equipo_id)
			on delete cascade
			on update cascade

);
  
create table if not exists rzaraguaza.jugador (
	jugador_id SERIAL primary key,
	equipo_id INT,
  	nombre_jugador VARCHAR(45),
  	apellido1 VARCHAR(45),
  	apellido2 VARCHAR(45),
  	apodo VARCHAR(45),
  	fecha_nacimiento DATE,
  	foto_jugador text,
  	dorsal INT,
  	posicion VARCHAR(10),
  	altura INT,
  	total_goles INT,
  	total_asistencias INT,
  	total_amarillas INT,
  	total_rojas INT,
  	total_encajados INT,
  	pais VARCHAR(45),
  	ciudad VARCHAR(45),
  	constraint fk_equipo_id
 		foreign key (equipo_id)
 			references rzaraguaza.equipo (equipo_id)
 			on delete cascade
 			on update cascade
);
  
 create table if not exists rzaraguaza.gol (
 	gol_id SERIAL primary key,
 	jugador_id INT,
 	partido_id INT,
 	constraint fk_jugador_id
 		foreign key (jugador_id)
 			references rzaraguaza.jugador (jugador_id)
 			on delete cascade
 			on update cascade,
 	constraint fk_partido_id
 		foreign key (partido_id)
 			references rzaraguaza.partido (partido_id)
 			on delete cascade
 			on update cascade
);
 
create table if not exists rzaraguaza.asistencia (
 	asistencia_id SERIAL primary key,
 	jugador_id INT,
 	partido_id INT,
 	constraint fk_jugador_id
 		foreign key (jugador_id)
 			references rzaraguaza.jugador (jugador_id)
 			on delete cascade
 			on update cascade,
 	constraint fk_partido_id 
 		foreign key (partido_id)
 			references rzaraguaza.partido (partido_id)
 			on delete cascade
 			on update cascade
);

create table if not exists rzaraguaza.amarilla (
 	amarilla_id SERIAL primary key,
 	jugador_id INT,
 	partido_id INT,
 	constraint fk_jugador_id
 		foreign key (jugador_id)
 			references rzaraguaza.jugador (jugador_id)
 			on delete cascade
 			on update cascade,
 	constraint fk_partido_id 
 		foreign key (partido_id)
 			references rzaraguaza.partido (partido_id)
 			on delete cascade
 			on update cascade
);

create table if not exists rzaraguaza.roja (
 	roja_id SERIAL primary key,
 	jugador_id INT,
 	partido_id INT,
 	constraint fk_jugador_id
 		foreign key (jugador_id)
 			references rzaraguaza.jugador (jugador_id)
 			on delete cascade
 			on update cascade,
 	constraint fk_partido_id 
 		foreign key (partido_id)
 			references rzaraguaza.partido (partido_id)
 			on delete cascade
 			on update cascade
);