"use client";

import { useSocket } from "@/providers/socket-provider";
import { Badge } from "@/components/ui/badge";

export default function SocketIndicator() {
  const { isConnected } = useSocket();

  if (!isConnected) {
    <Badge variant={"outline"} className="bg-yellow-600 text-white border-none">
      Fallback: Polling every 1s
    </Badge>;
  }

  return (
    <Badge
      variant={"outline"}
      className="bg-emerald-600 text-white border-none">
      Live: Real time updates
    </Badge>
  );
}
