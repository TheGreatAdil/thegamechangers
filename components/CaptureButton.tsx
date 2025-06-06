"use client";

import Link from "next/link";
import posthog from "posthog-js";
import React from "react";

export default function CaptureButton({
  href,
  eventName,
  className,
  children,
}: {
  href: string;
  eventName?: string;
  className?: string;
  children: React.ReactNode;
}) {
  const handleClick = () => {
    if (eventName) {
      try {
        posthog.capture(eventName);
      } catch (error) {
        console.warn("Failed to capture event:", error);
      }
    }
  };

  return (
    <button onClick={handleClick}>
      <Link href={href} className={className}>
        {children}
      </Link>
    </button>
  );
}
