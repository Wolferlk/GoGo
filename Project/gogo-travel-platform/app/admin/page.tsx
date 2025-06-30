"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { Separator } from "@/components/ui/separator"
import { Breadcrumb, BreadcrumbItem, BreadcrumbList, BreadcrumbPage } from "@/components/ui/breadcrumb"
import {
  Users,
  Car,
  MapPin,
  DollarSign,
  TrendingUp,
  TrendingDown,
  Clock,
  CheckCircle,
  AlertTriangle,
  FileText,
} from "lucide-react"

export default function AdminDashboard() {
  const stats = [
    {
      title: "Total Users",
      value: "12,847",
      change: "+12.5%",
      trend: "up",
      icon: Users,
      color: "text-blue-600",
    },
    {
      title: "Active Drivers",
      value: "1,234",
      change: "+8.2%",
      trend: "up",
      icon: Car,
      color: "text-green-600",
    },
    {
      title: "Tour Guides",
      value: "456",
      change: "+15.3%",
      trend: "up",
      icon: MapPin,
      color: "text-purple-600",
    },
    {
      title: "Monthly Revenue",
      value: "Rs. 2.4M",
      change: "-2.1%",
      trend: "down",
      icon: DollarSign,
      color: "text-orange-600",
    },
  ]

  const recentBookings = [
    {
      id: "BK001",
      customer: "John Silva",
      service: "Taxi",
      driver: "Kamal Perera",
      amount: "Rs. 850",
      status: "completed",
      time: "2 hours ago",
    },
    {
      id: "BK002",
      customer: "Sarah Johnson",
      service: "Tour Guide",
      guide: "Nimal Fernando",
      amount: "Rs. 8,500",
      status: "ongoing",
      time: "4 hours ago",
    },
    {
      id: "BK003",
      customer: "Mike Chen",
      service: "Taxi",
      driver: "Sunil Rajapaksa",
      amount: "Rs. 1,200",
      status: "pending",
      time: "6 hours ago",
    },
  ]

  const pendingApplications = [
    {
      id: "APP001",
      name: "Chaminda Wickramasinghe",
      type: "Driver",
      submitted: "2 days ago",
      documents: 4,
    },
    {
      id: "APP002",
      name: "Priya Jayawardena",
      type: "Guide",
      submitted: "1 day ago",
      documents: 3,
    },
    {
      id: "APP003",
      name: "Rohan Mendis",
      type: "Driver",
      submitted: "3 hours ago",
      documents: 4,
    },
  ]

  return (
    <>
      <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
        <SidebarTrigger className="-ml-1" />
        <Separator orientation="vertical" className="mr-2 h-4" />
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbPage>Dashboard</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </header>

      <div className="flex flex-1 flex-col gap-4 p-4">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
            <p className="text-muted-foreground">Welcome back! Here's what's happening with your platform today.</p>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" className="bg-transparent">
              <FileText className="mr-2 h-4 w-4" />
              Export Report
            </Button>
            <Button>
              <TrendingUp className="mr-2 h-4 w-4" />
              View Analytics
            </Button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <Card key={stat.title}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
                <stat.icon className={`h-4 w-4 ${stat.color}`} />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <div className="flex items-center text-xs text-muted-foreground">
                  {stat.trend === "up" ? (
                    <TrendingUp className="mr-1 h-3 w-3 text-green-500" />
                  ) : (
                    <TrendingDown className="mr-1 h-3 w-3 text-red-500" />
                  )}
                  <span className={stat.trend === "up" ? "text-green-500" : "text-red-500"}>{stat.change}</span>
                  <span className="ml-1">from last month</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
          {/* Recent Bookings */}
          <Card className="col-span-4">
            <CardHeader>
              <CardTitle>Recent Bookings</CardTitle>
              <CardDescription>Latest booking activities on the platform</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentBookings.map((booking) => (
                  <div key={booking.id} className="flex items-center justify-between border-b pb-4 last:border-b-0">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="font-medium">{booking.customer}</span>
                        <Badge variant="outline" className="text-xs">
                          {booking.id}
                        </Badge>
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {booking.service} • {booking.service === "Taxi" ? booking.driver : booking.guide}
                      </div>
                      <div className="text-xs text-muted-foreground">{booking.time}</div>
                    </div>
                    <div className="text-right">
                      <div className="font-medium">{booking.amount}</div>
                      <Badge
                        variant={
                          booking.status === "completed"
                            ? "default"
                            : booking.status === "ongoing"
                              ? "secondary"
                              : "outline"
                        }
                        className="text-xs"
                      >
                        {booking.status}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Pending Applications */}
          <Card className="col-span-3">
            <CardHeader>
              <CardTitle>Pending Applications</CardTitle>
              <CardDescription>Driver and guide applications awaiting review</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {pendingApplications.map((app) => (
                  <div key={app.id} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium text-sm">{app.name}</div>
                        <div className="text-xs text-muted-foreground">
                          {app.type} Application • {app.submitted}
                        </div>
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {app.documents} docs
                      </Badge>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" className="h-7 text-xs">
                        Review
                      </Button>
                      <Button size="sm" variant="outline" className="h-7 text-xs bg-transparent">
                        View Details
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* System Status */}
        <div className="grid gap-4 md:grid-cols-3">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-base">System Status</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm">API Response Time</span>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-sm">120ms</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Database Status</span>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Healthy</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Payment Gateway</span>
                <div className="flex items-center gap-2">
                  <AlertTriangle className="h-4 w-4 text-yellow-500" />
                  <span className="text-sm">Slow</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-base">Today's Metrics</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="space-y-1">
                <div className="flex items-center justify-between text-sm">
                  <span>Active Drivers</span>
                  <span>847/1,234</span>
                </div>
                <Progress value={68} className="h-2" />
              </div>
              <div className="space-y-1">
                <div className="flex items-center justify-between text-sm">
                  <span>Completed Rides</span>
                  <span>234</span>
                </div>
                <Progress value={85} className="h-2" />
              </div>
              <div className="space-y-1">
                <div className="flex items-center justify-between text-sm">
                  <span>Customer Satisfaction</span>
                  <span>4.8/5.0</span>
                </div>
                <Progress value={96} className="h-2" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-base">Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <Button variant="outline" className="w-full justify-start bg-transparent" size="sm">
                <Users className="mr-2 h-4 w-4" />
                Manage Users
              </Button>
              <Button variant="outline" className="w-full justify-start bg-transparent" size="sm">
                <FileText className="mr-2 h-4 w-4" />
                Review Applications
              </Button>
              <Button variant="outline" className="w-full justify-start bg-transparent" size="sm">
                <DollarSign className="mr-2 h-4 w-4" />
                Process Payments
              </Button>
              <Button variant="outline" className="w-full justify-start bg-transparent" size="sm">
                <Clock className="mr-2 h-4 w-4" />
                System Maintenance
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  )
}
