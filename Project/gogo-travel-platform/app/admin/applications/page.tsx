"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
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
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Car, MapPin, Eye, Check, X, Search, Filter, Download, Phone, Mail, Calendar, FileText } from "lucide-react"

export default function ApplicationsPage() {
  const [selectedApplication, setSelectedApplication] = useState<any>(null)

  const driverApplications = [
    {
      id: "DRV001",
      name: "Chaminda Wickramasinghe",
      email: "chaminda@email.com",
      phone: "+94 77 123 4567",
      city: "Colombo",
      vehicleType: "Car",
      vehicleMake: "Toyota Corolla",
      licensePlate: "ABC-1234",
      submittedDate: "2024-01-15",
      status: "pending",
      documents: {
        drivingLicense: "license.jpg",
        vehicleRegistration: "registration.pdf",
        insurance: "insurance.pdf",
        nationalId: "id.jpg",
      },
      experience: "5 years",
      emergencyContact: "Saman Wickramasinghe",
      emergencyPhone: "+94 77 987 6543",
    },
    {
      id: "DRV002",
      name: "Rohan Mendis",
      email: "rohan@email.com",
      phone: "+94 71 234 5678",
      city: "Kandy",
      vehicleType: "Van",
      vehicleMake: "Toyota Hiace",
      licensePlate: "KY-5678",
      submittedDate: "2024-01-14",
      status: "approved",
      documents: {
        drivingLicense: "license2.jpg",
        vehicleRegistration: "registration2.pdf",
        insurance: "insurance2.pdf",
        nationalId: "id2.jpg",
      },
      experience: "8 years",
      emergencyContact: "Nimal Mendis",
      emergencyPhone: "+94 71 876 5432",
    },
  ]

  const guideApplications = [
    {
      id: "GDE001",
      name: "Priya Jayawardena",
      email: "priya@email.com",
      phone: "+94 76 345 6789",
      city: "Galle",
      languages: ["English", "Sinhala", "German"],
      specializations: ["Cultural Tours", "Historical Sites"],
      experience: "6 years",
      submittedDate: "2024-01-16",
      status: "pending",
      documents: {
        nationalId: "guide_id.jpg",
        certificates: "certificates.pdf",
      },
      certifications: "Tourism Guide License, First Aid Certificate",
      previousWork: "Worked with several tour operators in Southern Province",
    },
    {
      id: "GDE002",
      name: "Nimal Fernando",
      email: "nimal@email.com",
      phone: "+94 75 456 7890",
      city: "Kandy",
      languages: ["English", "Sinhala", "Tamil", "French"],
      specializations: ["Nature Tours", "Adventure Tours", "Cultural Tours"],
      experience: "10 years",
      submittedDate: "2024-01-13",
      status: "approved",
      documents: {
        nationalId: "guide_id2.jpg",
        certificates: "certificates2.pdf",
      },
      certifications: "Professional Tour Guide License, Wildlife Guide Certificate",
      previousWork: "Senior guide at multiple eco-tourism companies",
    },
  ]

  const handleApprove = (id: string, type: string) => {
    console.log(`Approving ${type} application ${id}`)
    alert(`Application ${id} approved successfully!`)
  }

  const handleReject = (id: string, type: string) => {
    console.log(`Rejecting ${type} application ${id}`)
    alert(`Application ${id} rejected.`)
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
              <BreadcrumbPage>Applications</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </header>

      <div className="flex flex-1 flex-col gap-4 p-4">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Applications</h1>
            <p className="text-muted-foreground">Review and manage driver and guide applications</p>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" className="bg-transparent">
              <Download className="mr-2 h-4 w-4" />
              Export
            </Button>
            <Button variant="outline" className="bg-transparent">
              <Filter className="mr-2 h-4 w-4" />
              Filter
            </Button>
          </div>
        </div>

        {/* Search and Filters */}
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search applications..." className="pl-10" />
              </div>
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="pending">Pending</SelectItem>
                  <SelectItem value="approved">Approved</SelectItem>
                  <SelectItem value="rejected">Rejected</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="City" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Cities</SelectItem>
                  <SelectItem value="colombo">Colombo</SelectItem>
                  <SelectItem value="kandy">Kandy</SelectItem>
                  <SelectItem value="galle">Galle</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Applications Tabs */}
        <Tabs defaultValue="drivers" className="space-y-4">
          <TabsList>
            <TabsTrigger value="drivers" className="flex items-center gap-2">
              <Car className="h-4 w-4" />
              Driver Applications
              <Badge variant="secondary">{driverApplications.length}</Badge>
            </TabsTrigger>
            <TabsTrigger value="guides" className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              Guide Applications
              <Badge variant="secondary">{guideApplications.length}</Badge>
            </TabsTrigger>
          </TabsList>

          {/* Driver Applications */}
          <TabsContent value="drivers">
            <div className="grid gap-4">
              {driverApplications.map((application) => (
                <Card key={application.id}>
                  <CardContent className="pt-6">
                    <div className="flex items-center justify-between">
                      <div className="space-y-2">
                        <div className="flex items-center gap-3">
                          <h3 className="text-lg font-semibold">{application.name}</h3>
                          <Badge
                            variant={
                              application.status === "approved"
                                ? "default"
                                : application.status === "pending"
                                  ? "secondary"
                                  : "destructive"
                            }
                          >
                            {application.status}
                          </Badge>
                          <Badge variant="outline">{application.id}</Badge>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Mail className="h-3 w-3" />
                            {application.email}
                          </div>
                          <div className="flex items-center gap-1">
                            <Phone className="h-3 w-3" />
                            {application.phone}
                          </div>
                          <div className="flex items-center gap-1">
                            <Car className="h-3 w-3" />
                            {application.vehicleMake}
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            {application.submittedDate}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => setSelectedApplication(application)}
                              className="bg-transparent"
                            >
                              <Eye className="mr-2 h-4 w-4" />
                              Review
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                            <DialogHeader>
                              <DialogTitle>Driver Application Review</DialogTitle>
                              <DialogDescription>Review application details for {application.name}</DialogDescription>
                            </DialogHeader>
                            <div className="grid gap-6">
                              {/* Personal Information */}
                              <div className="space-y-4">
                                <h4 className="font-semibold">Personal Information</h4>
                                <div className="grid grid-cols-2 gap-4">
                                  <div>
                                    <Label>Full Name</Label>
                                    <p className="text-sm">{application.name}</p>
                                  </div>
                                  <div>
                                    <Label>Email</Label>
                                    <p className="text-sm">{application.email}</p>
                                  </div>
                                  <div>
                                    <Label>Phone</Label>
                                    <p className="text-sm">{application.phone}</p>
                                  </div>
                                  <div>
                                    <Label>City</Label>
                                    <p className="text-sm">{application.city}</p>
                                  </div>
                                  <div>
                                    <Label>Emergency Contact</Label>
                                    <p className="text-sm">{application.emergencyContact}</p>
                                  </div>
                                  <div>
                                    <Label>Emergency Phone</Label>
                                    <p className="text-sm">{application.emergencyPhone}</p>
                                  </div>
                                </div>
                              </div>

                              {/* Vehicle Information */}
                              <div className="space-y-4">
                                <h4 className="font-semibold">Vehicle Information</h4>
                                <div className="grid grid-cols-2 gap-4">
                                  <div>
                                    <Label>Vehicle Type</Label>
                                    <p className="text-sm">{application.vehicleType}</p>
                                  </div>
                                  <div>
                                    <Label>Make & Model</Label>
                                    <p className="text-sm">{application.vehicleMake}</p>
                                  </div>
                                  <div>
                                    <Label>License Plate</Label>
                                    <p className="text-sm">{application.licensePlate}</p>
                                  </div>
                                  <div>
                                    <Label>Experience</Label>
                                    <p className="text-sm">{application.experience}</p>
                                  </div>
                                </div>
                              </div>

                              {/* Documents */}
                              <div className="space-y-4">
                                <h4 className="font-semibold">Documents</h4>
                                <div className="grid grid-cols-2 gap-4">
                                  {Object.entries(application.documents).map(([key, value]) => (
                                    <div key={key} className="flex items-center justify-between p-3 border rounded">
                                      <div className="flex items-center gap-2">
                                        <FileText className="h-4 w-4" />
                                        <span className="text-sm capitalize">
                                          {key.replace(/([A-Z])/g, " $1").trim()}
                                        </span>
                                      </div>
                                      <Button variant="outline" size="sm" className="bg-transparent">
                                        View
                                      </Button>
                                    </div>
                                  ))}
                                </div>
                              </div>

                              {/* Action Buttons */}
                              <div className="flex items-center gap-4 pt-4 border-t">
                                <div className="flex-1">
                                  <Label htmlFor="notes">Review Notes</Label>
                                  <Textarea
                                    id="notes"
                                    placeholder="Add notes about this application..."
                                    className="mt-1"
                                  />
                                </div>
                                <div className="flex flex-col gap-2">
                                  <Button
                                    onClick={() => handleApprove(application.id, "driver")}
                                    className="bg-green-600 hover:bg-green-700"
                                  >
                                    <Check className="mr-2 h-4 w-4" />
                                    Approve
                                  </Button>
                                  <Button variant="destructive" onClick={() => handleReject(application.id, "driver")}>
                                    <X className="mr-2 h-4 w-4" />
                                    Reject
                                  </Button>
                                </div>
                              </div>
                            </div>
                          </DialogContent>
                        </Dialog>
                        {application.status === "pending" && (
                          <>
                            <Button
                              size="sm"
                              onClick={() => handleApprove(application.id, "driver")}
                              className="bg-green-600 hover:bg-green-700"
                            >
                              <Check className="mr-2 h-4 w-4" />
                              Approve
                            </Button>
                            <Button
                              size="sm"
                              variant="destructive"
                              onClick={() => handleReject(application.id, "driver")}
                            >
                              <X className="mr-2 h-4 w-4" />
                              Reject
                            </Button>
                          </>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Guide Applications */}
          <TabsContent value="guides">
            <div className="grid gap-4">
              {guideApplications.map((application) => (
                <Card key={application.id}>
                  <CardContent className="pt-6">
                    <div className="flex items-center justify-between">
                      <div className="space-y-2">
                        <div className="flex items-center gap-3">
                          <h3 className="text-lg font-semibold">{application.name}</h3>
                          <Badge
                            variant={
                              application.status === "approved"
                                ? "default"
                                : application.status === "pending"
                                  ? "secondary"
                                  : "destructive"
                            }
                          >
                            {application.status}
                          </Badge>
                          <Badge variant="outline">{application.id}</Badge>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Mail className="h-3 w-3" />
                            {application.email}
                          </div>
                          <div className="flex items-center gap-1">
                            <Phone className="h-3 w-3" />
                            {application.phone}
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="h-3 w-3" />
                            {application.languages.join(", ")}
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            {application.submittedDate}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => setSelectedApplication(application)}
                              className="bg-transparent"
                            >
                              <Eye className="mr-2 h-4 w-4" />
                              Review
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                            <DialogHeader>
                              <DialogTitle>Guide Application Review</DialogTitle>
                              <DialogDescription>Review application details for {application.name}</DialogDescription>
                            </DialogHeader>
                            <div className="grid gap-6">
                              {/* Personal Information */}
                              <div className="space-y-4">
                                <h4 className="font-semibold">Personal Information</h4>
                                <div className="grid grid-cols-2 gap-4">
                                  <div>
                                    <Label>Full Name</Label>
                                    <p className="text-sm">{application.name}</p>
                                  </div>
                                  <div>
                                    <Label>Email</Label>
                                    <p className="text-sm">{application.email}</p>
                                  </div>
                                  <div>
                                    <Label>Phone</Label>
                                    <p className="text-sm">{application.phone}</p>
                                  </div>
                                  <div>
                                    <Label>City</Label>
                                    <p className="text-sm">{application.city}</p>
                                  </div>
                                  <div>
                                    <Label>Languages</Label>
                                    <p className="text-sm">{application.languages.join(", ")}</p>
                                  </div>
                                  <div>
                                    <Label>Experience</Label>
                                    <p className="text-sm">{application.experience}</p>
                                  </div>
                                </div>
                              </div>

                              {/* Professional Details */}
                              <div className="space-y-4">
                                <h4 className="font-semibold">Professional Details</h4>
                                <div className="space-y-3">
                                  <div>
                                    <Label>Specializations</Label>
                                    <p className="text-sm">{application.specializations.join(", ")}</p>
                                  </div>
                                  <div>
                                    <Label>Certifications</Label>
                                    <p className="text-sm">{application.certifications}</p>
                                  </div>
                                  <div>
                                    <Label>Previous Work Experience</Label>
                                    <p className="text-sm">{application.previousWork}</p>
                                  </div>
                                </div>
                              </div>

                              {/* Documents */}
                              <div className="space-y-4">
                                <h4 className="font-semibold">Documents</h4>
                                <div className="grid grid-cols-2 gap-4">
                                  {Object.entries(application.documents).map(([key, value]) => (
                                    <div key={key} className="flex items-center justify-between p-3 border rounded">
                                      <div className="flex items-center gap-2">
                                        <FileText className="h-4 w-4" />
                                        <span className="text-sm capitalize">
                                          {key.replace(/([A-Z])/g, " $1").trim()}
                                        </span>
                                      </div>
                                      <Button variant="outline" size="sm" className="bg-transparent">
                                        View
                                      </Button>
                                    </div>
                                  ))}
                                </div>
                              </div>

                              {/* Action Buttons */}
                              <div className="flex items-center gap-4 pt-4 border-t">
                                <div className="flex-1">
                                  <Label htmlFor="notes">Review Notes</Label>
                                  <Textarea
                                    id="notes"
                                    placeholder="Add notes about this application..."
                                    className="mt-1"
                                  />
                                </div>
                                <div className="flex flex-col gap-2">
                                  <Button
                                    onClick={() => handleApprove(application.id, "guide")}
                                    className="bg-green-600 hover:bg-green-700"
                                  >
                                    <Check className="mr-2 h-4 w-4" />
                                    Approve
                                  </Button>
                                  <Button variant="destructive" onClick={() => handleReject(application.id, "guide")}>
                                    <X className="mr-2 h-4 w-4" />
                                    Reject
                                  </Button>
                                </div>
                              </div>
                            </div>
                          </DialogContent>
                        </Dialog>
                        {application.status === "pending" && (
                          <>
                            <Button
                              size="sm"
                              onClick={() => handleApprove(application.id, "guide")}
                              className="bg-green-600 hover:bg-green-700"
                            >
                              <Check className="mr-2 h-4 w-4" />
                              Approve
                            </Button>
                            <Button
                              size="sm"
                              variant="destructive"
                              onClick={() => handleReject(application.id, "guide")}
                            >
                              <X className="mr-2 h-4 w-4" />
                              Reject
                            </Button>
                          </>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </>
  )
}
