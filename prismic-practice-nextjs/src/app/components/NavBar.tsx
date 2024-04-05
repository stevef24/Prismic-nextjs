"use client";

import { Content } from "@prismicio/client";
import LotusLogo from "./icons/LotusLogo";
import Link from "next/link";
import { PrismicNextLink } from "@prismicio/next";
import ButtonLink from "./ButtonLink";

type NavBarProps = {
  settings: Content.SettingsDocument;
};

const NavBar = ({ settings }: NavBarProps) => {
  return (
    <nav aria-label="main" className="p-4 md:p-6">
      <div className="font md:items:center mx-auto flex max-w-6xl flex-col justify-between py-2 font-medium text-white md:flex-row">
        <Link href="/" className="flex items-center justify-center font-bold">
          <span className="sr-only">Crew.AI Home page</span>
          <LotusLogo />
          <p>Little Lotus</p>
        </Link>
        <ul className="flex gap-6">
          {settings.data.navigation.map((item) => {
            if (item.cta_button) {
              return (
                <ButtonLink key={item.label} field={item.link}>
                  {item.label}
                </ButtonLink>
              );
            }
            return (
              <li
                key={item.label}
                className="inline-flex min-h-11 items-center "
              >
                <PrismicNextLink field={item.link}>
                  {item.label}
                </PrismicNextLink>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
