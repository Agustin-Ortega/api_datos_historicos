import {SensoresMem} from './sensoresMem.js'
import {SensoresMongo} from './sensoresMongo.js'


export class SensoresFactoryDAO {
    static get(tipo) {
        
        switch(tipo){
        case 'MEM':
            console.log(':::::::: Persistiendo en Memoria ::::::::')
            console.log('datos temporales...');
            return new SensoresMem()

        case'MONGO':
        console.log(':::::::: Persistiendo en MongoDB ::::::::')
            return new SensoresMongo()

        default:
            console.log(':::::::: Persistiendo en DEFAULT (Memoria) ::::::::')
            console.log('datos temporales...');
            return new SensoresMem()
        }
    }
}
