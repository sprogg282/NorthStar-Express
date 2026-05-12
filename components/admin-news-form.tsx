"use client"

import { useState, useRef } from "react"
import { createNewsItem } from "@/app/admin/actions"

export function AdminNewsForm() {
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null)
  const [imagePreview, setImagePreview] = useState<string | null>(null)
  const formRef = useRef<HTMLFormElement>(null)

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setImagePreview(reader.result as string)
      }
      reader.readAsDataURL(file)
    } else {
      setImagePreview(null)
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    setMessage(null)

    const formData = new FormData(e.currentTarget)

    try {
      const result = await createNewsItem(formData)

      if (result.success) {
        setMessage({ type: "success", text: "News item created successfully!" })
        formRef.current?.reset()
        setImagePreview(null)
      } else {
        setMessage({ type: "error", text: result.error || "Failed to create news item" })
      }
    } catch {
      setMessage({ type: "error", text: "An error occurred. Please try again." })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="card p-6 md:p-8 space-y-6 max-w-2xl">
      <div>
        <label htmlFor="title" className="block text-sm font-semibold mb-2">
          Title <span className="text-red-400">*</span>
        </label>
        <input
          id="title"
          name="title"
          type="text"
          className="input-field"
          placeholder="Enter news title"
          required
        />
      </div>

      <div>
        <label htmlFor="content" className="block text-sm font-semibold mb-2">
          Content <span className="text-red-400">*</span>
        </label>
        <textarea
          id="content"
          name="content"
          rows={8}
          className="input-field resize-none"
          placeholder="Write your news content here..."
          required
        />
      </div>

      <div>
        <label htmlFor="image" className="block text-sm font-semibold mb-2">
          Image
        </label>
        <div className="space-y-4">
          <input
            id="image"
            name="image"
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="input-field file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-primary file:text-primary-foreground hover:file:bg-primary/90 file:cursor-pointer"
          />
          {imagePreview && (
            <div className="relative w-full h-48 rounded-lg overflow-hidden bg-muted">
              <img
                src={imagePreview}
                alt="Preview"
                className="w-full h-full object-cover"
              />
              <button
                type="button"
                onClick={() => {
                  setImagePreview(null)
                  const input = document.getElementById("image") as HTMLInputElement
                  if (input) input.value = ""
                }}
                className="absolute top-2 right-2 p-1 rounded-full bg-background/80 hover:bg-background transition-colors"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          )}
        </div>
      </div>

      {message && (
        <div
          className={`p-4 rounded-lg ${
            message.type === "success"
              ? "bg-green-500/10 border border-green-500/20 text-green-400"
              : "bg-red-500/10 border border-red-500/20 text-red-400"
          }`}
        >
          {message.text}
        </div>
      )}

      <button
        type="submit"
        disabled={isLoading}
        className="btn-primary w-full"
      >
        {isLoading ? "Creating..." : "Create News Item"}
      </button>
    </form>
  )
}
