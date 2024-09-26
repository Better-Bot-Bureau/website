import AuthService from "../services/auth.service";
import userService from "~/services/user.service";

export const useAuth = defineStore("auth", {
  state: () => ({
    IsAuthorized: false,
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
      let data = await userService.getBot(id);
      return data;
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
      await userService.removeBot(id);
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
