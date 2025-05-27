import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ResultsPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-md p-8 text-center">
        <h1 className="text-2xl font-bold mb-4">Thank You For Your Selection</h1>
        <p className="mb-6">Your selected offerwall page will be displayed here once implemented.</p>
        <Link href="/">
          <Button variant="outline" className="flex items-center">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Selection
          </Button>
        </Link>
      </div>
    </div>
  )
}
