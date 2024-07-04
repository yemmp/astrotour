import Background from "@/components/layout/background";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

export default function NotFound() {
  return (
    <article>
      <Background src="/videos/galaxy.mp4" alt="galaxy-video" type="video" />
      <div className=" absolute flex flex-col gap-4 w-full h-full justify-center items-center">
        <h1 className="text-center text-base md:text-3xl">
          Lamentamos o inconveniente
          <br /> A página que você procura não pode ser encontrada.
        </h1>
        <Button asChild>
          <Link href={"/"}>Voltar à página principal!</Link>
        </Button>
      </div>
    </article>
  );
}
