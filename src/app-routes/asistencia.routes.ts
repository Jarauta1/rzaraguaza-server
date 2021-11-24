import { Router } from 'express';
import AsistenciaController from '../controllers/asistencia.controller';

const router: Router = Router();
const asistenciaController = new AsistenciaController();

router.get('/get-all', asistenciaController.getAsistencias);
router.get('/by-id/:asistencia_id', asistenciaController.getAsistenciasById);
router.post('/create', asistenciaController.createAsistencia);
router.put('/update/:asistencia_id', asistenciaController.updateAsistencia);
router.delete('/delete/:asistencia_id', asistenciaController.deleteAsistencia);

export default router;