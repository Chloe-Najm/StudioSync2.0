"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { toast } from "@/hooks/use-toast"

export function ClientFeedback() {
  const [feedback, setFeedback] = useState("")
  const [category, setCategory] = useState("instructor")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
  
    if (!feedback.trim()) return
  
    setIsSubmitting(true)
  
    try {
      const res = await fetch("http://127.0.0.1:4000/api/feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          category,
          message: feedback,
          clientName: "John Doe" // change later if needed
        }),
      })
  
      if (!res.ok) throw new Error("Failed to submit")
  
      toast({
        title: "Thanks!",
        description: "Your feedback was submitted.",
      })
  
      setFeedback("")
      setCategory("instructor")
    } catch (err) {
      toast({
        title: "Error",
        description: "Could not submit feedback.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }
  

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-[#333333]">Leave Feedback</h1>
        <p className="text-[#666666] mt-1">Share your experience to help us improve</p>
      </div>

      <Card className="border-[#F7D6D4]">
        <CardHeader>
          <CardTitle>Your Feedback</CardTitle>
          <CardDescription>Your feedback will be analyzed by our AI to help improve our services</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="category">What would you like to review?</Label>
              <select
                id="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full p-2 border border-[#F7D6D4] rounded-md focus:outline-none focus:ring-2 focus:ring-[#F2A0A0]"
              >
                <option value="instructor">Instructor</option>
                <option value="class">Class Experience</option>
                <option value="facility">Facility & Cleanliness</option>
                <option value="staff">Front Desk Staff</option>
                <option value="equipment">Equipment</option>
              </select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="feedback">Your Feedback</Label>
              <Textarea
                id="feedback"
                placeholder="Share your experience..."
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                className="min-h-[120px] border-[#F7D6D4] focus-visible:ring-[#F2A0A0]"
              />
            </div>

            <Button type="submit" className="w-full bg-[#F2A0A0] hover:bg-[#E88A8A]" disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Submit Feedback"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

