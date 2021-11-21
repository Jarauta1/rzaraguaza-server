import { Router } from 'express';
import ligaRoutes from './liga.routes';
import equipoRoutes from './equipo.routes';
import amarillaRoutes from './amarilla.routes';

const router: Router = Router();

router.use('/liga', ligaRoutes);
router.use('/equipo', equipoRoutes);
router.use('/amarilla', amarillaRoutes);

export default router;