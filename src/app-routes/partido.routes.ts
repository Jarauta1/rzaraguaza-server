import { Router } from 'express';
import PartidoController from '../controllers/partido.controller';

const router: Router = Router();
const partidoController = new PartidoController();

router.get('/get-all', partidoController.getPartidos);
router.get('/by-id/:partido_id', partidoController.getPartidosById);
router.post('/create', partidoController.createPartido);
router.put('/update/:partido_id', partidoController.updatePartido);
router.delete('/delete/:partido_id', partidoController.deletePartido);

export default router;