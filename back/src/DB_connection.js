require("dotenv").config();
const { Sequelize } = require("sequelize");
const { DB_USER, DB_PASSWORD, DB_HOST, BDD, DB_PORT, DB_DEPLOY } = process.env;
const UserModel = require("./models/User");
const FavoriteModel = require("./models/Favorite");


const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${BDD}`,
  { logging: false }
);
// const sequelize = new Sequelize(
//   DB_DEPLOY,
//   { logging: false }
// );

UserModel(sequelize);
FavoriteModel(sequelize);

const {User, Favorite} = sequelize.models;

User.belongsToMany(Favorite, {through: "user_favorite"})
Favorite.belongsToMany(User, {through: "user_favorite"})



module.exports = {
  sequelize,
  ...sequelize.models,
};
