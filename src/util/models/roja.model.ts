import { RojaInterface } from "../interfaces/roja.interface";

export class RojasModel implements RojaInterface {
    roja_id: number;
    jugador_id: number;
    partido_id: number;

    constructor (roja: any) {
        this.roja_id = roja['roja_id'];
        this.jugador_id = roja['jugador_id'];
        this.partido_id = roja['partido_id'];
    }
}