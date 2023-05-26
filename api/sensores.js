import config from '../config.js'
import {SensoresFactoryDAO} from '../model/DAOs/sensoresFactory.js'

export class ApiSensores {

    constructor() {
        this.sensoresModel = SensoresFactoryDAO.get(config.DB)
    }

    getSensor = async id => {
        return id? await this.sensoresModel.getSensor(id) : await this.sensoresModel.getSensores();
    }

    saveSensor = async sensor =>{
        return await this.sensoresModel.saveSensor(sensor)
    }

    updateSensor = async (sensor,id) =>{
        return await this.sensoresModel.updateSensor(sensor,id)
    }

    deleteSensor = async id =>{
        return await this.sensoresModel.deleteSensor(id)
    }
    
}


