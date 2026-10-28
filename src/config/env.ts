import 'dotenv/config';
import { envSchema } from '@/schemas/env/env.schema';

export const env = envSchema.parse(process.env);