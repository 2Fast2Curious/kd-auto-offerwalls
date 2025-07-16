"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Phone, Check, Star, Trophy } from "lucide-react"
import { useState, useEffect } from "react"

export default function OfferwallPage({ params }: { params: { option: string } }) {
  // This would be dynamic in a real application
  const userName = "John"

  // Counter state for Options 2, 3, and 4
  const [count, setCount] = useState(1000)

  // Live quotes data for cycling animation (Option 5)
  const liveQuotes = [
    { name: "Sarah M.", model: "Audi", state: "FL", rate: "$29/mo" },
    { name: "Mike R.", model: "Subaru", state: "IA", rate: "$16/mo" },
    { name: "Jessica L.", model: "Tesla", state: "AZ", rate: "$33/mo" },
    { name: "David K.", model: "Cadillac", state: "NV", rate: "$23/mo" },
    { name: "Amanda T.", model: "BMW", state: "IL", rate: "$18/mo" },
    { name: "Chris B.", model: "Honda", state: "TX", rate: "$21/mo" },
    { name: "Lisa W.", model: "Toyota", state: "CA", rate: "$27/mo" },
    { name: "Ryan P.", model: "Ford", state: "NY", rate: "$19/mo" },
  ]

  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0)

  // Testimonials for Option 5
  const option5Testimonials = [
    {
      name: "Jennifer K.",
      text: "Saved $180/month switching to Progressive!",
      image: "/placeholder.svg?height=40&width=40",
    },
    {
      name: "Mark D.",
      text: "Best rates I've found in years. Highly recommend!",
      image: "/placeholder.svg?height=40&width=40",
    },
    {
      name: "Rachel S.",
      text: "Quick quote process and amazing savings.",
      image: "/placeholder.svg?height=40&width=40",
    },
    {
      name: "Tom B.",
      text: "Cut my insurance costs in half with Progressive.",
      image: "/placeholder.svg?height=40&width=40",
    },
  ]

  // Initialize counter effect for Options 2, 3, and 4, 6, and 7
  useEffect(() => {
    if (
      params.option === "2" ||
      params.option === "3" ||
      params.option === "4" ||
      params.option === "6" ||
      params.option === "7"
    ) {
      const interval = setInterval(() => {
        setCount((prevCount) => {
          // Increment by a random number between 1-3
          const increment = Math.floor(Math.random() * 3) + 1
          return prevCount + increment
        })
      }, 2000) // Update every 2 seconds

      return () => clearInterval(interval)
    }
  }, [params.option])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuoteIndex((prevIndex) => (prevIndex + 1) % liveQuotes.length)
    }, 2000) // Change every 2 seconds

    return () => clearInterval(interval)
  }, [liveQuotes.length])

  // Option 5 - Wildcard (Clean Progressive-style card with dark blue first card)
  if (params.option === "5") {
    return (
      <div className="min-h-screen bg-gray-100">
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
              <a
                href="tel:18449332220"
                className="text-[#2048A8] font-bold text-lg flex items-center justify-end gap-1"
              >
                <Phone size={16} className="text-[#2048A8]" />
                1-844-933-2220 <span className="font-normal">(TTY 711)</span>
              </a>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="container mx-auto px-4 py-12">
          <div className="max-w-md mx-auto space-y-6">
            {/* First Offer Card - Lighter Dark Blue Theme */}
            <div className="bg-blue-700 rounded-lg shadow-lg border-2 border-yellow-400 overflow-hidden relative">
              {/* Yellow/Gold Trophy Badge */}
              <div className="absolute top-4 left-4 bg-yellow-500 rounded-full w-8 h-8 flex items-center justify-center z-10">
                <Trophy className="h-4 w-4 text-yellow-900" />
              </div>

              {/* Card Content */}
              <div className="p-8 pt-16">
                {/* 5 Star Rating */}
                <div className="flex justify-center mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                    <span className="ml-2 text-xs text-gray-300">(4.9/5)</span>
                  </div>
                </div>

                {/* Progressive Logo */}
                <div className="flex justify-center mb-6">
                  <div className="relative h-12 w-40">
                    <Image src="/images/blue-background.gif" alt="Progressive" fill className="object-contain" />
                  </div>
                </div>

                {/* Headline */}
                <div className="text-center mb-4">
                  <h2 className="text-xl font-semibold text-white mb-3">
                    Perfect timing! We've lowered rates in Florida
                  </h2>

                  {/* Website Link */}
                  <Link href="https://www.progressive.com" target="_blank" rel="noopener noreferrer">
                    <span className="text-blue-300 hover:text-blue-200 text-sm underline">www.progressive.com</span>
                  </Link>
                </div>

                {/* Benefits List */}
                <div className="space-y-3 mb-8">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-gray-300 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-sm text-white">Get a customized quote today and see what you could save</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-gray-300 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-sm text-white">
                      Fast, easy and reliable claims service available 24 hours a day
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-gray-300 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-sm text-white">Trusted by millions of drivers to insure what's important</p>
                  </div>
                </div>

                {/* CTA Button - Yellow with Dark Gray Text */}
                <div>
                  <Link href="https://www.progressive.com" target="_blank" rel="noopener noreferrer">
                    <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-800 py-3 px-6 rounded-md font-medium text-sm">
                      View My Quote
                    </button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Live Quotes Chart with Integrated Testimonial - Between Cards */}
            <div className="bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden">
              <div className="p-6">
                <div className="text-center mb-4">
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">Live Quotes</h3>
                  <p className="text-sm text-gray-600">Real-time rates from customers like you</p>
                </div>
                <div className="grid grid-cols-4 gap-3 text-sm text-gray-700 mb-3 font-medium">
                  <div>Name</div>
                  <div>Model</div>
                  <div>State</div>
                  <div>Rate</div>
                </div>
                <div className="space-y-2 mb-6">
                  {liveQuotes.slice(currentQuoteIndex, currentQuoteIndex + 4).map((quote, index) => (
                    <div
                      key={index}
                      className={`grid grid-cols-4 gap-3 text-sm py-3 px-3 rounded transition-all duration-500 ${
                        index === 0 ? "bg-green-50 border border-green-200 text-green-800" : "text-gray-700 bg-gray-50"
                      }`}
                    >
                      <div className="truncate font-medium">{quote.name}</div>
                      <div>{quote.model}</div>
                      <div>{quote.state}</div>
                      <div className="font-semibold">{quote.rate}</div>
                    </div>
                  ))}
                </div>

                {/* Integrated Testimonial */}
                <div className="border-t pt-4">
                  <div className="bg-blue-50 rounded-lg p-4">
                    <div className="flex items-start gap-3">
                      <div className="relative h-12 w-12 rounded-full overflow-hidden flex-shrink-0">
                        <Image
                          src={
                            option5Testimonials[currentQuoteIndex % option5Testimonials.length].image ||
                            "/placeholder.svg" ||
                            "/placeholder.svg" ||
                            "/placeholder.svg" ||
                            "/placeholder.svg" ||
                            "/placeholder.svg" ||
                            "/placeholder.svg" ||
                            "/placeholder.svg" ||
                            "/placeholder.svg" ||
                            "/placeholder.svg" ||
                            "/placeholder.svg"
                          }
                          alt={option5Testimonials[currentQuoteIndex % option5Testimonials.length].name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        {/* 5 Star Rating */}
                        <div className="flex items-center gap-1 mb-2">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                        <p className="text-sm text-gray-800 mb-2 italic">
                          "{option5Testimonials[currentQuoteIndex % option5Testimonials.length].text}"
                        </p>
                        <p className="text-xs text-gray-600 font-medium">
                          - {option5Testimonials[currentQuoteIndex % option5Testimonials.length].name}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="text-center mt-4">
                  <p className="text-xs text-gray-500">Updates every few seconds with new quotes</p>
                </div>
              </div>
            </div>

            {/* Second Offer Card - Original White Theme */}
            <div className="bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden relative">
              {/* Card Content */}
              <div className="p-8">
                {/* Progressive Logo */}
                <div className="flex justify-center mb-6">
                  <div className="relative h-12 w-40">
                    <Image src="/images/blue-background.gif" alt="Progressive" fill className="object-contain" />
                  </div>
                </div>

                {/* Headline */}
                <div className="text-center mb-4">
                  <h2 className="text-xl font-semibold text-gray-900 mb-3">
                    Perfect timing! We've lowered rates in Florida
                  </h2>

                  {/* Website Link */}
                  <Link href="https://www.progressive.com" target="_blank" rel="noopener noreferrer">
                    <span className="text-blue-600 hover:text-blue-800 text-sm underline">www.progressive.com</span>
                  </Link>
                </div>

                {/* Benefits List */}
                <div className="space-y-3 mb-8">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-sm text-gray-700">Get a customized quote today and see what you could save</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-sm text-gray-700">
                      Fast, easy and reliable claims service available 24 hours a day
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-sm text-gray-700">Trusted by millions of drivers to insure what's important</p>
                  </div>
                </div>

                {/* CTA Button - Original Green */}
                <div>
                  <Link href="https://www.progressive.com" target="_blank" rel="noopener noreferrer">
                    <button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-md font-medium text-sm">
                      View My Quote
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    )
  }

  // Option 4 - Proposed Quality Auto Short Hue (New design with green/blue theme)
  if (params.option === "4") {
    const testimonials = [
      {
        name: "Sarah K.",
        text: "I dropped my auto rate from $225/mo to $69/mo in just 30 seconds",
        image: "/placeholder.svg?height=40&width=40",
      },
      {
        name: "Mike R.",
        text: "I dropped my auto rate from $189/mo to $52/mo in just 30 seconds",
        image: "/placeholder.svg?height=40&width=40",
      },
      {
        name: "Jessica M.",
        text: "I dropped my auto rate from $267/mo to $78/mo in just 30 seconds",
        image: "/placeholder.svg?height=40&width=40",
      },
      {
        name: "David L.",
        text: "I dropped my auto rate from $198/mo to $61/mo in just 30 seconds",
        image: "/placeholder.svg?height=40&width=40",
      },
      {
        name: "Amanda T.",
        text: "I dropped my auto rate from $234/mo to $71/mo in just 30 seconds",
        image: "/placeholder.svg?height=40&width=40",
      },
      {
        name: "Chris B.",
        text: "I dropped my auto rate from $156/mo to $48/mo in just 30 seconds",
        image: "/placeholder.svg?height=40&width=40",
      },
    ]

    return (
      <div className="min-h-screen bg-gray-100">
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
              <a
                href="tel:18449332220"
                className="text-[#2048A8] font-bold text-lg flex items-center justify-end gap-1"
              >
                <Phone size={16} className="text-[#2048A8]" />
                1-844-933-2220 <span className="font-normal">(TTY 711)</span>
              </a>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="container mx-auto px-4 py-12">
          <div className="max-w-2xl mx-auto">
            {/* First Offer Block - Recommended with green border and background */}
            <div className="bg-white rounded-lg shadow-lg border-2 border-green-600 overflow-hidden mb-6">
              {/* Green Recommended Banner */}
              <div className="bg-green-600 text-white py-2 px-4 flex items-center justify-center">
                <Star className="h-4 w-4 mr-2 fill-white" />
                <span className="text-sm font-medium">Recommended For You</span>
              </div>

              {/* Content with very faint green background */}
              <div className="p-6 bg-green-50">
                <div className="flex justify-center mb-4">
                  <div className="relative h-20 w-56">
                    <Image src="/images/blue-background.gif" alt="Insurance Provider" fill className="object-contain" />
                  </div>
                </div>

                {/* 5 Star Rating */}
                <div className="flex justify-center mb-6">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                    <span className="ml-2 text-sm text-gray-600">(4.9/5)</span>
                  </div>
                </div>

                <div className="text-center mb-6">
                  <h2 className="text-lg font-semibold text-green-600 mb-4">
                    Perfect timing! We've lowered rates in Florida
                  </h2>
                </div>

                {/* CTA Button with larger notification */}
                <div className="relative mb-4">
                  <Link href="https://www.progressive.com" target="_blank" rel="noopener noreferrer">
                    <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium animate-pulse-custom">
                      View My Rates
                    </button>
                  </Link>
                  <div className="absolute -top-3 -right-3 bg-orange-500 rounded-full w-8 h-8 flex items-center justify-center">
                    <span className="text-white text-sm font-bold">1</span>
                  </div>
                </div>

                {/* Claim lowest rates link */}
                <div className="text-center">
                  <Link href="https://www.progressive.com" target="_blank" rel="noopener noreferrer">
                    <span className="text-sm text-blue-600 hover:text-blue-800 underline cursor-pointer">
                      Claim the lowest rates now {">>"}
                    </span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Scrolling Testimonials */}
            <div className="mb-6 overflow-hidden">
              <div className="flex animate-scroll space-x-6 py-4">
                {/* Duplicate testimonials for seamless loop */}
                {[...testimonials, ...testimonials].map((testimonial, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 bg-white rounded-lg shadow-sm border border-gray-200 p-4 w-80"
                  >
                    <div className="flex items-start gap-3">
                      <div className="relative h-10 w-10 rounded-full overflow-hidden flex-shrink-0">
                        <Image
                          src={testimonial.image || "/placeholder.svg"}
                          alt={testimonial.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-gray-800 mb-2">"{testimonial.text}"</p>
                        <p className="text-xs text-gray-600 font-medium">- {testimonial.name}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Second Offer Block - Plain white background, no green styling */}
            <div className="bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden">
              {/* Content with white background */}
              <div className="p-6 bg-white">
                <div className="flex justify-center mb-6">
                  <div className="relative h-20 w-56">
                    <Image src="/images/blue-background.gif" alt="Insurance Provider" fill className="object-contain" />
                  </div>
                </div>

                <div className="text-center mb-6">
                  <h2 className="text-lg font-semibold text-gray-800 mb-4">
                    Perfect timing! We've lowered rates in Florida
                  </h2>
                </div>

                {/* CTA Button */}
                <div>
                  <Link href="https://www.progressive.com" target="_blank" rel="noopener noreferrer">
                    <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium">
                      View My Rates
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </main>

        <style jsx>{`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          .animate-scroll {
            animation: scroll 30s linear infinite;
          }
        `}</style>
      </div>
    )
  }

  // Option 3 - Proposed Qualify Auto Short (Two blocks, no checklist, larger logo)
  if (params.option === "3") {
    const testimonials = [
      {
        name: "Sarah K.",
        text: "I dropped my auto rate from $225/mo to $69/mo in just 30 seconds",
        image: "/placeholder.svg?height=40&width=40",
      },
      {
        name: "Mike R.",
        text: "I dropped my auto rate from $189/mo to $52/mo in just 30 seconds",
        image: "/placeholder.svg?height=40&width=40",
      },
      {
        name: "Jessica M.",
        text: "I dropped my auto rate from $267/mo to $78/mo in just 30 seconds",
        image: "/placeholder.svg?height=40&width=40",
      },
      {
        name: "David L.",
        text: "I dropped my auto rate from $198/mo to $61/mo in just 30 seconds",
        image: "/placeholder.svg?height=40&width=40",
      },
      {
        name: "Amanda T.",
        text: "I dropped my auto rate from $234/mo to $71/mo in just 30 seconds",
        image: "/placeholder.svg?height=40&width=40",
      },
      {
        name: "Chris B.",
        text: "I dropped my auto rate from $156/mo to $48/mo in just 30 seconds",
        image: "/placeholder.svg?height=40&width=40",
      },
    ]

    return (
      <div className="min-h-screen bg-gray-100">
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
              <a
                href="tel:18449332220"
                className="text-[#2048A8] font-bold text-lg flex items-center justify-end gap-1"
              >
                <Phone size={16} className="text-[#2048A8]" />
                1-844-933-2220 <span className="font-normal">(TTY 711)</span>
              </a>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="container mx-auto px-4 py-12">
          <div className="max-w-2xl mx-auto">
            {/* First Offer Block - Recommended */}
            <div className="bg-white rounded-md shadow-lg border-2 border-[#2048A8] overflow-hidden p-8 mb-6 relative">
              {/* Recommended Banner */}
              <div className="absolute top-0 left-0 right-0 bg-[#2048A8] text-white py-1 px-4 flex items-center justify-center">
                <Check className="h-4 w-4 mr-1" />
                <span className="text-sm font-medium">Recommended for you</span>
              </div>

              {/* Content with extra padding for the banner */}
              <div className="pt-6">
                <div className="flex justify-center mb-6">
                  <div className="relative h-24 w-64">
                    <Image src="/images/blue-background.gif" alt="Insurance Provider" fill className="object-contain" />
                  </div>
                </div>

                <div className="text-center mb-6">
                  <h2 className="text-3xl mb-2">Perfect timing! We've lowered rates in Florida</h2>
                </div>

                {/* CTA Button with notification and pulsating effect */}
                <div className="relative mb-6">
                  <Link href="https://www.progressive.com" target="_blank" rel="noopener noreferrer">
                    <button className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded flex items-center justify-center animate-pulse-custom">
                      View My Rates <ArrowRight className="ml-2" size={18} />
                    </button>
                  </Link>
                  <div className="absolute -top-2 -right-2 bg-red-500 rounded-full w-6 h-6 flex items-center justify-center">
                    <span className="text-white text-xs font-bold">1</span>
                  </div>
                </div>

                {/* Claim lowest rates link */}
                <div className="text-center mb-6">
                  <Link href="https://www.progressive.com" target="_blank" rel="noopener noreferrer">
                    <span className="text-sm text-blue-600 hover:text-blue-800 underline cursor-pointer">
                      Claim the lowest rates now {">>"}
                    </span>
                  </Link>
                </div>

                {/* Counter */}
                <div className="text-center text-sm text-gray-600 border-t pt-4">
                  <span className="font-semibold text-[#2048A8]">{count.toLocaleString()}</span> Americans have claimed
                  lower rates through Progressive
                </div>
              </div>
            </div>

            {/* Scrolling Testimonials */}
            <div className="mb-6 overflow-hidden">
              <div className="flex animate-scroll space-x-6 py-4">
                {/* Duplicate testimonials for seamless loop */}
                {[...testimonials, ...testimonials].map((testimonial, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 bg-white rounded-lg shadow-sm border border-gray-200 p-4 w-80"
                  >
                    <div className="flex items-start gap-3">
                      <div className="relative h-10 w-10 rounded-full overflow-hidden flex-shrink-0">
                        <Image
                          src={testimonial.image || "/placeholder.svg"}
                          alt={testimonial.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-gray-800 mb-2">"{testimonial.text}"</p>
                        <p className="text-xs text-gray-600 font-medium">- {testimonial.name}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Second Offer Block */}
            <div className="bg-white rounded-md shadow-lg border border-gray-200 overflow-hidden p-8">
              <div className="flex justify-center mb-6">
                <div className="relative h-24 w-64">
                  <Image src="/images/blue-background.gif" alt="Insurance Provider" fill className="object-contain" />
                </div>
              </div>

              <div className="text-center mb-6">
                <h2 className="text-3xl mb-2">Perfect timing! We've lowered rates in Florida</h2>
              </div>

              {/* CTA Button */}
              <div className="mb-6">
                <Link href="https://www.progressive.com" target="_blank" rel="noopener noreferrer">
                  <button className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded flex items-center justify-center">
                    View My Rates <ArrowRight className="ml-2" size={18} />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </main>
        <style jsx>{`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          .animate-scroll {
            animation: scroll 30s linear infinite;
          }
        `}</style>
      </div>
    )
  }

  // Option 6 - QualifyAuto highlight First Placement (Copy of Option 3)
  if (params.option === "6") {
    const testimonials = [
      {
        name: "Sarah K.",
        text: "I dropped my auto rate from $225/mo to $69/mo in just 30 seconds",
        image: "/placeholder.svg?height=40&width=40",
      },
      {
        name: "Mike R.",
        text: "I dropped my auto rate from $189/mo to $52/mo in just 30 seconds",
        image: "/placeholder.svg?height=40&width=40",
      },
      {
        name: "Jessica M.",
        text: "I dropped my auto rate from $267/mo to $78/mo in just 30 seconds",
        image: "/placeholder.svg?height=40&width=40",
      },
      {
        name: "David L.",
        text: "I dropped my auto rate from $198/mo to $61/mo in just 30 seconds",
        image: "/placeholder.svg?height=40&width=40",
      },
      {
        name: "Amanda T.",
        text: "I dropped my auto rate from $234/mo to $71/mo in just 30 seconds",
        image: "/placeholder.svg?height=40&width=40",
      },
      {
        name: "Chris B.",
        text: "I dropped my auto rate from $156/mo to $48/mo in just 30 seconds",
        image: "/placeholder.svg?height=40&width=40",
      },
    ]

    return (
      <div className="min-h-screen bg-gray-100">
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
              <a
                href="tel:18449332220"
                className="text-[#2048A8] font-bold text-lg flex items-center justify-end gap-1"
              >
                <Phone size={16} className="text-[#2048A8]" />
                1-844-933-2220 <span className="font-normal">(TTY 711)</span>
              </a>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="container mx-auto px-4 py-12">
          <div className="max-w-2xl mx-auto">
            {/* Light Yellow Background Banner - Full Width */}
            <div className="bg-yellow-50 -mx-[50vw] ml-[calc(50%-50vw)] px-[50vw] pl-[calc(50vw-50%)] py-6 mb-6">
              <div className="max-w-2xl mx-auto">
                {/* First Offer Block - Recommended */}
                <div className="bg-white rounded-md shadow-lg border-2 border-[#2048A8] overflow-hidden p-6 relative">
                  {/* Recommended Banner */}
                  <div className="absolute top-0 left-0 right-0 bg-[#2048A8] text-white py-1 px-4 flex items-center justify-center">
                    <Check className="h-4 w-4 mr-1" />
                    <span className="text-sm font-medium">Recommended for you</span>
                  </div>

                  {/* Red Notification Badge - Larger */}
                  <div className="absolute top-4 right-4 bg-red-500 rounded-full w-12 h-12 flex items-center justify-center z-10">
                    <span className="text-white text-lg font-bold">1</span>
                  </div>

                  {/* Content with extra padding for the banner */}
                  <div className="pt-6">
                    <div className="flex justify-center mb-6">
                      <div className="relative h-24 w-64">
                        <Image
                          src="/images/blue-background.gif"
                          alt="Insurance Provider"
                          fill
                          className="object-contain"
                        />
                      </div>
                    </div>

                    {/* CTA Button with notification and pulsating effect */}
                    <div className="relative mb-0">
                      <Link href="https://www.progressive.com" target="_blank" rel="noopener noreferrer">
                        <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-8 rounded flex items-center justify-center animate-pulse-custom text-lg font-semibold">
                          View My Rates <ArrowRight className="ml-2" size={18} />
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Second Offer Block */}
            <div className="bg-white rounded-md shadow-lg border border-gray-200 overflow-hidden p-8">
              <div className="flex justify-center mb-6">
                <div className="relative h-24 w-64">
                  <Image src="/images/blue-background.gif" alt="Insurance Provider" fill className="object-contain" />
                </div>
              </div>

              {/* CTA Button */}
              <div className="mb-6">
                <Link href="https://www.progressive.com" target="_blank" rel="noopener noreferrer">
                  <button className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded flex items-center justify-center">
                    View My Rates <ArrowRight className="ml-2" size={18} />
                  </button>
                </Link>
              </div>
            </div>

            {/* Third Offer Block - Replica of Second */}
            <div className="bg-white rounded-md shadow-lg border border-gray-200 overflow-hidden p-8 mt-6">
              <div className="flex justify-center mb-6">
                <div className="relative h-24 w-64">
                  <Image src="/images/blue-background.gif" alt="Insurance Provider" fill className="object-contain" />
                </div>
              </div>

              {/* CTA Button */}
              <div className="mb-6">
                <Link href="https://www.progressive.com" target="_blank" rel="noopener noreferrer">
                  <button className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded flex items-center justify-center">
                    View My Rates <ArrowRight className="ml-2" size={18} />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </main>
        <style jsx>{`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          .animate-scroll {
            animation: scroll 30s linear infinite;
          }
        `}</style>
      </div>
    )
  }

  // Option 7 - QualifyAuto highlight First Placement 2 (Copy of Option 3)
  if (params.option === "7") {
    const testimonials = [
      {
        name: "Sarah K.",
        text: "I dropped my auto rate from $225/mo to $69/mo in just 30 seconds",
        image: "/placeholder.svg?height=40&width=40",
      },
      {
        name: "Mike R.",
        text: "I dropped my auto rate from $189/mo to $52/mo in just 30 seconds",
        image: "/placeholder.svg?height=40&width=40",
      },
      {
        name: "Jessica M.",
        text: "I dropped my auto rate from $267/mo to $78/mo in just 30 seconds",
        image: "/placeholder.svg?height=40&width=40",
      },
      {
        name: "David L.",
        text: "I dropped my auto rate from $198/mo to $61/mo in just 30 seconds",
        image: "/placeholder.svg?height=40&width=40",
      },
      {
        name: "Amanda T.",
        text: "I dropped my auto rate from $234/mo to $71/mo in just 30 seconds",
        image: "/placeholder.svg?height=40&width=40",
      },
      {
        name: "Chris B.",
        text: "I dropped my auto rate from $156/mo to $48/mo in just 30 seconds",
        image: "/placeholder.svg?height=40&width=40",
      },
    ]

    return (
      <div className="min-h-screen bg-gray-100">
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
              <a
                href="tel:18449332220"
                className="text-[#2048A8] font-bold text-lg flex items-center justify-end gap-1"
              >
                <Phone size={16} className="text-[#2048A8]" />
                1-844-933-2220 <span className="font-normal">(TTY 711)</span>
              </a>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="container mx-auto px-4 py-12">
          <div className="max-w-2xl mx-auto">
            {/* Blue Banner Behind First Card - Full Width */}
            <div className="bg-blue-200 -mx-[50vw] ml-[calc(50%-50vw)] px-[50vw] pl-[calc(50vw-50%)] py-6 mb-6">
              <div className="max-w-2xl mx-auto">
                {/* First Offer Block - Recommended */}
                <div className="bg-white rounded-md shadow-lg border-2 border-yellow-500 overflow-hidden relative">
                  {/* Diagonal Gold Ribbon - Top Right Corner */}
                  <div className="absolute top-0 right-0 w-0 h-0 border-l-[60px] border-l-transparent border-t-[60px] border-t-yellow-500">
                    <div className="absolute top-[-40px] right-[-20px] flex items-center justify-center">
                      <Star className="h-3 w-3 fill-white text-white" />
                    </div>
                  </div>
                  {/* Content with extra padding for the banner */}
                  <div className="p-4">
                    <div className="flex justify-center mb-4">
                      <div className="relative h-24 w-64">
                        <Image
                          src="/images/blue-background.gif"
                          alt="Insurance Provider"
                          fill
                          className="object-contain"
                        />
                      </div>
                    </div>

                    {/* CTA Button with notification and pulsating effect */}
                    <div className="relative mb-0">
                      <Link href="https://www.progressive.com" target="_blank" rel="noopener noreferrer">
                        <button className="w-full bg-green-500 hover:bg-green-600 text-white py-8 rounded flex items-center justify-center animate-pulse-custom text-lg font-semibold">
                          View My Rates <ArrowRight className="ml-2" size={18} />
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Second Offer Block */}
            <div className="bg-white rounded-md shadow-lg border border-gray-200 overflow-hidden p-8">
              <div className="flex justify-center mb-6">
                <div className="relative h-24 w-64">
                  <Image src="/images/blue-background.gif" alt="Insurance Provider" fill className="object-contain" />
                </div>
              </div>

              {/* CTA Button */}
              <div className="mb-6">
                <Link href="https://www.progressive.com" target="_blank" rel="noopener noreferrer">
                  <button className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded flex items-center justify-center">
                    View My Rates <ArrowRight className="ml-2" size={18} />
                  </button>
                </Link>
              </div>
            </div>

            {/* Third Offer Block - Copy of Second */}
            <div className="bg-white rounded-md shadow-lg border border-gray-200 overflow-hidden p-8 mt-6">
              <div className="flex justify-center mb-6">
                <div className="relative h-24 w-64">
                  <Image src="/images/blue-background.gif" alt="Insurance Provider" fill className="object-contain" />
                </div>
              </div>

              {/* CTA Button */}
              <div className="mb-6">
                <Link href="https://www.progressive.com" target="_blank" rel="noopener noreferrer">
                  <button className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded flex items-center justify-center">
                    View My Rates <ArrowRight className="ml-2" size={18} />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </main>
        <style jsx>{`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          .animate-scroll {
            animation: scroll 30s linear infinite;
          }
        `}</style>
      </div>
    )
  }

  // Option 2 - Proposed Qualify Auto (Two blocks)
  if (params.option === "2") {
    return (
      <div className="min-h-screen bg-gray-100">
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
              <a
                href="tel:18449332220"
                className="text-[#2048A8] font-bold text-lg flex items-center justify-end gap-1"
              >
                <Phone size={16} className="text-[#2048A8]" />
                1-844-933-2220 <span className="font-normal">(TTY 711)</span>
              </a>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="container mx-auto px-4 py-12">
          <div className="max-w-2xl mx-auto">
            {/* First Offer Block - Recommended */}
            <div className="bg-white rounded-md shadow-lg border-2 border-[#2048A8] overflow-hidden p-8 mb-6 relative">
              {/* Recommended Banner */}
              <div className="absolute top-0 left-0 right-0 bg-[#2048A8] text-white py-1 px-4 flex items-center justify-center">
                <Check className="h-4 w-4 mr-1" />
                <span className="text-sm font-medium">Recommended for you</span>
              </div>

              {/* Content with extra padding for the banner */}
              <div className="pt-6">
                <div className="text-center mb-6">
                  <h2 className="text-3xl mb-2">Perfect timing! We've lowered rates in Florida</h2>
                </div>

                <div className="flex justify-center mb-6">
                  <div className="relative h-16 w-48">
                    <Image src="/images/blue-background.gif" alt="Insurance Provider" fill className="object-contain" />
                  </div>
                </div>

                <p className="text-lg mb-4">Driving our military heroes forward with affordable protection</p>

                {/* CTA Button with notification and pulsating effect */}
                <div className="relative mb-6">
                  <Link href="https://www.progressive.com" target="_blank" rel="noopener noreferrer">
                    <button className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded flex items-center justify-center animate-pulse-custom">
                      View My Rates <ArrowRight className="ml-2" size={18} />
                    </button>
                  </Link>
                  <div className="absolute -top-2 -right-2 bg-red-500 rounded-full w-6 h-6 flex items-center justify-center">
                    <span className="text-white text-xs font-bold">1</span>
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-3">
                    <span className="text-green-500 text-xl">✓</span>
                    <p className="text-base">Get a customized quote today and see what you could save</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-green-500 text-xl">✓</span>
                    <p className="text-base">Fast, easy and reliable claims service available 24 hours a day</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-green-500 text-xl">✓</span>
                    <p className="text-base">Trusted by millions of drivers to insure what's important</p>
                  </div>
                </div>

                {/* Counter */}
                <div className="text-center text-sm text-gray-600 border-t pt-4">
                  <span className="font-semibold text-[#2048A8]">{count.toLocaleString()}</span> Americans have claimed
                  lower rates through Progressive
                </div>
              </div>
            </div>

            {/* Second Offer Block */}
            <div className="bg-white rounded-md shadow-lg border border-gray-200 overflow-hidden p-8">
              <div className="text-center mb-6">
                <h2 className="text-3xl mb-2">Perfect timing! We've lowered rates in Florida</h2>
              </div>

              <div className="flex justify-center mb-6">
                <div className="relative h-16 w-48">
                  <Image src="/images/blue-background.gif" alt="Insurance Provider" fill className="object-contain" />
                </div>
              </div>

              <p className="text-lg mb-4">Driving our military heroes forward with affordable protection</p>

              {/* CTA Button */}
              <div className="mb-6">
                <Link href="https://www.progressive.com" target="_blank" rel="noopener noreferrer">
                  <button className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded flex items-center justify-center">
                    View My Rates <ArrowRight className="ml-2" size={18} />
                  </button>
                </Link>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-green-500 text-xl">✓</span>
                  <p className="text-base">Get a customized quote today and see what you could save</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-500 text-xl">✓</span>
                  <p className="text-base">Fast, easy and reliable claims service available 24 hours a day</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-500 text-xl">✓</span>
                  <p className="text-base">Trusted by millions of drivers to insure what's important</p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    )
  }

  // Option 1 - Current Qualify Auto (Single block)
  return (
    <div className="min-h-screen bg-gray-100">
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
        <div className="max-w-2xl mx-auto bg-white rounded-md shadow-lg border border-gray-200 overflow-hidden p-8">
          <div className="text-center mb-6">
            <h2 className="text-3xl mb-2">Perfect timing! We've lowered rates in Florida</h2>
          </div>

          <div className="flex justify-center mb-6">
            <div className="relative h-16 w-48">
              <Image src="/images/blue-background.gif" alt="Insurance Provider" fill className="object-contain" />
            </div>
          </div>

          <p className="text-lg mb-8">Driving our military heroes forward with affordable protection</p>

          <div className="space-y-4 mb-8">
            <div className="flex items-start gap-3">
              <span className="text-green-500 text-xl">✓</span>
              <p className="text-base">Get a customized quote today and see what you could save</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-green-500 text-xl">✓</span>
              <p className="text-base">Fast, easy and reliable claims service available 24 hours a day</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-green-500 text-xl">✓</span>
              <p className="text-base">Trusted by millions of drivers to insure what's important</p>
            </div>
          </div>

          <Link href="https://www.progressive.com" target="_blank" rel="noopener noreferrer">
            <button className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded flex items-center justify-center">
              View My Rates <ArrowRight className="ml-2" size={18} />
            </button>
          </Link>
        </div>
      </main>
    </div>
  )
}
