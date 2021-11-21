import { AmarillaInterface } from "../interfaces/amarilla.interface";

export class AmarillaModel implements AmarillaInterface {
    amarilla_id: number;
    jugador_id: number;
    partido_id: number;

    constructor (amarilla: any) {
        this.amarilla_id = amarilla['amarilla_id'];
        this.jugador_id = amarilla['jugador_id'];
        this.partido_id = amarilla['partido_id'];
    }
}