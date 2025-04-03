"use client"

import type React from "react"

import { ChevronDown, ChevronUp, MapPin, Clock } from "lucide-react"
import type { Event } from "@/types/event"

interface EventCardProps {
  event: Event
  isExpanded: boolean
  onToggle: () => void
}

export default function EventCard({ event, isExpanded, onToggle }: EventCardProps) {
  const handleLocationClick = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (event.locationUrl) {
      window.open(event.locationUrl, "_blank")
    }
  }

  return (
    <div className="relative">
      <div
        className={`
          bg-sky-200 rounded-lg p-3 cursor-pointer transition-all duration-200
          hover:bg-sky-300 hover:shadow-md
          ${isExpanded ? "shadow-md" : ""}
        `}
        onClick={onToggle}
      >
        <div className="flex justify-between items-center">
          <h3 className="font-bold text-gray-800 text-sm md:text-base">{event.name}</h3>
          {isExpanded ? (
            <ChevronUp className="h-4 w-4 text-gray-600 flex-shrink-0" />
          ) : (
            <ChevronDown className="h-4 w-4 text-gray-600 flex-shrink-0" />
          )}
        </div>

        {isExpanded && (
          <div className="mt-2 space-y-2 text-gray-700 text-sm">
            <p className="text-xs md:text-sm">{event.description}</p>

            <div className="flex items-center text-xs md:text-sm">
              <Clock className="h-3 w-3 mr-1 flex-shrink-0" />
              <span>{event.time}</span>
            </div>

            <div
              className="flex items-center text-xs md:text-sm text-blue-600 hover:text-blue-800 cursor-pointer"
              onClick={handleLocationClick}
            >
              <MapPin className="h-3 w-3 mr-1 flex-shrink-0" />
              <span className="underline">{event.location}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

