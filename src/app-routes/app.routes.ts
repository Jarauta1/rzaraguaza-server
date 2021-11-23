import { Router } from 'express';
import amarillaRoutes from './amarilla.routes';
import rojaRoutes from './roja.routes';

const router: Router = Router();

router.use('/amarilla', amarillaRoutes);
router.use('/roja', rojaRoutes);

export default router;