
import {userSchema, botSchema} from "~/server/db/models"
import { decrypt } from "~/server/util/crypto"
export default defineEventHandler(async (event) => {

    const userToken = getCookie(event, "access_token")

    let user = await userSchema.findOneAndUpdate({token: userToken})
    let bots = []
    if(user == undefined) return

    for(const b of user.bots) {
      let bot = await botSchema.findById(b)

      if(bot == null) return;

      let botInfo: userInfoResponse | undefined

      await $fetch('https://discord.com/oauth2/applications/@me', {
          headers: {
              authorization: `Bot ${decrypt(bot.token as string)}`,
          },
      }).then(async userRes => botInfo = userRes as userInfoResponse);
  
      if(botInfo == undefined) {
          setResponseStatus(event, 500)
          return {message: "Invalid bot token"}
      }

      if(bot.avatar !== botInfo.avatar) {
        await botSchema.findByIdAndUpdate(b, {avatar: botInfo.avatar})
        bots.push({username: botInfo.username, avatar: `https://cdn.discordapp.com/avatars/${bot?.id}/${botInfo.avatar}.webp?size=512`, id: bot?.id})
      }

      bots.push({username: botInfo.username, avatar: `https://cdn.discordapp.com/avatars/${bot?.id}/${bot?.avatar}.webp?size=512`, id: bot?.id})
      
    }

    return bots
})