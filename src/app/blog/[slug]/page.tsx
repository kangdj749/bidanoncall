import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"

import { getBlogPosts } from "@/lib/googleSheetsBlog"
import { generateTOC } from "@/lib/toc"
import { getRelatedPosts } from "@/lib/relatedPosts"

import {
  injectInternalLinks
} from "@/lib/blog/internalLinking"

import {
  getPopularArticles
} from "@/lib/blog/popularArticles"

import {
  generateBreadcrumbs,
  generateBreadcrumbSchema,
  type BreadcrumbItem
} from "@/lib/blog/breadcrumbs"

import TableOfContents from "@/components/blog/TableOfContents"
import RelatedPosts from "@/components/blog/RelatedPosts"
import BlogFAQ from "@/components/blog/BlogFAQ"

import { cloudinaryImage } from "@/lib/cloudinaryImage"
import { formatBlogContent } from "@/lib/formatBlogContent"

import type { BlogPost } from "@/types/blog"

interface PageProps {
  readonly params: {
    readonly slug: string
  }
}

/* ==================================
   FAQ TYPE
================================== */

interface FAQItem {
  q: string
  a: string
}

/* ==================================
   SEO METADATA
================================== */

export async function generateMetadata(
  { params }: PageProps
): Promise<Metadata> {

  const posts =
    await getBlogPosts() as BlogPost[]

  const post =
    posts.find(
      (p) => p.slug === params.slug
    )

  if (!post) return {}

  return {
    title: post.meta_title ?? post.title,
    description:
      post.meta_description ??
      post.excerpt
  }

}

/* ==================================
   PAGE
================================== */

