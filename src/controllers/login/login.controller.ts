import type { Request, Response } from 'express';
import { loginSchema } from '@/schemas/login/login.schema';
import { loginService } from '@/services/login/login.service';

export const loginController = async (req: Request, res: Response): Promise<void> => {
  const result = loginSchema.safeParse(req.body);
  if (!result.success) {
    res.status(400).json({ message: 'Dados invalidos', errors: result.error.issues });
    return;
  }


  const { email, password } = result.data;

  const token = await loginService(email, password);

  res.status(200).json({token: token})
  return 
};
