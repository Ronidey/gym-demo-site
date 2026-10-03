import clsx from "@/lib/clsx";

type Props = {
  icon: React.ReactNode;
  size?: "sm" | "md" | "lg";
  borderColorClass?: string;
  borderWidth?: "medium" | "thick";
  className?: string;
};

export default function CircularIcon({
  icon,
  size = "md",
  borderColorClass = "border-white",
  borderWidth = "medium",
  className,
}: Props) {
  return (
    <div
      className={clsx(
        "rounded-full flex justify-center items-center",
        size === "sm" ? "w-8 h-8" : size === "md" ? "w-10 h-10" : "w-12 h-12",
        borderColorClass,
        borderWidth === "medium" ? "border" : "border-2",
        className,
      )}
    >
      {icon}
    </div>
  );
}
