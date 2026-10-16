import { PrismaClient } from '@/generated/prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';

console.log(process.env.DATABASE_URL);
const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL,
});

export const prisma = new PrismaClient({
  adapter: adapter,
});
