import dotenv from 'dotenv';
dotenv.config();

export default {
  type: 'mysql',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT, 10),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  entities: [`${__dirname}/**/*.entity.js`],
  synchronize: false,
  migrations: [`${__dirname}/migration/**/*.js`],
  cli: {
    migrationsDir: 'src/migration',
  },
};
