import clsx from "@/lib/clsx";
import Link from "next/link";

type Props = {
  href: string;
  children: React.ReactNode;
  isActive: boolean;
};

export default function NavLink({ href, children, isActive }: Props) {
  return (
    <Link
      href={href}
      className={clsx(
        "hover:text-primary font-semibold px-1 py-1 mx-6",
        isActive && "text-primary border-b-2 border-primary",
      )}
    >
      {children}
    </Link>
  );
}
