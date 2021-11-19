import { Request, Response } from 'express';
import { getAmarillas, getAmarillasById, createAmarilla, updateAmarilla, deleteAmarilla } from '../data-access/amarilla.queries';
import { AmarillaInterface } from '../util/interfaces/amarilla.interface';

export default class AmarillaController {
    getAmarillas = async (req: Request, res: Response) => {
        try {
            const amarillas = await getAmarillas();
            return res.status(200).send(amarillas);
        } catch (error: any) {
            return res.status(500).send(error.message)
        }
    };

    getAmarillasById = async (req: Request, res: Response) => {
        try {
            const { amarilla_id } = req.params;
            const amarilla = await getAmarillasById(parseInt(amarilla_id));
            return res.status(200).send(amarilla);
        } catch (error: any) {
            return res.status(500).send(error.message)
        }
    };

    createAmarilla = async (req: Request, res: Response) => {
        try {
            const tarjeta: AmarillaInterface = req.body;
            const amarilla = await createAmarilla(tarjeta);
            return res.status(200).send(amarilla);
        } catch (error: any) {
            return res.status(500).send(error.message)
        }
    };

    updateAmarilla = async (req: Request, res: Response) => {
        try {
            const { amarilla_id } = req.params;
            const tarjeta: AmarillaInterface = req.body;
            const amarilla = await updateAmarilla(parseInt(amarilla_id), tarjeta);
            return res.status(200).send(amarilla);
        } catch (error: any) {
            return res.status(500).send(error.message)
        }
    };

   deleteAmarilla = async (req: Request, res: Response) => {
        try {
            const { amarilla_id } = req.params;
            const amarilla = await deleteAmarilla(parseInt(amarilla_id));
            return res.status(200).send(amarilla);
        } catch (error: any) {
            return res.status(500).send(error.message)
        }
    };

}