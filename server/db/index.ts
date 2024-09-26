import { Sequelize, DataTypes } from "sequelize";
import dotenv from "dotenv";
dotenv.config();

import mysql from "mysql2";
import Sqlite3 from "sqlite3";
import { ERROR, INFO, SUCCESS } from "../util/console/logger";

import { UserInit } from "./models/user.model";
import { BotInit } from "./models/bot.model";

let sql;
export default async () => {
  let sequelize: Sequelize;
  if (process.env.DATABASE_DIALECT === "mysql") {
    sequelize = new Sequelize({
      database: process.env.DATABASE_NAME,
      username: process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_PASSWORD,
      host: process.env.DATABASE_HOST,
      port: 3306,
      dialect: "mysql",
      dialectModule: mysql,
      logging: false,
    });
  } else {
    sequelize = new Sequelize({
      dialect: "sqlite",
      storage: "./database.sqlite",
      dialectModule: Sqlite3,
      logging: false,
    });
  }

  (async () => {
    try {
      await sequelize.authenticate();
      INFO("Connected to database.");
    } catch (error) {
      ERROR("Unable to connect to the database:" + error);
    }
  })();

  UserInit(sequelize);
  BotInit(sequelize);

  (async () => {
    try {
      await sequelize.sync({ force: true });
    } catch (error) {
      console.log(error);
    }

    SUCCESS("Synced to database");
  })();

  sql = sequelize;
};
