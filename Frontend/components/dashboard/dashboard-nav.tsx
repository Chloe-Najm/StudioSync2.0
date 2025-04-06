import type React from "react"
import Link from "next/link"
import { BarChart, CalendarDays, CreditCard, Settings, Users, Dumbbell, MessageSquare, HelpCircle } from "lucide-react"

export function DashboardNav() {
  return (
    <div className="hidden border-r bg-muted/40 md:block w-64 overflow-y-auto">
      <div className="flex flex-col gap-2 p-4">
        <NavItem href="/dashboard" icon={<BarChart className="h-5 w-5" />} label="Dashboard" active />
        <NavItem href="/dashboard/schedule" icon={<CalendarDays className="h-5 w-5" />} label="Schedule" />
        <NavItem href="/dashboard/members" icon={<Users className="h-5 w-5" />} label="Members" />
        <NavItem href="/dashboard/classes" icon={<Dumbbell className="h-5 w-5" />} label="Classes" />
        <NavItem href="/dashboard/billing" icon={<CreditCard className="h-5 w-5" />} label="Billing" />
        <NavItem href="/dashboard/messages" icon={<MessageSquare className="h-5 w-5" />} label="Messages" />

        <div className="mt-6 pt-6 border-t">
          <NavItem href="/dashboard/settings" icon={<Settings className="h-5 w-5" />} label="Settings" />
          <NavItem href="/dashboard/help" icon={<HelpCircle className="h-5 w-5" />} label="Help & Support" />
        </div>
      </div>
    </div>
  )
}

interface NavItemProps {
  href: string
  icon: React.ReactNode
  label: string
  active?: boolean
}

function NavItem({ href, icon, label, active = false }: NavItemProps) {
  return (
    <Link
      href={href}
      className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-all ${
        active ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:bg-muted hover:text-foreground"
      }`}
    >
      {icon}
      {label}
    </Link>
  )
}

