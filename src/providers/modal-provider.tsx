"use client";

import { useEffect, useState } from "react";

import CreateServerModal from "@/components/modals/CreateServerModal";
import InviteModal from "@/components/modals/InviteModal";
import EditServerModal from "@/components/modals/EditServerModal";
import MembersModal from "@/components/modals/MembersModal";
import CreateChannelModal from "@/components/modals/CreateChannelModal";
import LeaveServerModal from "@/components/modals/LeaveServerModal";
import DeleteServerModal from "@/components/modals/DeleteServerModal";
import DeleteChannelModal from "@/components/modals/DeleteChannelModal";
import EditChannelModal from "@/components/modals/EditChannelModal";

export default function ModalProvider() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  });

  if (!isMounted) return null;

  return (
    <>
      <CreateServerModal />
      <EditServerModal />
      <LeaveServerModal />
      <DeleteServerModal />

      <InviteModal />

      <MembersModal />

      <CreateChannelModal />
      <EditChannelModal />
      <DeleteChannelModal />
    </>
  );
}
