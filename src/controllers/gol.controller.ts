import { Request, Response } from 'express';
import { getGols, getGolsById, createGol, updateGol, deleteGol } from '../data-access/gol.queries';
import { GolInterface } from '../util/interfaces/gol.interface';

export default class GolController {
    getGols = async (req: Request, res: Response) => {
        try {
            const gols = await getGols();
            return res.status(200).send(gols);
        } catch (error: any) {
            return res.status(500).send(error.message)
        }
    };

    getGolsById = async (req: Request, res: Response) => {
        try {
            const { gol_id } = req.params;
            const gol = await getGolsById(parseInt(gol_id));
            return res.status(200).send(gol);
        } catch (error: any) {
            return res.status(500).send(error.message)
        }
    };

    createGol = async (req: Request, res: Response) => {
        try {
            const tarjeta: GolInterface = req.body;
            const gol = await createGol(tarjeta);
            return res.status(200).send(gol);
        } catch (error: any) {
            return res.status(500).send(error.message)
        }
    };

    updateGol = async (req: Request, res: Response) => {
        try {
            const { gol_id } = req.params;
            const tarjeta: GolInterface = req.body;
            const gol = await updateGol(parseInt(gol_id), tarjeta);
            return res.status(200).send(gol);
        } catch (error: any) {
            return res.status(500).send(error.message)
        }
    };

   deleteGol = async (req: Request, res: Response) => {
        try {
            const { gol_id } = req.params;
            const gol = await deleteGol(parseInt(gol_id));
            return res.status(200).send(gol);
        } catch (error: any) {
            return res.status(500).send(error.message)
        }
    };

}