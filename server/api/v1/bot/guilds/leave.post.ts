import { botSchema } from "~/server/db/models"
import { decrypt } from "~/server/util/crypto"
export default defineEventHandler( async (event) => {
    let query =  getQuery(event)
    let id = query.bot_id
    let guildid = query.guild_id
    let bot = await botSchema.findOne({id: id})
    if(bot == null) return

    await $fetch(`https://discord.com/api/users/@me/guilds/${guildid}`, {
        headers: {
            authorization: `Bot ${decrypt(bot.token as string)}`,
        },
        method: "DELETE"
    })

    return true
})