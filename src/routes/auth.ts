import { Router } from 'express';
import LoginController from '../controllers/LoginController';
import { checkJwt } from '../middlewares/checkJwt';

const router = Router();

router.post('/login', LoginController.login);

router.post('/change-password', [checkJwt], LoginController.changePassword);

export default router;
