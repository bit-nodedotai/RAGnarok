import React from "react";

/**
 * Props for the Card component.
 */
export interface CardProps {
  /** Optional title displayed at the top of the card */
  title?: string;
  /** Card contents */
  children: React.ReactNode;
  /** Additional class names to apply to the root element */
  className?: string;
}

/**
 * A reusable Card component styled with Tailwind CSS v4.
 * It uses the existing slate palette for background and border colours.
 */
export const Card: React.FC<CardProps> = ({ title, children, className = "" }) => {
  const baseClasses =
    "rounded-md border bg-slate-50 border-slate-200 p-4";
  const combinedClasses = `${baseClasses} ${className}`.trim();

  return (
    <div data-testid="card" className={combinedClasses}>
      {title && (
        <h3 className="mb-2 text-lg font-medium text-slate-800">{title}</h3>
      )}
      <div>{children}</div>
    </div>
  );
};

export default Card;
