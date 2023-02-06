import { Sequelize, DataTypes } from "sequelize";
import "dotenv/config";
const conn = new Sequelize(
  process.env.db,
  process.env.user,
  process.env.password,
  {
    host: process.env.host,
    dialect: process.env.dialect,
    port: process.env.port
  }
);

export default conn;
