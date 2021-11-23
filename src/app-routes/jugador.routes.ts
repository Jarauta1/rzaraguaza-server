import { Router } from 'express';
import JugadorController from '../controllers/jugador.controller';

const router: Router = Router();
const jugadorController = new JugadorController();

router.get('/get-all', jugadorController.getJugador);
router.get('/by-id/:jugador_id', jugadorController.getJugadorById);
router.post('/create', jugadorController.createJugador);
router.put('/update/:jugador_id', jugadorController.updateJugador);
router.delete('/delete/:jugador_id', jugadorController.deleteJugador);

export default router;