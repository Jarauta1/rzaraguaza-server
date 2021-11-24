import { Router } from 'express';
import GolController from '../controllers/gol.controller';

const router: Router = Router();
const golController = new GolController();

router.get('/get-all', golController.getGols);
router.get('/by-id/:gol_id', golController.getGolsById);
router.post('/create', golController.createGol);
router.put('/update/:gol_id', golController.updateGol);
router.delete('/delete/:gol_id', golController.deleteGol);

export default router;