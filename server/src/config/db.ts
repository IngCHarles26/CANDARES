import { Sequelize } from "sequelize";

const {BD_NAME,BD_USER,BD_PASS,BD_HOST} = process.env;

const db = new Sequelize(
  BD_NAME || '',
  BD_USER || '',
  BD_PASS || '',
  {
    host: BD_HOST || '',
    port: 3306,
    dialect: 'mysql',
    define: { // agrega a las tablas de datos, la fecha de la creacion y la fecha de la ultima actualizacion
      timestamps: true, 
    },
    pool:{  //configura para la conexion de bases nuevas o existentes
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  }
)

export default db