import express from 'express';
import type { Request, Response } from 'express';

export const loginRouter = express.Router();

loginRouter.post('/', (_req: Request, res: Response) => {
  return res.status(200).json({ message: 'Usuário criado' });
});
