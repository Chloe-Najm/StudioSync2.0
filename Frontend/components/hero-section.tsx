import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background z-10" />
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src="/placeholder.svg?height=1080&width=1920"
          alt="Fitness studio with people exercising"
          width={1920}
          height={1080}
          className="w-full h-full object-cover opacity-30"
          priority
        />
      </div>
      <div className="container relative z-20 py-32 md:py-40 lg:py-52">
        <div className="flex flex-col items-center text-center space-y-8 max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
            Streamline Your Fitness Studio Management
          </h1>
          <p className="text-xl text-muted-foreground max-w-[700px]">
            The all-in-one platform for fitness studios to manage schedules, members, and grow their business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/signup">
              <Button size="lg" className="gap-2">
                Start Free Trial <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link href="#demo">
              <Button size="lg" variant="outline">
                Watch Demo
              </Button>
            </Link>
          </div>
          <div className="pt-8 text-sm text-muted-foreground">
            No credit card required • 14-day free trial • Cancel anytime
          </div>
        </div>
      </div>
    </section>
  )
}

