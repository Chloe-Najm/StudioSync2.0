"use client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { PieChart, Users } from "lucide-react"

// Mock data based on the provided JSON
const promoStatsData = {
  "Holiday Hustle": {
    clients_joined: 4,
    total_attendance: 33,
    retained_clients: 0,
  },
  "Feel Good February": {
    clients_joined: 11,
    total_attendance: 84,
    retained_clients: 3,
  },
  "B.Ingo Challenge": {
    clients_joined: 9,
    total_attendance: 59,
    retained_clients: 1,
  },
}

export function PromotionStats() {
  return (
    <div className="space-y-6">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {Object.entries(promoStatsData).map(([promoName, stats]) => (
          <Card key={promoName} className="border-[#F7D6D4]">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle>{promoName}</CardTitle>
                <Users className="h-4 w-4 text-[#F2A0A0]" />
              </div>
              <CardDescription>Promotion performance metrics</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-[#666666]">Clients Joined</span>
                  <span className="font-medium">{stats.clients_joined}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-[#666666]">Total Attendance</span>
                  <span className="font-medium">{stats.total_attendance}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-[#666666]">Retained Clients</span>
                  <span className="font-medium">{stats.retained_clients}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-[#666666]">Retention Rate</span>
                  <span className="font-medium">
                    {Math.round((stats.retained_clients / stats.clients_joined) * 100) || 0}%
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-[#666666]">Avg. Classes per Client</span>
                  <span className="font-medium">{(stats.total_attendance / stats.clients_joined).toFixed(1)}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="border-[#F7D6D4]">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Promo vs Non-Promo Client Behavior</CardTitle>
            <PieChart className="h-4 w-4 text-[#F2A0A0]" />
          </div>
          <CardDescription>Comparing attendance patterns</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-center">Promo Clients</h3>
              <div className="flex justify-center">
                <div className="relative w-32 h-32">
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <circle cx="50" cy="50" r="40" fill="#FDF0EE" />
                    <circle cx="50" cy="50" r="25" fill="white" />
                    <path d="M 50 10 A 40 40 0 0 1 88.2 65 L 50 50" fill="#F2A0A0" />
                    <text x="50" y="45" textAnchor="middle" fontSize="12" fontWeight="bold">
                      27%
                    </text>
                    <text x="50" y="60" textAnchor="middle" fontSize="8">
                      Retention
                    </text>
                  </svg>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-[#666666]">Avg. Classes Attended</span>
                  <span className="font-medium">7.3</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-[#666666]">Avg. Attendance Frequency</span>
                  <span className="font-medium">1.8 / week</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-[#666666]">Churn Rate</span>
                  <span className="font-medium">73%</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-medium text-center">Non-Promo Clients</h3>
              <div className="flex justify-center">
                <div className="relative w-32 h-32">
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <circle cx="50" cy="50" r="40" fill="#FDF0EE" />
                    <circle cx="50" cy="50" r="25" fill="white" />
                    <path d="M 50 10 A 40 40 0 0 1 78.3 82.7 L 50 50" fill="#F2A0A0" />
                    <text x="50" y="45" textAnchor="middle" fontSize="12" fontWeight="bold">
                      42%
                    </text>
                    <text x="50" y="60" textAnchor="middle" fontSize="8">
                      Retention
                    </text>
                  </svg>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-[#666666]">Avg. Classes Attended</span>
                  <span className="font-medium">12.5</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-[#666666]">Avg. Attendance Frequency</span>
                  <span className="font-medium">2.4 / week</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-[#666666]">Churn Rate</span>
                  <span className="font-medium">58%</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

