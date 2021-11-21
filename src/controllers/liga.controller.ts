import { Request, Response } from 'express';
import { getLiga, getLigaById, createLiga, updateLiga, deleteLiga } from '../data-access/liga.queries';
import { LigaInterface } from '../util/interfaces/liga.interface';

export default class LigaController {
    getLiga = async (req: Request, res: Response) => {
        try {
            const liga = await getLiga();
            return res.status(200).send(liga);
        } catch (error: any) {
            return res.status(500).send(error.message)
        }
    };

    getLigaById = async (req: Request, res: Response) => {
        try {
            const { liga_id } = req.params;
            const liga = await getLigaById(parseInt(liga_id));
            return res.status(200).send(liga);
        } catch (error: any) {
            return res.status(500).send(error.message)
        }
    };

    createLiga = async (req: Request, res: Response) => {
        try {
            const liga: LigaInterface = req.body;
            const crear = await createLiga(liga);
            return res.status(200).send(crear);
        } catch (error: any) {
            return res.status(500).send(error.message)
        }
    };

    updateLiga = async (req: Request, res: Response) => {
        try {
            const { liga_id } = req.params;
            const liga: LigaInterface = req.body;
            const actualizar = await updateLiga(parseInt(liga_id), liga);
            return res.status(200).send(actualizar);
        } catch (error: any) {
            return res.status(500).send(error.message)
        }
    };

    deleteLiga = async (req: Request, res: Response) => {
        try {
            const { liga_id } = req.params;
            const liga = await deleteLiga(parseInt(liga_id));
            return res.status(200).send(liga);
        } catch (error: any) {
            return res.status(500).send(error.message)
        }
    };

}