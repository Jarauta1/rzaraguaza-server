import { dbInstance } from './postgres-instance';
import Constant from '../util/constants';
import { PartidoInterface } from '../util/interfaces/partido.interface';
import { PartidoModel } from '../util/models/partido.model';

//#region Roja
export const getPartidos = async () => {
    const partidos = await dbInstance
    .withSchema(Constant.schema)
    .select("*")
    .from(Constant.tables.partido)
    const parsedPartidos = partidos.map((par: any) => new PartidoModel(par))
    return parsedPartidos
}

export const getPartidosById = async (partido_id: number) => {
    const partidos = await dbInstance
    .withSchema(Constant.schema)
    .select('*')
    .from(Constant.tables.partido)
    .where('partido.partido_id', partido_id)
    const parsedPartidos = partidos.map((par: any) => new PartidoModel(par));
    return parsedPartidos
}

export const createPartido = async (partido: PartidoInterface) => {
    try {
        return await dbInstance
        .with(
            'result',
            dbInstance.raw(
                `select rzaraguaza.create_partido (${partido.local_id}, ${partido.visitante_id}, '${partido.datos_local}', '${partido.datos_visitante}')`
            )
        )
        .select("*")
        .from("result")
    } catch (error: any) {
        throw new Error(
            `createPartido: ${JSON.stringify(error.stack).split(" - ")[1]}`
        );
    }
}

export const updatePartido = async (partido_id: number, partido: PartidoInterface) => {
    try {
        return await dbInstance
        .with(
            'result',
            dbInstance.raw(
                `select rzaraguaza.update_partido (${partido_id}, ${partido.local_id}, ${partido.visitante_id}, '${partido.datos_local}', '${partido.datos_visitante}')`
            )
        )
        .select("*")
        .from("result")
    } catch (error: any) {
        throw new Error(
            `updatePartido: ${JSON.stringify(error.stack).split(" - ")[1]}`
        );
    }
}

export const deletePartido = async (partido_id: number) => {
    try {
        return await dbInstance(Constant.tables.partido)
        .where('partido.partido_id', partido_id)
        .withSchema(Constant.schema)
        .delete();
    } catch (error: any) {
        throw new Error(
            `deletePartido: ${JSON.stringify(error.stack).split(" - ")[1]}`
        );
    }
}
//#endregion