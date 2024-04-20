import dotenv from 'dotenv';
dotenv.config();

export const sequelizeConfig = {
  database: process.env.DB_NAME || 'test',
  username: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASSWORD,
      host: process.env.DB_HOST,
      port: process.env.DB_PORT || 5432,
      dialect: 'postgres',
      dialectOptions: {
        ssl: {
          require: true,
          rejectUnauthorized: false
        }
      }
};
