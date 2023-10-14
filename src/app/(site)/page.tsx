import Link from "next/link";
import { redirect } from "next/navigation";

import { ModeToggle } from "@/components/ModeToggle";
import { Button } from "@/components/ui/button";
import { currentProfile } from "@/lib/currentProfile";

export default async function Home() {
  const user = await currentProfile();

  if (user) {
    redirect("/app");
  }

  return (
    <div className="flex items-center justify-center h-full flex-col">
      <h1 className="text-5xl text-center text-primary font-bold">
        Chatter Box
      </h1>

      <Button variant={"outline"}>
        <Link href={"/sign-in"}>Login</Link>
      </Button>

      <ModeToggle />
    </div>
  );
}
