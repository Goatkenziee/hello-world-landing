'use client'

import { useState } from 'react'

export default function Home() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubmitted(true)
      setEmail('')
      setTimeout(() => setSubmitted(false), 3000)
    }
  }

  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-3xl">
        <div className="mb-8 animate-fade-in">
          <h1 className="text-7xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Hello World
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
            Welcome to your beautiful landing page. Start here, build something amazing.
          </p>
        </div>

        {/* CTA Section */}
        <div className="mb-12 animate-fade-in-delay">
          <p className="text-gray-400 mb-6">Get started with just your email</p>
          <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-3 justify-center mb-8">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              required
              className="px-6 py-3 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition md:w-64"
            />
            <button
              type="submit"
              className="px-8 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 font-semibold transition transform hover:scale-105 whitespace-nowrap"
            >
              Get Started
            </button>
          </form>
          {submitted && (
            <div className="text-green-400 text-center animate-pulse">
              ✓ Thanks! We'll be in touch soon.
            </div>
          )}
        </div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-3 gap-6 mt-16">
          {[
            { icon: '⚡', title: 'Lightning Fast', desc: 'Built for speed and performance' },
            { icon: '🎨', title: 'Beautiful Design', desc: 'Modern, clean, and responsive' },
            { icon: '🚀', title: 'Ready to Launch', desc: 'Deploy in seconds' },
          ].map((feature, idx) => (
            <div
              key={idx}
              className="p-6 rounded-lg bg-slate-800 bg-opacity-50 backdrop-blur border border-slate-700 hover:border-purple-500 transition"
            >
              <div className="text-4xl mb-3">{feature.icon}</div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400 text-sm">{feature.desc}</p>
            </div>
          ))}
        </div>

        {/* Footer CTA */}
        <div className="mt-16 pt-8 border-t border-slate-700">
          <p className="text-gray-500 text-sm">
            Built with Next.js, Tailwind CSS & deployed on Vercel
          </p>
        </div>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        .animate-fade-in {
          animation: fadeIn 0.8s ease-out;
        }
        .animate-fade-in-delay {
          animation: fadeIn 0.8s ease-out 0.2s both;
        }
      `}</style>
    </main>
  )
}