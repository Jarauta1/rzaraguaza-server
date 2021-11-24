create or replace function rzaraguaza.create_gol(
	i_jugador_id INT,
	i_partido_id INT
)
returns void as $$
declare
	v_jugador_exists boolean;
	v_partido_exists boolean;
begin
	select into v_jugador_exists
		exists (select 1 from rzaraguaza.jugador j
			where j.jugador_id = i_jugador_id);
	select into v_partido_exists
		exists (select 1 from rzaraguaza.partido p
			where p.partido_id = i_partido_id);
	if v_jugador_exists and v_partido_exists is true then
		insert into rzaraguaza.gol (jugador_id, partido_id)
		values (i_jugador_id, i_partido_id);
	else
		raise exception 'Tarjeta ya anotada';
	end if;
end;
$$ language plpgsql;

create or replace function rzaraguaza.update_gol(
	i_gol_id INT,
	i_jugador_id INT,
	i_partido_id INT
)
returns void as $$
declare
	v_gol_exists boolean;
begin
	select into v_gol_exists exists (select 1 from rzaraguaza.gol a where a.gol_id = i_gol_id);
	if v_gol_exists then
		update rzaraguaza.gol ua
		set	jugador_id = i_jugador_id,
			partido_id = i_partido_id
		where ua.gol_id = i_gol_id;
	else
		raise exception 'Tarjeta does not exist';
	end if;
end;
$$ language plpgsql;