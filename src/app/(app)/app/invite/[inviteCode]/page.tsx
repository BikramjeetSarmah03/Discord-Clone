import { redirectToSignIn } from "@clerk/nextjs";
import { redirect } from "next/navigation";

import { currentProfile } from "@/lib/currentProfile";
import { db } from "@/lib/db";

interface Props {
  params: {
    inviteCode: string;
  };
}

export default async function Invitation({ params: { inviteCode } }: Props) {
  const profile = await currentProfile();

  if (!profile) {
    redirectToSignIn();
  }

  if (!inviteCode) {
    return redirect("/app");
  }

  const existingServer = await db.server.findFirst({
    where: {
      inviteCode,
      members: {
        some: {
          profileId: profile?.id,
        },
      },
    },
  });

  if (existingServer) {
    return redirect(`/app/servers/${existingServer.id}`);
  }

  const server = await db.server.update({
    where: {
      inviteCode,
    },
    data: {
      members: {
        create: [
          {
            profileId: profile?.id as string,
          },
        ],
      },
    },
  });

  if (server) {
    return redirect(`/app/servers/${server.id}`);
  }

  return <div>Invitation</div>;
}
