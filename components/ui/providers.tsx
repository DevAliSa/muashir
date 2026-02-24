"use client";

import { ThemeProvider } from "next-themes";
import { DirectionProvider } from "@radix-ui/react-direction";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" enableSystem defaultTheme="system">
      <DirectionProvider dir="rtl">
        {children}
      </DirectionProvider>
    </ThemeProvider>
  );
}