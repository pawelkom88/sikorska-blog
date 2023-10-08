import Link from "./Link";
import siteMetadata from "@/data/siteMetadata";
import SocialIcon from "@/components/social-icons";

export default function Footer() {
  return (
    <footer>
      <div className="mt-8 flex flex-col items-center px-8">
        <div className="mb-3 flex gap-4">
          <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} />
          <SocialIcon kind="facebook" href={siteMetadata.facebook} />
          <SocialIcon kind="linkedin" href={siteMetadata.linkedin} />
        </div>
        <div className="my-2 flex flex-col items-center gap-2 text-sm text-gray-500">
          <div>{`© ${new Date().getFullYear()}`}</div>
          <Link className="text-center" href="/">
            {siteMetadata.title}
          </Link>
        </div>
      </div>
      <br />
    </footer>
  );
}
