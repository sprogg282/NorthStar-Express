"use server"

import { createClient } from "@/lib/supabase/server"
import { revalidatePath } from "next/cache"

export async function verifyAdminPassword(password: string) {
  const adminPassword = process.env.ADMIN_PASSWORD

  if (!adminPassword) {
    return { success: false, error: "Admin password not configured" }
  }

  if (password === adminPassword) {
    return { success: true }
  }

  return { success: false, error: "Invalid password" }
}

export async function createNewsItem(formData: FormData) {
  const title = formData.get("title") as string
  const content = formData.get("content") as string
  const imageFile = formData.get("image") as File | null

  if (!title || !content) {
    return { success: false, error: "Title and content are required" }
  }

  const supabase = await createClient()
  let imageUrl: string | null = null

  // Upload image if provided
  if (imageFile && imageFile.size > 0) {
    const fileExt = imageFile.name.split(".").pop()
    const fileName = `${Date.now()}-${Math.random().toString(36).substring(2)}.${fileExt}`

    const { data: uploadData, error: uploadError } = await supabase.storage
      .from("news-images")
      .upload(fileName, imageFile, {
        cacheControl: "3600",
        upsert: false,
      })

    if (uploadError) {
      console.error("Image upload error:", uploadError)
      return { success: false, error: "Failed to upload image" }
    }

    // Get public URL
    const { data: urlData } = supabase.storage
      .from("news-images")
      .getPublicUrl(uploadData.path)

    imageUrl = urlData.publicUrl
  }

  // Insert news item
  const { error: insertError } = await supabase.from("news").insert({
    title,
    content,
    image_url: imageUrl,
  })

  if (insertError) {
    console.error("Insert error:", insertError)
    return { success: false, error: "Failed to create news item" }
  }

  revalidatePath("/")
  return { success: true }
}
