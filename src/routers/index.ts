import {Router} from 'express'
import {loginRouter} from '@/routers/login/login.routes'

export const routes = Router()

routes.use('/login', loginRouter)