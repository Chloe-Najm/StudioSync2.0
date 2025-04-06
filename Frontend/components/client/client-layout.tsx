"use client"

import type React from "react"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { BarChart, MessageSquare, Inbox, Home } from "lucide-react"

export function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  return (
    <div className="flex min-h-screen flex-col bg-[#FDF8F6]">
      <header className="sticky top-0 z-50 w-full border-b border-[#F7D6D4] bg-white/80 backdrop-blur">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl font-bold text-[#333333]">
              StudioSync <span className="text-[#F2A0A0]">AI</span>
            </span>
          </Link>
          <div className="flex items-center gap-4">
            <span className="text-sm font-medium text-[#666666]">Client Demo</span>
          </div>
        </div>
      </header>

      <div className="flex flex-1">
        <aside className="hidden w-64 border-r border-[#F7D6D4] bg-white md:block">
          <div className="flex flex-col gap-2 p-4">
            <Link
              href="/client-demo"
              className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-all ${
                pathname === "/client-demo"
                  ? "bg-[#FDF0EE] text-[#F2A0A0] font-medium"
                  : "text-[#666666] hover:bg-[#FDF0EE] hover:text-[#F2A0A0]"
              }`}
            >
              <BarChart className="h-5 w-5" />
              Dashboard
            </Link>
            <Link
              href="/client-demo/chat"
              className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-all ${
                pathname === "/client-demo/chat"
                  ? "bg-[#FDF0EE] text-[#F2A0A0] font-medium"
                  : "text-[#666666] hover:bg-[#FDF0EE] hover:text-[#F2A0A0]"
              }`}
            >
              <MessageSquare className="h-5 w-5" />
              AI Assistant
            </Link>
            <Link
              href="/client-demo/inbox"
              className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-all ${
                pathname === "/client-demo/inbox"
                  ? "bg-[#FDF0EE] text-[#F2A0A0] font-medium"
                  : "text-[#666666] hover:bg-[#FDF0EE] hover:text-[#F2A0A0]"
              }`}
            >
              <Inbox className="h-5 w-5" />
              Inbox
            </Link>
            <Link
              href="/"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-[#666666] hover:bg-[#FDF0EE] hover:text-[#F2A0A0] mt-auto"
            >
              <Home className="h-5 w-5" />
              Back to Home
            </Link>
          </div>
        </aside>

        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  )
}

