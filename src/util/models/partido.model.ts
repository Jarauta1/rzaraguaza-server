import { PartidoInterface } from "../interfaces/partido.interface";

export class PartidoModel implements PartidoInterface {
    partido_id: number;
    local_id: number;
    visitante_id: number;
    datos_local: JSON;
    datos_visitante: JSON;

    constructor (partido: any) {
        this.partido_id = partido['partido_id'];
        this.local_id = partido['local_id'];
        this.visitante_id = partido['visitante_id'];
        this.datos_local = partido['datos_local'];
        this.datos_visitante = partido['datos_visitante'];
    }
}