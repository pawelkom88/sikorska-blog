import Link from "next/link";
import {fetchArticle} from "../../../../contentful/fetchContent";
import Image from "next/image";
import {documentToReactComponents} from "@contentful/rich-text-react-renderer";
import {options} from "contentful/helpers";
import {StaticImport} from "next/dist/shared/lib/get-img-props";

const dateOptions: any = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};

export default async function Page({params}: {params: {slug: string; lng: string}}) {
  const article: any = await fetchArticle({
    preview: false,
    slug: params.slug,
    content_type: "blogPost",
  });
  const {date, title, content, image} = article || {};
  const isEnglish = params?.lng === "eng";

  return (
    <>
      {renderDateTime(date, isEnglish)}
      {renderTitle(title)}
      {renderArticleContent(content, title, image, isEnglish)}
    </>
  );
}

function renderDateTime(date: string, isEnglish: boolean) {
  const formattedDate = new Date(date).toLocaleDateString(
    isEnglish ? "en-GB" : "pl-PL",
    dateOptions
  );

  return (
    <time
      className="block text-base font-medium leading-6 text-gray-400 text-center mb-4 mt-4 lg:mt-12"
      dateTime={date}>
      {formattedDate}
    </time>
  );
}

function renderTitle(title: string) {
  return (
    <h1 className="py-4 border-b-2 lg:my-8 text-3xl xl:text-6xl mt-6 lg:text-4xl lg:mt-0 font-bold leading-8 tracking-tight text-center">
      {title}
    </h1>
  );
}

function renderArticleContent(
  content: any,
  title: string,
  image: StaticImport,
  isEnglish: boolean
) {
  return (
    <div className="grid-rows-[auto_1fr] divide-y divide-gray-300 pb-8 xl:grid xl:grid-cols-4 xl:gap-x-8 xl:divide-y-0">
      <div className="col-span-1">
        <dl className="pb-10 pt-6 xl:border-b xl:border-gray-300 xl:pt-11">
          <dt className="sr-only">Authors</dt>
          <dd>
            <ul className="flex flex-wrap justify-center gap-4 sm:space-x-12 xl:block xl:space-x-0 xl:space-y-8">
              <li className="flex items-center gap-4 space-x-2">
                <Image
                  src="/static/images/avatar.png"
                  alt="Avatar"
                  width={50}
                  height={50}
                  className="rounded-full"
                />
                <dl className="whitespace-nowrap text-sm font-medium leading-5">
                  <dt className="sr-only">Name</dt>
                  <dd className="text-gray-900 mb-2">Patrycja Sikorska</dd>
                  <dd>
                    <a
                      href="mailto:ps@sikorskanotary.co.uk"
                      className="text-[#c29b38] hover:text-primary-600 underline">
                      ps@sikorskanotary.co.uk
                    </a>
                  </dd>
                </dl>
              </li>
              <li>
                <Link
                  href={`${isEnglish ? "/blog/eng" : "/blog/pl"}`}
                  className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                  aria-label="All posts">
                  ← {isEnglish ? "All Articles" : "Wszystkie artykuły"}
                </Link>
              </li>
            </ul>
          </dd>
        </dl>
      </div>
      <div className="col-span-3 mt-8">
        <Image src={image} alt={title} width={1000} height={500} />
        <br />
        <article>{documentToReactComponents(content, options)}</article>
      </div>
    </div>
  );
}
