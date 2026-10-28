import { z } from 'zod';

export const loginSchema = z.object({
  password: z.string().trim().min(6, 'O campo não pode vim vazio'),
  email: z.email(),
});
