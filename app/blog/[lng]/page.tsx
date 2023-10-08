import Main from "app/Main";
import {fetchArticles, parseContentfulArticle} from "contentful/fetchContent";
import {draftMode} from "next/headers";

// fetch post based on language/slug

export default async function Page() {
  const articles = await fetchArticles(
    {preview: draftMode().isEnabled},
    "blogPage",
    parseContentfulArticle
  );

  return (
    <div className="mt-24 text-center">
      <Main posts={articles} />
    </div>
  );
}
