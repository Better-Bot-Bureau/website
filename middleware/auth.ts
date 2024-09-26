export default defineNuxtRouteMiddleware(async (to, from) => {
  if (useAuth().IsAuthorized() == false) {
    abortNavigation();
    //navigateTo("https://discord.com/oauth2/authorize?client_id=1227414317432045589&response_type=code&redirect_uri=https%3A%2F%2Fwww.betterbotbureau.com%2Fauth%2Fredirect&scope=identify+guilds+email", { external: true })
    navigateTo(
      "https://discord.com/oauth2/authorize?client_id=1227414317432045589&response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fauth%2Fredirect&scope=identify+guilds+email",
      { external: true },
    );
  }
});
