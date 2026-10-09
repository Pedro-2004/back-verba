import express from 'express';
import 'dotenv/config';

const app = express();

const PORT = process.env.PORT;

app.get('/', (_req, res): void => {
  res.status(200).json({ message: 'Servidor rodando em typescript' });
});

app.listen(PORT, () => {
  console.log(`Serve run in port: ${PORT}`);
});
