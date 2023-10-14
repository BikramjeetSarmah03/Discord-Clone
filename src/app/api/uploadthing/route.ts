import { createNextRouteHandler } from "uploadthing/next";

import { ourFileRouter } from "./core";
import { NextResponse } from "next/server";
import { UTApi } from "uploadthing/server";
import { currentProfile } from "@/lib/currentProfile";

// Export routes for Next App Router
export const { GET, POST } = createNextRouteHandler({
  router: ourFileRouter,
});

export async function PUT(req: Request) {
  const body = await req.json();

  const url = body.url.split("/f/")[1];
  try {
    const profile = await currentProfile();

    if (!profile) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const utapi = new UTApi();

    await utapi.deleteFiles(url);

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.log("DELETE IMAGE: ", error);
    return new NextResponse("Internal server error", { status: 500 });
  }
}
