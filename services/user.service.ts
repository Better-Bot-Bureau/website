class UserService {
    async GetBots() {
       
        let data = await $fetch("/api/v1/user/bots", { method: 'get', })

        return data

    }
    async getBot(id: String) {
       console.log("user service")
        let data = await $fetch("/api/v1/bot", { method: 'get', params: {bot_id: id }  })

        return data

    }
}

export default new UserService()