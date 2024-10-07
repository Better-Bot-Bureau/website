import Bot from "~/server/db/models/bot.model";
import User from "~/server/db/models/user.model";
import checkownsbot from "~/server/util/auth/checkownsbot";

export default defineEventHandler({
  onRequest: [checkownsbot],
  handler: async (event) => {
    let body = getQuery(event);
    let userToken = getCookie(event, "access_token");

    let b = body.bot_id as string;

    let bot = await Bot.findOne({ where: { id: b } });
    let user = await User.findOne({ where: { token: userToken } });

    if (bot == null) return setResponseStatus(event, 500);
    if (user == null) return setResponseStatus(event, 500);

    let array = JSON.parse(user.bots);
    let index = array.indexOf(b);

    if (index > -1) {
      array.splice(index, 1);
    }

    user.bots = JSON.stringify(array);

    await user.save();
    await bot.destroy();

    setResponseStatus(event, 200);
    return { deleted: true };
  },
});
