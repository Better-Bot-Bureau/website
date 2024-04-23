import {userSchema, botSchema} from "~/server/db/models"
export default defineEventHandler(async (event) => {

    const userToken = getCookie(event, "access_token")

    let user = await userSchema.findOneAndUpdate({token: userToken})
    let bots = []
    if(user == undefined) return

    for(const b of user.bots) {
      let bot = await botSchema.findById(b)
      bots.push({username: bot?.username, avatar: `https://cdn.discordapp.com/avatars/${bot?.id}/${bot?.avatar}.webp?size=512`, id: bot?.id})
    }

    return bots
})