import {z} from 'zod'

export const envSchema = z.object({
    DATABASE_URL: z.string(),
    PORT: z.number(),
    JWT_SECRET: z.string()
})