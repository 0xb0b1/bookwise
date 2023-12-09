import { Binoculars } from "@phosphor-icons/react/dist/ssr/Binoculars";
import { ChartLineUp } from "@phosphor-icons/react/dist/ssr/ChartLineUp";
import { SignIn } from "@phosphor-icons/react/dist/ssr/SignIn";
import { User } from "@phosphor-icons/react/dist/ssr/User";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export const Sidebar = (props: {}) => {
  const pathname = usePathname();

  const navLinksMap = [
    {
      href: "/",
      name: "Inicio",
      icon: <ChartLineUp size={20} weight="bold" />,
    },
    {
      href: "/explore",
      name: "Explorar",
      icon: <Binoculars size={20} weight="bold" />,
    },
    {
      href: "/profile",
      name: "Perfil",
      icon: <User size={20} weight="bold" />,
    },
  ] as const;

  return (
    <div className="w-[232px] bg-gray-800 max-h-screen p-12 text-gray-200 bg-background rounded-xl">
      <div className="flex flex-col h-full items-center justify-between">
        <div className="flex flex-col items-center justify-between">
          <img src="/logo.svg" alt="Logo" />
          <ul className="pt-12 flex flex-col gap-8">
            {navLinksMap?.map((item) => (
              <li className="flex items-center">
                <span
                  className={
                    item?.href === pathname
                      ? "h-full border-0 rounded-full bg-gradient-to-t from-purple-100 to-green-100 w-1"
                      : "w-1"
                  }
                />
                <Link
                  className={`inline-flex gap-4 pl-4 ${
                    item?.href === pathname
                      ? "text-gray-100 font-bold"
                      : "text-gray-400 hover:text-gray-100/90"
                  }`}
                  href={item?.href}
                >
                  {item?.icon}
                  <span className="">{item?.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="">
          <Link className="flex gap-2 items-center" href="/login">
            <span className="text-gray-200 font-bold">Fazer login</span>
            <SignIn className="text-green-100" size={20} weight="bold" />
          </Link>
        </div>
      </div>
    </div>
  );
};
