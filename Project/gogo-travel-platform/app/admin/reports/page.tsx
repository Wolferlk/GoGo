"use client"

import { useState } from "react"
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  BarChart3,
  Download,
  DollarSign,
  TrendingUp,
  TrendingDown,
  Users,
  Car,
  MapPin,
  FileText,
  Eye,
} from "lucide-react"

export default function ReportsPage() {
  const [dateRange, setDateRange] = useState("last-30-days")
  const [reportType, setReportType] = useState("revenue")

  const revenueData = [
    { period: "Jan 2024", revenue: "Rs. 2,847,650", growth: "+12.5%", bookings: 1847 },
    { period: "Dec 2023", revenue: "Rs. 2,531,200", growth: "+8.2%", bookings: 1654 },
    { period: "Nov 2023", revenue: "Rs. 2,342,100", growth: "+15.3%", bookings: 1523 },
    { period: "Oct 2023", revenue: "Rs. 2,031,800", growth: "+5.7%", bookings: 1398 },
    { period: "Sep 2023", revenue: "Rs. 1,923,400", growth: "+18.9%", bookings: 1287 },
  ]

  const userReports = [
    { metric: "Total Users", current: 12847, previous: 11456, change: "+12.1%" },
    { metric: "New Registrations", current: 1391, previous: 1242, change: "+12.0%" },
    { metric: "Active Users", current: 8934, previous: 8123, change: "+10.0%" },
    { metric: "User Retention", current: 78, previous: 75, change: "+4.0%" },
  ]

  const driverReports = [
    { metric: "Total Drivers", current: 1234, previous: 1142, change: "+8.1%" },
    { metric: "Active Drivers", current: 847, previous: 789, change: "+7.3%" },
    { metric: "New Applications", current: 92, previous: 67, change: "+37.3%" },
    { metric: "Avg. Rating", current: 4.8, previous: 4.7, change: "+2.1%" },
  ]

  const guideReports = [
    { metric: "Total Guides", current: 456, previous: 398, change: "+14.6%" },
    { metric: "Active Guides", current: 234, previous: 201, change: "+16.4%" },
    { metric: "New Applications", current: 58, previous: 43, change: "+34.9%" },
    { metric: "Avg. Rating", current: 4.9, previous: 4.8, change: "+2.1%" },
  ]

  const financialReports = [
    { metric: "Total Revenue", amount: "Rs. 2,847,650", change: "+12.5%", trend: "up" },
    { metric: "Commission Earned", amount: "Rs. 427,148", change: "+12.5%", trend: "up" },
    { metric: "Driver Payouts", amount: "Rs. 1,420,502", change: "+8.2%", trend: "up" },
    { metric: "Guide Payouts", amount: "Rs. 1,000,000", change: "+15.3%", trend: "up" },
  ]

  const topPerformers = [
    { name: "Kamal Perera", type: "Driver", earnings: "Rs. 145,600", rating: 4.9, trips: 234 },
    { name: "Priya Jayawardena", type: "Guide", earnings: "Rs. 234,500", rating: 4.9, trips: 89 },
    { name: "Nimal Fernando", type: "Guide", earnings: "Rs. 387,200", rating: 4.8, trips: 156 },
    { name: "Sunil Rajapaksa", type: "Driver", earnings: "Rs. 98,400", rating: 4.7, trips: 156 },
  ]

  const getTrendIcon = (trend: string) => {
    return trend === "up" ? (
      <TrendingUp className="h-4 w-4 text-green-500" />
    ) : (
      <TrendingDown className="h-4 w-4 text-red-500" />
    )
  }

  const generateReport = () => {
    console.log(`Generating ${reportType} report for ${dateRange}`)
    alert(`${reportType} report generated successfully!`)
  }

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
              <BreadcrumbPage>Reports</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </header>

      <div className="flex flex-1 flex-col gap-4 p-4">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Reports & Analytics</h1>
            <p className="text-muted-foreground">Generate detailed reports and analyze platform performance</p>
          </div>
          <div className="flex items-center gap-2">
            <Select value={dateRange} onValueChange={setDateRange}>
              <SelectTrigger className="w-[180px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="last-7-days">Last 7 days</SelectItem>
                <SelectItem value="last-30-days">Last 30 days</SelectItem>
                <SelectItem value="last-3-months">Last 3 months</SelectItem>
                <SelectItem value="last-year">Last year</SelectItem>
                <SelectItem value="custom">Custom range</SelectItem>
              </SelectContent>
            </Select>
            <Select value={reportType} onValueChange={setReportType}>
              <SelectTrigger className="w-[150px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="revenue">Revenue</SelectItem>
                <SelectItem value="users">Users</SelectItem>
                <SelectItem value="drivers">Drivers</SelectItem>
                <SelectItem value="guides">Guides</SelectItem>
                <SelectItem value="bookings">Bookings</SelectItem>
              </SelectContent>
            </Select>
            <Button onClick={generateReport}>
              <FileText className="mr-2 h-4 w-4" />
              Generate Report
            </Button>
            <Button variant="outline" className="bg-transparent">
              <Download className="mr-2 h-4 w-4" />
              Export
            </Button>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid gap-4 md:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">Rs. 2,847,650</div>
              <div className="flex items-center text-xs text-muted-foreground">
                <TrendingUp className="mr-1 h-3 w-3 text-green-500" />
                <span className="text-green-500">+12.5%</span>
                <span className="ml-1">from last month</span>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Users</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12,847</div>
              <div className="flex items-center text-xs text-muted-foreground">
                <TrendingUp className="mr-1 h-3 w-3 text-green-500" />
                <span className="text-green-500">+8.2%</span>
                <span className="ml-1">from last month</span>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Providers</CardTitle>
              <Car className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1,081</div>
              <div className="flex items-center text-xs text-muted-foreground">
                <TrendingUp className="mr-1 h-3 w-3 text-green-500" />
                <span className="text-green-500">+15.3%</span>
                <span className="ml-1">from last month</span>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Bookings</CardTitle>
              <BarChart3 className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1,847</div>
              <div className="flex items-center text-xs text-muted-foreground">
                <TrendingUp className="mr-1 h-3 w-3 text-green-500" />
                <span className="text-green-500">+5.7%</span>
                <span className="ml-1">from last month</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Reports Tabs */}
        <Tabs defaultValue="revenue" className="space-y-4">
          <TabsList>
            <TabsTrigger value="revenue">Revenue Reports</TabsTrigger>
            <TabsTrigger value="users">User Reports</TabsTrigger>
            <TabsTrigger value="providers">Provider Reports</TabsTrigger>
            <TabsTrigger value="performance">Performance Reports</TabsTrigger>
          </TabsList>

          {/* Revenue Reports */}
          <TabsContent value="revenue">
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Monthly Revenue Trend</CardTitle>
                  <CardDescription>Revenue performance over the last 5 months</CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Period</TableHead>
                        <TableHead>Revenue</TableHead>
                        <TableHead>Growth</TableHead>
                        <TableHead>Bookings</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {revenueData.map((data) => (
                        <TableRow key={data.period}>
                          <TableCell className="font-medium">{data.period}</TableCell>
                          <TableCell>{data.revenue}</TableCell>
                          <TableCell>
                            <Badge className="bg-green-100 text-green-800 hover:bg-green-200">{data.growth}</Badge>
                          </TableCell>
                          <TableCell>{data.bookings}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Financial Breakdown</CardTitle>
                  <CardDescription>Current month financial metrics</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {financialReports.map((report) => (
                    <div key={report.metric} className="flex items-center justify-between">
                      <div className="space-y-1">
                        <div className="text-sm font-medium">{report.metric}</div>
                        <div className="text-2xl font-bold">{report.amount}</div>
                      </div>
                      <div className="flex items-center gap-1">
                        {getTrendIcon(report.trend)}
                        <span className={`text-sm ${report.trend === "up" ? "text-green-600" : "text-red-600"}`}>
                          {report.change}
                        </span>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* User Reports */}
          <TabsContent value="users">
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>User Metrics</CardTitle>
                  <CardDescription>User growth and engagement statistics</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {userReports.map((report) => (
                    <div key={report.metric} className="flex items-center justify-between">
                      <div className="space-y-1">
                        <div className="text-sm font-medium">{report.metric}</div>
                        <div className="text-2xl font-bold">
                          {report.metric.includes("Retention") ? `${report.current}%` : report.current.toLocaleString()}
                        </div>
                      </div>
                      <div className="flex items-center gap-1">
                        <TrendingUp className="h-4 w-4 text-green-500" />
                        <span className="text-sm text-green-600">{report.change}</span>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>User Activity Chart</CardTitle>
                  <CardDescription>Daily active users over time</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[200px] flex items-center justify-center bg-muted/20 rounded-lg">
                    <div className="text-center">
                      <BarChart3 className="h-12 w-12 text-muted-foreground mx-auto mb-2" />
                      <p className="text-sm text-muted-foreground">User Activity Chart</p>
                      <p className="text-xs text-muted-foreground">Chart visualization would be implemented here</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Provider Reports */}
          <TabsContent value="providers">
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Driver Metrics</CardTitle>
                  <CardDescription>Driver performance and growth</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {driverReports.map((report) => (
                    <div key={report.metric} className="flex items-center justify-between">
                      <div className="space-y-1">
                        <div className="text-sm font-medium">{report.metric}</div>
                        <div className="text-2xl font-bold">
                          {report.metric.includes("Rating") ? report.current : report.current.toLocaleString()}
                        </div>
                      </div>
                      <div className="flex items-center gap-1">
                        <TrendingUp className="h-4 w-4 text-green-500" />
                        <span className="text-sm text-green-600">{report.change}</span>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Guide Metrics</CardTitle>
                  <CardDescription>Tour guide performance and growth</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {guideReports.map((report) => (
                    <div key={report.metric} className="flex items-center justify-between">
                      <div className="space-y-1">
                        <div className="text-sm font-medium">{report.metric}</div>
                        <div className="text-2xl font-bold">
                          {report.metric.includes("Rating") ? report.current : report.current.toLocaleString()}
                        </div>
                      </div>
                      <div className="flex items-center gap-1">
                        <TrendingUp className="h-4 w-4 text-green-500" />
                        <span className="text-sm text-green-600">{report.change}</span>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Performance Reports */}
          <TabsContent value="performance">
            <Card>
              <CardHeader>
                <CardTitle>Top Performers</CardTitle>
                <CardDescription>Highest earning drivers and guides this month</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Type</TableHead>
                      <TableHead>Earnings</TableHead>
                      <TableHead>Rating</TableHead>
                      <TableHead>Trips/Tours</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {topPerformers.map((performer) => (
                      <TableRow key={performer.name}>
                        <TableCell className="font-medium">{performer.name}</TableCell>
                        <TableCell>
                          <Badge variant="outline" className="flex items-center gap-1 w-fit">
                            {performer.type === "Driver" ? <Car className="h-3 w-3" /> : <MapPin className="h-3 w-3" />}
                            {performer.type}
                          </Badge>
                        </TableCell>
                        <TableCell className="font-medium text-green-600">{performer.earnings}</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-1">
                            <span className="text-yellow-500">★</span>
                            {performer.rating}
                          </div>
                        </TableCell>
                        <TableCell>{performer.trips}</TableCell>
                        <TableCell className="text-right">
                          <Button variant="outline" size="sm" className="bg-transparent">
                            <Eye className="mr-2 h-4 w-4" />
                            View Details
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </>
  )
}
