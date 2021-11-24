import { JugadorInterface } from "../interfaces/jugador.interface";

export class JugadorModel implements JugadorInterface {
    jugador_id: number;
    equipo_id: number;
    liga_id: number;
    nombre_jugador: string;
    apellido1: string;
    apellido2: string;
    apodo: string;
    fecha_nacimiento: string;
    foto_jugador: string;
    dorsal: number;
    posicion: string;
    altura: number;
    total_goles: number;
    total_asistencias: number;
    total_amarillas: number;
    total_rojas: number;
    total_encajados: number;
    pais: string;
    ciudad: string;

    constructor (jugador: any) {
        this.jugador_id = jugador['jugador_id'];
        this.equipo_id = jugador['equipo_id'];
        this.liga_id = jugador['liga_id'];
        this.nombre_jugador = jugador['nombre_jugador'];
        this.apellido1 = jugador['apellido1'];
        this.apellido2 = jugador['apellido2'];
        this.apodo = jugador['apodo'];
        this.fecha_nacimiento = jugador['fecha_nacimiento'];
        this.foto_jugador = jugador['foto_jugador'];
        this.dorsal = jugador['dorsal'];
        this.posicion = jugador['posicion'];
        this.altura = jugador['altura'];
        this.total_goles = jugador['total_goles'];
        this.total_asistencias = jugador['total_asistencias'];
        this.total_amarillas = jugador['total_amarillas'];
        this.total_rojas = jugador['total_rojas'];
        this.total_encajados = jugador['total_encajados'];
        this.pais = jugador['pais'];
        this.ciudad = jugador['ciudad'];
    }
}