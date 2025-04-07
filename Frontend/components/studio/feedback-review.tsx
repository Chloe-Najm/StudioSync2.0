"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Lightbulb, ThumbsUp, ThumbsDown, Loader2, Smile, Meh, Frown } from "lucide-react"

export function FeedbackReview() {
  const [summary, setSummary] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    const fetchSummary = async () => {
      try {
        const response = await fetch("http://localhost:4000/api/feedback-summary")
        if (!response.ok) throw new Error("Failed to fetch summary")

        const data = await response.json()
        setSummary(data)
      } catch (err) {
        console.error("Error fetching summary:", err)
        setError(true)
      } finally {
        setLoading(false)
      }
    }

    fetchSummary()
  }, [])

  return (
    <div className="space-y-6">
      <Card className="border-[#F7D6D4]">
        <CardHeader>
          <CardTitle>AI Feedback Summary</CardTitle>
          <CardDescription>Automatically generated insights from client feedback</CardDescription>
        </CardHeader>
        <CardContent>
          {loading ? (
            <div className="flex items-center justify-center py-8">
              <Loader2 className="h-8 w-8 animate-spin text-[#F2A0A0]" />
            </div>
          ) : error || !summary ? (
            <div className="text-center py-8 text-red-500">
              Failed to load feedback summary. Please try again later.
            </div>
          ) : (
            <div className="space-y-6">
              <div className="p-4 bg-[#FDF0EE] rounded-lg">
                <h3 className="font-medium text-[#333333] mb-2">Key Themes</h3>
                <p className="text-[#666666]">{summary.summary}</p>
              </div>

              <div className="space-y-4">
                <h3 className="font-medium text-[#333333]">What Clients Love</h3>
                <ul className="space-y-2">
                  {summary.categories?.praise?.map((item: string, index: number) => (
                    <li key={index} className="flex items-start gap-2">
                      <ThumbsUp className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-[#666666]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="font-medium text-[#333333]">Areas for Improvement</h3>
                <ul className="space-y-2">
                  {summary.categories?.criticism?.map((item: string, index: number) => (
                    <li key={index} className="flex items-start gap-2">
                      <ThumbsDown className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                      <span className="text-[#666666]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="font-medium text-[#333333]">Suggestions</h3>
                <ul className="space-y-2">
                  {summary.suggestions?.map((suggestion: string, index: number) => (
                    <li key={index} className="flex items-start gap-2">
                      <Lightbulb className="h-5 w-5 text-[#F2A0A0] mt-0.5 flex-shrink-0" />
                      <span className="text-[#666666]">{suggestion}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* New: Sentiment Breakdown */}
              {summary.sentimentBreakdown && (
                <div className="space-y-4">
                  <h3 className="font-medium text-[#333333]">Sentiment Breakdown</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-green-600">
                      <Smile className="h-5 w-5" /> Positive: {summary.sentimentBreakdown.positive || 0}
                    </li>
                    <li className="flex items-center gap-2 text-yellow-600">
                      <Meh className="h-5 w-5" /> Neutral: {summary.sentimentBreakdown.neutral || 0}
                    </li>
                    <li className="flex items-center gap-2 text-red-600">
                      <Frown className="h-5 w-5" /> Negative: {summary.sentimentBreakdown.negative || 0}
                    </li>
                  </ul>
                </div>
              )}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
