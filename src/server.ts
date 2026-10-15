import {app} from '@/app'
import 'dotenv/config'




const PORT  = process.env.PORT ?? '3000'


app.listen(PORT, (): void =>{
  console.log(`Server run in port ${PORT}`)
})


