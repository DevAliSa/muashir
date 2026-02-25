"use client";

import { ThemeProvider } from "next-themes";
import { DirectionProvider } from "@radix-ui/react-direction";

export function Providers({ children ,dir}: { children: React.ReactNode; dir: "rtl" | "ltr" }) {
  return (
    <ThemeProvider attribute="class" enableSystem defaultTheme="system">
      <DirectionProvider dir={dir}>
        {children}
      </DirectionProvider>
    </ThemeProvider>
  );
}