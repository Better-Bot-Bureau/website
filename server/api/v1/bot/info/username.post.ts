import Bot from "~/server/db/models/bot.model";
import checkownsbot from "~/server/util/auth/checkownsbot";
import { decrypt } from "~/server/util/crypto";

export default defineEventHandler({
  onRequest: [checkownsbot],
  handler: async (event) => {
    let body = await readBody(event);
    console.log(body.username);
    console.log(body.bot_id);

    let bot = await Bot.findOne({ where: { id: body.bot_id } });

    if (bot == null) return;
    let name = body.username;
    await $fetch("https://discord.com/api/users/@me", {
      body: {
        username: name,
      },
      headers: {
        authorization: `Bot ${decrypt(bot.token as string)}`,
      },
      method: "PATCH",
    })
      .then((response) => console.log(response))
      .catch((error) => console.log(error.data));
    return true;
  },
});
