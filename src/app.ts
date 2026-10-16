import { nameSchema } from '@/schemas/register.schame';
import express from 'express';
import { prisma } from '@/lib/prisma';

export const app = express();
app.use(express.json());

app.post('/register', (req, res): void => {
  const result = nameSchema.safeParse(req.body);

  if (!result.success) {
    return void res
      .status(400)
      .json({ message: 'Os dados enviados não são validos', erros: result.error });
  }
  const data = result.data;
  const { name } = data;

  res.status(201).json({ message: `Usuario ${name} criado com  sucesso ` });
});

app.get('/', async (_req, res) => {
  const user = await prisma.user.findMany();

  return res.status(200).json({ message: user });
});
