import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function AuthLayout({ children }: Props) {
  return (
    <div className="h-full flex items-center justify-center">{children}</div>
  );
}
