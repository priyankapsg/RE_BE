import express from 'express';
import userController from '../controller/userController.js';

const router = express.Router();
const { Login, Register} = userController;

router.route('/login').post(Login);
router.route('/register').post(Register);

export default router;