"use client";

import React from "react";
import clsx from "clsx";
import { MdFileDownload } from "react-icons/md";

interface ReusableButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label?: React.ReactNode; // Now optional
  icon?: React.ReactNode;
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
  const isIconOnly = !label;

  return (
    <button
      {...rest}
      className={clsx(
        "flex items-center justify-center cursor-pointer px-3 py-2 rounded-full transition duration-300",
        {
          "gap-5 text-sm uppercase": !!label,
          "w-[42px] h-[42px] p-0": isIconOnly,
        },
        className
      )}
    >
      {icon && iconPosition === "left" && !!label && (
        <span className="flex items-center justify-center">{icon}</span>
      )}

      {!!label && <span>{label}</span>}

      {icon && (iconPosition === "right" || isIconOnly) && (
        <span className="flex items-center justify-center">{icon}</span>
      )}
    </button>
  );
};
