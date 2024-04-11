import { Sequelize, Options } from 'sequelize';

const sequelize = new Sequelize(process.env.DB_NAME || 'test', process.env.DB_USER || 'postgres', process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  port: 5432,
  dialect: 'postgres',
  dialectOptions: {
    ssl: {
       require: true,
       rejectUnauthorized: false
    }
 }
} as Options);

export async function connectToDatabase() {
  try {
    await sequelize.authenticate();
    console.log('Connection to the database has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

export default sequelize;
