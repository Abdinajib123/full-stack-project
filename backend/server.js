import express from 'express'
import connectdb from './config/dbconfig.js';
const app = express();

const PORT = process.env.PORT||800;

connectdb()

app.listen(PORT,()=>{
    console.log(`server is running on Port ${PORT}`)
}
)