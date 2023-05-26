import { MongoClient } from "mongodb";
import config from "../config.js";

export class CnxMongoDB {
    static connection = false;
    static db;
    static sensor;
  
    static conectar = async (_) => {
      try {
        CnxMongoDB.sensor = new MongoClient(config.URL, {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        });
  
        await CnxMongoDB.sensor.connect();
  
        CnxMongoDB.db = CnxMongoDB.sensor.db(config.BASE);
        CnxMongoDB.connection = true;
      } catch (error) {
        console.log(error.message);
      }
    };
  
    static desconectar = async (_) => {
      if (!CnxMongoDB.connection) return;
      await CnxMongoDB.sensor.close();
    };
  }
  