import { createClient } from "@/prismicio";
import NavBar from "./NavBar";
import Link from "next/link";
import LotusLogo from "./icons/LotusLogo";
import { PrismicNextLink } from "@prismicio/next";

const Header = async () => {
  const client = createClient();
  const settings = await client.getSingle("settings");
  return (
    <>
      <header>
        <NavBar settings={settings} />
      </header>
    </>
  );
};

export default Header;
