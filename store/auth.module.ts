import AuthService from "../services/auth.service";
import userService from "~/services/user.service";

export const useAuth = defineStore("auth", {
  state: () => ({
    IsAuthorized: false,
    bot: {
      id: "",
    },
  }),

  persist: true,

  actions: {
    async Authorize(code: string) {
      await AuthService.Authorize(code);
      this.$state.IsAuthorized = true;

      return "done";
    },
    IsAuthorized() {
      return this.$state.IsAuthorized;
    },
    Getdata() {
      return this.$state;
    },
    async getUser() {
      let data = await userService.GetUser();
      return data;
    },
    async getBots() {
      let data = await userService.GetBots();
      return data;
    },
    async getBot(id: String) {
      if (this.bot.id !== id) {
        let data = await userService.getBot(id);
        this.bot = data as any;
        this.bot.id = id as string;
        return data;
      }

      return this.bot;
    },
    async getGuilds(id: String) {
      let data = await userService.getGuilds(id);
      return data;
    },
    async leaveGuild(id: String, guildId: String) {
      let data = await userService.leaveGuild(id, guildId);
      return data;
    },
    async startBot(id: string) {
      await userService.startBot(id);
    },
    async stopBot(id: string) {
      await userService.stopBot(id);
    },
    async restartBot(id: string) {
      await userService.restartBot(id);
    },
    async removeBot(id: string) {
      let data = await userService.removeBot(id);
      return data;
    },
    async changeName(name: string, id: string) {
      await userService.changeName(name, id);
    },
    async changeAvatar(data: any, id: string) {
      await userService.changeavatar(data, id);
    },
    async saveChanges(data: any, id: string) {
      await userService.saveChanges(data, id);
    },
  },
});
