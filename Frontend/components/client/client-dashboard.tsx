import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function ClientDashboard() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-[#333333]">Your Fitness Dashboard</h1>
        <p className="text-[#666666] mt-1">Track your progress and upcoming classes.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card className="border-[#F7D6D4]">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-[#666666]">Classes Attended</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-[#333333]">24</div>
            <p className="text-xs text-green-500 mt-1">+3 from last month</p>
          </CardContent>
        </Card>

        <Card className="border-[#F7D6D4]">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-[#666666]">Upcoming Classes</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-[#333333]">5</div>
            <p className="text-xs text-[#999999] mt-1">Next: Spin Class (Tomorrow)</p>
          </CardContent>
        </Card>

        <Card className="border-[#F7D6D4]">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-[#666666]">Membership Status</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-[#333333]">10 class pack</div>
            <p className="text-xs text-[#999999] mt-1">Renews in 45 days</p>
          </CardContent>
        </Card>

        <Card className="border-[#F7D6D4]">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-[#666666]">Loyalty Points</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-[#333333]">450</div>
            <p className="text-xs text-[#999999] mt-1">50 points until next reward</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="border-[#F7D6D4]">
          <CardHeader>
            <CardTitle>Class Attendance</CardTitle>
            <CardDescription>Your attendance by class type</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-medium">Spin 45</span>
                  <span className="text-sm text-[#666666]">12 classes</span>
                </div>
                <div className="h-2 w-full rounded-full bg-[#FDF0EE]">
                  <div className="h-2 rounded-full bg-[#F2A0A0]" style={{ width: "40%" }}></div>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-medium">Barre 45</span>
                  <span className="text-sm text-[#666666]">8 classes</span>
                </div>
                <div className="h-2 w-full rounded-full bg-[#FDF0EE]">
                  <div className="h-2 rounded-full bg-[#F2A0A0]" style={{ width: "27%" }}></div>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-medium">HIIT</span>
                  <span className="text-sm text-[#666666]">6 classes</span>
                </div>
                <div className="h-2 w-full rounded-full bg-[#FDF0EE]">
                  <div className="h-2 rounded-full bg-[#F2A0A0]" style={{ width: "20%" }}></div>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-medium">TRX</span>
                  <span className="text-sm text-[#666666]">4 classes</span>
                </div>
                <div className="h-2 w-full rounded-full bg-[#FDF0EE]">
                  <div className="h-2 rounded-full bg-[#F2A0A0]" style={{ width: "13%" }}></div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-[#F7D6D4]">
          <CardHeader>
            <CardTitle>Upcoming Classes</CardTitle>
            <CardDescription>Your scheduled classes</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between rounded-lg border border-[#F7D6D4] p-3">
                <div>
                  <p className="font-medium">Spin 45</p>
                  <p className="text-sm text-[#666666]">Tomorrow, 7:00 AM</p>
                </div>
                <div className="rounded-full bg-[#FDF0EE] px-3 py-1 text-xs font-medium text-[#F2A0A0]">Confirmed</div>
              </div>

              <div className="flex items-center justify-between rounded-lg border border-[#F7D6D4] p-3">
                <div>
                  <p className="font-medium">Barre 45</p>
                  <p className="text-sm text-[#666666]">Wed, 6:30 PM</p>
                </div>
                <div className="rounded-full bg-[#FDF0EE] px-3 py-1 text-xs font-medium text-[#F2A0A0]">Confirmed</div>
              </div>

              <div className="flex items-center justify-between rounded-lg border border-[#F7D6D4] p-3">
                <div>
                  <p className="font-medium">HIIT</p>
                  <p className="text-sm text-[#666666]">Fri, 12:00 PM</p>
                </div>
                <div className="rounded-full bg-[#FDF0EE] px-3 py-1 text-xs font-medium text-[#F2A0A0]">Confirmed</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

