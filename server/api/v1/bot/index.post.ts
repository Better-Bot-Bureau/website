import {encrypt} from "~/server/util/crypto/index"
import {userSchema, botSchema} from "~/server/db/models"

export default defineEventHandler(async (event) => {

    const body = await readBody(event)
    const userToken = getCookie(event, "access_token")
    let botInfo: userInfoResponse | undefined
    let encrypted_token = encrypt(body.token)

    await $fetch('https://discord.com/api/users/@me', {
        headers: {
            authorization: `Bot ${body.token}`,
        },
    }).then(async userRes => botInfo = userRes as userInfoResponse);

    if(botInfo == undefined) {
        setResponseStatus(event, 500)
        return {message: "Invalid bot token"}
    }

    let bot = await botSchema.findOneAndUpdate({id: botInfo.id}, {id: botInfo.id, username: botInfo.username, avatar: botInfo.avatar, token: encrypted_token}, {upsert: true, new:true})

    let userinfo = await userSchema.findOne({token: userToken})

    if(userinfo == null) return

    if(userinfo.bots.includes(bot._id as any)){
        setResponseStatus(event, 200)
        return {message: "Bot already registered with user"}
    } else {
        await userSchema.findOneAndUpdate({token: userToken}, {$push: {bots: `${bot._id}`}}, {upsert: true, new:true})
    }

   
    return true
})