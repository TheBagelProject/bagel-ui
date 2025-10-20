"use client";

import { usePathname } from "next/navigation";
import PrivateRoute from "@/auth/privateroutes";

interface LayoutContentProps {
  children: React.ReactNode;
}

export default function LayoutContent({ children }: LayoutContentProps) {
  const pathname = usePathname();

  // Exclude PrivateRoute on public pages: login (/), signup (/signup), terms (/termsandconditions)
  if (
    pathname === "/" ||
    pathname === "/signup" ||
    pathname === "/termsandconditions"
  ) {
    return <>{children}</>;
  }

  return <PrivateRoute>{children}</PrivateRoute>;
}