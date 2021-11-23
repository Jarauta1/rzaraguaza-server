import { dbInstance } from './postgres-instance';
import Constant from '../util/constants';
import { RojaInterface } from '../util/interfaces/roja.interface';
import { RojasModel } from '../util/models/roja.model';

//#region Roja
export const getRojas = async () => {
    const rojas = await dbInstance
    .withSchema(Constant.schema)
    .select("*")
    .from(Constant.tables.roja)
    const parsedRojas = rojas.map((am: any) => new RojasModel(am))
    return parsedRojas
}

export const getRojasById = async (roja_id: number) => {
    const roja = await dbInstance
    .withSchema(Constant.schema)
    .select('*')
    .from(Constant.tables.roja)
    .where('roja.roja_id', roja_id)
    const parsedRoja = roja.map((am: any) => new RojasModel(am));
    return parsedRoja
}

export const createRoja = async (roja: RojaInterface) => {
    try {
        return await dbInstance
        .with(
            'result',
            dbInstance.raw(
                `select rzaraguaza.create_roja (${roja.jugador_id}, ${roja.partido_id})`
            )
        )
        .select("*")
        .from("result")
    } catch (error: any) { console.log(error)
        throw new Error(
            `createRoja: ${JSON.stringify(error.stack).split(" - ")[1]}`
        );
    }
}

export const updateRoja = async (roja_id: number, roja: RojaInterface) => {
    try {
        return await dbInstance
        .with(
            'result',
            dbInstance.raw(
                `select rzaraguaza.update_roja (${roja_id}, ${roja.jugador_id}, ${roja.partido_id})`
            )
        )
        .select("*")
        .from("result")
    } catch (error: any) {
        throw new Error(
            `updateRoja: ${JSON.stringify(error.stack).split(" - ")[1]}`
        );
    }
}

export const deleteRoja = async (roja_id: number) => {
    try {
        return await dbInstance(Constant.tables.roja)
        .where('roja.roja_id', roja_id)
        .withSchema(Constant.schema)
        .delete();
    } catch (error: any) {
        throw new Error(
            `deleteRoja: ${JSON.stringify(error.stack).split(" - ")[1]}`
        );
    }
}
//#endregion