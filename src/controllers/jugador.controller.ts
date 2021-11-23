import { Request, Response } from 'express';
import { getJugador, getJugadorById, createJugador, updateJugador, deleteJugador } from '../data-access/jugador.queries';
import { JugadorInterface } from '../util/interfaces/jugador.interface';

export default class LigaController {
    getJugador = async (req: Request, res: Response) => {
        try {
            const jugador = await getJugador();
            return res.status(200).send(jugador);
        } catch (error: any) {
            return res.status(500).send(error.message)
        }
    };

    getJugadorById = async (req: Request, res: Response) => {
        try {
            const { jugador_id } = req.params;
            const jugador = await getJugadorById(parseInt(jugador_id));
            return res.status(200).send(jugador);
        } catch (error: any) {
            return res.status(500).send(error.message)
        }
    };

    createJugador = async (req: Request, res: Response) => {
        try {
            const jugador: JugadorInterface = req.body;
            const crear = await createJugador(jugador);
            return res.status(200).send(crear);
        } catch (error: any) {
            return res.status(500).send(error.message)
        }
    };

    updateJugador = async (req: Request, res: Response) => {
        try {
            const { jugador_id } = req.params;
            const jugador: JugadorInterface = req.body;
            const actualizar = await updateJugador(parseInt(jugador_id), jugador);
            return res.status(200).send(actualizar);
        } catch (error: any) {
            return res.status(500).send(error.message)
        }
    };

    deleteJugador = async (req: Request, res: Response) => {
        try {
            const { jugador_id } = req.params;
            const jugador = await deleteJugador(parseInt(jugador_id));
            return res.status(200).send(jugador);
        } catch (error: any) {
            return res.status(500).send(error.message)
        }
    };

}