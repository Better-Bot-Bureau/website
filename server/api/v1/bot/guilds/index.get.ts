import Bot from "~/server/db/models/bot.model";
import checkownsbot from "~/server/util/auth/checkownsbot";
import { decrypt } from "~/server/util/crypto";

export default defineEventHandler({
  onRequest: [checkownsbot],
  handler: async (event) => {
    let query = getQuery(event);
    let b = query.bot_id as string;

    let bot = await Bot.findOne({ where: { id: b } });

    let botInfo: any[] | undefined;
    if (bot == null) return;

    await $fetch("https://discord.com/api/users/@me/guilds", {
      headers: {
        authorization: `Bot ${decrypt(bot.token as string)}`,
      },
    }).then(async (userRes) => (botInfo = userRes as any[]));

    if (botInfo == undefined) {
      setResponseStatus(event, 500);
      return { message: "Invalid bot token" };
    }

    let botGuilds = [];

    for (const i of botInfo) {
      botGuilds.push({
        id: i.id,
        name: i.name,
        icon: `https://cdn.discordapp.com/icons/${i.id}/${i.icon}.webp`,
      });
    }

    return botGuilds;
  },
});
