import { Router } from 'express';
import ligaRoutes from './liga.routes';
import equipoRoutes from './equipo.routes';
import jugadorRoutes from './jugador.routes';
import amarillaRoutes from './amarilla.routes';
import rojaRoutes from './roja.routes';

const router: Router = Router();

router.use('/liga', ligaRoutes);
router.use('/equipo', equipoRoutes);
router.use('/jugador', jugadorRoutes);
router.use('/amarilla', amarillaRoutes);
router.use('/roja', rojaRoutes);

export default router;