import express from 'express'
import itemRouter from './router/items.router.js'

const app = express();

app.use('/public',express.static("public"))

app.use(itemRouter)

app.listen(3001,()=>{
    console.log('running');
})
