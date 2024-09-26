import User from "~/server/db/models/user.model";

export default defineEventHandler(async (event) => {
  const userToken = getCookie(event, "access_token");
  let user = await User.findOne({ where: { token: userToken } });

  return user;
});
