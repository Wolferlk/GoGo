"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Car, Users, MapPin, Clock, Calculator, Calendar } from "lucide-react"

export default function AppPage() {
  const [pickupLocation, setPickupLocation] = useState("")
  const [dropoffLocation, setDropoffLocation] = useState("")
  const [selectedDate, setSelectedDate] = useState("")
  const [selectedTime, setSelectedTime] = useState("")
  const [estimatedFare, setEstimatedFare] = useState<number | null>(null)

  const calculateFare = () => {
    // Simple fare calculation (in real app, this would be more sophisticated)
    const baseFare = 100
    const perKmRate = 50
    const estimatedDistance = Math.random() * 20 + 5 // Random distance between 5-25 km
    const fare = baseFare + estimatedDistance * perKmRate
    setEstimatedFare(Math.round(fare))
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <section className="py-12 px-4 bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <Badge className="mb-4 bg-white/20 text-white hover:bg-white/30">Booking Platform</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Book Your Ride</h1>
          <p className="text-xl opacity-90">Quick and easy booking for taxis and tour guides across Sri Lanka</p>
        </div>
      </section>

      {/* Booking Interface */}
      <section className="py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <Tabs defaultValue="taxi" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="taxi" className="flex items-center gap-2">
                <Car className="w-4 h-4" />
                Taxi Booking
              </TabsTrigger>
              <TabsTrigger value="guide" className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                Tour Guide
              </TabsTrigger>
            </TabsList>

            {/* Taxi Booking */}
            <TabsContent value="taxi">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Car className="w-5 h-5 text-blue-600" />
                    Book a Taxi
                  </CardTitle>
                  <CardDescription>Enter your pickup and destination to get started</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="pickup">Pickup Location</Label>
                      <div className="relative">
                        <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input
                          id="pickup"
                          placeholder="Enter pickup location"
                          className="pl-10"
                          value={pickupLocation}
                          onChange={(e) => setPickupLocation(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="dropoff">Destination</Label>
                      <div className="relative">
                        <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input
                          id="dropoff"
                          placeholder="Enter destination"
                          className="pl-10"
                          value={dropoffLocation}
                          onChange={(e) => setDropoffLocation(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <Label>Vehicle Type</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select vehicle" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="economy">Economy Car</SelectItem>
                          <SelectItem value="comfort">Comfort Car</SelectItem>
                          <SelectItem value="premium">Premium Car</SelectItem>
                          <SelectItem value="van">Van (6-8 seats)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="date">Date</Label>
                      <div className="relative">
                        <Calendar className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input
                          id="date"
                          type="date"
                          className="pl-10"
                          value={selectedDate}
                          onChange={(e) => setSelectedDate(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="time">Time</Label>
                      <div className="relative">
                        <Clock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input
                          id="time"
                          type="time"
                          className="pl-10"
                          value={selectedTime}
                          onChange={(e) => setSelectedTime(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button
                      onClick={calculateFare}
                      variant="outline"
                      className="flex items-center gap-2 bg-transparent"
                    >
                      <Calculator className="w-4 h-4" />
                      Calculate Fare
                    </Button>
                    {estimatedFare && (
                      <div className="flex items-center gap-2 px-4 py-2 bg-green-50 rounded-md">
                        <span className="text-sm text-green-700">Estimated Fare:</span>
                        <span className="font-bold text-green-800">Rs. {estimatedFare}</span>
                      </div>
                    )}
                  </div>

                  <Button className="w-full bg-blue-600 hover:bg-blue-700" size="lg">
                    Book Taxi Now
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Tour Guide Booking */}
            <TabsContent value="guide">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-green-600" />
                    Book a Tour Guide
                  </CardTitle>
                  <CardDescription>Plan your perfect tour with our expert local guides</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Tour Type</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select tour type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="cultural">Cultural Tour</SelectItem>
                          <SelectItem value="historical">Historical Sites</SelectItem>
                          <SelectItem value="nature">Nature & Wildlife</SelectItem>
                          <SelectItem value="adventure">Adventure Tour</SelectItem>
                          <SelectItem value="custom">Custom Tour</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label>Duration</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select duration" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="half-day">Half Day (4 hours)</SelectItem>
                          <SelectItem value="full-day">Full Day (8 hours)</SelectItem>
                          <SelectItem value="multi-day">Multi-day Tour</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label>Preferred Locations</Label>
                    <Input placeholder="e.g., Kandy, Sigiriya, Galle..." />
                  </div>

                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <Label>Group Size</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select size" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1-2">1-2 People</SelectItem>
                          <SelectItem value="3-5">3-5 People</SelectItem>
                          <SelectItem value="6-10">6-10 People</SelectItem>
                          <SelectItem value="10+">10+ People</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label>Language</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select language" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="english">English</SelectItem>
                          <SelectItem value="sinhala">Sinhala</SelectItem>
                          <SelectItem value="tamil">Tamil</SelectItem>
                          <SelectItem value="german">German</SelectItem>
                          <SelectItem value="french">French</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label>Start Date</Label>
                      <Input type="date" />
                    </div>
                  </div>

                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-800 mb-2">What's Included:</h4>
                    <ul className="text-sm text-blue-700 space-y-1">
                      <li>• Professional tour guide</li>
                      <li>• Transportation with driver</li>
                      <li>• Fuel and parking fees</li>
                      <li>• Customizable itinerary</li>
                      <li>• Local insights and recommendations</li>
                    </ul>
                  </div>

                  <Button className="w-full bg-green-600 hover:bg-green-700" size="lg">
                    Request Tour Guide
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-8 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">Quick Actions</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="text-center hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <MapPin className="w-12 h-12 text-orange-600 mx-auto mb-4" />
                <CardTitle>Airport Transfer</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Book reliable airport pickup and drop-off services</CardDescription>
                <Button className="mt-4 bg-transparent" variant="outline">
                  Book Now
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <Clock className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <CardTitle>Schedule Ride</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Plan your rides in advance for important appointments</CardDescription>
                <Button className="mt-4 bg-transparent" variant="outline">
                  Schedule
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <Users className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <CardTitle>Group Booking</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Special rates for group travel and events</CardDescription>
                <Button className="mt-4 bg-transparent" variant="outline">
                  Get Quote
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
