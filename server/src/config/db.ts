import { Sequelize } from 'sequelize';

const sequelize = new Sequelize({
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'Akhil@1198',
  database: 'bloodbank',
});

export default sequelize;