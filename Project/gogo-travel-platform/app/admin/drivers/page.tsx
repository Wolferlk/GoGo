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
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Car, Search, MoreHorizontal, Eye, Edit, Ban, CheckCircle, Download, Star, MapPin, Phone } from "lucide-react"

export default function DriversPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [cityFilter, setCityFilter] = useState("all")

  const drivers = [
    {
      id: "DRV001",
      name: "Kamal Perera",
      email: "kamal.perera@email.com",
      phone: "+94 71 234 5678",
      city: "Colombo",
      vehicleType: "Car",
      vehicleMake: "Toyota Corolla",
      licensePlate: "ABC-1234",
      status: "Active",
      rating: 4.9,
      totalRides: 234,
      joinDate: "2024-01-10",
      lastActive: "2 hours ago",
      earnings: "Rs. 145,600",
      completionRate: 98,
      documents: {
        license: "verified",
        registration: "verified",
        insurance: "verified",
        background: "verified",
      },
    },
    {
      id: "DRV002",
      name: "Sunil Rajapaksa",
      email: "sunil.r@email.com",
      phone: "+94 77 345 6789",
      city: "Kandy",
      vehicleType: "Van",
      vehicleMake: "Toyota Hiace",
      licensePlate: "KY-5678",
      status: "Active",
      rating: 4.7,
      totalRides: 156,
      joinDate: "2024-01-08",
      lastActive: "1 hour ago",
      earnings: "Rs. 98,400",
      completionRate: 95,
      documents: {
        license: "verified",
        registration: "verified",
        insurance: "pending",
        background: "verified",
      },
    },
    {
      id: "DRV003",
      name: "Chaminda Silva",
      email: "chaminda.s@email.com",
      phone: "+94 76 456 7890",
      city: "Galle",
      vehicleType: "Car",
      vehicleMake: "Honda Civic",
      licensePlate: "GL-9012",
      status: "Inactive",
      rating: 4.5,
      totalRides: 89,
      joinDate: "2024-01-15",
      lastActive: "2 days ago",
      earnings: "Rs. 67,200",
      completionRate: 92,
      documents: {
        license: "verified",
        registration: "verified",
        insurance: "verified",
        background: "verified",
      },
    },
    {
      id: "DRV004",
      name: "Nimal Fernando",
      email: "nimal.f@email.com",
      phone: "+94 77 567 8901",
      city: "Negombo",
      vehicleType: "SUV",
      vehicleMake: "Toyota Prado",
      licensePlate: "NB-3456",
      status: "Suspended",
      rating: 3.8,
      totalRides: 45,
      joinDate: "2024-01-05",
      lastActive: "1 week ago",
      earnings: "Rs. 34,500",
      completionRate: 85,
      documents: {
        license: "verified",
        registration: "expired",
        insurance: "verified",
        background: "verified",
      },
    },
  ]

  const filteredDrivers = drivers.filter((driver) => {
    const matchesSearch =
      driver.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      driver.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      driver.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      driver.licensePlate.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === "all" || driver.status.toLowerCase() === statusFilter
    const matchesCity = cityFilter === "all" || driver.city.toLowerCase() === cityFilter

    return matchesSearch && matchesStatus && matchesCity
  })

  const getStatusBadge = (status: string) => {
    switch (status.toLowerCase()) {
      case "active":
        return <Badge className="bg-green-100 text-green-800 hover:bg-green-200">Active</Badge>
      case "inactive":
        return <Badge variant="secondary">Inactive</Badge>
      case "suspended":
        return <Badge variant="destructive">Suspended</Badge>
      default:
        return <Badge variant="outline">{status}</Badge>
    }
  }

  const getDocumentStatus = (status: string) => {
    switch (status) {
      case "verified":
        return <Badge className="bg-green-100 text-green-800 text-xs">Verified</Badge>
      case "pending":
        return (
          <Badge variant="secondary" className="text-xs">
            Pending
          </Badge>
        )
      case "expired":
        return (
          <Badge variant="destructive" className="text-xs">
            Expired
          </Badge>
        )
      default:
        return (
          <Badge variant="outline" className="text-xs">
            {status}
          </Badge>
        )
    }
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
              <BreadcrumbPage>Drivers</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </header>

      <div className="flex flex-1 flex-col gap-4 p-4">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Driver Management</h1>
            <p className="text-muted-foreground">Manage all drivers and their vehicle information</p>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" className="bg-transparent">
              <Download className="mr-2 h-4 w-4" />
              Export
            </Button>
            <Button>
              <Car className="mr-2 h-4 w-4" />
              Add Driver
            </Button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid gap-4 md:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Drivers</CardTitle>
              <Car className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{drivers.length}</div>
              <p className="text-xs text-muted-foreground">+8% from last month</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Drivers</CardTitle>
              <CheckCircle className="h-4 w-4 text-green-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{drivers.filter((d) => d.status === "Active").length}</div>
              <p className="text-xs text-muted-foreground">Currently available</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Avg. Rating</CardTitle>
              <Star className="h-4 w-4 text-yellow-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">4.7</div>
              <p className="text-xs text-muted-foreground">Out of 5.0</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Rides</CardTitle>
              <MapPin className="h-4 w-4 text-blue-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{drivers.reduce((sum, driver) => sum + driver.totalRides, 0)}</div>
              <p className="text-xs text-muted-foreground">Completed rides</p>
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
                  placeholder="Search drivers by name, email, ID, or license plate..."
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
                  <SelectItem value="active">Active</SelectItem>
                  <SelectItem value="inactive">Inactive</SelectItem>
                  <SelectItem value="suspended">Suspended</SelectItem>
                </SelectContent>
              </Select>
              <Select value={cityFilter} onValueChange={setCityFilter}>
                <SelectTrigger className="w-[150px]">
                  <SelectValue placeholder="City" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Cities</SelectItem>
                  <SelectItem value="colombo">Colombo</SelectItem>
                  <SelectItem value="kandy">Kandy</SelectItem>
                  <SelectItem value="galle">Galle</SelectItem>
                  <SelectItem value="negombo">Negombo</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Drivers Table */}
        <Card>
          <CardHeader>
            <CardTitle>Drivers ({filteredDrivers.length})</CardTitle>
            <CardDescription>Complete list of registered drivers and their information</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Driver</TableHead>
                  <TableHead>Vehicle</TableHead>
                  <TableHead>Performance</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Earnings</TableHead>
                  <TableHead>Last Active</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredDrivers.map((driver) => (
                  <TableRow key={driver.id}>
                    <TableCell>
                      <div className="space-y-1">
                        <div className="font-medium">{driver.name}</div>
                        <div className="text-sm text-muted-foreground">{driver.email}</div>
                        <div className="text-xs text-muted-foreground flex items-center gap-1">
                          <Phone className="h-3 w-3" />
                          {driver.phone}
                        </div>
                        <div className="text-xs text-muted-foreground flex items-center gap-1">
                          <MapPin className="h-3 w-3" />
                          {driver.city}
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="space-y-1">
                        <div className="font-medium">{driver.vehicleMake}</div>
                        <div className="text-sm text-muted-foreground">{driver.vehicleType}</div>
                        <div className="text-xs text-muted-foreground">{driver.licensePlate}</div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="space-y-1">
                        <div className="flex items-center gap-1">
                          <Star className="h-3 w-3 text-yellow-500" />
                          <span className="text-sm font-medium">{driver.rating}</span>
                        </div>
                        <div className="text-sm text-muted-foreground">{driver.totalRides} rides</div>
                        <div className="text-xs text-muted-foreground">{driver.completionRate}% completion</div>
                      </div>
                    </TableCell>
                    <TableCell>{getStatusBadge(driver.status)}</TableCell>
                    <TableCell>
                      <div className="font-medium">{driver.earnings}</div>
                      <div className="text-xs text-muted-foreground">Total earnings</div>
                    </TableCell>
                    <TableCell className="text-sm text-muted-foreground">{driver.lastActive}</TableCell>
                    <TableCell className="text-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" className="h-8 w-8 p-0">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <Dialog>
                            <DialogTrigger asChild>
                              <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
                                <Eye className="mr-2 h-4 w-4" />
                                View Details
                              </DropdownMenuItem>
                            </DialogTrigger>
                            <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                              <DialogHeader>
                                <DialogTitle>Driver Details</DialogTitle>
                                <DialogDescription>Complete information for {driver.name}</DialogDescription>
                              </DialogHeader>
                              <div className="grid gap-6">
                                {/* Personal Information */}
                                <div className="grid grid-cols-2 gap-6">
                                  <div className="space-y-4">
                                    <h4 className="font-semibold">Personal Information</h4>
                                    <div className="space-y-2 text-sm">
                                      <div className="grid grid-cols-2 gap-2">
                                        <Label>Name:</Label>
                                        <span>{driver.name}</span>
                                      </div>
                                      <div className="grid grid-cols-2 gap-2">
                                        <Label>Email:</Label>
                                        <span>{driver.email}</span>
                                      </div>
                                      <div className="grid grid-cols-2 gap-2">
                                        <Label>Phone:</Label>
                                        <span>{driver.phone}</span>
                                      </div>
                                      <div className="grid grid-cols-2 gap-2">
                                        <Label>City:</Label>
                                        <span>{driver.city}</span>
                                      </div>
                                      <div className="grid grid-cols-2 gap-2">
                                        <Label>Join Date:</Label>
                                        <span>{driver.joinDate}</span>
                                      </div>
                                    </div>
                                  </div>

                                  <div className="space-y-4">
                                    <h4 className="font-semibold">Vehicle Information</h4>
                                    <div className="space-y-2 text-sm">
                                      <div className="grid grid-cols-2 gap-2">
                                        <Label>Vehicle:</Label>
                                        <span>{driver.vehicleMake}</span>
                                      </div>
                                      <div className="grid grid-cols-2 gap-2">
                                        <Label>Type:</Label>
                                        <span>{driver.vehicleType}</span>
                                      </div>
                                      <div className="grid grid-cols-2 gap-2">
                                        <Label>License Plate:</Label>
                                        <span>{driver.licensePlate}</span>
                                      </div>
                                      <div className="grid grid-cols-2 gap-2">
                                        <Label>Status:</Label>
                                        {getStatusBadge(driver.status)}
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                {/* Performance Metrics */}
                                <div className="space-y-4">
                                  <h4 className="font-semibold">Performance Metrics</h4>
                                  <div className="grid grid-cols-4 gap-4 text-sm">
                                    <div className="text-center p-3 border rounded">
                                      <div className="text-2xl font-bold text-yellow-600">{driver.rating}</div>
                                      <div className="text-xs text-muted-foreground">Rating</div>
                                    </div>
                                    <div className="text-center p-3 border rounded">
                                      <div className="text-2xl font-bold text-blue-600">{driver.totalRides}</div>
                                      <div className="text-xs text-muted-foreground">Total Rides</div>
                                    </div>
                                    <div className="text-center p-3 border rounded">
                                      <div className="text-2xl font-bold text-green-600">{driver.completionRate}%</div>
                                      <div className="text-xs text-muted-foreground">Completion</div>
                                    </div>
                                    <div className="text-center p-3 border rounded">
                                      <div className="text-2xl font-bold text-purple-600">{driver.earnings}</div>
                                      <div className="text-xs text-muted-foreground">Earnings</div>
                                    </div>
                                  </div>
                                </div>

                                {/* Document Status */}
                                <div className="space-y-4">
                                  <h4 className="font-semibold">Document Status</h4>
                                  <div className="grid grid-cols-2 gap-4">
                                    <div className="flex items-center justify-between p-3 border rounded">
                                      <span className="text-sm">Driving License</span>
                                      {getDocumentStatus(driver.documents.license)}
                                    </div>
                                    <div className="flex items-center justify-between p-3 border rounded">
                                      <span className="text-sm">Vehicle Registration</span>
                                      {getDocumentStatus(driver.documents.registration)}
                                    </div>
                                    <div className="flex items-center justify-between p-3 border rounded">
                                      <span className="text-sm">Insurance</span>
                                      {getDocumentStatus(driver.documents.insurance)}
                                    </div>
                                    <div className="flex items-center justify-between p-3 border rounded">
                                      <span className="text-sm">Background Check</span>
                                      {getDocumentStatus(driver.documents.background)}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </DialogContent>
                          </Dialog>
                          <DropdownMenuItem>
                            <Edit className="mr-2 h-4 w-4" />
                            Edit Driver
                          </DropdownMenuItem>
                          {driver.status === "Active" ? (
                            <DropdownMenuItem className="text-red-600">
                              <Ban className="mr-2 h-4 w-4" />
                              Suspend Driver
                            </DropdownMenuItem>
                          ) : (
                            <DropdownMenuItem className="text-green-600">
                              <CheckCircle className="mr-2 h-4 w-4" />
                              Activate Driver
                            </DropdownMenuItem>
                          )}
                        </DropdownMenuContent>
                      </DropdownMenu>
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
