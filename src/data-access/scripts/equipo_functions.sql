create or replace function rzaraguaza.create_equipo(
	i_nombre_equipo VARCHAR,
	i_liga_id INT,
	i_escudo text,
	i_pj INT,
	i_pg INT,
	i_pe INT,
	i_pp INT,
	i_gf INT,
	i_gc INT,
	i_dg INT,
	i_ta INT,
	i_tr INT,
	i_puntos INT
)
returns void as $$
declare
	v_equipo_exists boolean;
	v_liga_exists boolean;
begin
	select into v_equipo_exists
		exists (select 1 from rzaraguaza.equipo e
			where e.nombre_equipo = i_nombre_equipo);
	select into v_liga_exists
		exists (select 1 from rzaraguaza.liga l
			where l.liga_id = i_liga_id);
	if v_equipo_exists is false then
		if v_liga_exists is true then
			insert into rzaraguaza.equipo (nombre_equipo, liga_id, escudo, pj, pg, pe, pp, gf, gc, dg, ta, tr, puntos)
			values (i_nombre_equipo, i_liga_id, i_escudo, i_pj, i_pg, i_pe, i_pp, i_gf, i_gc, i_dg, i_ta, i_tr, i_puntos);
		else
			raise exception 'Equipo ya existe';
		end if;
	end if;
end;
$$ language plpgsql;

create or replace function rzaraguaza.update_equipo(
	i_equipo_id INT,
	i_nombre_equipo VARCHAR,
	i_liga_id INT,
	i_escudo text,
	i_pj INT,
	i_pg INT,
	i_pe INT,
	i_pp INT,
	i_gf INT,
	i_gc INT,
	i_dg INT,
	i_ta INT,
	i_tr INT,
	i_puntos INT
)
returns void as $$
declare
	v_equipo_exists boolean;
begin
	select into v_equipo_exists exists (select 1 from rzaraguaza.equipo e where e.equipo_id = i_equipo_id);
	if v_equipo_exists then
		update rzaraguaza.equipo ue
		set	nombre_equipo = i_nombre_equipo,
			liga_id = i_liga_id,
			escudo = i_escudo,
			pj = i_pj,
			pg = i_pg,
			pe = i_pe,
			pp = i_pp,
			gf = i_gf,
			gc = i_gc,
			dg = i_dg,
			ta = i_ta,
			tr = i_tr,
			puntos = i_puntos
		where ue.equipo_id = i_equipo_id;
	else
		raise exception 'Equipo does not exist';
	
	end if;
end;
$$ language plpgsql;