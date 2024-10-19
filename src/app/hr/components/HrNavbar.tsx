"use client";
import { usePathname } from "next/navigation";
import React from "react";
import Link from "next/link";
import { Heart, HomeIcon, UserRound, Mail } from "lucide-react";

function HrNavbar() {
  const pathname = usePathname();

  return (
    <div className="fixed bottom-0 w-full py-2 text-white bg-gray-800">
      <nav className="flex justify-evenly ">
        <Link href="/home">
          <div
            className={`${pathname === "/home" ? "" : "text-gray-400"} flex justify-center items-center h-12 w-28 `}
          >
            <HomeIcon size={24} />
          </div>
        </Link>
        <Link href="/favorites">
          <div
            className={`${pathname === "/favorites" ? "" : "text-gray-400"} flex justify-center items-center h-12 w-28 `}
          >
            <Heart size={24} />
          </div>
        </Link>
        <Link href="/replies">
          <div
            className={`${pathname === "/replies" ? "" : "text-gray-400"} flex justify-center items-center h-12 w-28 `}
          >
            <Mail size={24} />
          </div>
        </Link>
        <Link href="/profile">
          <div
            className={`${pathname === "/profile" ? "" : "text-gray-400"} flex justify-center items-center h-12 w-28`}
          >
            <UserRound size={24} />
          </div>
        </Link>
      </nav>
    </div>
  );
}

export default HrNavbar;
