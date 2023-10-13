import { UserButton } from "@clerk/nextjs";

export default function App() {
  return (
    <div>
      <UserButton afterSignOutUrl="/" />
    </div>
  );
}
