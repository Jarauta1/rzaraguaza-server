import { dbInstance } from './postgres-instance';
import Constant from '../util/constants';
import { JugadorInterface } from '../util/interfaces/jugador.interface';
import { JugadorModel } from '../util/models/jugador.model';

//#region Jugador
export const getJugador = async () => {
    const jugador = await dbInstance
    .withSchema(Constant.schema)
    .select("*")
    .from(Constant.tables.jugador)
    const parsedJugador = jugador.map((jug: any) => new JugadorModel(jug))
    return parsedJugador
}

export const getJugadorById = async (jugador_id: number) => {
    const jugador = await dbInstance
    .withSchema(Constant.schema)
    .select('*')
    .from(Constant.tables.jugador)
    .where('jugador.jugador_id', jugador_id)
    const parsedJugador = jugador.map((jug: any) => new JugadorModel(jug));
    return parsedJugador
}

export const createJugador = async (jugador: JugadorInterface) => {
    try {
        return await dbInstance
        .with(
            'result',
            dbInstance.raw(
                `select rzaraguaza.create_jugador (${jugador.equipo_id}, '${jugador.nombre_jugador}', '${jugador.apellido1}', ' ${jugador.apellido2}', ' ${jugador.apodo}', ' ${jugador.fecha_nacimiento}', ' ${jugador.foto_jugador}', ${jugador.dorsal}, '${jugador.posicion}', ${jugador.altura}, ${jugador.total_goles}, ${jugador.total_asistencias}, ${jugador.total_amarillas}, ${jugador.total_rojas}, ${jugador.total_encajados}, '${jugador.pais}', '${jugador.ciudad}')`
            )
        )
        .select("*")
        .from("result")
    } catch (error: any) {
        throw new Error(
            `createJugador: ${JSON.stringify(error.stack).split(" - ")[1]}`
        );
    }
}

export const updateJugador = async (jugador_id: number, jugador: JugadorInterface) => {
    try {
        return await dbInstance
        .with(
            'result',
            dbInstance.raw(
                `select rzaraguaza.update_jugador (${jugador_id}, ${jugador.equipo_id}, '${jugador.nombre_jugador}', '${jugador.apellido1}', ' ${jugador.apellido2}', ' ${jugador.apodo}', ' ${jugador.fecha_nacimiento}', ' ${jugador.foto_jugador}', ${jugador.dorsal}, '${jugador.posicion}', ${jugador.altura}, ${jugador.total_goles}, ${jugador.total_asistencias}, ${jugador.total_amarillas}, ${jugador.total_rojas}, ${jugador.total_encajados}, '${jugador.pais}', '${jugador.ciudad}')`
            )
        )
        .select("*")
        .from("result")
    } catch (error: any) {
        throw new Error(
            `updateJugador: ${JSON.stringify(error.stack).split(" - ")[1]}`
        );
    }
}

export const deleteJugador = async (jugador_id: number) => {
    try {
        return await dbInstance(Constant.tables.jugador)
        .where('jugador.jugador_id', jugador_id)
        .withSchema(Constant.schema)
        .delete();
    } catch (error: any) {
        throw new Error(
            `deleteJugador: ${JSON.stringify(error.stack).split(" - ")[1]}`
        );
    }
}
//#endregion