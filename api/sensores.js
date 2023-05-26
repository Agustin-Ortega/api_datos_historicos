import config from '../config.js'
import {SensoresFactoryDAO} from '../model/DAOs/sensoresFactory.js'

export class ApiSensores {

    constructor() {
        this.sensoresModel = SensoresFactoryDAO.get(config.DB)
    }

    getSensor = async id => {
        try {
            return id ? await this.sensoresModel.getSensor(id) : await this.sensoresModel.getSensores();
        } catch (error) {
            console.log('Error en el getSensor: ', error);
        }

    }

    saveSensor = async sensor => {
        try {
            return await this.sensoresModel.saveSensor(sensor)
        } catch (error) {
            console.log('Error en el saveSensor: ', error);
        }

    }

    updateSensor = async (sensor, id) => {
        try {
            return await this.sensoresModel.updateSensor(sensor, id)
        } catch (error) {
            console.log('Error en el updateSensor: ', error);
        }

    }

    deleteSensor = async id => {
        try {
            return await this.sensoresModel.deleteSensor(id)
        } catch (error) {
            console.log('Error en el deleteSensor: ', error);
        }

    }

}


