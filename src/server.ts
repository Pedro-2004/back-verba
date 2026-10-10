import express from 'express';
import 'dotenv/config';

const app = express();


app.get('/', (_req, res): void => {
  res.status(200).json({ message: 'Servidor rodando em typescript' });
});



const PORT  = process.env.PORT ?? '3000'


app.listen(PORT, (): void =>{
  console.log(`Server run in port ${PORT}`)
})


