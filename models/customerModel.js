import conn from "../conn/conn.js";
import { DataTypes } from "sequelize";

const Customer = conn.define('customers', {
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
    },
    customerName:{
        type: DataTypes.STRING
    }
});


export default Customer;