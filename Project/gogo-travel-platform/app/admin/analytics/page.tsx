"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { Separator } from "@/components/ui/separator"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Progress } from "@/components/ui/progress"
import { BarChart3, TrendingUp, TrendingDown, Users, Car, MapPin, Download, RefreshCw } from "lucide-react"

export default function AnalyticsPage() {
  const timeRanges = ["Last 7 days", "Last 30 days", "Last 3 months", "Last year"]

  const metrics = [
    {
      title: "Total Revenue",
      value: "Rs. 2,847,650",
      change: "+12.5%",
      trend: "up",
      period: "vs last month",
    },
    {
      title: "Total Bookings",
      value: "1,847",
      change: "+8.2%",
      trend: "up",
      period: "vs last month",
    },
    {
      title: "Active Users",
      value: "12,847",
      change: "+15.3%",
      trend: "up",
      period: "vs last month",
    },
    {
      title: "Conversion Rate",
      value: "3.2%",
      change: "-0.8%",
      trend: "down",
      period: "vs last month",
    },
  ]

  const topRoutes = [
    { route: "Colombo → Airport", bookings: 234, revenue: "Rs. 585,000" },
    { route: "Kandy → Sigiriya", bookings: 156, revenue: "Rs. 1,872,000" },
    { route: "Galle → Unawatuna", bookings: 89, revenue: "Rs. 445,000" },
    { route: "Negombo → Colombo", bookings: 67, revenue: "Rs. 120,600" },
    { route: "Ella → Nuwara Eliya", bookings: 45, revenue: "Rs. 540,000" },
  ]

  const performanceData = [
    { category: "Driver Performance", value: 94, color: "bg-green-500" },
    { category: "Guide Performance", value: 96, color: "bg-blue-500" },
    { category: "Customer Satisfaction", value: 92, color: "bg-purple-500" },
    { category: "On-time Performance", value: 88, color: "bg-orange-500" },
  ]

  const cityStats = [
    { city: "Colombo", bookings: 456, revenue: "Rs. 1,140,000", growth: "+15%" },
    { city: "Kandy", bookings: 234, revenue: "Rs. 702,000", growth: "+8%" },
    { city: "Galle", bookings: 189, revenue: "Rs. 567,000", growth: "+12%" },
    { city: "Negombo", bookings: 123, revenue: "Rs. 369,000", growth: "+5%" },
    { city: "Ella", bookings: 89, revenue: "Rs. 267,000", growth: "+18%" },
  ]

  return (
    <>
      <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
        <SidebarTrigger className="-ml-1" />
        <Separator orientation="vertical" className="mr-2 h-4" />
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/admin">Dashboard</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Analytics</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </header>

      <div className="flex flex-1 flex-col gap-4 p-4">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Analytics</h1>
            <p className="text-muted-foreground">Detailed insights and performance metrics for your platform</p>
          </div>
          <div className="flex items-center gap-2">
            <Select defaultValue="Last 30 days">
              <SelectTrigger className="w-[150px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {timeRanges.map((range) => (
                  <SelectItem key={range} value={range}>
                    {range}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Button variant="outline" className="bg-transparent">
              <RefreshCw className="mr-2 h-4 w-4" />
              Refresh
            </Button>
            <Button variant="outline" className="bg-transparent">
              <Download className="mr-2 h-4 w-4" />
              Export
            </Button>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {metrics.map((metric) => (
            <Card key={metric.title}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{metric.title}</CardTitle>
                <BarChart3 className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{metric.value}</div>
                <div className="flex items-center text-xs text-muted-foreground">
                  {metric.trend === "up" ? (
                    <TrendingUp className="mr-1 h-3 w-3 text-green-500" />
                  ) : (
                    <TrendingDown className="mr-1 h-3 w-3 text-red-500" />
                  )}
                  <span className={metric.trend === "up" ? "text-green-500" : "text-red-500"}>{metric.change}</span>
                  <span className="ml-1">{metric.period}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
          {/* Revenue Chart Placeholder */}
          <Card className="col-span-4">
            <CardHeader>
              <CardTitle>Revenue Trends</CardTitle>
              <CardDescription>Monthly revenue breakdown for the past year</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px] flex items-center justify-center bg-muted/20 rounded-lg">
                <div className="text-center">
                  <BarChart3 className="h-12 w-12 text-muted-foreground mx-auto mb-2" />
                  <p className="text-sm text-muted-foreground">Revenue Chart</p>
                  <p className="text-xs text-muted-foreground">Chart visualization would be implemented here</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Top Routes */}
          <Card className="col-span-3">
            <CardHeader>
              <CardTitle>Top Routes</CardTitle>
              <CardDescription>Most popular booking routes this month</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {topRoutes.map((route, index) => (
                  <div key={route.route} className="flex items-center justify-between">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className="text-xs">
                          #{index + 1}
                        </Badge>
                        <span className="font-medium text-sm">{route.route}</span>
                      </div>
                      <div className="text-xs text-muted-foreground">{route.bookings} bookings</div>
                    </div>
                    <div className="text-right">
                      <div className="font-medium text-sm">{route.revenue}</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {/* Performance Metrics */}
          <Card>
            <CardHeader>
              <CardTitle>Performance Metrics</CardTitle>
              <CardDescription>Key performance indicators across the platform</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {performanceData.map((item) => (
                <div key={item.category} className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span>{item.category}</span>
                    <span className="font-medium">{item.value}%</span>
                  </div>
                  <Progress value={item.value} className="h-2" />
                </div>
              ))}
            </CardContent>
          </Card>

          {/* City Performance */}
          <Card>
            <CardHeader>
              <CardTitle>City Performance</CardTitle>
              <CardDescription>Booking and revenue breakdown by city</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {cityStats.map((city) => (
                  <div key={city.city} className="flex items-center justify-between">
                    <div className="space-y-1">
                      <div className="font-medium text-sm">{city.city}</div>
                      <div className="text-xs text-muted-foreground">{city.bookings} bookings</div>
                    </div>
                    <div className="text-right">
                      <div className="font-medium text-sm">{city.revenue}</div>
                      <div className="text-xs text-green-600">{city.growth}</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Additional Analytics */}
        <div className="grid gap-4 md:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                User Analytics
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between text-sm">
                <span>New Users</span>
                <span className="font-medium">+234 this month</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>User Retention</span>
                <span className="font-medium">78%</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Active Sessions</span>
                <span className="font-medium">1,247</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Car className="h-5 w-5" />
                Driver Analytics
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between text-sm">
                <span>Active Drivers</span>
                <span className="font-medium">847/1,234</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Avg. Rating</span>
                <span className="font-medium">4.8/5.0</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Completion Rate</span>
                <span className="font-medium">94%</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                Guide Analytics
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between text-sm">
                <span>Active Guides</span>
                <span className="font-medium">234/456</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Avg. Rating</span>
                <span className="font-medium">4.9/5.0</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Tour Completion</span>
                <span className="font-medium">96%</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  )
}
