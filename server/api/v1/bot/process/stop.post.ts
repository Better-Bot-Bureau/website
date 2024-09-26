import dotenv from "dotenv";
import checkownsbot from "~/server/util/auth/checkownsbot";
dotenv.config();
export default defineEventHandler({
  onRequest: [checkownsbot],
  handler: async (event) => {
    let body = await readBody(event);
    let headers = new Headers();
    headers.append("authorization", process.env.AUTH_SECRET as string);
    await $fetch(`${process.env.API_URI}/stopbot`, {
      method: "post",
      body: { bot_id: body.bot_id },
      headers: headers,
    });
  },
});
