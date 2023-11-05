import Link from "next/link";
import { redirect } from "next/navigation";

import { ModeToggle } from "@/components/ModeToggle";
import { Button } from "@/components/ui/button";
import { currentProfile } from "@/lib/currentProfile";
import { Github, Link as LinkIcon } from "lucide-react";

export default async function Home() {
  const user = await currentProfile();

  if (user) {
    redirect("/app");
  }

  return (
    <div className="flex justify-between flex-col min-h-screen">
      <div className="flex p-4 items-center justify-between ">
        <h1 className="font-bold font-serif">Chatter Box</h1>
        <div className=" flex items-center space-x-4">
          <div className="border rounded-lg dark:border-white/40">
            <ModeToggle />
          </div>
          <Button>
            <Link href={"/sign-in"}>Login</Link>
          </Button>
        </div>
      </div>

      <section className="p-4 flex max-w-2xl mx-auto justify-center flex-col">
        <h1 className="text-5xl font-bold font-serif">IMAGINE A PLACE...</h1>
        <p className="mt-4 text-3xl">
          ...where you can chat, make groups and spend time with your friends
        </p>

        <h3 className="text-4xl font-semibold mt-4">
          <span className="font-serif">Chatter Box</span> is the place
        </h3>
      </section>

      <div className="flex items-center space-x-4 justify-center p-4">
        <Link
          href={"https://github.com/BikramjeetSarmah03/"}
          target="_blank"
          className="hover:underline flex items-center space-x-4">
          <LinkIcon />
          <span>Bikramjeet Sarmah</span>
        </Link>

        <Link
          href={"https://github.com/bikramjeetSarmah03/chatter-box"}
          target="_blank">
          <Github />
        </Link>
      </div>
    </div>
  );
}
