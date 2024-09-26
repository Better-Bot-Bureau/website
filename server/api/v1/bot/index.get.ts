import Bot from "~/server/db/models/bot.model";
import checkownsbot from "~/server/util/auth/checkownsbot";
import { decrypt } from "~/server/util/crypto";

export default defineEventHandler({
  handler: async (event) => {
    let body = getQuery(event);

    let b = body.bot_id as string;

    let bot = await Bot.findOne({ where: { id: b } });

    if (bot == null) return;

    let botInfo: userInfoResponse | undefined;

    await $fetch("https://discord.com/api/users/@me", {
      headers: {
        authorization: `Bot ${decrypt(bot.token as string)}`,
      },
    }).then(async (userRes) => (botInfo = userRes as userInfoResponse));

    if (botInfo == undefined) {
      setResponseStatus(event, 500);
      return { message: "Invalid bot token" };
    }

    let thing: { username: string; avatar: string } = {
      username: "",
      avatar: "",
    };

    if (bot.avatar !== botInfo.avatar) {
      await Bot.update({ avatar: botInfo.avatar }, { where: { id: bot.id } });
      thing.avatar = `https://cdn.discordapp.com/avatars/${body.bot_id}/${botInfo.avatar}.webp?size=512`;
    } else {
      thing.avatar = `https://cdn.discordapp.com/avatars/${body.bot_id}/${bot.avatar}.webp?size=512`;
    }
    if (bot.username !== botInfo.username) {
      await Bot.update(
        { username: botInfo.username },
        { where: { id: bot.id } },
      );
      thing.username = botInfo.username;
    } else {
      thing.username = bot.username;
    }

    return thing;
  },
});
