import { Request, Response } from 'express';
import { getAsistencias, getAsistenciasById, createAsistencia, updateAsistencia, deleteAsistencia } from '../data-access/asistencia.queries';
import { AsistenciaInterface } from '../util/interfaces/asistencia.interface';

export default class AsistenciaController {
    getAsistencias = async (req: Request, res: Response) => {
        try {
            const asistencias = await getAsistencias();
            return res.status(200).send(asistencias);
        } catch (error: any) {
            return res.status(500).send(error.message)
        }
    };

    getAsistenciasById = async (req: Request, res: Response) => {
        try {
            const { asistencia_id } = req.params;
            const asistencia = await getAsistenciasById(parseInt(asistencia_id));
            return res.status(200).send(asistencia);
        } catch (error: any) {
            return res.status(500).send(error.message)
        }
    };

    createAsistencia = async (req: Request, res: Response) => {
        try {
            const tarjeta: AsistenciaInterface = req.body;
            const asistencia = await createAsistencia(tarjeta);
            return res.status(200).send(asistencia);
        } catch (error: any) {
            return res.status(500).send(error.message)
        }
    };

    updateAsistencia = async (req: Request, res: Response) => {
        try {
            const { asistencia_id } = req.params;
            const tarjeta: AsistenciaInterface = req.body;
            const asistencia = await updateAsistencia(parseInt(asistencia_id), tarjeta);
            return res.status(200).send(asistencia);
        } catch (error: any) {
            return res.status(500).send(error.message)
        }
    };

   deleteAsistencia = async (req: Request, res: Response) => {
        try {
            const { asistencia_id } = req.params;
            const asistencia = await deleteAsistencia(parseInt(asistencia_id));
            return res.status(200).send(asistencia);
        } catch (error: any) {
            return res.status(500).send(error.message)
        }
    };

}