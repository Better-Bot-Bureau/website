type oauthResponse = {
    "access_token": string,
    "token_type": string,
    "expires_in": number,
    "refresh_token": string,
    "scope": string
}

type userResponse = { 
"id": string,
"username": string,
"avatar": string,
"discriminator": string,
"public_flags": number,
"flags": number,
"banner": string,
"accent_color": number,
"global_name": string,
"avatar_decoration_data": { "asset": string, "sku_id": string },
"banner_color": string,
"clan": string,
"mfa_enabled": boolean,
"locale": string,
"premium_type": number,
"email": string,
"verified": boolean 
}

type userInfoResponse = { 
"id": string,
"username": string,
"avatar": string,
"discriminator": string,
"public_flags": number,
"flags": number,
"bot": boolean,
"banner": string,
"accent_color": string,
"global_name": string,
"avatar_decoration_data": string,
"banner_color": string,
"clan": string,
"mfa_enabled": boolean,
"locale": string,
"premium_type": number,
"email": string,
"verified": boolean,
"bio": string 
}