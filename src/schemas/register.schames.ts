import { z } from 'zod';

export const loginSchema = z.object({
  name: z.string().trim().min(1, "O campo não pode vim vazio"),
  email: z.email()
});
