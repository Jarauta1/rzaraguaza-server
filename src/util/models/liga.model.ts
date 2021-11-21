import {LigaInterface } from "../interfaces/liga.interface";

export class LigaModel implements LigaInterface {
    liga_id: number;
    division: string;

    constructor (liga: any) {
        this.liga_id = liga['liga_id'];
        this.division = liga['division'];
    }
}