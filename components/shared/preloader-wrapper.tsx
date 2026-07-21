"use client";

import dynamic from "next/dynamic";

// Dynamically import the Preloader so it ONLY renders on the client.
// Google's crawler will skip this entirely and see the real content behind it.
const Preloader = dynamic(
  () => import("@/components/shared/preloader").then((mod) => mod.Preloader),
  { ssr: false }
);

export const PreloaderWrapper = ({ children }: { children: React.ReactNode }) => {
  return <Preloader>{children}</Preloader>;
};
