class UserService {
    async GetBots() {
       
        let data = await $fetch("/api/v1/user/bots", { method: 'get', })

        return data

    }
    async getBot(id: String) {

        let data = await $fetch("/api/v1/bot", { method: 'get', params: {bot_id: id }  })

        return data

    }
    async getGuilds(id: String) {
        let data = await $fetch("/api/v1/bot/info/guilds", { method: 'get', params: {bot_id: id }  })

        return data
    }
    async leaveGuild(id: String, guildId: String) {
        let data = await $fetch("/api/v1/bot/guilds/leave", { method: 'post', params: {bot_id: id, guild_id: guildId}})

        return data
    }
} 

export default new UserService()