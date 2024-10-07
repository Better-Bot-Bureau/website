import { Sequelize, Model, DataTypes } from "sequelize";

type BotAtrubutes = {
  id: string;
  username: string;
  avatar: string;
  token: string;
  modules: string;
};

export default class Bot extends Model<BotAtrubutes, BotAtrubutes> {
  declare id: string;
  declare username: string;
  declare avatar: string;
  declare token: string;
  declare modules: string;
}

let basemodules = {
  anti_raid: false,
  tickets: false,
  server_management: false,
  community_management: false,
  game_integration: false,
  fun: false,
  general: false,
  xp: false,
  music: false,
  other: false,
  utilities: false,
  economy: false,
};

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
      modules: {
        type: DataTypes.STRING,
        defaultValue: JSON.stringify(basemodules),
      },
    },
    {
      tableName: "Bots",
      sequelize,
    },
  );
}
