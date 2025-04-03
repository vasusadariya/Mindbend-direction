"use client"

import { useState } from "react"
import type { Event } from "@/types/event"
import EventCard from "./event-card"

interface EventSectionProps {
  title: string
  events: Event[]
  bgColor: string
}

export default function EventSection({ title, events, bgColor }: EventSectionProps) {
  const [expandedEvent, setExpandedEvent] = useState<string | null>(null)

  const toggleEvent = (eventId: string) => {
    if (expandedEvent === eventId) {
      setExpandedEvent(null)
    } else {
      setExpandedEvent(eventId)
    }
  }

  // Create an ID for the section based on the title
  const sectionId = title.toLowerCase().replace(/\s+/g, "-")

  return (
    <section id={sectionId} className="scroll-mt-16">
      <div className={`rounded-xl overflow-hidden shadow-lg bg-gradient-to-br ${bgColor}`}>
        <div className="p-4 md:p-6">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center">{title}</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {events.map((event) => (
              <EventCard
                key={event.id}
                event={event}
                isExpanded={expandedEvent === event.id}
                onToggle={() => toggleEvent(event.id)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

