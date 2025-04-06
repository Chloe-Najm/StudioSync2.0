"use client"

import type React from "react"
import { useState } from "react"
import { Send } from "lucide-react"
import ReactMarkdown from "react-markdown"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

export function ClientChatbot() {
  const [input, setInput] = useState("")
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: "Hi there! I'm your personal fitness assistant. How can I help you today?",
    },
  ])

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim()) return

    const userMessage = { role: "user", content: input }
    setMessages((prev) => [...prev, userMessage])
    setInput("")

    try {
      const res = await fetch("http://127.0.0.1:4000/chat/client", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      })
      const data = await res.json()
      const reply = data.reply

      setMessages((prev) => [...prev, { role: "assistant", content: reply }])
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "❌ Sorry, there was an error reaching the server." },
      ])
    }
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-[#333333]">Your AI Assistant</h1>
        <p className="text-[#666666] mt-1">Ask questions about your fitness journey and classes.</p>
      </div>

      <Card className="border-[#F7D6D4]">
        <CardHeader>
          <CardTitle>StudioSync AI</CardTitle>
          <CardDescription>Connect to your backend for real AI responses</CardDescription>
        </CardHeader>
        <CardContent className="h-[400px] overflow-y-auto space-y-4 p-4">
          {messages.map((message, index) => (
            <div key={index} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
              <div
                className={`max-w-[80%] rounded-lg px-4 py-2 whitespace-pre-wrap ${
                  message.role === "user" ? "bg-[#F2A0A0] text-white" : "bg-[#FDF0EE] text-[#333333]"
                }`}
              >
                <ReactMarkdown>{message.content}</ReactMarkdown>
              </div>
            </div>
          ))}
        </CardContent>
        <CardFooter>
          <form onSubmit={handleSend} className="flex w-full gap-2">
            <Input
              placeholder="Type your message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="border-[#F7D6D4] focus-visible:ring-[#F2A0A0]"
            />
            <Button type="submit" size="icon" className="bg-[#F2A0A0] hover:bg-[#E88A8A]">
              <Send className="h-4 w-4" />
            </Button>
          </form>
        </CardFooter>
      </Card>
    </div>
  )
}
