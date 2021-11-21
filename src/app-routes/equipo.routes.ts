import { Router } from 'express';
import EquipoController from '../controllers/equipo.controller';

const router: Router = Router();
const equipoController = new EquipoController();

router.get('/get-all', equipoController.getEquipo);
router.get('/by-id/:equipo_id', equipoController.getEquipoById);
router.post('/create', equipoController.createEquipo);
router.put('/update/:equipo_id', equipoController.updateEquipo);
router.delete('/delete/:equipo_id', equipoController.deleteEquipo);

export default router;