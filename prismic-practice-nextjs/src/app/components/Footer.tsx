import { createClient } from "@/prismicio";
import LotusLogo from "./icons/LotusLogo";
import { PrismicNextLink } from "@prismicio/next";
import Link from "next/link";

const Footer = async () => {
  const client = createClient();
  const settings = await client.getSingle("settings");

  return (
    <footer className="flex flex-col items-center justify-between gap-6 border-t border-slate-600 px-8 py-7 md:flex-row ">
      <Link href="/" className="flex items-center justify-center font-bold">
        <span className="sr-only">Crew.AI Home page</span>
        <LotusLogo />
        <p>Little Lotus</p>
      </Link>
      <nav aria-label="Footer">
        <ul className="flex gap-6">
          {settings.data.navigation.map((item) => (
            <li key={item.label} className="inline-flex min-h-11 items-center ">
              <PrismicNextLink field={item.link}>{item.label}</PrismicNextLink>
            </li>
          ))}
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
