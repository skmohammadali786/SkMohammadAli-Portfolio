import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4 text-center">
      <div className="mx-auto max-w-md">
        <h2 className="mb-4 text-8xl font-bold text-white/10">404</h2>
        <h1 className="mb-4 text-2xl font-bold text-white sm:text-3xl">Page Not Found</h1>
        <p className="mb-8 text-base text-[#B3B3B3] sm:text-lg">
          Sorry, the page you are looking for doesn't exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 font-bold text-black transition-all hover:scale-105 active:scale-95"
        >
          <ArrowLeft size={20} />
          Return Home
        </Link>
      </div>
    </div>
  )
}
