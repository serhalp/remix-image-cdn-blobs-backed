import { getDeployStore } from "@netlify/blobs";
import type { Config } from "@netlify/edge-functions";

const handler = async (req: Request): Promise<Response> => {
  const filename = new URL(req.url).searchParams.get("filename");
  if (!filename) return new Response("Missing ?filename=", { status: 400 });
  const store = getDeployStore();
  const image = await store.get(filename, { type: "blob" });
  if (image == null) return new Response("Not found", { status: 404 });
  return new Response(image);
};

export default handler;

export const config: Config = {
  path: "/image",
};
