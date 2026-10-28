import express from 'express';
import {loginController} from '@/controllers/login/login.controller'

export const loginRouter = express.Router();

loginRouter.post('/',loginController);
