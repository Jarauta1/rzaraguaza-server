import { AsistenciaInterface } from "../interfaces/asistencia.interface";

export class AsistenciaModel implements AsistenciaInterface {
    asistencia_id: number;
    jugador_id: number;
    partido_id: number;

    constructor (asistencia: any) {
        this.asistencia_id = asistencia['asistencia_id'];
        this.jugador_id = asistencia['jugador_id'];
        this.partido_id = asistencia['partido_id'];
    }
}