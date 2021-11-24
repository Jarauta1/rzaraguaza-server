import { Router } from 'express';
import ligaRoutes from './liga.routes';
import partidoRoutes from './partido.routes';
import equipoRoutes from './equipo.routes';
import jugadorRoutes from './jugador.routes';
import golRoutes from './gol.routes';
import asistenciaRoutes from './asistencia.routes';
import amarillaRoutes from './amarilla.routes';
import rojaRoutes from './roja.routes';

const router: Router = Router();

router.use('/liga', ligaRoutes);
router.use('/partido', partidoRoutes);
router.use('/equipo', equipoRoutes);
router.use('/jugador', jugadorRoutes);
router.use('/gol', golRoutes);
router.use('/asistencia', asistenciaRoutes);
router.use('/amarilla', amarillaRoutes);
router.use('/roja', rojaRoutes);

export default router;