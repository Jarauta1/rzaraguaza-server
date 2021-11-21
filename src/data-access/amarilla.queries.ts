import { dbInstance } from './postgres-instance';
import Constant from '../util/constants';
import { AmarillaInterface } from '../util/interfaces/amarilla.interface';
import { AmarillaModel } from '../util/models/amarilla.model';

//#region Amarilla
export const getAmarillas = async () => {
    const amarillas = await dbInstance
    .withSchema(Constant.schema)
    .select("*")
    .from(Constant.tables.amarilla)
    const parsedAmarillas = amarillas.map((am: any) => new AmarillaModel(am))
    return parsedAmarillas
}

export const getAmarillasById = async (amarilla_id: number) => {
    const amarilla = await dbInstance
    .withSchema(Constant.schema)
    .select('*')
    .from(Constant.tables.amarilla)
    .where('amarilla.amarilla_id', amarilla_id)
    const parsedAmarilla = amarilla.map((am: any) => new AmarillaModel(am));
    return parsedAmarilla
}

export const createAmarilla = async (amarilla: AmarillaInterface) => {
    try {
        return await dbInstance
        .with(
            'result',
            dbInstance.raw(
                `select rzaraguaza.create_amarilla (${amarilla.jugador_id}, ${amarilla.partido_id})`
            )
        )
        .select("*")
        .from("result")
    } catch (error: any) {
        throw new Error(
            `createAmarilla: ${JSON.stringify(error.stack).split(" - ")[1]}`
        );
    }
}

export const updateAmarilla = async (amarilla_id: number, amarilla: AmarillaInterface) => {
    try {
        return await dbInstance
        .with(
            'result',
            dbInstance.raw(
                `select rzaraguaza.update_amarilla (${amarilla_id}, ${amarilla.jugador_id}, ${amarilla.partido_id})`
            )
        )
        .select("*")
        .from("result")
    } catch (error: any) {
        throw new Error(
            `updateAmarilla: ${JSON.stringify(error.stack).split(" - ")[1]}`
        );
    }
}

export const deleteAmarilla = async (amarilla_id: number) => {
    try {
        return await dbInstance(Constant.tables.amarilla)
        .where('amarilla.amarilla_id', amarilla_id)
        .withSchema(Constant.schema)
        .delete();
    } catch (error: any) {
        throw new Error(
            `deleteAmarilla: ${JSON.stringify(error.stack).split(" - ")[1]}`
        );
    }
}
//#endregion