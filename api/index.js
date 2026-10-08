import express from 'express'
import cors from 'cors'
import router from './router/router.js';
import dbconnect from './config/db.js';
const app = express();
const port = 9000;
app.use(cors()) //communication between frontend and backend
app.use(express.json())
dbconnect();
app.use(router);
app.listen(port,()=>{
    console.log(`Server is running on ${port}`)
})