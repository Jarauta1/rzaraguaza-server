import { Router } from 'express';
import RojaController from '../controllers/roja.controller';

const router: Router = Router();
const rojaController = new RojaController();

router.get('/get-all', rojaController.getRojas);
router.get('/by-id/:roja_id', rojaController.getRojasById);
router.post('/create', rojaController.createRoja);
router.put('/update/:roja_id', rojaController.updateRoja);
router.delete('/delete/:roja_id', rojaController.deleteRoja);

export default router;