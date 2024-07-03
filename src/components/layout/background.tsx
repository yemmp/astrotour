import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";
import Navbar from "./navbar";

type BackgroudProps = {
  src: string;
  alt: string;
  type: "image" | "video";
};

export default function Background({ src, alt, type }: BackgroudProps) {
  const bgStyle =
    " blur-[1px] absolute inset-0 flex items-center justify-center z-[-1]";

  return (
    <div className="w-full h-full">
      <Navbar />

      {type === "image" ? (
        <BackgroundImage src={src} alt={alt} className={bgStyle} />
      ) : (
        <BackgroundVideo src={src} className={bgStyle} />
      )}
    </div>
  );
}

function BackgroundImage({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <Image
      className={cn(className)}
      src={src}
      alt={alt}
      objectFit="cover"
      fill
    />
  );
}

function BackgroundVideo({
  src,
  className,
}: {
  src: string;
  className?: string;
}) {
  return (
    <video className={cn(className)} autoPlay playsInline loop muted>
      <source src={src} />
      Não foi possivel reproduzir o vídeo.
    </video>
  );
}
