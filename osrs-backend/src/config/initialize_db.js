import { Sequelize } from 'sequelize';
import * as models from '../models';

const db = new Sequelize(process.env.DB_NAME || 'test', process.env.DB_USER || 'postgres', process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  port: 5432,
  dialect: 'postgres',
  dialectOptions: {
    ssl: {
       require: true,
       rejectUnauthorized: false
    }
 }
});

Object.keys(models).forEach(modelName => {
  db[modelName] = models[modelName](db, Sequelize.DataTypes);
});

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

export async function connectToDatabase() {
  try {
    await db.authenticate();
    console.log('Connection to the database has been established successfully.');

    await db.sync({ force: false });
    console.log('All models were synchronized successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

export default db;
