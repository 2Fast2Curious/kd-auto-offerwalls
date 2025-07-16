"use client"

import type React from "react"

import { useState } from "react"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Phone } from "lucide-react"
import { useRouter } from "next/navigation"
import LoadingScreen from "@/components/loading-screen"

export default function Home() {
  const [selectedOption, setSelectedOption] = useState<string>("")
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (selectedOption) {
      setIsLoading(true)
      // Simulate loading time
      setTimeout(() => {
        router.push(`/offerwall/${selectedOption}`)
      }, 2000)
    }
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {isLoading && <LoadingScreen />}

      {/* Header */}
      <header className="bg-white py-3 px-4 shadow-sm">
        <div className="container mx-auto flex justify-between items-center">
          <div className="relative h-12 w-48">
            <Image
              src="/images/logo.png"
              alt="QualifyAuto.com Logo"
              fill
              className="object-contain object-left"
              priority
            />
          </div>
          <div className="text-right">
            <p className="text-xs text-gray-600">CALL TOLL-FREE M-F 7AM-7PM CST</p>
            <a href="tel:18445541262" className="text-[#2048A8] font-bold text-lg flex items-center justify-end gap-1">
              <Phone size={16} className="text-[#2048A8]" />
              1-844-554-1262 <span className="font-normal">(TTY 711)</span>
            </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto bg-white rounded-md shadow-lg border border-gray-200 overflow-hidden">
          {/* Status Message and Progress Bar */}
          <div>
            <div className="bg-gray-100 py-2 px-4 border-b">
              <p className="text-center text-sm text-gray-700">
                You've been matched with providers ready to lower your auto insurance rate.
              </p>
            </div>
            <div className="bg-gray-200 h-2 relative">
              <div className="bg-[#2048A8] h-full w-[50%]"></div>
            </div>
          </div>

          {/* Form Content */}
          <form onSubmit={handleSubmit} className="p-8">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold mb-2">What Offerwall Page Would You Like To View?</h2>
              <p className="text-gray-600 text-sm">Personal information is safe & secure.</p>
            </div>

            <div className="mb-6">
              <Select value={selectedOption} onValueChange={setSelectedOption}>
                <SelectTrigger className="w-full h-12 border-gray-300">
                  <SelectValue placeholder="Select an option" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">1 - Current Qualify Auto</SelectItem>
                  <SelectItem value="2">2 - Proposed Qualify Auto</SelectItem>
                  <SelectItem value="3">3 - Proposed Qualify Auto Short</SelectItem>
                  <SelectItem value="4">4 - Proposed Quality Auto Short Hue</SelectItem>
                  <SelectItem value="5">5 - Wildcard</SelectItem>
                  <SelectItem value="6">6 - QualifyAuto highlight First Placement</SelectItem>
                  <SelectItem value="7">7 - QualifyAuto highlight First Placement 2</SelectItem>
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
        </div>

        {/* Legal Text */}
        <div className="max-w-2xl mx-auto mt-4 text-xs text-gray-600 leading-tight">
          <p>
            By clicking 'Get My Free Quotes', I provide my eSign Act Electronic Signature and authorize you to share my
            information with one or more companies (and their agents) on your{" "}
            <Link href="#" className="text-[#2048A8]">
              Partners
            </Link>{" "}
            list, so they may process and respond to my request and contact me for marketing/telemarketing purposes at
            the number, address and email address I have provided, including my wireless number if provided, using live
            operators, automatic telephone dialing system and artificial or prerecorded voice messages, text messages
            and/or emails. These communications may occur at varying frequencies using the contact information I
            provided. This authorization overrides any previous registration on a federal, state, or corporate Do Not
            Call Registry or any privacy or solicitation preference I have previously expressed. I understand that my
            consent is not required to purchase goods or services and can be revoked at any time by contacting{" "}
            <Link href="mailto:support@qualifiedinsurance.com" className="text-[#2048A8]">
              support@qualifiedinsurance.com
            </Link>
            . Additionally, I acknowledge that my wireless carrier may impose charges for these communications, and I
            accept responsibility for any applicable fees. I also understand that this is a solicitation for insurance
            and I expressly consent to this website's{" "}
            <Link href="#" className="text-[#2048A8]">
              Privacy Policy
            </Link>{" "}
            and{" "}
            <Link href="#" className="text-[#2048A8]">
              Terms of Use
            </Link>
            .
          </p>
        </div>
      </main>
    </div>
  )
}
