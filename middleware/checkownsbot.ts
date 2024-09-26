export default defineNuxtRouteMiddleware(async (to, from) => {
  if (useAuth().IsAuthorized()) {
    let id = to.params.id as string;
    id = id.split("=")[1];

    let user: any = await useAuth().getUser();
    let bots = JSON.parse(user.bots);

    if (!bots.includes(id)) {
      abortNavigation();
      navigateTo("/");
    }
  }
});
