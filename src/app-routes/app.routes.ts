import { Router } from 'express';
import amarillaRoutes from './amarilla.routes';
import ligaRoutes from './liga.routes';

const router: Router = Router();

router.use('/liga', ligaRoutes);
router.use('/amarilla', amarillaRoutes);

export default router;