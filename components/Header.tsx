import siteMetadata from "@/data/siteMetadata";
import Link from "./Link";
import Image from "next/image";
import logoWebp from "../public/static/images/logo-webp.webp";
import headerNavLinks from "@/data/headerNavLinks";

const Header = () => {
  return (
    <header className="w-full flex items-center flex-col justify-center py-2 lg:py-8 bg-[#11371f]">
      <Link href="/" aria-label={siteMetadata.headerTitle}>
        <Image
          className="mx-auto mb-2"
          width={100}
          height={100}
          src={logoWebp}
          alt="Sikorska Notary Logo"
        />
      </Link>
      <div>
        <Link className="text-white" href="https://www.sikorskanotary.co.uk/">
          Back to website
        </Link>
        {headerNavLinks.map(link => (
          <Link key={link.title} href={link.href} className="mx-4 text-white">
            {link.title}
          </Link>
        ))}
      </div>
    </header>
  );
};

export default Header;
