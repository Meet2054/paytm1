"use client";

import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  className?: string;
  appName: string;
}

export const Button = ({ children, appName }: ButtonProps) => {
  return (
    <button
      className="w-auto h-auto border-2 p-1 border-black rounded-md" 
     >Click me
    </button>
  );
};
