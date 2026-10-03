"use client";

import { ROUTE_ITEMS } from "@/constants/routes";
import NavLink from "./nav-link";
import { usePathname } from "next/navigation";

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <div className="flex items-center">
      {ROUTE_ITEMS.map((item) => (
        <NavLink
          href={item.path}
          key={item.label}
          isActive={pathname === item.path}
        >
          {item.label}
        </NavLink>
      ))}
    </div>
  );
}
