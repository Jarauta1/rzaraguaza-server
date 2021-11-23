import { Request, Response } from 'express';
import { getRojas, getRojasById, createRoja, updateRoja, deleteRoja } from '../data-access/roja.queries';
import { RojaInterface } from '../util/interfaces/roja.interface';

export default class RojaController {
    getRojas = async (req: Request, res: Response) => {
        try {
            const rojas = await getRojas();
            return res.status(200).send(rojas);
        } catch (error: any) {
            return res.status(500).send(error.message)
        }
    };

    getRojasById = async (req: Request, res: Response) => {
        try {
            const { roja_id } = req.params;
            const roja = await getRojasById(parseInt(roja_id));
            return res.status(200).send(roja);
        } catch (error: any) {
            return res.status(500).send(error.message)
        }
    };

    createRoja = async (req: Request, res: Response) => {
        try {
            const tarjeta: RojaInterface = req.body;
            const roja = await createRoja(tarjeta);
            return res.status(200).send(roja);
        } catch (error: any) {
            return res.status(500).send(error.message)
        }
    };

    updateRoja = async (req: Request, res: Response) => {
        try {
            const { roja_id } = req.params;
            const tarjeta: RojaInterface = req.body;
            const roja = await updateRoja(parseInt(roja_id), tarjeta);
            return res.status(200).send(roja);
        } catch (error: any) {
            return res.status(500).send(error.message)
        }
    };

   deleteRoja = async (req: Request, res: Response) => {
        try {
            const { roja_id } = req.params;
            const roja = await deleteRoja(parseInt(roja_id));
            return res.status(200).send(roja);
        } catch (error: any) {
            return res.status(500).send(error.message)
        }
    };

}