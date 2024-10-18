"use client";
import { usePathname } from "next/navigation";
import React from "react";
import Link from "next/link";
import { History, HomeIcon, UserRound } from "lucide-react";

function Navbar() {
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
        <Link href="/history">
          <div
            className={`${pathname === "/history" ? "" : "text-gray-400"} flex justify-center items-center h-12 w-28 `}
          >
            <History size={24} />
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

export default Navbar;
