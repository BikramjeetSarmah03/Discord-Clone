import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function AppLayout({ children }: Props) {
  return <div>{children}</div>;
}
