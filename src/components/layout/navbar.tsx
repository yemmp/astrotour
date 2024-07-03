import Link from "next/link";
import React from "react";
import Logo from "../logo";
import { Info, Menu, Rocket } from "lucide-react";

const iconStyle = "md:hidden";
const navbarContent = [
  { name: "home", route: "/", icon: <Menu className={iconStyle} /> },
  {
    name: "pacotes",
    route: "/pacotes",
    icon: <Rocket className={iconStyle} />,
  },
  {
    name: "informações",
    route: "informacoes",
    icon: <Info className={iconStyle} />,
  },
];

export default function Navbar() {
  return (
    <nav className="w-screen z-10 fixed md:static px-6 h-[48px] bg-gradient-to-b from-black/65 to-white/0 backdrop-blur-[6px]  md:backdrop-blur-none">
      <ul className="flex w-full h-full items-center justify-between">
        <Logo />
        <section className="flex items-center gap-4 md:gap-10 capitalize">
          {navbarContent.map((item) => (
            <NavbarItem
              key={item.route}
              route={item.route}
              name={item.name}
              icon={item.icon}
            />
          ))}
        </section>
      </ul>
    </nav>
  );
}

function NavbarItem({
  route,
  name,
  icon,
}: {
  route: string;
  name: string;
  icon: React.ReactNode;
}) {
  return (
    <li>
      <Link href={route}>
        {icon}
        <p className="hidden md:flex">{name}</p>
      </Link>
    </li>
  );
}
