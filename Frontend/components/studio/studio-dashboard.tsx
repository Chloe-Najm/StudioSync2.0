"use client"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BarChart, Activity, Users } from "lucide-react"

import { ClassDistribution } from "@/components/studio/class-distribution"
import { PromotionStats } from "@/components/studio/promotion-stats"
import { ClientSegments } from "@/components/studio/client-segments"

export function StudioDashboard() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-[#333333]">Studio Dashboard</h1>
        <p className="text-[#666666] mt-1">Analytics and insights for your fitness studio</p>
      </div>

      <Tabs defaultValue="class-distribution" className="space-y-6">
        <TabsList className="bg-[#FDF0EE]">
          <TabsTrigger
            value="class-distribution"
            className="data-[state=active]:bg-[#F2A0A0] data-[state=active]:text-white"
          >
            <BarChart className="h-4 w-4 mr-2" />
            Class Distribution
          </TabsTrigger>
          <TabsTrigger
            value="promotion-stats"
            className="data-[state=active]:bg-[#F2A0A0] data-[state=active]:text-white"
          >
            <Activity className="h-4 w-4 mr-2" />
            Promotion Stats
          </TabsTrigger>
          <TabsTrigger
            value="client-segments"
            className="data-[state=active]:bg-[#F2A0A0] data-[state=active]:text-white"
          >
            <Users className="h-4 w-4 mr-2" />
            Client Segments
          </TabsTrigger>
        </TabsList>

        <TabsContent value="class-distribution" className="space-y-6">
          <ClassDistribution />
        </TabsContent>

        <TabsContent value="promotion-stats" className="space-y-6">
          <PromotionStats />
        </TabsContent>

        <TabsContent value="client-segments" className="space-y-6">
          <ClientSegments />
        </TabsContent>
      </Tabs>
    </div>
  )
}

