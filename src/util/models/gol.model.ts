import { GolInterface } from "../interfaces/gol.interface";

export class GolModel implements GolInterface {
    gol_id: number;
    jugador_id: number;
    partido_id: number;

    constructor (gol: any) {
        this.gol_id = gol['gol_id'];
        this.jugador_id = gol['jugador_id'];
        this.partido_id = gol['partido_id'];
    }
}