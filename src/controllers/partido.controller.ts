import { Request, Response } from 'express';
import { getPartidos, getPartidosById, createPartido, updatePartido, deletePartido } from '../data-access/partido.queries';
import { PartidoInterface } from '../util/interfaces/partido.interface';

export default class PartidoController {
    getPartidos = async (req: Request, res: Response) => {
        try {
            const partidos = await getPartidos();
            return res.status(200).send(partidos);
        } catch (error: any) {
            return res.status(500).send(error.message)
        }
    };

    getPartidosById = async (req: Request, res: Response) => {
        try {
            const { partido_id } = req.params;
            const partido = await getPartidosById(parseInt(partido_id));
            return res.status(200).send(partido);
        } catch (error: any) {
            return res.status(500).send(error.message)
        }
    };

    createPartido = async (req: Request, res: Response) => {
        try {
            const partido: PartidoInterface = req.body;
            const partidos = await createPartido(partido);
            return res.status(200).send(partidos);
        } catch (error: any) {
            return res.status(500).send(error.message)
        }
    };

    updatePartido = async (req: Request, res: Response) => {
        try {
            const { partido_id } = req.params;
            const partido: PartidoInterface = req.body;
            const partidos = await updatePartido(parseInt(partido_id), partido);
            return res.status(200).send(partidos);
        } catch (error: any) {
            return res.status(500).send(error.message)
        }
    };

    deletePartido = async (req: Request, res: Response) => {
        try {
            const { partido_id } = req.params;
            const partido = await deletePartido(parseInt(partido_id));
            return res.status(200).send(partido);
        } catch (error: any) {
            return res.status(500).send(error.message)
        }
    };

}