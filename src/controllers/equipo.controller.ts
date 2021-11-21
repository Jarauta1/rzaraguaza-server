import { Request, Response } from 'express';
import { getEquipo, getEquipoById, createEquipo, updateEquipo, deleteEquipo } from '../data-access/equipo.queries';
import { EquipoInterface } from '../util/interfaces/equipo.interface';

export default class LigaController {
    getEquipo = async (req: Request, res: Response) => {
        try {
            const equipo = await getEquipo();
            return res.status(200).send(equipo);
        } catch (error: any) {
            return res.status(500).send(error.message)
        }
    };

    getEquipoById = async (req: Request, res: Response) => {
        try {
            const { equipo_id } = req.params;
            const equipo = await getEquipoById(parseInt(equipo_id));
            return res.status(200).send(equipo);
        } catch (error: any) {
            return res.status(500).send(error.message)
        }
    };

    createEquipo = async (req: Request, res: Response) => {
        try {
            const equipo: EquipoInterface = req.body;
            const crear = await createEquipo(equipo);
            return res.status(200).send(crear);
        } catch (error: any) {
            return res.status(500).send(error.message)
        }
    };

    updateEquipo = async (req: Request, res: Response) => {
        try {
            const { equipo_id } = req.params;
            const equipo: EquipoInterface = req.body;
            const actualizar = await updateEquipo(parseInt(equipo_id), equipo);
            return res.status(200).send(actualizar);
        } catch (error: any) {
            return res.status(500).send(error.message)
        }
    };

    deleteEquipo = async (req: Request, res: Response) => {
        try {
            const { equipo_id } = req.params;
            const equipo = await deleteEquipo(parseInt(equipo_id));
            return res.status(200).send(equipo);
        } catch (error: any) {
            return res.status(500).send(error.message)
        }
    };

}