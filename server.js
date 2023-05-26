import express from 'express'
import {RouterSensores} from './router/sensores.js'
import {CnxMongoDB} from './model/cnxMongoDB.js'
import config from "./config.js"

import cors from "cors";

const app = express();
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors())



app.use('/respirar/sensores', new RouterSensores().start())




if (config.DB == "MONGO") {
    await CnxMongoDB.conectar();
  }



const PORT = process.env.PORT || config.PORT
const server = app.listen(PORT, 
    () => console.log(
        `Servidor express escuchando en el puerto ${PORT}`
))
server.on('error', error => console.log('Servidor express en error:', error))
