import type { Metadata } from 'next'
import Link from 'next/link'
import './globals.css'

export const metadata: Metadata = {
  title: 'Hello World',
  description: 'A beautiful hello world landing page',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
        {/* Navigation Header */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900 bg-opacity-80 backdrop-blur border-b border-slate-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <Link href="/" className="flex items-center space-x-2">
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  HW
                </span>
              </Link>
              <div className="flex items-center space-x-8">
                <Link
                  href="/"
                  className="text-gray-300 hover:text-white transition font-medium"
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  className="text-gray-300 hover:text-white transition font-medium"
                >
                  About
                </Link>
              </div>
            </div>
          </div>
        </nav>

        {/* Main content with padding for fixed navbar */}
        <div className="pt-16">
          {children}
        </div>
      </body>
    </html>
  )
}