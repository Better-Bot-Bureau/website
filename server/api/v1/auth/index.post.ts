import { encrypt } from '~/server/util/crypto/index';
import { userSchema } from "~/server/db/models"

export default defineEventHandler(async (event) => {
    //get oauth access code from request body
    const body = await readBody(event)
    let code = body.code

        let oath: oauthResponse | undefined;
        let userInfo: userResponse| undefined;
        //access discord oauth2 and get nececry data
        await $fetch('https://discord.com/api/oauth2/token', {
            method: 'POST',
            body: new URLSearchParams({
                client_id: "1227414317432045589",
                client_secret: "bTFuVswn7DhBSDl3ZxP-PWQwUJGg3Ch8",
                grant_type: 'authorization_code',
                redirect_uri: "http://localhost:3000/auth/redirect",
                code: `${code}`,
                scope: "identify",
            }),
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
        }).then(oauthres => oath = oauthres as oauthResponse)

        if(oath == undefined) {
            setResponseStatus(event, 500)
            return "Error fetching data"
        }

        //fetch user info from OAuth2 token
        await $fetch('https://discord.com/oauth2/@me', {
            headers: {
                authorization: `${oath.token_type} ${oath.access_token}`,
            },
        }).then(async userRes => userInfo = userRes as userResponse);

        let data = {
            user: userInfo,
            oauth: oath
        }

        if(!userInfo){
            return;
        }
        console.log(oath)
        let encryptToken = encrypt(oath.access_token)

        await userSchema.findOneAndUpdate({id: userInfo.id}, {username: userInfo.username, avatar: userInfo.avatar, token: encryptToken}, {upsert: true, new: true})



    setCookie(event, "user_id", userInfo.id, {httpOnly: true, maxAge: oath.expires_in, sameSite: true})
    setCookie(event, "token_type", oath.token_type, {httpOnly: true, maxAge: oath.expires_in, sameSite: true})
    setCookie(event, "access_token", encryptToken, {httpOnly: true, maxAge: oath.expires_in, sameSite: true})
    return data
})