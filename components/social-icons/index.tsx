import {Mail, Github, Facebook, Youtube, Linkedin, Twitter, Mastodon} from "./icons";

const components = {
  mail: Mail,
  github: Github,
  facebook: Facebook,
  youtube: Youtube,
  linkedin: Linkedin,
  twitter: Twitter,
  mastodon: Mastodon,
};

type SocialIconProps = {
  kind: keyof typeof components;
  href: string | undefined;
};

const SocialIcon = ({kind, href}: SocialIconProps) => {
  if (!href || (kind === "mail" && !/^mailto:\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/.test(href)))
    return null;

  const SocialSvg = components[kind];

  return (
    <a
      className="text-sm text-gray-500 transition hover:text-gray-600"
      target="_blank"
      rel="noopener noreferrer"
      href={href}>
      <span className="sr-only">{kind}</span>
      <SocialSvg
        className={`fill-current text-[#11371f] hover:text-[#c29b38] dark:text-gray-200 dark:hover:text-primary-400 h-6 w-6`}
      />
    </a>
  );
};

export default SocialIcon;
