const { Sequelize } = require('sequelize');
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: 'mysql',
});

module.exports = sequelize;
sequelize.sync({ force: true })
  .then(() => console.log('Database synchronized'))
  .catch((err) => console.error('Error syncing database:', err));
