class UserService {
  async GetUser() {
    let data = await $fetch("/api/v1/user", { method: "get" });

    return data;
  }

  async GetBots() {
    let data = await $fetch("/api/v1/user/bots", { method: "get" });

    return data;
  }
  async getBot(id: String) {
    let data = await $fetch("/api/v1/bot", {
      method: "get",
      params: { bot_id: id },
    });

    return data;
  }
  async removeBot(id: string) {
    let data = await $fetch("/api/v1/bot", {
      method: "delete",
      params: { bot_id: id },
    });

    return data;
  }
  async getGuilds(id: String) {
    let data = await $fetch("/api/v1/bot/guilds", {
      method: "get",
      params: { bot_id: id },
    });

    return data;
  }
  async leaveGuild(id: String, guildId: String) {
    let data = await $fetch("/api/v1/bot/guilds/leave", {
      method: "post",
      params: { bot_id: id, guild_id: guildId },
    });

    return data;
  }
  async startBot(id: string) {
    await $fetch("/api/v1/bot/process/start", {
      method: "post",
      body: { bot_id: id },
    });
  }
  async stopBot(id: string) {
    await $fetch("/api/v1/bot/process/stop", {
      method: "post",
      body: { bot_id: id },
    });
  }
  async restartBot(id: string) {
    await $fetch("/api/v1/bot/process/restart", {
      method: "post",
      body: { bot_id: id },
    });
  }
  async changeName(name: string, id: string) {
    await $fetch("/api/v1/bot/info/username", {
      method: "post",
      body: { username: name, bot_id: id },
    });
  }
  async changeavatar(data: any, id: string) {
    await $fetch("/api/v1/bot/info/avatar", {
      method: "post",
      body: { data: data, bot_id: id },
    });
  }
  async saveChanges(data: any, id: string) {}
}

export default new UserService();
