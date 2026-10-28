import 'dotenv/config';
import { app } from './app';
import {env} from '@/./config/env'

const PORT = env.PORT ;

app.listen(PORT, (): void => {
  console.log(`Server run in port ${PORT}`);
});
