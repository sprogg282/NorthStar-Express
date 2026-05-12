"use client"

import { useState } from "react"
import Image from "next/image"
import type { NewsItem } from "@/lib/types"
import { NewsModal } from "./news-modal"

interface NewsGridProps {
  news: NewsItem[]
}

export function NewsGrid({ news }: NewsGridProps) {
  const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null)

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {news.map((item) => (
          <article
            key={item.id}
            onClick={() => setSelectedNews(item)}
            className="card p-0 overflow-hidden cursor-pointer group hover:border-primary/30 transition-all duration-300 hover:-translate-y-1"
          >
            {item.image_url ? (
              <div className="relative h-48 w-full overflow-hidden bg-muted">
                <Image
                  src={item.image_url}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            ) : (
              <div className="h-48 w-full bg-muted flex items-center justify-center">
                <svg
                  className="w-12 h-12 text-muted-foreground/30"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
            )}
            <div className="p-6">
              <time className="text-[10px] text-primary font-bold tracking-widest uppercase">
                {new Date(item.created_at).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
              <h2 className="mt-2 text-lg font-bold line-clamp-2 group-hover:text-primary transition-colors">
                {item.title}
              </h2>
              <p className="mt-2 text-sm text-muted-foreground line-clamp-3">
                {item.content}
              </p>
              <div className="mt-4 text-sm font-semibold text-primary flex items-center gap-2">
                Read more
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </article>
        ))}
      </div>

      {selectedNews && (
        <NewsModal news={selectedNews} onClose={() => setSelectedNews(null)} />
      )}
    </>
  )
}
