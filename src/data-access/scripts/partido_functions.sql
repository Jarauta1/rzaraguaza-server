create or replace function rzaraguaza.create_partido(
	i_local_id INT,
	i_visitante_id INT,
	i_datos_local JSON,
	i_datos_visitante JSON
)
returns void as $$
declare
	v_local_exists boolean;
	v_visitante_exists boolean;
begin
	select into v_local_exists
		exists (select 1 from rzaraguaza.equipo el
			where el.equipo_id = i_local_id);
	select into v_visitante_exists
		exists (select 1 from rzaraguaza.equipo ev
			where ev.equipo_id = i_visitante_id);
	if v_jugador_exists and v_partido_exists is true then
		insert into rzaraguaza.partido (local_id, visitante_id, datos_local, datos_visitante)
		values (i_local_id, i_visitante_id, i_datos_local, i_datos_visitante);
	else
		raise exception 'Equipos no encontrados';
	end if;
end;
$$ language plpgsql;

create or replace function rzaraguaza.update_partido(
	i_partido_id INT,
	i_local_id INT,
	i_visitante_id INT,
	i_datos_local JSON,
	i_datos_visitante JSON
)
returns void as $$
declare
	v_partido_exists boolean;
begin
	select into v_partido_exists exists (select 1 from rzaraguaza.partido p where p.partido_id = i_partido_id);
	if v_partido_exists then
		update rzaraguaza.partido up
		set	datos_local = i_datos_local,
			datos_visitante = i_datos_visitante
		where up.partido_id = i_partido_id;
	else
		raise exception 'Partido does not exist';
	end if;
end;
$$ language plpgsql;