import { dbInstance } from './postgres-instance';
import Constant from '../util/constants';
import { GolInterface } from '../util/interfaces/gol.interface';
import { GolModel } from '../util/models/gol.model';

//#region Gol
export const getGols = async () => {
    const gols = await dbInstance
    .withSchema(Constant.schema)
    .select("*")
    .from(Constant.tables.gol)
    const parsedGols = gols.map((am: any) => new GolModel(am))
    return parsedGols
}

export const getGolsById = async (gol_id: number) => {
    const gol = await dbInstance
    .withSchema(Constant.schema)
    .select('*')
    .from(Constant.tables.gol)
    .where('gol.gol_id', gol_id)
    const parsedGol = gol.map((am: any) => new GolModel(am));
    return parsedGol
}

export const createGol = async (gol: GolInterface) => {
    try {
        return await dbInstance
        .with(
            'result',
            dbInstance.raw(
                `select rzaraguaza.create_gol (${gol.jugador_id}, ${gol.partido_id})`
            )
        )
        .select("*")
        .from("result")
    } catch (error: any) {
        throw new Error(
            `createGol: ${JSON.stringify(error.stack).split(" - ")[1]}`
        );
    }
}

export const updateGol = async (gol_id: number, gol: GolInterface) => {
    try {
        return await dbInstance
        .with(
            'result',
            dbInstance.raw(
                `select rzaraguaza.update_gol (${gol_id}, ${gol.jugador_id}, ${gol.partido_id})`
            )
        )
        .select("*")
        .from("result")
    } catch (error: any) {
        throw new Error(
            `updateGol: ${JSON.stringify(error.stack).split(" - ")[1]}`
        );
    }
}

export const deleteGol = async (gol_id: number) => {
    try {
        return await dbInstance(Constant.tables.gol)
        .where('gol.gol_id', gol_id)
        .withSchema(Constant.schema)
        .delete();
    } catch (error: any) {
        throw new Error(
            `deleteGol: ${JSON.stringify(error.stack).split(" - ")[1]}`
        );
    }
}
//#endregion