import { ModeToggle } from "@/components/ModeToggle";
import { UserButton } from "@clerk/nextjs";

export default function App() {
  return (
    <div>
      <UserButton afterSignOutUrl="/" />

      <ModeToggle />
    </div>
  );
}
