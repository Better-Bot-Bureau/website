import User from "~/server/db/models/user.model";
import { encrypt } from "~/server/util/crypto/index";
import { premium_types } from "~/server/types/enums";

export default defineEventHandler(async (event) => {
  //get oauth access code from request body
  const body = await readBody(event);
  let code = body.code;

  let oath: oauthResponse | undefined;
  let userInfo: userResponse | undefined;
  //access discord oauth2 and get nececry data
  await $fetch("https://discord.com/api/oauth2/token", {
    method: "POST",
    body: new URLSearchParams({
      client_id: "1227414317432045589",
      client_secret: "bTFuVswn7DhBSDl3ZxP-PWQwUJGg3Ch8",
      grant_type: "authorization_code",
      //redirect_uri: "https://www.betterbotbureau.com/auth/redirect",
      redirect_uri: "http://localhost:3000/auth/redirect",
      code: `${code}`,
      scope: "identify",
    }),
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  }).then((oauthres) => (oath = oauthres as oauthResponse));

  if (oath == undefined) {
    setResponseStatus(event, 500);
    return "Error fetching data";
  }

  //fetch user info from OAuth2 token
  await $fetch("https://discord.com/api/users/@me", {
    headers: {
      authorization: `${oath.token_type} ${oath.access_token}`,
    },
  }).then(async (userRes) => (userInfo = userRes as userResponse));

  let data = {
    user: userInfo,
    oauth: oath,
  };

  if (!userInfo) {
    return;
  }

  let encryptToken = encrypt(oath.access_token);

  let user = await User.findOne({ where: { id: userInfo.id } });

  if (user == null) {
    await User.create({
      id: userInfo.id,
      username: userInfo.username,
      avatar: userInfo.avatar,
      token: encryptToken,
      bots: "[]",
      max_bots: 2,
      premium_bots: "[]",
      premium_tier: premium_types.FREE,
    });
  } else {
    await User.update(
      {
        username: userInfo.username,
        avatar: userInfo.avatar,
        token: encryptToken,
      },
      { where: { id: userInfo.id } },
    );
  }

  setCookie(event, "user_id", userInfo.id, {
    httpOnly: true,
    maxAge: oath.expires_in,
    sameSite: true,
  });
  setCookie(event, "token_type", oath.token_type, {
    httpOnly: true,
    maxAge: oath.expires_in,
    sameSite: true,
  });
  setCookie(event, "access_token", encryptToken, {
    httpOnly: true,
    maxAge: oath.expires_in,
    sameSite: true,
  });
  return data;
});
