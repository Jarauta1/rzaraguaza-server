import { Router } from 'express';
import LigaController from '../controllers/liga.controller';

const router: Router = Router();
const ligaController = new LigaController();

router.get('/get-all', ligaController.getLiga);
router.get('/by-id/:liga_id', ligaController.getLigaById);
router.post('/create', ligaController.createLiga);
router.put('/update/:liga_id', ligaController.updateLiga);
router.delete('/delete/:liga_id', ligaController.deleteLiga);

export default router;