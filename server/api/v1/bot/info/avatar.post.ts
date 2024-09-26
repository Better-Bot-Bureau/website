import checkownsbot from "~/server/util/auth/checkownsbot";

export default defineEventHandler({
  onRequest: [checkownsbot],
  handler: async (event) => {
    let body = await readBody(event);
    console.log(body.data);
    // let data = await readMultipartFormData(body.data)
    // console.log(data)
  },
});
