import Bot from "~/server/db/models/bot.model";
import checkownsbot from "~/server/util/auth/checkownsbot";
import { decrypt } from "~/server/util/crypto";
export default defineEventHandler({
  onRequest: [checkownsbot],
  handler: async (event) => {
    let query = getQuery(event);

    let guildid = query.guild_id;

    let b = query.bot_id as string;

    let bot = await Bot.findOne({ where: { id: b } });

    if (bot == null) return;

    await $fetch(`https://discord.com/api/users/@me/guilds/${guildid}`, {
      headers: {
        authorization: `Bot ${decrypt(bot.token as string)}`,
      },
      method: "DELETE",
    });

    return true;
  },
});
