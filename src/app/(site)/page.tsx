import { ModeToggle } from "@/components/ModeToggle";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
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
