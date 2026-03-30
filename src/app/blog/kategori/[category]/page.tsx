import { getBlogPosts } from "@/lib/googleSheetsBlog"
import { getPostsByCategory } from "@/lib/blogHelpers"
import BlogCard from "@/components/blog/BlogCard"
import type { BlogPost } from "@/types/blog"

interface CategoryPageProps {
  params: {
    category: string
  }
}

/* --------------------------------
   Static Params (SSG Categories)
-------------------------------- */

export async function generateStaticParams() {

  const posts: BlogPost[] = await getBlogPosts()

  const categories = [
    ...new Set(
      posts
        .map((post) => post.category)
        .filter(Boolean)
    )
  ]

  return categories.map((category) => ({
    category: category
      .toLowerCase()
      .trim()
      .replace(/\s+/g, "-")
  }))
}

/* --------------------------------
   Category Page
-------------------------------- */

export default async function CategoryPage({
  params
}: CategoryPageProps) {

  const posts: BlogPost[] = await getBlogPosts()

  const categorySlug = params.category

  const categoryPosts: BlogPost[] =
    getPostsByCategory(posts, categorySlug)

  const categoryTitle =
  categorySlug
    .replace(/-/g, " ")
    .replace(/\b\w/g, (l) => l.toUpperCase())
  return (

    <main
      className="
      mx-auto
      max-w-[var(--container-max)]
      px-4
      py-8
      "
    >

      {/* Header */}

      <header
        className="
        mb-6
        space-y-1
        "
      >

        <h1
          className="
          text-[16px]
          font-semibold
          tracking-tight
          capitalize
          text-[rgb(var(--color-text))]
          "
        >
          Artikel {categoryTitle}
        </h1>

        <p
          className="
          text-[12px]
          text-[rgb(var(--color-muted))]
          "
        >
          Kumpulan artikel terkait {categoryTitle}
        </p>

      </header>


      {/* Content */}

      {categoryPosts.length === 0 ? (

        <div
          className="
          border
          rounded-[var(--radius-lg)]
          border-[rgb(var(--color-border))]
          bg-[rgb(var(--color-surface))]
          p-6
          text-center
          shadow-[var(--shadow-soft)]
          "
        >

          <p
            className="
            text-[12px]
            text-[rgb(var(--color-muted))]
            "
          >
            Belum ada artikel pada kategori ini.
          </p>

        </div>

      ) : (

        <section
          className="
          grid
          grid-cols-1
          gap-4
          sm:grid-cols-2
          lg:grid-cols-3
          "
        >

          {categoryPosts.map((post) => (

            <BlogCard
              key={post.slug}
              post={post}
            />

          ))}

        </section>

      )}

    </main>

  )
}