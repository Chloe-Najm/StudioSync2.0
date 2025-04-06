import Image from "next/image"

import { Card, CardContent, CardFooter } from "@/components/ui/card"

export function Testimonials() {
  return (
    <section id="testimonials" className="bg-muted/50 py-24">
      <div className="container space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Trusted by fitness professionals worldwide
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
            See what our customers have to say about how StudioSync has transformed their business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <TestimonialCard
            quote="StudioSync has completely transformed how we manage our yoga studio. Class bookings are up 30% and admin time is down by half!"
            author="Sarah Johnson"
            role="Owner, Harmony Yoga"
            image="/placeholder.svg?height=100&width=100"
          />
          <TestimonialCard
            quote="The member management features are incredible. We can track progress, send personalized recommendations, and our clients love it."
            author="Michael Chen"
            role="Director, FitLife Gym"
            image="/placeholder.svg?height=100&width=100"
          />
          <TestimonialCard
            quote="As a personal trainer, StudioSync helps me manage my clients efficiently. The scheduling and automated reminders have eliminated no-shows."
            author="Emma Rodriguez"
            role="Personal Trainer"
            image="/placeholder.svg?height=100&width=100"
          />
        </div>
      </div>
    </section>
  )
}

interface TestimonialCardProps {
  quote: string
  author: string
  role: string
  image: string
}

function TestimonialCard({ quote, author, role, image }: TestimonialCardProps) {
  return (
    <Card className="h-full">
      <CardContent className="pt-6">
        <div className="mb-4">
          {[1, 2, 3, 4, 5].map((star) => (
            <span key={star} className="text-yellow-400 text-lg">
              ★
            </span>
          ))}
        </div>
        <p className="italic mb-6">"{quote}"</p>
      </CardContent>
      <CardFooter>
        <div className="flex items-center gap-4">
          <Image src={image || "/placeholder.svg"} alt={author} width={50} height={50} className="rounded-full" />
          <div>
            <p className="font-semibold">{author}</p>
            <p className="text-sm text-muted-foreground">{role}</p>
          </div>
        </div>
      </CardFooter>
    </Card>
  )
}

