import { dbInstance } from './postgres-instance';
import Constant from '../util/constants';
import { EquipoInterface } from '../util/interfaces/equipo.interface';
import { EquipoModel } from '../util/models/equipo.model';

//#region Equipo
export const getEquipo = async () => {
    const equipo = await dbInstance
    .withSchema(Constant.schema)
    .select("*")
    .from(Constant.tables.equipo)
    const parsedEquipo = equipo.map((eq: any) => new EquipoModel(eq))
    return parsedEquipo
}

export const getEquipoById = async (equipo_id: number) => {
    const equipo = await dbInstance
    .withSchema(Constant.schema)
    .select('*')
    .from(Constant.tables.equipo)
    .where('equipo.equipo_id', equipo_id)
    const parsedEquipo = equipo.map((eq: any) => new EquipoModel(eq));
    return parsedEquipo
}

export const createEquipo = async (equipo: EquipoInterface) => {
    try {
        return await dbInstance
        .with(
            'result',
            dbInstance.raw(
                `select rzaraguaza.create_equipo ('${equipo.nombre_equipo}', ${equipo.liga_id}, '${equipo.escudo}', ' ${equipo.pj}', ' ${equipo.pg}', ' ${equipo.pe}', ' ${equipo.pp}', ' ${equipo.gf}', ' ${equipo.gc}', ' ${equipo.dg}', ' ${equipo.ta}', ' ${equipo.tr}', ' ${equipo.puntos}')`
            )
        )
        .select("*")
        .from("result")
    } catch (error: any) {
        throw new Error(
            `createEquipo: ${JSON.stringify(error.stack).split(" - ")[1]}`
        );
    }
}

export const updateEquipo = async (equipo_id: number, equipo: EquipoInterface) => {
    try {
        return await dbInstance
        .with(
            'result',
            dbInstance.raw(
                `select rzaraguaza.update_equipo (${equipo_id}, '${equipo.nombre_equipo}', ${equipo.liga_id}, '${equipo.escudo}', ' ${equipo.pj}', ' ${equipo.pg}', ' ${equipo.pe}', ' ${equipo.pp}', ' ${equipo.gf}', ' ${equipo.gc}', ' ${equipo.dg}', ' ${equipo.ta}', ' ${equipo.tr}', ' ${equipo.puntos}')`
            )
        )
        .select("*")
        .from("result")
    } catch (error: any) {
        throw new Error(
            `updateEquipo: ${JSON.stringify(error.stack).split(" - ")[1]}`
        );
    }
}

export const deleteEquipo = async (equipo_id: number) => {
    try {
        return await dbInstance(Constant.tables.equipo)
        .where('equipo.equipo_id', equipo_id)
        .withSchema(Constant.schema)
        .delete();
    } catch (error: any) {
        throw new Error(
            `deleteEquipo: ${JSON.stringify(error.stack).split(" - ")[1]}`
        );
    }
}
//#endregion