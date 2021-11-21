create or replace function rzaraguaza.create_liga(
	i_division VARCHAR
)
returns void as $$
declare
	v_liga_exists boolean;
begin
	select into v_liga_exists
		exists (select 1 from rzaraguaza.liga l
			where l.division = i_division);
	if v_liga_exists is false then
		insert into rzaraguaza.liga (division)
		values (i_division);
	else
		raise exception 'Division ya creada';
	end if;
end;
$$ language plpgsql;

create or replace function rzaraguaza.update_liga(
	i_liga_id INT,
	i_division VARCHAR
)
returns void as $$
declare
	v_liga_exists boolean;
begin
	select into v_liga_exists exists (select 1 from rzaraguaza.liga l where l.liga_id = i_liga_id);
	if v_liga_exists then
		update rzaraguaza.liga ul
		set	division = i_division
	where ul.liga_id = i_liga_id;
	else
		raise exception 'Liga does not exist';
	end if;
end;
$$ language plpgsql;