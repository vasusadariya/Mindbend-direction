"use client"

import type React from "react"

import { useState } from "react"
import { MapPin, Clock, ExternalLink } from "lucide-react"
import type { Event } from "@/types/event"
import { motion, AnimatePresence } from "framer-motion"

interface EventItemProps {
  event: Event
  accentColor: string
}

export default function EventItem({ event, accentColor }: EventItemProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded)
  }

  const handleLocationClick = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (event.locationUrl) {
      window.open(event.locationUrl, "_blank")
    }
  }

  return (
    <motion.div
      className={`relative rounded-lg overflow-hidden backdrop-blur-sm bg-opacity-30 bg-black border ${accentColor} shadow-lg group`}
      whileHover={{
        scale: 1.02,
        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.1)",
      }}
      transition={{ duration: 0.3 }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

      <motion.div
        className="p-4 cursor-pointer bg-gradient-to-r from-slate-800 to-slate-700 hover:from-slate-700 hover:to-slate-600 transition-all duration-300"
        onClick={toggleExpanded}
        whileTap={{ scale: 0.98 }}
      >
        <div className="flex justify-between items-center">
          <h3 className="font-medium text-white tracking-wide">{event.name}</h3>
          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.3, type: "spring", stiffness: 200 }}
            className="w-6 h-6 rounded-full bg-slate-800/70 flex items-center justify-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-cyan-300"
            >
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </motion.div>
        </div>
      </motion.div>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
            className="overflow-hidden"
          >
            <div className="bg-slate-900/90 backdrop-blur-md p-4 border-t border-slate-700">
              <div className="space-y-3 text-sm">
                <motion.div
                  className="flex items-center text-slate-300"
                  initial={{ x: -10, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.1 }}
                >
                  <Clock className="h-4 w-4 mr-2 text-cyan-400" />
                  <span>{event.time}</span>
                </motion.div>

                <motion.button
                  className="flex items-center w-full text-left text-slate-300 hover:text-white cursor-pointer group/btn bg-slate-800/50 rounded-md p-2 transition-all duration-300 hover:bg-slate-700/50"
                  onClick={handleLocationClick}
                  initial={{ x: -10, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  whileHover={{ scale: 1.01 }}
                >
                  <MapPin className="h-4 w-4 mr-2 text-cyan-400 group-hover/btn:text-cyan-300 transition-colors" />
                  <span className="flex-1">{event.location}</span>
                  <ExternalLink className="h-3 w-3 text-slate-500 group-hover/btn:text-cyan-300 transition-colors" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

