"use client"

import { ReactNode } from "react";


type socialButtonProps = {
  children: ReactNode
}
export default function SocialButton({children}: socialButtonProps) {
  return (
    <button className="flex flex-col cursor-pointer items-center justify-center p-2 hover:bg-neutral-200 rounded-lg transition-colors duration-500 ease-out ">
      <div className="text-orange-400/75">{children}</div>
    </button>
  );
}