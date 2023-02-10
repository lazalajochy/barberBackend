import conn from "../conn/conn.js";
import { DataTypes } from "sequelize";

const Comment = conn.define("comments", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  comment: {
    type: DataTypes.TEXT,
  },
});

export default Comment;
