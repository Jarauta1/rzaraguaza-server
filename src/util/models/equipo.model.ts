import { EquipoInterface } from "../interfaces/equipo.interface"

export class EquipoModel implements EquipoInterface {
    equipo_id: number;
    nombre_equipo: string;
    liga_id: number;
    escudo: string;
    pj: number;
    pg: number;
    pe: number;
    pp: number;
    gf: number;
    gc: number;
    dg: number;
    ta: number;
    tr: number;
    puntos: number;

    constructor (equipo: any) {
        this.equipo_id = equipo['equipo_id'];
        this.nombre_equipo = equipo['nombre_equipo'];
        this.liga_id = equipo['liga_id'];
        this.escudo = equipo['escudo'];
        this.pj = equipo['pj'];
        this.pg = equipo['pg'];
        this.pe = equipo['pe'];
        this.pp = equipo['pp'];
        this.gf = equipo['gf'];
        this.gc = equipo['gc'];
        this.dg = equipo['dg'];
        this.ta = equipo['ta'];
        this.tr = equipo['tr'];
        this.puntos = equipo['puntos'];
    }
}