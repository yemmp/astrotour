import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/layout/navbar";

const raleway = Raleway({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Explorando Além dos Limites: Bem-vindo à AstroTour Adventures",
  description:
    "Descubra um universo de possibilidades com a AstroTour Adventures, sua porta de entrada para o turismo espacial. Nossa missão é levar você além da Terra, oferecendo experiências únicas para explorar a Lua, Marte e além. Combinando aventura, educação e inovação, estamos preparados para fazer de sua jornada espacial uma realidade segura e memorável.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="no-scrollbar" lang="en">
      <body
        className={cn(
          raleway.className,
          "no-scrollbar text-white min-h-screen bg-slate-950"
        )}
      >
        {children}
      </body>
    </html>
  );
}
