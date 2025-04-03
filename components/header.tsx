"use client"

import { motion } from "framer-motion"

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white shadow-lg border-b border-slate-700 relative z-20">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10 pointer-events-none"></div>
      <div className="container mx-auto px-4 py-5">
        <div className="flex items-center justify-between">
          <motion.div
            className="flex items-center"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-full flex items-center justify-center mr-3 shadow-lg relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('/circuit-small.svg')] bg-center opacity-30"></div>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-6 h-6 text-white relative z-10"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                <path d="M2 17l10 5 10-5" />
                <path d="M2 12l10 5 10-5" />
              </svg>
            </div>
          </motion.div>

          <motion.div
            className="text-3xl font-bold tracking-tight text-center"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500">
              MINDBEND 2025
            </span>
          </motion.div>

          <motion.div
            className="w-12 h-12 opacity-0"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 0, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Empty div for centering */}
          </motion.div>
        </div>
      </div>
    </header>
  )
}

