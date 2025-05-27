import { Loader2 } from "lucide-react"

export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 bg-white bg-opacity-90 z-50 flex flex-col items-center justify-center">
      <Loader2 className="h-12 w-12 text-[#2048A8] animate-spin mb-4" />
      <h2 className="text-xl font-semibold text-gray-800">Loading your quotes...</h2>
      <p className="text-gray-600 mt-2">Please wait while we prepare your information</p>
    </div>
  )
}
