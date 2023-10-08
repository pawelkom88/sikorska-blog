import contentfulClient from "./contentfulClient";
import {parseContentfulContentImage} from "./contentImage";

export function parseContentfulArticle(article) {
  if (!article) {
    return null;
  }
  return {
    title: article.fields.title || "",
    slug: article.fields.slug,
    summary: article.fields.summary || "",
    content: article.fields.content || "",
    date: article.fields.date || null,
    isEnglish: article.fields.isEnglish || false,
    image: parseContentfulContentImage(article.fields.image) || null,
  };
}

export async function fetchArticles({preview}, content_type, parseFunction) {
  const contentful = contentfulClient({preview});

  const result = await contentful.getEntries({content_type});

  return result?.items?.map(parseFunction) || [];
}

export async function fetchArticle({slug, preview, content_type}) {
  const contentful = contentfulClient({preview});

  const article = await contentful.getEntries({
    content_type,
    "fields.slug": slug,
    include: 2,
  });

  return parseContentfulArticle(article.items[0]);
}
