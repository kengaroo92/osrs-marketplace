import { Sequelize } from 'sequelize';
import { sequelizeConfig } from './config.js';
import * as models from '../models/index.js';

const db = new Sequelize(sequelizeConfig);

Object.keys(models).forEach(modelName => {
  db[modelName] = models[modelName](db, Sequelize.DataTypes);
});

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

export const connectToDatabase = async () => {
  try {
    await db.authenticate();
    console.log('Connection has been established successfully.');
    // await db.sync({ force: true });
    console.log('All models were synchronized successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

export default db;
