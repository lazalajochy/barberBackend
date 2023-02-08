import { Sequelize, DataTypes } from "sequelize";
import "dotenv/config";
const conn = new Sequelize(
  process.env.db,
  process.env.db_user,
  process.env.db_password,
  {
    host: process.env.db_host,
    dialect:"mysql",
    port: process.env.port
  }
);

export default conn;
