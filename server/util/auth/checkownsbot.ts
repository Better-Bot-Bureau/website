import { H3Event } from "h3";
import User from "~/server/db/models/user.model";
export default async function (event: H3Event) {
  let url = getRequestURL(event);

  let id = url.href.split("=")[1];
  const userToken = getCookie(event, "access_token");

  let user = await User.findOne({ where: { token: userToken } });

  if (user == null) return setResponseStatus(event, 500);

  let bots = JSON.parse(user.bots);

  if (!bots.includes(id)) {
    return setResponseStatus(event, 401);
  }
}
