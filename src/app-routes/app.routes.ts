import { Router } from 'express';
import amarillaRoutes from './amarilla.routes';

const router: Router = Router();

router.use('/amarilla', amarillaRoutes);

export default router;