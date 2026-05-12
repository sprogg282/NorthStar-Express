"use client"

import { useState } from "react"
import { verifyAdminPassword } from "@/app/admin/actions"

interface AdminLoginFormProps {
  onSuccess: () => void
}

export function AdminLoginForm({ onSuccess }: AdminLoginFormProps) {
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setIsLoading(true)

    try {
      const result = await verifyAdminPassword(password)
      if (result.success) {
        onSuccess()
      } else {
        setError(result.error || "Invalid password")
      }
    } catch {
      setError("An error occurred. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="card p-6 space-y-4">
      <div>
        <label htmlFor="password" className="block text-sm font-semibold mb-2">
          Password
        </label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="input-field"
          placeholder="Enter admin password"
          required
        />
      </div>

      {error && (
        <p className="text-red-400 text-sm">{error}</p>
      )}

      <button
        type="submit"
        disabled={isLoading}
        className="btn-primary w-full"
      >
        {isLoading ? "Verifying..." : "Access Admin Panel"}
      </button>
    </form>
  )
}
