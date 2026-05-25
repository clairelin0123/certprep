"use client";

import { useEffect, useRef } from "react";

interface AdSlotProps {
  className?: string;
  slot?: string;
  format?: "auto" | "horizontal" | "vertical" | "rectangle";
}

declare global {
  interface Window {
    adsbygoogle: Record<string, unknown>[];
  }
}

export default function AdSlot({
  className = "",
  slot = "top",
  format = "auto",
}: AdSlotProps) {
  const adRef = useRef<HTMLModElement>(null);
  const pushed = useRef(false);
  const pubId = process.env.NEXT_PUBLIC_ADSENSE_PUB_ID;

  useEffect(() => {
    if (!pubId || pushed.current) return;
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
      pushed.current = true;
    } catch {
      // AdSense not loaded yet
    }
  }, [pubId]);

  if (!pubId) {
    return (
      <div
        className={`flex items-center justify-center rounded border border-dashed border-gray-300 bg-gray-50 py-4 text-xs text-gray-400 ${className}`}
        data-ad-slot={slot}
      >
        Ad Space
      </div>
    );
  }

  return (
    <div className={className}>
      <ins
        ref={adRef}
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client={pubId}
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive="true"
      />
    </div>
  );
}
