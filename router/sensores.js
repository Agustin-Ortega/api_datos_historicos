import express from 'express'
import {ControladorSensores} from '../controlador/sensores.js'

const router = express.Router()



export class RouterSensores {
    constructor() {
        this.controladorSensores = new ControladorSensores()
    }
    start() {
        router.get('/:id?', this.controladorSensores.getSensores) // ok
        router.post('/', this.controladorSensores.saveSensor)  //ok
        router.put('/:id', this.controladorSensores.updateSensor)  // ok
        router.delete('/:id', this.controladorSensores.deleteSensor)  //ok
        return router
    }
}
