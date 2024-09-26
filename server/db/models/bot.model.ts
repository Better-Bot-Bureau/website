import { Sequelize, Model, DataTypes } from "sequelize";

type BotAtrubutes = {
  id: string;
  username: string;
  avatar: string;
  token: string;
};

export default class Bot extends Model<BotAtrubutes, BotAtrubutes> {
  declare id: string;
  declare username: string;
  declare avatar: string;
  declare token: string;
}

export function BotInit(sequelize: Sequelize): void {
  Bot.init(
    {
      id: {
        type: DataTypes.STRING,
        primaryKey: true,
        unique: true,
      },
      username: {
        type: DataTypes.STRING,
      },
      avatar: {
        type: DataTypes.STRING,
      },
      token: {
        type: DataTypes.STRING,
        unique: true,
      },
    },
    {
      tableName: "Bots",
      sequelize,
    },
  );
}
