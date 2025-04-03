"use client"

import { ChevronDown, Cpu, Briefcase, GraduationCap, Sparkles } from "lucide-react"
import type { Event } from "@/types/event"
import EventItem from "./event-item"
import { motion, AnimatePresence } from "framer-motion"

interface CategoryDropdownProps {
  id: string
  title: string
  events: Event[]
  bgGradient: string
  accentColor: string
  icon: "cpu" | "briefcase" | "graduation-cap" | "sparkles"
  isExpanded: boolean
  onToggle: () => void
}

export default function CategoryDropdown({
  id,
  title,
  events,
  bgGradient,
  accentColor,
  icon,
  isExpanded,
  onToggle,
}: CategoryDropdownProps) {
  const renderIcon = () => {
    switch (icon) {
      case "cpu":
        return <Cpu className="h-5 w-5 mr-3" />
      case "briefcase":
        return <Briefcase className="h-5 w-5 mr-3" />
      case "graduation-cap":
        return <GraduationCap className="h-5 w-5 mr-3" />
      case "sparkles":
        return <Sparkles className="h-5 w-5 mr-3" />
      default:
        return null
    }
  }

  return (
    <div className="rounded-xl overflow-hidden shadow-xl border border-slate-700 backdrop-blur-sm bg-opacity-20 bg-black relative group">
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

      <motion.div
        className={`bg-gradient-to-r ${bgGradient} p-5 cursor-pointer relative overflow-hidden`}
        onClick={onToggle}
        whileHover={{ scale: 1.005 }}
        whileTap={{ scale: 0.995 }}
        transition={{ duration: 0.2 }}
      >
        <div className="absolute inset-0 bg-[url('/circuit.svg')] bg-no-repeat bg-right opacity-10"></div>
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-slate-800/50 flex items-center justify-center mr-4 backdrop-blur-sm">
              {renderIcon()}
            </div>
            <h2 className="text-xl font-bold text-white tracking-wide">{title}</h2>
          </div>
          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.4, type: "spring", stiffness: 200 }}
            className="w-8 h-8 rounded-full bg-slate-800/50 flex items-center justify-center backdrop-blur-sm"
          >
            <ChevronDown className="h-5 w-5 text-cyan-300" />
          </motion.div>
        </div>
      </motion.div>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
            className="overflow-hidden"
          >
            <div className="bg-slate-800/70 backdrop-blur-md p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 relative">
              <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-5 pointer-events-none"></div>
              {events.map((event) => (
                <EventItem key={event.id} event={event} accentColor={accentColor} />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

