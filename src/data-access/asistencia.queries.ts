import { dbInstance } from './postgres-instance';
import Constant from '../util/constants';
import { AsistenciaInterface } from '../util/interfaces/asistencia.interface';
import { AsistenciaModel } from '../util/models/asistencia.model';

//#region Asistencia
export const getAsistencias = async () => {
    const asistencias = await dbInstance
    .withSchema(Constant.schema)
    .select("*")
    .from(Constant.tables.asistencia)
    const parsedAsistencias = asistencias.map((am: any) => new AsistenciaModel(am))
    return parsedAsistencias
}

export const getAsistenciasById = async (asistencia_id: number) => {
    const asistencia = await dbInstance
    .withSchema(Constant.schema)
    .select('*')
    .from(Constant.tables.asistencia)
    .where('asistencia.asistencia_id', asistencia_id)
    const parsedAsistencia = asistencia.map((am: any) => new AsistenciaModel(am));
    return parsedAsistencia
}

export const createAsistencia = async (asistencia: AsistenciaInterface) => {
    try {
        return await dbInstance
        .with(
            'result',
            dbInstance.raw(
                `select rzaraguaza.create_asistencia (${asistencia.jugador_id}, ${asistencia.partido_id})`
            )
        )
        .select("*")
        .from("result")
    } catch (error: any) {
        throw new Error(
            `createAsistencia: ${JSON.stringify(error.stack).split(" - ")[1]}`
        );
    }
}

export const updateAsistencia = async (asistencia_id: number, asistencia: AsistenciaInterface) => {
    try {
        return await dbInstance
        .with(
            'result',
            dbInstance.raw(
                `select rzaraguaza.update_asistencia (${asistencia_id}, ${asistencia.jugador_id}, ${asistencia.partido_id})`
            )
        )
        .select("*")
        .from("result")
    } catch (error: any) {
        throw new Error(
            `updateAsistencia: ${JSON.stringify(error.stack).split(" - ")[1]}`
        );
    }
}

export const deleteAsistencia = async (asistencia_id: number) => {
    try {
        return await dbInstance(Constant.tables.asistencia)
        .where('asistencia.asistencia_id', asistencia_id)
        .withSchema(Constant.schema)
        .delete();
    } catch (error: any) {
        throw new Error(
            `deleteAsistencia: ${JSON.stringify(error.stack).split(" - ")[1]}`
        );
    }
}
//#endregion