import type { Request, Response } from 'express';
import { loginSchema } from '@/schemas/login/login.schema';

export const loginController = async (req: Request, res: Response): Promise<void> => {
  const result = loginSchema.safeParse(req.body);

  if (!result.success) {
    res.status(400).json({ message: 'Dados invalidos', errors: result.error.issues });
    return;
  }

  res.status(200).json({ message: 'Dados validos' });
};
