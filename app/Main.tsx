"use client";

import Link from "@/components/Link";
import siteMetadata from "@/data/siteMetadata";
import {usePathname} from "next/navigation";

const MAX_DISPLAY = 5;
const dateFormatOptions: any = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};

export default function Home({posts}) {
  const pathname = usePathname();
  const isEnglish = pathname.includes("eng");

  const filteredPosts = posts.filter(post => (isEnglish ? post.isEnglish : !post.isEnglish));

  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        {renderHeader(isEnglish)}
        <ul className="divide-y divide-gray-200">
          {!filteredPosts.length && "No posts found."}
          {filteredPosts.slice(0, MAX_DISPLAY).map(post => (
            <li key={post.slug} className="py-12">
              {renderPostItem(post, isEnglish)}
            </li>
          ))}
        </ul>
      </div>
      {renderAllPostsLink(posts.length, isEnglish)}
    </>
  );
}

function renderHeader(isEnglish: boolean) {
  return (
    <div className="space-y-2 pb-8 pt-6 md:space-y-5">
      <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
        {isEnglish ? "Latest articles" : "Najnowsze artykuły"}
      </h1>
      <p className="text-lg leading-7 text-gray-500">{siteMetadata.summary}</p>
    </div>
  );
}

function renderPostItem(post, isEnglish) {
  const {slug, date, title, summary} = post;

  const formattedDate = new Date(date).toLocaleDateString(
    isEnglish ? "en-GB" : "pl-PL",
    dateFormatOptions
  );

  return (
    <article>
      <div className="space-y-2 space-x-16 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
        <dl>
          <dt className="sr-only">{isEnglish ? "Published on" : "Data publikacji"}</dt>
          <dd className="text-base font-medium leading-6 text-gray-400">
            <time dateTime={date}>{formattedDate}</time>
          </dd>
        </dl>
        <div className="space-y-5 xl:col-span-3 text-left">
          <div className="space-y-6">
            <h2 className="text-4xl lg:text-5xl mt-6 lg:mt-0 font-bold leading-8 tracking-tight">
              <Link
                href={`${isEnglish ? "/blog/eng" : "/blog/pl"}/${slug}`}
                className="text-gray-900">
                {title}
              </Link>
            </h2>
            <div className="prose max-w-none text-gray-600">{summary}</div>
          </div>
          <div className="text-base font-medium leading-6">
            <Link
              href={`${isEnglish ? "/blog/eng" : "/blog/pl"}/${slug}`}
              className="text-[#11371f] hover:text-primary-600 dark:hover:text-primary-400"
              aria-label={`Read "${title}"`}>
              {isEnglish ? "Click to see the article" : "Kliknij aby zobaczyć artykuł"} &rarr;
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}

function renderAllPostsLink(postCount, isEnglish) {
  if (postCount > MAX_DISPLAY) {
    return (
      <div className="flex justify-end text-base font-medium leading-6">
        <Link
          href={`${isEnglish ? "/eng/blog" : "/pl/blog"}`}
          className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
          aria-label="All posts">
          {isEnglish ? "All Posts" : "Wszystkie artykuły"} &rarr;
        </Link>
      </div>
    );
  }
  return null;
}
