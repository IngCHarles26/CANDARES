import { DataTypes } from "sequelize";
import db from "../config/db";

export type UsuarioType = {
  nombre: string,
  email: string,
  password: string,
  token?: string,
  confirmado?: boolean,
}

const Usuario = db.define('usuarios',{
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  token: {
    type: DataTypes.STRING,
  },
  confirmado: {
    type: DataTypes.BOOLEAN,
  },
})

export default Usuario