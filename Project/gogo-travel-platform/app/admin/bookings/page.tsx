"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
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
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { FileText, Search, Eye, MapPin, Clock, DollarSign, Car, Users, Calendar, Download } from "lucide-react"

export default function BookingsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [serviceFilter, setServiceFilter] = useState("all")

  const bookings = [
    {
      id: "BK001",
      customer: "John Silva",
      customerEmail: "john.silva@email.com",
      service: "Taxi",
      provider: "Kamal Perera",
      pickup: "Colombo Fort",
      destination: "Bandaranaike Airport",
      date: "2024-01-20",
      time: "14:30",
      amount: "Rs. 2,500",
      status: "Completed",
      duration: "45 mins",
      distance: "35 km",
      paymentMethod: "Card",
    },
    {
      id: "BK002",
      customer: "Sarah Johnson",
      customerEmail: "sarah.j@email.com",
      service: "Tour Guide",
      provider: "Priya Jayawardena",
      pickup: "Galle Hotel",
      destination: "Galle Fort Tour",
      date: "2024-01-21",
      time: "09:00",
      amount: "Rs. 8,500",
      status: "Ongoing",
      duration: "8 hours",
      distance: "25 km",
      paymentMethod: "Cash",
    },
    {
      id: "BK003",
      customer: "Mike Chen",
      customerEmail: "mike.chen@email.com",
      service: "Taxi",
      provider: "Sunil Rajapaksa",
      pickup: "Kandy City Center",
      destination: "Temple of Tooth",
      date: "2024-01-21",
      time: "16:00",
      amount: "Rs. 850",
      status: "Pending",
      duration: "20 mins",
      distance: "8 km",
      paymentMethod: "Digital Wallet",
    },
    {
      id: "BK004",
      customer: "Emma Wilson",
      customerEmail: "emma.w@email.com",
      service: "Tour Guide",
      provider: "Nimal Fernando",
      pickup: "Kandy Hotel",
      destination: "Sigiriya Rock Fortress",
      date: "2024-01-19",
      time: "08:00",
      amount: "Rs. 12,000",
      status: "Completed",
      duration: "10 hours",
      distance: "120 km",
      paymentMethod: "Card",
    },
    {
      id: "BK005",
      customer: "David Brown",
      customerEmail: "david.b@email.com",
      service: "Taxi",
      provider: "Chaminda Silva",
      pickup: "Negombo Beach",
      destination: "Colombo Airport",
      date: "2024-01-22",
      time: "11:30",
      amount: "Rs. 1,800",
      status: "Cancelled",
      duration: "40 mins",
      distance: "30 km",
      paymentMethod: "Card",
    },
  ]

  const filteredBookings = bookings.filter((booking) => {
    const matchesSearch =
      booking.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      booking.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      booking.provider.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === "all" || booking.status.toLowerCase() === statusFilter
    const matchesService = serviceFilter === "all" || booking.service.toLowerCase() === serviceFilter

    return matchesSearch && matchesStatus && matchesService
  })

  const getStatusBadge = (status: string) => {
    switch (status.toLowerCase()) {
      case "completed":
        return <Badge className="bg-green-100 text-green-800 hover:bg-green-200">Completed</Badge>
      case "ongoing":
        return <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">Ongoing</Badge>
      case "pending":
        return <Badge variant="secondary">Pending</Badge>
      case "cancelled":
        return <Badge variant="destructive">Cancelled</Badge>
      default:
        return <Badge variant="outline">{status}</Badge>
    }
  }

  const getServiceIcon = (service: string) => {
    return service === "Taxi" ? <Car className="h-4 w-4" /> : <Users className="h-4 w-4" />
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
              <BreadcrumbPage>Bookings</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </header>

      <div className="flex flex-1 flex-col gap-4 p-4">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Booking Management</h1>
            <p className="text-muted-foreground">Monitor and manage all bookings on the platform</p>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" className="bg-transparent">
              <Download className="mr-2 h-4 w-4" />
              Export
            </Button>
            <Button>
              <FileText className="mr-2 h-4 w-4" />
              Generate Report
            </Button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid gap-4 md:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Bookings</CardTitle>
              <FileText className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{bookings.length}</div>
              <p className="text-xs text-muted-foreground">+15% from last week</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Completed</CardTitle>
              <FileText className="h-4 w-4 text-green-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{bookings.filter((b) => b.status === "Completed").length}</div>
              <p className="text-xs text-muted-foreground">Successfully finished</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Ongoing</CardTitle>
              <FileText className="h-4 w-4 text-blue-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{bookings.filter((b) => b.status === "Ongoing").length}</div>
              <p className="text-xs text-muted-foreground">Currently active</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Revenue Today</CardTitle>
              <DollarSign className="h-4 w-4 text-orange-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">Rs. 24,650</div>
              <p className="text-xs text-muted-foreground">From completed bookings</p>
            </CardContent>
          </Card>
        </div>

        {/* Filters */}
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search bookings by customer, ID, or provider..."
                  className="pl-10"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-[150px]">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="completed">Completed</SelectItem>
                  <SelectItem value="ongoing">Ongoing</SelectItem>
                  <SelectItem value="pending">Pending</SelectItem>
                  <SelectItem value="cancelled">Cancelled</SelectItem>
                </SelectContent>
              </Select>
              <Select value={serviceFilter} onValueChange={setServiceFilter}>
                <SelectTrigger className="w-[150px]">
                  <SelectValue placeholder="Service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Services</SelectItem>
                  <SelectItem value="taxi">Taxi</SelectItem>
                  <SelectItem value="tour guide">Tour Guide</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Bookings Table */}
        <Card>
          <CardHeader>
            <CardTitle>Bookings ({filteredBookings.length})</CardTitle>
            <CardDescription>All booking records and their current status</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Booking</TableHead>
                  <TableHead>Service</TableHead>
                  <TableHead>Route</TableHead>
                  <TableHead>Date & Time</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredBookings.map((booking) => (
                  <TableRow key={booking.id}>
                    <TableCell>
                      <div className="space-y-1">
                        <div className="font-medium">{booking.customer}</div>
                        <div className="text-sm text-muted-foreground">{booking.id}</div>
                        <div className="text-xs text-muted-foreground">{booking.customerEmail}</div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        {getServiceIcon(booking.service)}
                        <div>
                          <div className="font-medium">{booking.service}</div>
                          <div className="text-sm text-muted-foreground">{booking.provider}</div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="space-y-1">
                        <div className="text-sm">
                          <MapPin className="inline h-3 w-3 mr-1" />
                          {booking.pickup}
                        </div>
                        <div className="text-sm text-muted-foreground">→ {booking.destination}</div>
                        <div className="text-xs text-muted-foreground">
                          {booking.distance} • {booking.duration}
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="space-y-1">
                        <div className="flex items-center gap-1 text-sm">
                          <Calendar className="h-3 w-3" />
                          {booking.date}
                        </div>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <Clock className="h-3 w-3" />
                          {booking.time}
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="space-y-1">
                        <div className="font-medium">{booking.amount}</div>
                        <div className="text-xs text-muted-foreground">{booking.paymentMethod}</div>
                      </div>
                    </TableCell>
                    <TableCell>{getStatusBadge(booking.status)}</TableCell>
                    <TableCell className="text-right">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant="outline" size="sm" className="bg-transparent">
                            <Eye className="mr-2 h-4 w-4" />
                            View
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-2xl">
                          <DialogHeader>
                            <DialogTitle>Booking Details</DialogTitle>
                            <DialogDescription>Complete information for booking {booking.id}</DialogDescription>
                          </DialogHeader>
                          <div className="grid gap-6">
                            <div className="grid grid-cols-2 gap-4">
                              <div className="space-y-3">
                                <h4 className="font-semibold">Customer Information</h4>
                                <div className="space-y-2 text-sm">
                                  <div>
                                    <span className="font-medium">Name:</span> {booking.customer}
                                  </div>
                                  <div>
                                    <span className="font-medium">Email:</span> {booking.customerEmail}
                                  </div>
                                  <div>
                                    <span className="font-medium">Booking ID:</span> {booking.id}
                                  </div>
                                </div>
                              </div>
                              <div className="space-y-3">
                                <h4 className="font-semibold">Service Provider</h4>
                                <div className="space-y-2 text-sm">
                                  <div>
                                    <span className="font-medium">Provider:</span> {booking.provider}
                                  </div>
                                  <div>
                                    <span className="font-medium">Service:</span> {booking.service}
                                  </div>
                                  <div>
                                    <span className="font-medium">Status:</span> {booking.status}
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="space-y-3">
                              <h4 className="font-semibold">Trip Details</h4>
                              <div className="grid grid-cols-2 gap-4 text-sm">
                                <div>
                                  <span className="font-medium">Pickup:</span> {booking.pickup}
                                </div>
                                <div>
                                  <span className="font-medium">Destination:</span> {booking.destination}
                                </div>
                                <div>
                                  <span className="font-medium">Date:</span> {booking.date}
                                </div>
                                <div>
                                  <span className="font-medium">Time:</span> {booking.time}
                                </div>
                                <div>
                                  <span className="font-medium">Distance:</span> {booking.distance}
                                </div>
                                <div>
                                  <span className="font-medium">Duration:</span> {booking.duration}
                                </div>
                              </div>
                            </div>

                            <div className="space-y-3">
                              <h4 className="font-semibold">Payment Information</h4>
                              <div className="grid grid-cols-2 gap-4 text-sm">
                                <div>
                                  <span className="font-medium">Amount:</span> {booking.amount}
                                </div>
                                <div>
                                  <span className="font-medium">Payment Method:</span> {booking.paymentMethod}
                                </div>
                              </div>
                            </div>
                          </div>
                        </DialogContent>
                      </Dialog>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </>
  )
}
