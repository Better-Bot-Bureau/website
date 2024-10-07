import Bot from "~/server/db/models/bot.model";
import User from "~/server/db/models/user.model";
import { encrypt } from "~/server/util/crypto/index";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const userToken = getCookie(event, "access_token");
  let botInfo: userInfoResponse | undefined;
  let encrypted_token = encrypt(body.token);

  await $fetch("https://discord.com/api/users/@me", {
    headers: {
      authorization: `Bot ${body.token}`,
    },
  }).then(async (userRes) => (botInfo = userRes as userInfoResponse));

  if (botInfo == undefined) {
    setResponseStatus(event, 500);
    return { message: "Invalid bot token" };
  }

  //replace
  //let bot = await botSchema.findOneAndUpdate({id: botInfo.id}, {id: botInfo.id, username: botInfo.username, avatar: botInfo.avatar, token: encrypted_token}, {upsert: true, new:true})

  let bot = await Bot.findOne({ where: { id: botInfo.id } });

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

  if (bot == null) {
    bot = await Bot.create({
      id: botInfo.id,
      username: botInfo.username,
      avatar: botInfo.avatar,
      token: encrypted_token,
      modules: JSON.stringify(basemodules),
    });
  } else {
    await Bot.update(
      {
        id: botInfo.id,
        username: botInfo.username,
        avatar: botInfo.avatar,
        token: encrypted_token,
      },
      { where: { id: botInfo.id } },
    );
    bot = await Bot.findOne({ where: { id: botInfo.id } });
  }

  if (bot == null) return;

  //replace
  let userinfo = await User.findOne({ where: { token: userToken } });

  if (userinfo == null) return;

  if (userinfo.bots.includes(bot.id as any)) {
    setResponseStatus(event, 200);
    return { message: "Bot already registered with user" };
  } else {
    let user = await User.findOne({ where: { token: userToken } });

    if (user == null) return;

    let bots;
    if (user.bots !== null) {
      bots = JSON.parse(user.bots);
    } else {
      bots = [];
    }

    bots.push(bot.id);

    let botsstring = JSON.stringify(bots);

    user.bots = botsstring;

    await user?.save();
  }

  return true;
});
