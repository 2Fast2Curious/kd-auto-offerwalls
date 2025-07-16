"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowRight } from "lucide-react"

export default function OfferwallForm() {
  const [selectedOption, setSelectedOption] = useState<string>("")
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (selectedOption) {
      // In a real implementation, you would pass the selected option to the results page
      router.push(`/results?option=${selectedOption}`)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-6">
        <Select onValueChange={setSelectedOption} value={selectedOption}>
          <SelectTrigger className="w-full h-12 border-gray-300">
            <SelectValue placeholder="Select an option" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="1">1</SelectItem>
            <SelectItem value="2">2</SelectItem>
            <SelectItem value="3">3</SelectItem>
            <SelectItem value="4">4</SelectItem>
            <SelectItem value="5">5</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <button
        type="submit"
        disabled={!selectedOption}
        className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Get My Free Quotes <ArrowRight className="ml-2" size={18} />
      </button>
    </form>
  )
}
