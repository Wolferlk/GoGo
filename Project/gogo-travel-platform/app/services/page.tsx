import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Car, Users, MapPin, Clock, Shield, Star, CreditCard, Headphones } from "lucide-react"
import Link from "next/link"

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <Badge className="mb-4 bg-white/20 text-white hover:bg-white/30">Our Services</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Complete Travel Solutions</h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            From quick city rides to comprehensive tour packages, we offer a full range of travel services to meet all
            your transportation and touring needs.
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Main Services</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Taxi Services */}
            <Card className="border-2 hover:border-blue-300 transition-colors">
              <CardHeader>
                <Car className="w-12 h-12 text-blue-600 mb-4" />
                <CardTitle className="text-2xl">Taxi Services</CardTitle>
                <CardDescription>
                  Quick, reliable rides across Sri Lanka with real-time tracking and transparent pricing.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <h4 className="font-semibold">Features:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Real-time fare estimation</li>
                    <li>• Live GPS tracking</li>
                    <li>• Verified drivers</li>
                    <li>• Multiple payment options</li>
                    <li>• 24/7 availability</li>
                  </ul>
                </div>
                <Button asChild className="w-full">
                  <Link href="/app?service=taxi">Book a Taxi</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Chauffeur Guide Services */}
            <Card className="border-2 hover:border-green-300 transition-colors">
              <CardHeader>
                <Users className="w-12 h-12 text-green-600 mb-4" />
                <CardTitle className="text-2xl">Chauffeur Guide Services</CardTitle>
                <CardDescription>
                  Expert local guides for multi-location tours with comprehensive trip planning.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <h4 className="font-semibold">Features:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Professional tour guides</li>
                    <li>• Multi-location itineraries</li>
                    <li>• Cultural and historical insights</li>
                    <li>• Flexible scheduling</li>
                    <li>• Language support</li>
                  </ul>
                </div>
                <Button asChild variant="outline" className="w-full bg-transparent">
                  <Link href="/app?service=guide">Book a Guide</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Additional Services</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader className="text-center">
                <MapPin className="w-10 h-10 text-orange-600 mx-auto mb-3" />
                <CardTitle>Airport Transfers</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Reliable airport pickup and drop-off services with flight tracking and meet & greet options.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <Clock className="w-10 h-10 text-purple-600 mx-auto mb-3" />
                <CardTitle>Scheduled Rides</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Book rides in advance for important appointments, events, or regular commutes.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <Star className="w-10 h-10 text-yellow-600 mx-auto mb-3" />
                <CardTitle>Premium Vehicles</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Luxury cars and premium vehicles for special occasions and business travel.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Service Features */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <Shield className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Safety First</h3>
              <p className="text-sm text-gray-600">All drivers and guides are verified with background checks</p>
            </div>

            <div className="text-center">
              <CreditCard className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Flexible Payments</h3>
              <p className="text-sm text-gray-600">Cash, card, or digital wallet - pay your way</p>
            </div>

            <div className="text-center">
              <Headphones className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">24/7 Support</h3>
              <p className="text-sm text-gray-600">Round-the-clock customer service and assistance</p>
            </div>

            <div className="text-center">
              <Star className="w-12 h-12 text-yellow-600 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Quality Assured</h3>
              <p className="text-sm text-gray-600">Rated drivers and guides with quality monitoring</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Transparent Pricing</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader className="text-center">
                <CardTitle>City Rides</CardTitle>
                <div className="text-3xl font-bold text-blue-600">Rs. 50</div>
                <CardDescription>per kilometer</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Base fare: Rs. 100</li>
                  <li>• Waiting time: Rs. 5/min</li>
                  <li>• No hidden charges</li>
                  <li>• Real-time fare calculation</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-300">
              <CardHeader className="text-center">
                <Badge className="mb-2">Most Popular</Badge>
                <CardTitle>Tour Packages</CardTitle>
                <div className="text-3xl font-bold text-green-600">Rs. 8,000</div>
                <CardDescription>per day (8 hours)</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Professional guide included</li>
                  <li>• Vehicle with driver</li>
                  <li>• Fuel included</li>
                  <li>• Customizable itinerary</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <CardTitle>Airport Transfer</CardTitle>
                <div className="text-3xl font-bold text-purple-600">Rs. 2,500</div>
                <CardDescription>Colombo Airport</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Fixed rate pricing</li>
                  <li>• Flight tracking</li>
                  <li>• Meet & greet service</li>
                  <li>• Luggage assistance</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Experience Our Services?</h2>
          <p className="text-xl mb-8 opacity-90">
            Book now and discover why thousands of travelers choose Gogo.lk for their transportation needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link href="/app">Book Now</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="text-blue-600 border-white hover:bg-white bg-transparent"
            >
              <Link href="/contact">Get Quote</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
