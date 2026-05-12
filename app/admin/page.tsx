"use client"

import { useState, useEffect } from "react"
import { Header } from "@/components/header"
import { AdminLoginForm } from "@/components/admin-login-form"
import { AdminNewsForm } from "@/components/admin-news-form"

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Check if already authenticated
    const authStatus = sessionStorage.getItem("admin_authenticated")
    if (authStatus === "true") {
      setIsAuthenticated(true)
    }
    setIsLoading(false)
  }, [])

  const handleLogin = () => {
    sessionStorage.setItem("admin_authenticated", "true")
    setIsAuthenticated(true)
  }

  const handleLogout = () => {
    sessionStorage.removeItem("admin_authenticated")
    setIsAuthenticated(false)
  }

  if (isLoading) {
    return (
      <main className="min-h-screen">
        <Header />
        <div className="container mx-auto px-5 md:px-8 pt-28 pb-20 flex items-center justify-center">
          <div className="animate-pulse text-muted-foreground">Loading...</div>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen">
      <Header />
      <div className="container mx-auto px-5 md:px-8 pt-28 pb-20">
        {isAuthenticated ? (
          <div>
            <div className="flex items-center justify-between mb-8">
              <div>
                <div className="inline-flex items-center space-x-2 px-3 py-1 rounded bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold tracking-widest uppercase mb-4">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
                  <span>Admin Panel</span>
                </div>
                <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">
                  Create <span className="text-primary">News</span>
                </h1>
              </div>
              <button
                onClick={handleLogout}
                className="text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors"
              >
                Logout
              </button>
            </div>
            <AdminNewsForm />
          </div>
        ) : (
          <div className="max-w-md mx-auto mt-16">
            <div className="text-center mb-8">
              <h1 className="text-2xl font-bold">Admin Access</h1>
              <p className="mt-2 text-muted-foreground">
                Enter the password to access the admin panel
              </p>
            </div>
            <AdminLoginForm onSuccess={handleLogin} />
          </div>
        )}
      </div>
    </main>
  )
}
