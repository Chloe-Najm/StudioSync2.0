import type React from "react"
import { Dumbbell, LineChart, Users, Clock, Bell } from "lucide-react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { DashboardNav } from "@/components/dashboard/dashboard-nav"
import { UpcomingClasses } from "@/components/dashboard/upcoming-classes"
import { MemberStats } from "@/components/dashboard/member-stats"

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <DashboardHeader />
      <div className="flex flex-1">
        <DashboardNav />
        <main className="flex-1 p-6 md:p-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
              <p className="text-muted-foreground">Welcome back! Here's an overview of your studio.</p>
            </div>
            <div className="mt-4 md:mt-0 flex gap-2">
              <select className="bg-background border rounded-md px-3 py-2 text-sm">
                <option>Last 7 days</option>
                <option>Last 30 days</option>
                <option>Last 90 days</option>
                <option>This year</option>
              </select>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <StatsCard title="Total Members" value="1,248" change="+12%" icon={<Users className="h-5 w-5" />} />
            <StatsCard title="Classes Today" value="24" change="+2" icon={<Dumbbell className="h-5 w-5" />} />
            <StatsCard title="Attendance Rate" value="87%" change="+5%" icon={<Clock className="h-5 w-5" />} />
            <StatsCard title="New Members" value="36" change="+8" icon={<Users className="h-5 w-5" />} />
          </div>

          <div className="grid gap-6 mt-6 md:grid-cols-2 lg:grid-cols-7">
            <Card className="lg:col-span-4">
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle>Member Growth</CardTitle>
                  <CardDescription>New member sign-ups over time</CardDescription>
                </div>
                <LineChart className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="h-[300px] flex items-center justify-center text-muted-foreground border rounded-md">
                  [Member Growth Chart]
                </div>
              </CardContent>
            </Card>

            <Card className="lg:col-span-3">
              <CardHeader>
                <CardTitle>Upcoming Classes</CardTitle>
                <CardDescription>Today's schedule</CardDescription>
              </CardHeader>
              <CardContent>
                <UpcomingClasses />
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-6 mt-6 md:grid-cols-2 lg:grid-cols-7">
            <Card className="lg:col-span-3">
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
                <CardDescription>Latest updates and notifications</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <ActivityItem
                    icon={<Bell className="h-4 w-4" />}
                    title="New booking"
                    description="Sarah Johnson booked Yoga Basics"
                    time="5 minutes ago"
                  />
                  <ActivityItem
                    icon={<Users className="h-4 w-4" />}
                    title="New member"
                    description="Michael Chen joined your studio"
                    time="1 hour ago"
                  />
                  <ActivityItem
                    icon={<Clock className="h-4 w-4" />}
                    title="Class reminder"
                    description="HIIT Class starts in 30 minutes"
                    time="2 hours ago"
                  />
                  <ActivityItem
                    icon={<Bell className="h-4 w-4" />}
                    title="Class canceled"
                    description="Evening Pilates has been canceled"
                    time="Yesterday"
                  />
                </div>
              </CardContent>
            </Card>

            <Card className="lg:col-span-4">
              <CardHeader>
                <CardTitle>Member Statistics</CardTitle>
                <CardDescription>Attendance by class type</CardDescription>
              </CardHeader>
              <CardContent>
                <MemberStats />
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  )
}

interface StatsCardProps {
  title: string
  value: string
  change: string
  icon: React.ReactNode
}

function StatsCard({ title, value, change, icon }: StatsCardProps) {
  const isPositive = change.startsWith("+")

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <div className="p-1 bg-muted rounded-md">{icon}</div>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <p className={`text-xs ${isPositive ? "text-green-500" : "text-red-500"} flex items-center mt-1`}>
          {change}
          <span className="text-muted-foreground ml-1">from last period</span>
        </p>
      </CardContent>
    </Card>
  )
}

interface ActivityItemProps {
  icon: React.ReactNode
  title: string
  description: string
  time: string
}

function ActivityItem({ icon, title, description, time }: ActivityItemProps) {
  return (
    <div className="flex items-start gap-4 rounded-lg border p-3">
      <div className="p-2 bg-muted rounded-full">{icon}</div>
      <div className="flex-1 space-y-1">
        <p className="text-sm font-medium leading-none">{title}</p>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
      <div className="text-xs text-muted-foreground">{time}</div>
    </div>
  )
}

