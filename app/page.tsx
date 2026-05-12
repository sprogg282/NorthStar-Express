import { createClient } from "@/lib/supabase/server"
import { NewsGrid } from "@/components/news-grid"
import { Header } from "@/components/header"
import type { NewsItem } from "@/lib/types"

export const revalidate = 60

export default async function NewsPage() {
  const supabase = await createClient()

  const { data: news, error } = await supabase
    .from("news")
    .select("*")
    .order("created_at", { ascending: false })

  if (error) {
    console.error("Error fetching news:", error)
  }

  return (
    <main className="min-h-screen">
      <Header />
      <div className="container mx-auto px-5 md:px-8 pt-28 pb-20">
        <div className="mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold tracking-widest uppercase mb-4">
            <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
            <span>Latest Updates</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Company <span className="text-primary">News</span>
          </h1>
          <p className="mt-4 text-muted-foreground max-w-2xl">
            Stay informed about the latest updates, events, and announcements from NorthStar Express.
          </p>
        </div>

        {news && news.length > 0 ? (
          <NewsGrid news={news as NewsItem[]} />
        ) : (
          <div className="card p-12 text-center">
            <p className="text-muted-foreground">No news articles yet. Check back soon!</p>
          </div>
        )}
      </div>
    </main>
  )
}
