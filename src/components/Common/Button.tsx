"use client";

import React from "react";
import clsx from "clsx";
import { MdFileDownload } from "react-icons/md";

interface ReusableButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  icon?: React.ReactNode; // Can be <MdIcon /> or <Image />
  iconPosition?: "left" | "right";
  className?: string;
}

export const ReusableButton: React.FC<ReusableButtonProps> = ({
  label,
  icon = <MdFileDownload />,
  iconPosition = "right",
  className = "",
  ...rest
}) => {
  return (
    <button
      {...rest}
      className={clsx(
        "flex items-center justify-center cursor-pointer gap-5 px-3 py-2 text-sm rounded-full transition duration-200 uppercase",
        className
      )}
    >
      {iconPosition === "left" && (
        <span className="flex items-center justify-center">{icon}</span>
      )}
      <span>{label}</span>
      {iconPosition === "right" && (
        <span className="flex items-center justify-center">{icon}</span>
      )}
    </button>
  );
};
