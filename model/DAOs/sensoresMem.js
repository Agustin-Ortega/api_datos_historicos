export class SensoresMem {
    constructor() {
        this.sensores = [
            {
                id: 1,
               name: "sensor1"
            },
          
        ]
    }
    getSensor = async id => {
        return this.sensores.find(sensor => sensor.id == id)    
    }
    getSensores = async _ => {
        try {
            return this.sensores
        }
        catch {
            return []
        }
    }
    saveSensor = async sensor => {
        const id = parseInt(this.sensores[this.sensores.length-1].id) + 1
        sensor.id = String(id)
        this.sensores.push(sensor)
        return sensor
    }
    updateSensor = async (sensor,id) => {
        /* Actualización total */
        sensor.id = id
        const index = this.sensores.findIndex(sensor => sensor.id == id)
        this.sensores.splice(index, 1, sensor)
        return sensor
    }
    deleteSensor = async id => {
        const index = this.sensores.findIndex(sensor => sensor.id == id)
        const sensor = this.sensores.splice(index, 1)[0]
        return sensor
    }
}