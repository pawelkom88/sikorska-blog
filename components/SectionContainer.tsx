import {ReactNode} from "react";

interface Props {
  children: ReactNode;
}

export default function SectionContainer({children}: Props) {
  return <section className="md:mx-auto px-4 md:max-w-3xl sm:px-6 xl:max-w-5xl xl:px-0">{children}</section>;
}
