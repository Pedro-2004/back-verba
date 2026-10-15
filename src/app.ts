import { nameSchema } from '@/schemas/register.schame';
import express from 'express';

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
  const {name} = data;

  res.status(201).json({ message: `Usuario ${name} criado com  sucesso ` });
});
