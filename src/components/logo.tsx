import Link from "next/link";
import React from "react";

export default function Logo() {
  return (
    <Link href={"/"}>
      <h1 className="font-semibold italic text-2xl text-[#f5f5f4]">
        ⁺₊✧ Astro<span className="font-extrabold text-white">Tour</span>
      </h1>
    </Link>
  );
}
