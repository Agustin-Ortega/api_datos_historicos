import { CnxMongoDB } from '../cnxMongoDB.js'
import getLastId from '../../utils/getLastId.js'

export class SensoresMongo {
  getSensor = async (id) => {
    if (!CnxMongoDB.connection) return {};
    id = parseInt(id)
    let sensor = await CnxMongoDB.db
      .collection("sensores_historicos")
      .findOne({ _id: id });
    return sensor;
  };

  
  getSensores = async (_) => {
    if (!CnxMongoDB.connection) return [];
    try {
      let sensores = await CnxMongoDB.db
        .collection("sensores_historicos")
        .find({})
        .toArray();
      return sensores;
    } catch {
      return [];
    }
  };

  saveSensor = async (sensor) => {
    if (!CnxMongoDB.connection) return {};
    sensor._id = (await getLastId("sensores_historicos")) + 1;
    await CnxMongoDB.db.collection("sensores_historicos").insertOne(sensor);
    return sensor;
  };
  updateSensor = async (sensor, id) => {
    if (!CnxMongoDB.connection) return {};
    id = parseInt(id);
    let resultado = await CnxMongoDB.db
      .collection("sensores_historicos")
      .updateOne({ _id: id }, { $set: sensor });
    return resultado;
  };
  deleteSensor = async (id) => {
    if (!CnxMongoDB.connection) return {};
    id = parseInt(id);
    let resultado = await CnxMongoDB.db
      .collection("sensores_historicos")
      .deleteOne({ _id: id });
    return resultado;
  };
}
