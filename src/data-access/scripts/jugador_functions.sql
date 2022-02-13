create or replace function rzaraguaza.create_jugador(
	i_equipo_id INT,
	i_nombre_jugador VARCHAR,
	i_apellido1 VARCHAR,
	i_apellido2 VARCHAR,
	i_apodo VARCHAR,
	i_fecha_nacimiento TIMESTAMP,
	i_foto_jugador VARCHAR,
	i_foto_portada VARCHAR,
	i_dorsal INT,
	i_posicion VARCHAR,
	i_altura INT,
	i_total_goles INT,
	i_total_asistencias INT,
	i_total_amarillas INT,
	i_total_rojas INT,
	i_total_encajados INT,
	i_pais VARCHAR,
	i_ciudad VARCHAR
	)
returns void as $$
declare
	v_equipo_exists boolean;
	v_dorsal_exists boolean;
begin
	select into v_equipo_exists
		exists (select 1 from rzaraguaza.equipo e
			where e.equipo_id = i_equipo_id);
	select into v_dorsal_exists
		exists (select 1 from rzaraguaza.jugador j
			where j.dorsal = i_dorsal);
	if v_dorsal_exists is true then
		raise exception 'Dorsal ya asignado';
	else
		if v_equipo_exists is true then
				insert into rzaraguaza.jugador (equipo_id, nombre_jugador, apellido1, apellido2, apodo, fecha_nacimiento, foto_jugador, foto_portada, dorsal, posicion, altura, total_goles, total_asistencias, total_amarillas, total_rojas, total_encajados, pais, ciudad)
				values (i_equipo_id, i_nombre_jugador, i_apellido1, i_apellido2, i_apodo, i_fecha_nacimiento, i_foto_jugador, i_foto_portada, i_dorsal, i_posicion, i_altura, i_total_goles, i_total_asistencias, i_total_amarillas, i_total_rojas, i_total_encajados, i_pais, i_ciudad);
		else
			raise exception 'Equipo no existe';
		end if;
	end if;
end;
$$ language plpgsql;

create or replace function rzaraguaza.update_jugador(
	i_jugador_id INT,
	i_equipo_id INT,
	i_nombre_jugador VARCHAR,
	i_apellido1 VARCHAR,
	i_apellido2 VARCHAR,
	i_apodo VARCHAR,
	i_fecha_nacimiento TIMESTAMP,
	i_foto_jugador VARCHAR,
	i_foto_portada VARCHAR,
	i_dorsal INT,
	i_posicion VARCHAR,
	i_altura VARCHAR,
	i_total_goles INT,
	i_total_asistencias INT,
	i_total_amarillas INT,
	i_total_rojas INT,
	i_total_encajados INT,
	i_pais VARCHAR,
	i_ciudad VARCHAR
)
returns void as $$
declare
	v_jugador_exists boolean;
begin
	select into v_jugador_exists exists (select 1 from rzaraguaza.jugador j where j.jugador_id = i_jugador_id);
	if v_equipo_exists then
		update rzaraguaza.jugador uj
		set	equipo_id = i_equipo_id,
			nombre_jugador = i_nombre_jugador,
			apellido1 = i_apellido1,
			apellido2 = i_apellido2,
			apodo = i_apodo,
			fecha_nacimiento = i_fecha_nacimiento,
			foto_jugador = i_foto_jugador,
			foto_portada = i_foto_portada,
			dorsal = i_dorsal,
			posicion = i_posicion,
			altura = i_altura,
			total_goles = i_total_goles,
			total_asistencias = i_total_asistencias,
			total_amarillas = i_total_amarillas,
			total_rojas = i_total_rojas,
			total_encajados = i_total_encajados,
			pais = i_pais,
			ciudad= i_ciudad
		where uj.jugador_id = i_jugador_id;
	else
		raise exception 'Jugador does not exist';
	
	end if;
end;
$$ language plpgsql;
