import { UTApi } from "uploadthing/server";

export async function deleteFile(url: string) {
  const utapi = new UTApi();

  await utapi.deleteFiles(url);
}
