import { Sequelize, Model, DataTypes } from "sequelize";
import { premium_types } from "~/server/types/enums";

type UserAtrubutes = {
  id: string;
  username: string;
  avatar: string;
  token: string;
  bots: string;
  max_bots: number;
  premium_bots: string;
  premium_tier: number;
};

export default class User extends Model<UserAtrubutes, UserAtrubutes> {
  declare id: string;
  declare username: string;
  declare avatar: string;
  declare token: string;
  declare bots: string;
  declare max_bots: number;
  declare premium_bots: string;
  declare premium_tier: number;
}

export function UserInit(sequelize: Sequelize): void {
  User.init(
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
      bots: {
        type: DataTypes.STRING,
      },
      max_bots: {
        type: DataTypes.INTEGER,
      },
      premium_bots: {
        type: DataTypes.STRING,
      },
      premium_tier: {
        type: DataTypes.INTEGER,
        defaultValue: premium_types.FREE,
      },
    },
    {
      tableName: "Users",
      sequelize,
    },
  );
}
