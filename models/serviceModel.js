import conn from "../conn/conn.js";
import { DataTypes } from "sequelize";

const Service = conn.define("services", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  serviceName: {
    type: DataTypes.STRING,
  },
  serviceDescription: {
    type: DataTypes.TEXT,
  },
  servicePrice: {
    type: DataTypes.INTEGER,
  }
});

export default Service;
