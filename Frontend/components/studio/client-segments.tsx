"use client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertTriangle, Award, UserPlus, ArrowUpRight, ArrowDownRight, Users } from "lucide-react"

// Sample data based on the provided JSON
const clientsData = [
  {
    name: "Michael Jennings",
    first_class_promotion: "Feel Good February",
    total_attendance: 9,
    days_since_last_attendance: 10,
    churn_risk_score: 0.17,
    loyalty_score: 0.04,
  },
  {
    name: "Ian Watts",
    first_class_promotion: "B.Ingo Challenge",
    total_attendance: 5,
    days_since_last_attendance: 382,
    churn_risk_score: 1.0,
    loyalty_score: 0.38,
  },
  {
    name: "Elizabeth Smith",
    first_class_promotion: "Holiday Hustle",
    total_attendance: 8,
    days_since_last_attendance: 408,
    churn_risk_score: 1.0,
    loyalty_score: 0.29,
  },
  {
    name: "Lisa Mcintosh",
    first_class_promotion: "Holiday Hustle",
    total_attendance: 10,
    days_since_last_attendance: 379,
    churn_risk_score: 1.0,
    loyalty_score: 0.29,
  },
  {
    name: "Caleb Carrillo",
    first_class_promotion: "Feel Good February",
    total_attendance: 10,
    days_since_last_attendance: 376,
    churn_risk_score: 1.0,
    loyalty_score: 0.29,
  },
  {
    name: "Mark Rangel",
    first_class_promotion: "Feel Good February",
    total_attendance: 6,
    days_since_last_attendance: 5,
    churn_risk_score: 0.08,
    loyalty_score: 0.02,
  },
  {
    name: "Amy Ellison",
    first_class_promotion: "Feel Good February",
    total_attendance: 10,
    days_since_last_attendance: 373,
    churn_risk_score: 1.0,
    loyalty_score: 0.32,
  },
  {
    name: "Matthew Nguyen",
    first_class_promotion: "B.Ingo Challenge",
    total_attendance: 5,
    days_since_last_attendance: 381,
    churn_risk_score: 1.0,
    loyalty_score: 0.32,
  },
  {
    name: "Paul Jones",
    first_class_promotion: "B.Ingo Challenge",
    total_attendance: 6,
    days_since_last_attendance: 345,
    churn_risk_score: 1.0,
    loyalty_score: 0.28,
  },
  {
    name: "Cody Benjamin",
    first_class_promotion: "B.Ingo Challenge",
    total_attendance: 5,
    days_since_last_attendance: 380,
    churn_risk_score: 1.0,
    loyalty_score: 0.31,
  },
  {
    name: "Joe Stein",
    first_class_promotion: "Feel Good February",
    total_attendance: 7,
    days_since_last_attendance: 13,
    churn_risk_score: 0.22,
    loyalty_score: 0.03,
  },
  {
    name: "Andrew Davis",
    first_class_promotion: "B.Ingo Challenge",
    total_attendance: 9,
    days_since_last_attendance: 344,
    churn_risk_score: 1.0,
    loyalty_score: 0.25,
  },
  {
    name: "Cameron Hanna",
    first_class_promotion: "B.Ingo Challenge",
    total_attendance: 10,
    days_since_last_attendance: 324,
    churn_risk_score: 1.0,
    loyalty_score: 0.29,
  },
  {
    name: "Ricky Castaneda",
    first_class_promotion: "Feel Good February",
    total_attendance: 6,
    days_since_last_attendance: 399,
    churn_risk_score: 1.0,
    loyalty_score: 0.39,
  },
  {
    name: "Emily Owen",
    first_class_promotion: "Feel Good February",
    total_attendance: 8,
    days_since_last_attendance: 377,
    churn_risk_score: 1.0,
    loyalty_score: 0.33,
  },
  {
    name: "Frank Stevens",
    first_class_promotion: null,
    total_attendance: 11,
    days_since_last_attendance: 5,
    churn_risk_score: 0.08,
    loyalty_score: 0.05,
  },
  {
    name: "Ryan Peters",
    first_class_promotion: "Feel Good February",
    total_attendance: 5,
    days_since_last_attendance: 380,
    churn_risk_score: 1.0,
    loyalty_score: 0.28,
  },
  {
    name: "Breanna Park",
    first_class_promotion: "Feel Good February",
    total_attendance: 8,
    days_since_last_attendance: 368,
    churn_risk_score: 1.0,
    loyalty_score: 0.33,
  },
  {
    name: "Shelia Reyes",
    first_class_promotion: "Holiday Hustle",
    total_attendance: 5,
    days_since_last_attendance: 417,
    churn_risk_score: 1.0,
    loyalty_score: 0.31,
  },
  {
    name: "Gregory Pitts",
    first_class_promotion: "B.Ingo Challenge",
    total_attendance: 5,
    days_since_last_attendance: 362,
    churn_risk_score: 1.0,
    loyalty_score: 0.28,
  },
  {
    name: "Laura Evans",
    first_class_promotion: "B.Ingo Challenge",
    total_attendance: 8,
    days_since_last_attendance: 14,
    churn_risk_score: 0.23,
    loyalty_score: 0.04,
  },
  {
    name: "Jeffrey Perez MD",
    first_class_promotion: "Holiday Hustle",
    total_attendance: 10,
    days_since_last_attendance: 393,
    churn_risk_score: 1.0,
    loyalty_score: 0.25,
  },
  {
    name: "Kristen White",
    first_class_promotion: "Feel Good February",
    total_attendance: 6,
    days_since_last_attendance: 398,
    churn_risk_score: 1.0,
    loyalty_score: 0.3,
  },
  {
    name: "Elaine Sutton",
    first_class_promotion: "B.Ingo Challenge",
    total_attendance: 6,
    days_since_last_attendance: 365,
    churn_risk_score: 1.0,
    loyalty_score: 0.28,
  },
  {
    name: "Vincent Case",
    first_class_promotion: "Feel Good February",
    total_attendance: 9,
    days_since_last_attendance: 378,
    churn_risk_score: 1.0,
    loyalty_score: 0.32,
  },
]

