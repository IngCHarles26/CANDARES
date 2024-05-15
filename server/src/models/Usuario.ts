// import { DataTypes } from "sequelize";
// import db from "../config/db";

// export type UsuarioType = {
//   nombre: string,
//   email: string,
//   password: string,
//   token: string,
//   confirmado?: boolean,
// }
// const Usuario = db.define('usuarios',{
//   nombre: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   email: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   password: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   token: {
//     type: DataTypes.STRING,
//   },
//   confirmado: {
//     type: DataTypes.BOOLEAN,
//   },
// })

// export default Usuario

import { Model, DataTypes } from 'sequelize';
import db from '../config/db';

// Define el modelo de usuario
class Usuario extends Model {
  public id!: number;
  public nombre!: string;
  public email!: string;
  public password!: string;
  public token?: string | null;
  public confirmado?: boolean;

  // Añade cualquier otro campo que tengas en tu modelo
}

// Inicializa el modelo
Usuario.init(
  {
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
  },
  {
    sequelize: db,
    modelName: 'Usuario',
  }
);

export default Usuario;