export default async function BlogDetailPage(
  { params }: PageProps
) {

  const posts =
    await getBlogPosts() as BlogPost[]

  const post =
    posts.find(
      (p) => p.slug === params.slug
    )

  if (!post) notFound()

  /* ==================================
     FORMAT CONTENT
  ================================== */

  const formatted =
    formatBlogContent(
      post.content ?? ""
    )

  /* ==================================
     INTERNAL LINKING
  ================================== */

  

  const contentLinked =
    injectInternalLinks(
      formatted,
      post, posts
    )

  /* ==================================
     TOC
  ================================== */

  const { toc, content } =
    generateTOC(contentLinked)

  /* ==================================
     RELATED POSTS
  ================================== */

  const related =
    getRelatedPosts(
      posts,
      post
    )

  /* ==================================
     POPULAR ARTICLES
  ================================== */

  const popular =
    getPopularArticles(
      posts,
      5
    )

  /* ==================================
     FEATURE IMAGE
  ================================== */

  const featuredImage =
    post.cover_image
      ? cloudinaryImage(
          post.cover_image,
          "natural"
        )
      : ""

  /* ==================================
     CATEGORY + TAGS
  ================================== */

  const category =
    post.category?.trim()

  const tags =
    post.tags
      ?.split(",")
      .map((t) => t.trim())
      .filter(Boolean) ?? []

  /* ==================================
     FAQ PARSER
  ================================== */

  let faqItems: FAQItem[] = []

  try {

    if (post.faq) {

      const parsed =
        JSON.parse(post.faq)

      if (Array.isArray(parsed)) {

        faqItems = parsed.filter(
          (item): item is FAQItem =>
            typeof item.q === "string" &&
            typeof item.a === "string"
        )

      }

    }

  } catch (error) {

    console.error(
      "FAQ parse error",
      error
    )

  }

  /* ==================================
     BREADCRUMBS
  ================================== */

  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL ?? ""

  const breadcrumbs: BreadcrumbItem[] =
    generateBreadcrumbs(
      baseUrl,
      category ?? "Blog",
      post.title,
      post.slug
    )

  const breadcrumbSchema =
    generateBreadcrumbSchema(
      breadcrumbs
    )

  /* ==================================
     ARTICLE SCHEMA
  ================================== */

  const articleSchema = {

    "@context": "https://schema.org",

    "@type":
      post.schema_type ??
      "BlogPosting",

    headline: post.title,

    description:
      post.meta_description ??
      post.excerpt,

    image: featuredImage,

    datePublished:
      post.published_date,

    dateModified:
      post.last_updated ??
      post.published_date,

    author: {
      "@type": "Organization",
      name:
        post.author ??
        "Editorial Team"
    }

  }

  /* ==================================
     FAQ SCHEMA
  ================================== */

  const faqSchema =
    faqItems.length > 0
      ? {
          "@context":
            "https://schema.org",
          "@type": "FAQPage",
          mainEntity:
            faqItems.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: {
                "@type": "Answer",
                text: f.a
              }
            }))
        }
      : null

  /* ==================================
     SIDEBAR CATEGORIES
  ================================== */

  const categories: string[] =
    Array.from(
      new Set(
        posts
          .map((p) =>
            p.category?.trim()
          )
          .filter(
            (c): c is string =>
              Boolean(c)
          )
      )
    )

  return (

    <main
      className="
      mx-auto
      px-4
      py-8
      max-w-[var(--container-max)]
      "
    >

      {/* JSON LD */}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html:
            JSON.stringify(
              articleSchema
            )
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html:
            JSON.stringify(
              breadcrumbSchema
            )
        }}
      />

      {faqSchema && (

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html:
              JSON.stringify(
                faqSchema
              )
          }}
        />

      )}

      {/* ======================
         BREADCRUMBS
      ====================== */}

      <nav
        className="
        text-[11px]
        mb-5
        text-[rgb(var(--color-muted))]
        "
      >

        {breadcrumbs.map(
          (item, i) => (

            <span key={item.url}>

              <Link
                href={item.url}
                className="
                hover:text-[rgb(var(--color-primary))]
                "
              >
                {item.name}
              </Link>

              {i <
                breadcrumbs.length - 1 && (
                <span className="mx-2">
                  /
                </span>
              )}

            </span>

          )
        )}

      </nav>

      <div
        className="
        grid grid-cols-1
        lg:grid-cols-[1fr_260px]
        gap-10
        "
      >

        {/* ======================
           ARTICLE
        ====================== */}

        <article
          className="
          max-w-[680px]
          "
        >

          {category && (

            <Link
              href={`/blog/kategori/${category.toLowerCase().replace(/\s+/g,"-")}`}
              className="
              text-[10px]
              uppercase
              tracking-wide
              text-[rgb(var(--color-primary))]
              "
            >
              {category}
            </Link>

          )}

          <h1
            className="
            mt-2
            text-[20px]
            font-semibold
            leading-snug
            text-[rgb(var(--color-text))]
            "
          >
            {post.title}
          </h1>

          <div
            className="
            text-[11px]
            text-[rgb(var(--color-subtle))]
            mt-1
            "
          >
            {post.published_date}
          </div>

          {featuredImage && (

            <div
              className="
              relative
              w-full
              h-[220px]
              mt-5
              rounded-[var(--radius-lg)]
              overflow-hidden
              border
              border-[rgb(var(--color-border))]
              "
            >

              <Image
                src={featuredImage}
                alt={post.title}
                fill
                sizes="(max-width:768px) 100vw, 680px"
                className="object-cover"
                priority
              />

            </div>

          )}

          {/* CONTENT */}

          <div
            className="
            mt-7
            text-[13px]
            leading-relaxed
            space-y-4
            text-[rgb(var(--color-text))]

            [&_h2]:text-[15px]
            [&_h2]:font-semibold
            [&_h2]:mt-8

            [&_h3]:text-[14px]
            [&_h3]:font-semibold
            [&_h3]:mt-6

            [&_p]:text-[13px]
            [&_p]:text-[rgb(var(--color-muted))]
            "
            dangerouslySetInnerHTML={{
              __html: content
            }}
          />

          {faqItems.length > 0 && (

            <BlogFAQ
              items={faqItems}
            />

          )}

          {/* TAGS */}

          {tags.length > 0 && (

            <div
              className="
              mt-8
              pt-5
              border-t
              border-[rgb(var(--color-border))]
              "
            >

              <div
                className="
                text-[10px]
                uppercase
                tracking-wide
                text-[rgb(var(--color-subtle))]
                mb-2
                "
              >
                Tags
              </div>

              <div className="flex flex-wrap gap-2">

                {tags.map((tag) => (

                  <Link
                    key={tag}
                    href={`/blog/tag/${tag.toLowerCase().replace(/\s+/g,"-")}`}
                    className="
                    text-[11px]
                    px-2.5
                    py-1
                    border
                    rounded-[var(--radius-sm)]
                    border-[rgb(var(--color-border))]
                    text-[rgb(var(--color-muted))]
                    hover:text-[rgb(var(--color-primary))]
                    "
                  >
                    {tag}
                  </Link>

                ))}

              </div>

            </div>

          )}

          <section className="mt-12">

            <RelatedPosts
              posts={related}
            />

          </section>

        </article>

        {/* ======================
           SIDEBAR
        ====================== */}

        <aside className="hidden lg:block">

          <div className="sticky top-24 space-y-6">

            <TableOfContents
              items={toc}
            />

            {/* POPULAR */}

            <div
              className="
              p-4
              rounded-[var(--radius-md)]
              border
              border-[rgb(var(--color-border))]
              bg-[rgb(var(--color-surface))]
              "
            >

              <div
                className="
                text-[11px]
                font-semibold
                mb-3
                "
              >
                Popular Articles
              </div>

              <div className="space-y-2">

                {popular.map((p) => (

                  <Link
                    key={p.slug}
                    href={`/blog/${p.slug}`}
                    className="
                    block
                    text-[12px]
                    text-[rgb(var(--color-muted))]
                    hover:text-[rgb(var(--color-primary))]
                    "
                  >
                    {p.title}
                  </Link>

                ))}

              </div>

            </div>

            {/* CATEGORIES */}

            {categories.length > 0 && (

              <div
                className="
                p-4
                rounded-[var(--radius-md)]
                border
                border-[rgb(var(--color-border))]
                bg-[rgb(var(--color-surface))]
                "
              >

                <div
                  className="
                  text-[11px]
                  font-semibold
                  mb-3
                  "
                >
                  Kategori
                </div>

                <div className="space-y-2">

                  {categories.map((cat) => (

                    <Link
                      key={cat}
                      href={`/blog/kategori/${cat.toLowerCase().replace(/\s+/g,"-")}`}
                      className="
                      block
                      text-[12px]
                      text-[rgb(var(--color-muted))]
                      hover:text-[rgb(var(--color-primary))]
                      "
                    >
                      {cat}
                    </Link>

                  ))}

                </div>

              </div>

            )}

          </div>

        </aside>

      </div>

    </main>

  )

}