export function ClientSegments() {
  // Get clients at risk (high churn risk and haven't attended in 30+ days)
  const clientsAtRisk = clientsData
    .filter((client) => client.churn_risk_score > 0.7 && client.days_since_last_attendance > 30)
    .sort((a, b) => b.churn_risk_score - a.churn_risk_score)
    .slice(0, 5)

  // Get loyal clients (high loyalty score and recent attendance)
  const loyalClients = clientsData
    .filter((client) => client.loyalty_score > 0.25)
    .sort((a, b) => b.loyalty_score - a.loyalty_score)
    .slice(0, 5)

  // Get new clients (those who attended in the last 30 days)
  const newClients = clientsData
    .filter((client) => client.days_since_last_attendance <= 30)
    .sort((a, b) => a.days_since_last_attendance - b.days_since_last_attendance)
    .slice(0, 5)

  return (
    <div className="space-y-6">
      <div className="grid gap-6 md:grid-cols-3">
        <Card className="border-[#F7D6D4]">
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <CardTitle>Clients at Risk</CardTitle>
              <AlertTriangle className="h-4 w-4 text-[#F2A0A0]" />
            </div>
            <CardDescription>Haven't attended in 30+ days</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {clientsAtRisk.map((client) => (
                <div
                  key={client.name}
                  className="flex items-start justify-between p-3 rounded-lg border border-[#F7D6D4]"
                >
                  <div className="space-y-1">
                    <p className="font-medium">{client.name}</p>
                    <p className="text-xs text-[#666666]">Last seen {client.days_since_last_attendance} days ago</p>
                    {client.first_class_promotion && (
                      <p className="text-xs text-[#F2A0A0]">From: {client.first_class_promotion}</p>
                    )}
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="text-xs font-medium bg-[#FDF0EE] text-[#F2A0A0] px-2 py-1 rounded-full">
                      {Math.round(client.churn_risk_score * 100)}% Risk
                    </span>
                    <span className="text-xs text-[#666666] mt-1">{client.total_attendance} classes</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="border-[#F7D6D4]">
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <CardTitle>Top Loyal Clients</CardTitle>
              <Award className="h-4 w-4 text-[#F2A0A0]" />
            </div>
            <CardDescription>Based on attendance and loyalty</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {loyalClients.map((client) => (
                <div
                  key={client.name}
                  className="flex items-start justify-between p-3 rounded-lg border border-[#F7D6D4]"
                >
                  <div className="space-y-1">
                    <p className="font-medium">{client.name}</p>
                    <p className="text-xs text-[#666666]">{client.total_attendance} total classes</p>
                    {client.first_class_promotion && (
                      <p className="text-xs text-[#F2A0A0]">From: {client.first_class_promotion}</p>
                    )}
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="text-xs font-medium bg-[#FDF0EE] text-[#F2A0A0] px-2 py-1 rounded-full">
                      {Math.round(client.loyalty_score * 100)}% Loyalty
                    </span>
                    <span className="text-xs text-[#666666] mt-1">{client.days_since_last_attendance} days ago</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="border-[#F7D6D4]">
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <CardTitle>New Active Clients</CardTitle>
              <UserPlus className="h-4 w-4 text-[#F2A0A0]" />
            </div>
            <CardDescription>Attended in the last 30 days</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {newClients.map((client) => (
                <div
                  key={client.name}
                  className="flex items-start justify-between p-3 rounded-lg border border-[#F7D6D4]"
                >
                  <div className="space-y-1">
                    <p className="font-medium">{client.name}</p>
                    <p className="text-xs text-[#666666]">Last seen {client.days_since_last_attendance} days ago</p>
                    {client.first_class_promotion && (
                      <p className="text-xs text-[#F2A0A0]">From: {client.first_class_promotion}</p>
                    )}
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="text-xs font-medium bg-[#FDF0EE] text-[#F2A0A0] px-2 py-1 rounded-full">
                      {client.total_attendance} classes
                    </span>
                    <span className="text-xs text-[#666666] mt-1">
                      {Math.round(client.loyalty_score * 100)}% Loyalty
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="border-[#F7D6D4]">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Client Retention Overview</CardTitle>
            <Users className="h-4 w-4 text-[#F2A0A0]" />
          </div>
          <CardDescription>Key metrics about your client base</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="space-y-2 text-center">
              <p className="text-sm text-[#666666]">Total Clients</p>
              <p className="text-3xl font-bold">{clientsData.length}</p>
              <div className="flex items-center justify-center text-xs text-green-500">
                <ArrowUpRight className="h-3 w-3 mr-1" />
                <span>+4 this month</span>
              </div>
            </div>

            <div className="space-y-2 text-center">
              <p className="text-sm text-[#666666]">At Risk</p>
              <p className="text-3xl font-bold">{clientsData.filter((c) => c.churn_risk_score > 0.7).length}</p>
              <div className="flex items-center justify-center text-xs text-red-500">
                <ArrowUpRight className="h-3 w-3 mr-1" />
                <span>+2 this month</span>
              </div>
            </div>

            <div className="space-y-2 text-center">
              <p className="text-sm text-[#666666]">Avg. Attendance</p>
              <p className="text-3xl font-bold">
                {(clientsData.reduce((sum, client) => sum + client.total_attendance, 0) / clientsData.length).toFixed(
                  1,
                )}
              </p>
              <div className="flex items-center justify-center text-xs text-green-500">
                <ArrowUpRight className="h-3 w-3 mr-1" />
                <span>+0.3 this month</span>
              </div>
            </div>

            <div className="space-y-2 text-center">
              <p className="text-sm text-[#666666]">Retention Rate</p>
              <p className="text-3xl font-bold">
                {Math.round((clientsData.filter((c) => c.churn_risk_score < 0.5).length / clientsData.length) * 100)}%
              </p>
              <div className="flex items-center justify-center text-xs text-red-500">
                <ArrowDownRight className="h-3 w-3 mr-1" />
                <span>-2% this month</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

