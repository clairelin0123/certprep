"use client";

import { SessionProvider, useSession } from "next-auth/react";
import { useEffect } from "react";
import { syncMistakesToServer } from "@/lib/mistakes";

function SyncOnLogin({ children }: { children: React.ReactNode }) {
  const { data: session } = useSession();

  useEffect(() => {
    if (session?.user) {
      syncMistakesToServer();
    }
  }, [session]);

  return <>{children}</>;
}

export default function SessionWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SessionProvider>
      <SyncOnLogin>{children}</SyncOnLogin>
    </SessionProvider>
  );
}
