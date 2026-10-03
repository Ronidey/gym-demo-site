import clsx from "@/lib/clsx";
import React, { ButtonHTMLAttributes } from "react";

interface ButtonProp extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: "sm" | "md" | "lg" | "xl";
  fullWidth?: boolean;
  variant?: "primary" | "secondary" | "danger";
  loading?: boolean;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
}

const variantClasses = {
  primary: "bg-primary text-white border border-primary",
  secondary: "bg-white text-primary border border-primary",
  danger: "bg-red-500 text-white border border-red-500",
};

export default function Button({
  type = "button",
  children,
  onClick,
  className,
  fullWidth,
  variant = "primary",
  size = "md",
  loading,
  startIcon,
  endIcon,
  disabled,
  ...rest
}: ButtonProp) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={clsx(
        "font-semibold rounded-full",
        fullWidth && "w-full",
        size === "xl"
          ? "py-4 px-6 min-w-40 text-lg"
          : size === "lg"
            ? "py-3 px-5 min-w-40"
            : size === "md"
              ? "py-2 px-4 min-w-24"
              : "py-1.5 px-3 text-xs",
        variantClasses[variant],
        className,
      )}
      {...rest}
      disabled={loading || disabled}
    >
      <div
        className={clsx(
          "flex justify-center items-center",
          size === "lg" ? "gap-2" : "gap-1.5",
        )}
      >
        {startIcon}
        {children}
        {endIcon}
      </div>
    </button>
  );
}
