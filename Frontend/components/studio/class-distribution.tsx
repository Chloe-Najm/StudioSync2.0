"use client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { PieChart, LineChart } from "lucide-react"

// Mock data based on the provided JSON
const classStatsData = {
  Sculpt: 30,
  Ride: 37,
  HIIT: 39,
  Yoga: 42,
  Barre: 39,
}

// Mock data for class frequency by day of week
const classByDayData = {
  Monday: 28,
  Tuesday: 35,
  Wednesday: 42,
  Thursday: 38,
  Friday: 32,
  Saturday: 45,
  Sunday: 30,
}

export function ClassDistribution() {
  return (
    <div className="space-y-6">
      <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2">
        <Card className="border-[#F7D6D4]">
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <CardTitle>Most Popular Classes</CardTitle>
              <PieChart className="h-4 w-4 text-[#F2A0A0]" />
            </div>
            <CardDescription>Based on total attendance</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {Object.entries(classStatsData)
                .sort(([, a], [, b]) => b - a)
                .map(([className, count], index) => (
                  <div key={className} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-medium">{className}</span>
                      <span className="text-sm text-[#666666]">{count} attendees</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-[#FDF0EE]">
                      <div
                        className="h-2 rounded-full bg-[#F2A0A0]"
                        style={{
                          width: `${(count / Math.max(...Object.values(classStatsData))) * 100}%`,
                          opacity: index === 0 ? 1 : 0.7 - index * 0.1,
                        }}
                      />
                    </div>
                  </div>
                ))}
            </div>
          </CardContent>
        </Card>

        <Card className="border-[#F7D6D4]">
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <CardTitle>Class Frequency by Day</CardTitle>
              <LineChart className="h-4 w-4 text-[#F2A0A0]" />
            </div>
            <CardDescription>Attendance patterns by weekday</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="relative h-[300px] pt-5">
              <div className="absolute inset-0 flex items-end">
                <svg className="w-full h-full" viewBox="0 0 300 250" preserveAspectRatio="none">
                  <polyline
                    points={Object.values(classByDayData)
                      .map((value, index) => {
                        const x = (index * 300) / 6
                        const maxValue = Math.max(...Object.values(classByDayData))
                        const y = 250 - (value / maxValue) * 200
                        return `${x},${y}`
                      })
                      .join(" ")}
                    fill="none"
                    stroke="#F2A0A0"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  {Object.values(classByDayData).map((value, index) => {
                    const x = (index * 300) / 6
                    const maxValue = Math.max(...Object.values(classByDayData))
                    const y = 250 - (value / maxValue) * 200
                    return <circle key={index} cx={x} cy={y} r="4" fill="#F2A0A0" />
                  })}
                </svg>
              </div>
              <div className="absolute bottom-0 left-0 right-0 flex justify-between text-xs text-[#666666] px-2">
                {Object.keys(classByDayData).map((day) => (
                  <div key={day}>{day.substring(0, 3)}</div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

