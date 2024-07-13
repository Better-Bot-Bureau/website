import {botSchema} from "~/server/db/models"
import { decrypt } from "~/server/util/crypto"

export default defineEventHandler(async (event) => {
    let body =  getQuery(event)
  
    let botId = body.bot_id

    let bot = await botSchema.findOne({id: botId})

    if(bot == null) return

    let botInfo: userInfoResponse | undefined

    await $fetch('https://discord.com/api/users/@me', {
        headers: {
            authorization: `Bot ${decrypt(bot.token as string)}`,
        },
    }).then(async userRes => botInfo = userRes as userInfoResponse);

    if(botInfo == undefined) {
        setResponseStatus(event, 500)
        return {message: "Invalid bot token"}
    }

    if(bot.avatar !== botInfo.avatar) {
        await botSchema.findByIdAndUpdate(bot._id, {avatar: botInfo.avatar})
        return {username: botInfo.username,  avatar: `https://cdn.discordapp.com/avatars/${body.bot_id}/${botInfo.avatar}.webp?size=512`}

    }
    return {username: botInfo.username,  avatar: `https://cdn.discordapp.com/avatars/${body.bot_id}/${bot.avatar}.webp?size=512`}

})