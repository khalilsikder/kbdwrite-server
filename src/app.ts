import express, { Request, Response } from 'express'
import cors from 'cors'
import { productRoutes } from './modules/products/products.route';

const app = express()


app.use(cors());
app.use(express.json());

app.use('/api/products', productRoutes)

app.get('/', (req:Request,res:Response) => {
  res.send('Hello world')
})
app.post('/',(req:Request,res:Response)=>{
console.log(req.body);
res.send('got data')
})

export default app;