"use client";

import type { ReactNode } from "react";
import { MotionConfig } from "framer-motion";

// Respecte le réglage « réduire les animations » du système du visiteur.
export default function Providers({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
