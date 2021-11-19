create or replace function rzaraguaza.create_amarilla(
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
		insert into rzaraguaza.amarilla (jugador_id, partido_id)
		values (i_jugador_id, i_partido_id);
	else
		raise exception 'Tarjeta ya anotada';
	end if;
end;
$$ language plpgsql;

create or replace function rzaraguaza.update_amarilla(
	i_amarilla_id INT,
	i_jugador_id INT,
	i_partido_id INT
)
returns void as $$
declare
	v_amarilla_exists boolean;
begin
	select into v_amarilla_exists exists (select 1 from rzaraguaza.amarilla a where a.amarilla_id = i_amarilla_id);
	if v_amarilla_exists then
		update rzaraguaza.amarilla ua
		set	jugador_id = i_jugador_id,
			partido_id = i_partido_id
		where ua.amarilla_id = i_amarilla_id;
	else
		raise exception 'Tarjeta does not exist';
	end if;
end;
$$ language plpgsql;