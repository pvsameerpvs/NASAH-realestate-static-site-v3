"use client";
import * as React from "react";

export function Divider({ className = "" }: { className?: string }) {
  return (
    <div
      className={`h-full w-px ${className}`}
      style={{ backgroundColor: "rgba(var(--fg), .10)" }}
      aria-hidden
    />
  );
}
