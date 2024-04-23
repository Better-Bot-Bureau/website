import {botSchema} from "~/server/db/models"

export default defineEventHandler(async (event) => {
    let body =  getQuery(event)
  
    let botId = body.bot_id

    let bot = await botSchema.findOne({id: botId})

    if(bot == null) return

    return {username: bot.username,  avatar: `https://cdn.discordapp.com/avatars/${body.bot_id}/${bot?.avatar}.webp?size=512`}
})