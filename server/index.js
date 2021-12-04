import express from 'express';

//components
import Connection from './connection/db.js'

const app = express();
const PORT = 8000;
Connection();
app.listen(PORT,()=> console.log("server is runing sucessfully"))

