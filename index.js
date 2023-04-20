import express from 'express'
import itemRouter from './router/items.router.js'
import cors from 'cors'
const app = express();

app.use(cors())

app.use('/',express.static("public"))

app.use('/items',itemRouter)

app.listen(3001,()=>{
    console.log('running');
})
