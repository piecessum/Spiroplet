"use client";

import dynamic from "next/dynamic";

const SpiralScene = dynamic(() => import("./spiral-scene"), {
  ssr: false,
  loading: () => <SpiralFallback />,
});

function SpiralFallback() {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="size-40 animate-spin-slow rounded-full border-2 border-dashed border-brand/40" />
    </div>
  );
}

export function Spiral({ className }: { className?: string }) {
  return (
    <div className={className} aria-hidden>
      <SpiralScene />
    </div>
  );
}
