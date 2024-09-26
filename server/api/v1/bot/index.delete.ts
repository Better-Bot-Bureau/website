import checkownsbot from "~/server/util/auth/checkownsbot";

export default defineEventHandler({
  onRequest: [checkownsbot],
  handler: async (event) => {},
});
