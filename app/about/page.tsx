'use client'

import Link from 'next/link'

export default function About() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 relative overflow-hidden py-20">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl">
        <div className="mb-8 animate-fade-in">
          <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            About Us
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            We're building beautiful, modern web experiences that inspire and engage.
          </p>
        </div>

        {/* Mission Section */}
        <div className="mb-12 animate-fade-in-delay">
          <h2 className="text-3xl font-bold mb-4 text-white">Our Mission</h2>
          <p className="text-gray-300 leading-relaxed text-lg mb-6">
            Hello World started as a simple idea: create stunning landing pages that are easy to build, deploy, and customize. We believe that great design and performance shouldn't require complex setup or expensive tools.
          </p>
          <p className="text-gray-300 leading-relaxed text-lg">
            Every project we build is optimized for speed, accessibility, and user experience. From the first pixel to the final deployment, we care about quality.
          </p>
        </div>

        {/* Values Section */}
        <div className="mb-12 animate-fade-in-delay">
          <h2 className="text-3xl font-bold mb-6 text-white">Our Values</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: 'Speed', desc: 'Fast load times and quick deployments for modern users' },
              { title: 'Design', desc: 'Beautiful, accessible interfaces that users love' },
              { title: 'Simplicity', desc: 'Easy to use, easy to customize, easy to launch' },
              { title: 'Quality', desc: 'High standards in code, performance, and user experience' },
            ].map((value, idx) => (
              <div
                key={idx}
                className="p-6 rounded-lg bg-slate-800 bg-opacity-50 backdrop-blur border border-slate-700 hover:border-purple-500 transition"
              >
                <h3 className="text-xl font-semibold mb-2 text-purple-300">{value.title}</h3>
                <p className="text-gray-400">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack */}
        <div className="mb-12 animate-fade-in-delay">
          <h2 className="text-3xl font-bold mb-4 text-white">Built With Modern Tech</h2>
          <div className="p-6 rounded-lg bg-slate-800 bg-opacity-50 backdrop-blur border border-slate-700">
            <p className="text-gray-300 mb-3">We use cutting-edge technologies to deliver the best experience:</p>
            <ul className="text-gray-400 space-y-2 ml-4">
              <li>• <span className="text-purple-300">Next.js 14</span> - React framework for production</li>
              <li>• <span className="text-purple-300">Tailwind CSS</span> - Utility-first styling</li>
              <li>• <span className="text-purple-300">TypeScript</span> - Type-safe development</li>
              <li>• <span className="text-purple-300">Vercel</span> - Lightning-fast global deployment</li>
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center pt-8 border-t border-slate-700 animate-fade-in-delay">
          <p className="text-gray-400 mb-6">Ready to get started?</p>
          <Link
            href="/"
            className="inline-block px-8 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 font-semibold transition transform hover:scale-105"
          >
            Back to Home
          </Link>
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