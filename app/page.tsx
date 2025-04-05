"use client"

import { useState } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import CategoryDropdown from "@/components/category-dropdown"
import { technicalEvents, managerialEvents, workshops, specialEvents, food } from "@/data/events"

export default function Home() {
  // Track which category is currently expanded
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null)

  const handleToggleCategory = (categoryId: string) => {
    if (expandedCategory === categoryId) {
      setExpandedCategory(null)
    } else {
      setExpandedCategory(categoryId)
    }
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-10 pointer-events-none"></div>
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8 relative z-10">
        <div className="space-y-6">
          <CategoryDropdown
            id="technical"
            title="Technical Events"
            events={technicalEvents}
            bgGradient="from-cyan-900 to-blue-900"
            accentColor="border-cyan-500"
            icon="cpu"
            isExpanded={expandedCategory === "technical"}
            onToggle={() => handleToggleCategory("technical")}
          />

          <CategoryDropdown
            id="managerial"
            title="Managerial Events"
            events={managerialEvents}
            bgGradient="from-blue-900 to-indigo-900"
            accentColor="border-blue-500"
            icon="briefcase"
            isExpanded={expandedCategory === "managerial"}
            onToggle={() => handleToggleCategory("managerial")}
          />

          <CategoryDropdown
            id="workshops"
            title="Workshops"
            events={workshops}
            bgGradient="from-indigo-900 to-violet-900"
            accentColor="border-indigo-500"
            icon="graduation-cap"
            isExpanded={expandedCategory === "workshops"}
            onToggle={() => handleToggleCategory("workshops")}
          />

          <CategoryDropdown
            id="mega"
            title="Mega Events"
            events={specialEvents}
            bgGradient="from-violet-900 to-purple-900"
            accentColor="border-violet-500"
            icon="sparkles"
            isExpanded={expandedCategory === "mega"}
            onToggle={() => handleToggleCategory("mega")}
          />
          <CategoryDropdown
            id="food"
            title="Food And Drinks"
            events={food}
            bgGradient="from-violet-900 to-purple-900"
            accentColor="border-violet-500"
            icon="sparkles"
            isExpanded={expandedCategory === "food"}
            onToggle={() => handleToggleCategory("food")}
          />
        </div>
      </main>
      <Footer />
    </div>
  )
}

