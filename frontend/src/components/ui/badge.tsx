import React from "react";

export type BadgeTone = "neutral" | "success" | "warning" | "danger";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Text or element inside the badge */
  children: React.ReactNode;
  /** Visual tone of the badge */
  tone?: BadgeTone;
}

/**
 * Small status pill used to convey a label such as "new", "success", etc.
 * Implemented as a <span> with `role="status"` for accessibility.
 */
export const Badge: React.FC<BadgeProps> = ({
  children,
  tone = "neutral",
  className = "",
  ...rest
}) => {
  const toneClasses: Record<BadgeTone, string> = {
    neutral: "bg-slate-100 text-slate-800",
    success: "bg-emerald-100 text-emerald-800",
    warning: "bg-amber-100 text-amber-800",
    danger: "bg-rose-100 text-rose-800",
  };

  const baseClasses =
    "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium";

  return (
    <span
      role="status"
      className={`${baseClasses} ${toneClasses[tone]} ${className}`}
      {...rest}
    >
      {children}
    </span>
  );
};

