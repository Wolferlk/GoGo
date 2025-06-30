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
import { MapPin, Search, MoreHorizontal, Eye, Edit, Ban, CheckCircle, Download, Star, Phone, Award } from "lucide-react"

export default function GuidesPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [cityFilter, setCityFilter] = useState("all")

  const guides = [
    {
      id: "GDE001",
      name: "Priya Jayawardena",
      email: "priya.j@email.com",
      phone: "+94 76 345 6789",
      city: "Galle",
      languages: ["English", "Sinhala", "German"],
      specializations: ["Cultural Tours", "Historical Sites", "Beach Tours"],
      status: "Active",
      rating: 4.9,
      totalTours: 89,
      joinDate: "2024-01-08",
      lastActive: "1 hour ago",
      earnings: "Rs. 234,500",
      completionRate: 98,
      experience: "6 years",
      certifications: ["Tourism Guide License", "First Aid Certificate"],
    },
    {
      id: "GDE002",
      name: "Nimal Fernando",
      email: "nimal.f@email.com",
      phone: "+94 75 456 7890",
      city: "Kandy",
      languages: ["English", "Sinhala", "Tamil", "French"],
      specializations: ["Nature Tours", "Adventure Tours", "Cultural Tours"],
      status: "Active",
      rating: 4.8,
      totalTours: 156,
      joinDate: "2024-01-05",
      lastActive: "30 minutes ago",
      earnings: "Rs. 387,200",
      completionRate: 96,
      experience: "10 years",
      certifications: ["Professional Tour Guide License", "Wildlife Guide Certificate"],
    },
    {
      id: "GDE003",
      name: "Samantha Perera",
      email: "samantha.p@email.com",
      phone: "+94 77 567 8901",
      city: "Colombo",
      languages: ["English", "Sinhala", "Japanese"],
      specializations: ["City Tours", "Food Tours", "Shopping Tours"],
      status: "Inactive",
      rating: 4.6,
      totalTours: 67,
      joinDate: "2024-01-12",
      lastActive: "3 days ago",
      earnings: "Rs. 156,800",
      completionRate: 94,
      experience: "4 years",
      certifications: ["Tourism Guide License"],
    },
    {
      id: "GDE004",
      name: "Rohan Silva",
      email: "rohan.s@email.com",
      phone: "+94 76 678 9012",
      city: "Ella",
      languages: ["English", "Sinhala", "Hindi"],
      specializations: ["Adventure Tours", "Hiking", "Photography Tours"],
      status: "Suspended",
      rating: 4.2,
      totalTours: 34,
      joinDate: "2024-01-18",
      lastActive: "1 week ago",
      earnings: "Rs. 89,400",
      completionRate: 88,
      experience: "3 years",
      certifications: ["Adventure Guide License"],
    },
  ]

  const filteredGuides = guides.filter((guide) => {
    const matchesSearch =
      guide.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      guide.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      guide.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      guide.specializations.some((spec) => spec.toLowerCase().includes(searchTerm.toLowerCase()))
    const matchesStatus = statusFilter === "all" || guide.status.toLowerCase() === statusFilter
    const matchesCity = cityFilter === "all" || guide.city.toLowerCase() === cityFilter

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
              <BreadcrumbPage>Guides</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </header>

      <div className="flex flex-1 flex-col gap-4 p-4">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Guide Management</h1>
            <p className="text-muted-foreground">Manage all tour guides and their specializations</p>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" className="bg-transparent">
              <Download className="mr-2 h-4 w-4" />
              Export
            </Button>
            <Button>
              <MapPin className="mr-2 h-4 w-4" />
              Add Guide
            </Button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid gap-4 md:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Guides</CardTitle>
              <MapPin className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{guides.length}</div>
              <p className="text-xs text-muted-foreground">+15% from last month</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Guides</CardTitle>
              <CheckCircle className="h-4 w-4 text-green-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{guides.filter((g) => g.status === "Active").length}</div>
              <p className="text-xs text-muted-foreground">Currently available</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Avg. Rating</CardTitle>
              <Star className="h-4 w-4 text-yellow-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">4.6</div>
              <p className="text-xs text-muted-foreground">Out of 5.0</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Tours</CardTitle>
              <Award className="h-4 w-4 text-purple-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{guides.reduce((sum, guide) => sum + guide.totalTours, 0)}</div>
              <p className="text-xs text-muted-foreground">Completed tours</p>
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
                  placeholder="Search guides by name, email, ID, or specialization..."
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
                  <SelectItem value="ella">Ella</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Guides Table */}
        <Card>
          <CardHeader>
            <CardTitle>Tour Guides ({filteredGuides.length})</CardTitle>
            <CardDescription>Complete list of registered tour guides and their information</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Guide</TableHead>
                  <TableHead>Specializations</TableHead>
                  <TableHead>Languages</TableHead>
                  <TableHead>Performance</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Earnings</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredGuides.map((guide) => (
                  <TableRow key={guide.id}>
                    <TableCell>
                      <div className="space-y-1">
                        <div className="font-medium">{guide.name}</div>
                        <div className="text-sm text-muted-foreground">{guide.email}</div>
                        <div className="text-xs text-muted-foreground flex items-center gap-1">
                          <Phone className="h-3 w-3" />
                          {guide.phone}
                        </div>
                        <div className="text-xs text-muted-foreground flex items-center gap-1">
                          <MapPin className="h-3 w-3" />
                          {guide.city}
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="space-y-1">
                        {guide.specializations.slice(0, 2).map((spec) => (
                          <Badge key={spec} variant="outline" className="text-xs mr-1">
                            {spec}
                          </Badge>
                        ))}
                        {guide.specializations.length > 2 && (
                          <Badge variant="outline" className="text-xs">
                            +{guide.specializations.length - 2} more
                          </Badge>
                        )}
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="space-y-1">
                        <div className="text-sm">{guide.languages.join(", ")}</div>
                        <div className="text-xs text-muted-foreground">{guide.experience} experience</div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="space-y-1">
                        <div className="flex items-center gap-1">
                          <Star className="h-3 w-3 text-yellow-500" />
                          <span className="text-sm font-medium">{guide.rating}</span>
                        </div>
                        <div className="text-sm text-muted-foreground">{guide.totalTours} tours</div>
                        <div className="text-xs text-muted-foreground">{guide.completionRate}% completion</div>
                      </div>
                    </TableCell>
                    <TableCell>{getStatusBadge(guide.status)}</TableCell>
                    <TableCell>
                      <div className="font-medium">{guide.earnings}</div>
                      <div className="text-xs text-muted-foreground">Total earnings</div>
                    </TableCell>
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
                                <DialogTitle>Guide Details</DialogTitle>
                                <DialogDescription>Complete information for {guide.name}</DialogDescription>
                              </DialogHeader>
                              <div className="grid gap-6">
                                {/* Personal Information */}
                                <div className="grid grid-cols-2 gap-6">
                                  <div className="space-y-4">
                                    <h4 className="font-semibold">Personal Information</h4>
                                    <div className="space-y-2 text-sm">
                                      <div className="grid grid-cols-2 gap-2">
                                        <Label>Name:</Label>
                                        <span>{guide.name}</span>
                                      </div>
                                      <div className="grid grid-cols-2 gap-2">
                                        <Label>Email:</Label>
                                        <span>{guide.email}</span>
                                      </div>
                                      <div className="grid grid-cols-2 gap-2">
                                        <Label>Phone:</Label>
                                        <span>{guide.phone}</span>
                                      </div>
                                      <div className="grid grid-cols-2 gap-2">
                                        <Label>City:</Label>
                                        <span>{guide.city}</span>
                                      </div>
                                      <div className="grid grid-cols-2 gap-2">
                                        <Label>Join Date:</Label>
                                        <span>{guide.joinDate}</span>
                                      </div>
                                      <div className="grid grid-cols-2 gap-2">
                                        <Label>Experience:</Label>
                                        <span>{guide.experience}</span>
                                      </div>
                                    </div>
                                  </div>

                                  <div className="space-y-4">
                                    <h4 className="font-semibold">Professional Details</h4>
                                    <div className="space-y-2 text-sm">
                                      <div>
                                        <Label>Languages:</Label>
                                        <div className="mt-1">
                                          {guide.languages.map((lang) => (
                                            <Badge key={lang} variant="outline" className="text-xs mr-1 mb-1">
                                              {lang}
                                            </Badge>
                                          ))}
                                        </div>
                                      </div>
                                      <div>
                                        <Label>Specializations:</Label>
                                        <div className="mt-1">
                                          {guide.specializations.map((spec) => (
                                            <Badge key={spec} variant="outline" className="text-xs mr-1 mb-1">
                                              {spec}
                                            </Badge>
                                          ))}
                                        </div>
                                      </div>
                                      <div>
                                        <Label>Certifications:</Label>
                                        <div className="mt-1">
                                          {guide.certifications.map((cert) => (
                                            <Badge key={cert} variant="outline" className="text-xs mr-1 mb-1">
                                              {cert}
                                            </Badge>
                                          ))}
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                {/* Performance Metrics */}
                                <div className="space-y-4">
                                  <h4 className="font-semibold">Performance Metrics</h4>
                                  <div className="grid grid-cols-4 gap-4 text-sm">
                                    <div className="text-center p-3 border rounded">
                                      <div className="text-2xl font-bold text-yellow-600">{guide.rating}</div>
                                      <div className="text-xs text-muted-foreground">Rating</div>
                                    </div>
                                    <div className="text-center p-3 border rounded">
                                      <div className="text-2xl font-bold text-blue-600">{guide.totalTours}</div>
                                      <div className="text-xs text-muted-foreground">Total Tours</div>
                                    </div>
                                    <div className="text-center p-3 border rounded">
                                      <div className="text-2xl font-bold text-green-600">{guide.completionRate}%</div>
                                      <div className="text-xs text-muted-foreground">Completion</div>
                                    </div>
                                    <div className="text-center p-3 border rounded">
                                      <div className="text-2xl font-bold text-purple-600">{guide.earnings}</div>
                                      <div className="text-xs text-muted-foreground">Earnings</div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </DialogContent>
                          </Dialog>
                          <DropdownMenuItem>
                            <Edit className="mr-2 h-4 w-4" />
                            Edit Guide
                          </DropdownMenuItem>
                          {guide.status === "Active" ? (
                            <DropdownMenuItem className="text-red-600">
                              <Ban className="mr-2 h-4 w-4" />
                              Suspend Guide
                            </DropdownMenuItem>
                          ) : (
                            <DropdownMenuItem className="text-green-600">
                              <CheckCircle className="mr-2 h-4 w-4" />
                              Activate Guide
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
