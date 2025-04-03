"use client"

import { motion } from "framer-motion"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white py-4 border-t border-slate-700 relative z-20">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10 pointer-events-none"></div>
      <div className="container mx-auto px-4">
        <motion.div
          className="flex flex-col sm:flex-row justify-between items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-sm text-slate-400 mb-2 sm:mb-0 hover:text-cyan-400 transition-colors duration-300">
            © 2025 MINDBEND. All rights reserved.
          </div>
          <div className="text-sm text-slate-400 hover:text-cyan-400 transition-colors duration-300">
            mindbend-svnit.com
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

