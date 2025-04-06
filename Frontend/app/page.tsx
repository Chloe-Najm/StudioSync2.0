"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#FDF8F6]">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 text-center">
        <h1 className="text-5xl font-bold tracking-tight text-[#333333] md:text-6xl lg:text-7xl">
          StudioSync <span className="text-[#F2A0A0]">AI</span>
        </h1>

        <p className="max-w-[600px] text-lg text-[#666666]">Elevate your fitness studio with AI-powered simplicity</p>

        <div className="flex flex-col gap-4 sm:flex-row sm:gap-8">
          <Link href="/studio-demo">
            <Button size="lg" className="bg-[#F2A0A0] hover:bg-[#E88A8A] text-white px-8 rounded-full">
              Studio Demo <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
          <Link href="/client-demo">
            <Button
              size="lg"
              variant="outline"
              className="border-[#F2A0A0] text-[#F2A0A0] hover:bg-[#FDF0EE] px-8 rounded-full"
            >
              Client Demo <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>

        <div className="w-full mt-16 md:mt-24">
          <div className="relative overflow-hidden py-10 md:py-16">
            <div className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-center leading-tight">
              <span className="bg-gradient-to-r from-[#F2A0A0] via-[#F7D6D4] to-[#F2A0A0] text-transparent bg-clip-text bg-[length:200%_auto] animate-[gradient_8s_ease_infinite]">
                Simplify. Connect. Grow.
              </span>
            </div>

            <style jsx global>{`
              @keyframes gradient {
                0% {
                  background-position: 0% 50%;
                }
                50% {
                  background-position: 100% 50%;
                }
                100% {
                  background-position: 0% 50%;
                }
              }
            `}</style>
          </div>
        </div>
      </div>
    </div>
  )
}

