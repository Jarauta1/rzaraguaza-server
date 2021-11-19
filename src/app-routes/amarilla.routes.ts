import { Router } from 'express';
import AmarillaController from '../controllers/amarilla.controller';

const router: Router = Router();
const amarillaController = new AmarillaController();

router.get('/get-all', amarillaController.getAmarillas);
router.get('/by-id/:amarilla_id', amarillaController.getAmarillasById);
router.post('/create', amarillaController.createAmarilla);
router.put('/update/:amarilla_id', amarillaController.updateAmarilla);
router.delete('/delete/:amarilla_id', amarillaController.deleteAmarilla);

export default router;