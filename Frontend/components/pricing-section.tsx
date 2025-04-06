import { Check } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export function PricingSection() {
  return (
    <section id="pricing" className="container py-24 space-y-12">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Simple, transparent pricing</h2>
        <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
          Choose the plan that's right for your fitness business
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <PricingCard
          title="Starter"
          price="$49"
          description="Perfect for small studios just getting started"
          features={["Up to 100 members", "Class scheduling", "Basic reporting", "Email support", "Mobile app access"]}
          buttonText="Start Free Trial"
          buttonVariant="outline"
        />
        <PricingCard
          title="Professional"
          price="$99"
          description="Ideal for growing fitness businesses"
          features={[
            "Up to 500 members",
            "Advanced scheduling",
            "Member progress tracking",
            "Email & SMS reminders",
            "Priority support",
            "Custom branding",
          ]}
          buttonText="Start Free Trial"
          buttonVariant="default"
          highlighted={true}
        />
        <PricingCard
          title="Enterprise"
          price="$199"
          description="For established multi-location studios"
          features={[
            "Unlimited members",
            "Multi-location support",
            "Advanced analytics",
            "Dedicated account manager",
            "API access",
            "Custom integrations",
            "White-label solution",
          ]}
          buttonText="Contact Sales"
          buttonVariant="outline"
        />
      </div>
    </section>
  )
}

interface PricingCardProps {
  title: string
  price: string
  description: string
  features: string[]
  buttonText: string
  buttonVariant: "default" | "outline"
  highlighted?: boolean
}

function PricingCard({
  title,
  price,
  description,
  features,
  buttonText,
  buttonVariant,
  highlighted = false,
}: PricingCardProps) {
  return (
    <Card className={`flex flex-col ${highlighted ? "border-primary shadow-lg relative" : ""}`}>
      {highlighted && (
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
          Most Popular
        </div>
      )}
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <div className="flex items-baseline mt-4">
          <span className="text-4xl font-bold">{price}</span>
          <span className="ml-1 text-muted-foreground">/month</span>
        </div>
        <CardDescription className="mt-4">{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-1">
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <Check className="h-4 w-4 text-primary mr-2" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Link href="/signup" className="w-full">
          <Button variant={buttonVariant} className="w-full">
            {buttonText}
          </Button>
        </Link>
      </CardFooter>
    </Card>
  )
}

