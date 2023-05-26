import {ApiSensores} from '../api/sensores.js'

export class ControladorSensores {
    constructor() {
        this.apiSensores = new ApiSensores()
    }

    getSensores = async (req,res) => {
        const { id } = req.params
        res.json( await this.apiSensores.getSensor(id) )
    }

    saveSensor = async(req, res)=>{
        const sensor = req.body
        res.json(await this.apiSensores.saveSensor(sensor))
    }

    updateSensor = async(req,res)=>{
        const {id} = req.params
        const sensor = req.body
        res.json(await this.apiSensores.updateSensor(sensor,id))
    }

    deleteSensor = async(req,res)=>{
        const {id} = req.params
        res.json(await this.apiSensores.deleteSensor(id))
    }

}

