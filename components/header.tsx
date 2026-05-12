import Link from "next/link"

export function Header() {
  return (
    <nav className="fixed top-0 w-full z-50 glass border-b border-border">
      <div className="container mx-auto px-5 md:px-8 h-20 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-3">
          <div className="h-10 w-10 bg-primary flex items-center justify-center rounded">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#0f2233"
              strokeWidth="3"
              strokeLinecap="square"
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
          </div>
          <span className="text-base sm:text-xl font-bold tracking-tight uppercase">
            NorthStar <span className="text-primary">Express</span>
          </span>
        </Link>

        <div className="flex items-center gap-6 text-[13px] font-bold tracking-wider uppercase">
          <Link href="/" className="hover:text-primary transition-colors">
            News
          </Link>
        </div>
      </div>
    </nav>
  )
}
