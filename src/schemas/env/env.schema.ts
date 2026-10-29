import { z } from 'zod';

export const envSchema = z.object({
  DATABASE_URL: z.string().trim().url({message: 'Por favor digite uma url válida'}),
  PORT: z.coerce.number().int().min(1).max(65535).default(3000),
  JWT_SECRET: z.string().min(32),
});