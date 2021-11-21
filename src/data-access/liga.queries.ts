import { dbInstance } from './postgres-instance';
import Constant from '../util/constants';
import { LigaInterface } from '../util/interfaces/liga.interface';
import { LigaModel } from '../util/models/liga.model';

//#region Amarilla
export const getLiga = async () => {
    const liga = await dbInstance
    .withSchema(Constant.schema)
    .select("*")
    .from(Constant.tables.liga)
    const parsedLigas = liga.map((lig: any) => new LigaModel(lig))
    return parsedLigas
}

export const getLigaById = async (liga_id: number) => {
    const liga = await dbInstance
    .withSchema(Constant.schema)
    .select('*')
    .from(Constant.tables.liga)
    .where('liga.liga_id', liga_id)
    const parsedLiga = liga.map((lig: any) => new LigaModel(lig));
    return parsedLiga
}

export const createLiga = async (liga: LigaInterface) => {
    try {
        return await dbInstance
        .with(
            'result',
            dbInstance.raw(
                `select rzaraguaza.create_liga ('${liga.division}')`
            )
        )
        .select("*")
        .from("result")
    } catch (error: any) {
        throw new Error(
            `createLiga: ${JSON.stringify(error.stack).split(" - ")[1]}`
        );
    }
}

export const updateLiga = async (liga_id: number, liga: LigaInterface) => {
    try {
        return await dbInstance
        .with(
            'result',
            dbInstance.raw(
                `select rzaraguaza.update_liga (${liga_id}, '${liga.division}')`
            )
        )
        .select("*")
        .from("result")
    } catch (error: any) {
        throw new Error(
            `updateLiga: ${JSON.stringify(error.stack).split(" - ")[1]}`
        );
    }
}

export const deleteLiga = async (liga_id: number) => {
    try {
        return await dbInstance(Constant.tables.liga)
        .where('liga.liga_id', liga_id)
        .withSchema(Constant.schema)
        .delete();
    } catch (error: any) {
        throw new Error(
            `deleteLiga: ${JSON.stringify(error.stack).split(" - ")[1]}`
        );
    }
}
//#endregion