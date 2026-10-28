import express from 'express';
import {routes} from '@/routers/index'



export const app = express();

app.use(express.json());
app.use(routes)





