import Bot from "~/server/db/models/bot.model";
import User from "~/server/db/models/user.model";
import { decrypt } from "~/server/util/crypto";
export default defineEventHandler(async (event) => {
  const userToken = getCookie(event, "access_token");

  //replace
  let user = await User.findOne({ where: { token: userToken } });

  let bots = [];
  if (user == undefined) return;

  let botsparsed;
  if (user.bots !== null) {
    botsparsed = JSON.parse(user.bots);
  } else {
    botsparsed = [];
  }
  for (const b of botsparsed) {
    //replace
    let bot = await Bot.findOne({ where: { id: b } });

    if (bot == null) return;
    /*
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

    if (bot.avatar !== botInfo.avatar) {
      //replace
      await Bot.update({ avatar: botInfo.avatar }, { where: { id: b } });
      bots.push({
        username: botInfo.username,
        avatar: `https://cdn.discordapp.com/avatars/${bot?.id}/${botInfo.avatar}.webp?size=512`,
        id: bot?.id,
      });
      */
    //} else {
    bots.push({
      username: bot.username,
      avatar: `https://cdn.discordapp.com/avatars/${bot?.id}/${bot?.avatar}.webp?size=512`,
      id: bot?.id,
    });
    //}
  }

  return bots;
});
