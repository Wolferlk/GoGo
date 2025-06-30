import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Target, Award, Globe } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <Badge className="mb-4 bg-white/20 text-white hover:bg-white/30">About Gogo.lk</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Revolutionizing Travel in Sri Lanka</h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            We're on a mission to transform how people travel across Sri Lanka by connecting them with reliable
            transportation and expert local guides through cutting-edge technology.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="border-l-4 border-l-blue-600">
              <CardHeader>
                <Target className="w-12 h-12 text-blue-600 mb-4" />
                <CardTitle className="text-2xl">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  To provide a seamless, safe, and efficient travel experience for everyone in Sri Lanka by connecting
                  travelers with verified drivers, expert guides, and trusted travel services through our innovative
                  digital platform.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-green-600">
              <CardHeader>
                <Globe className="w-12 h-12 text-green-600 mb-4" />
                <CardTitle className="text-2xl">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  To become Sri Lanka's leading travel technology platform, setting new standards for convenience,
                  reliability, and customer satisfaction while supporting local communities and promoting sustainable
                  tourism.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Story</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">
              Founded in 2024, Gogo.lk emerged from a simple observation: travelers in Sri Lanka needed a more reliable,
              transparent, and efficient way to book transportation and find quality tour guides. Our founders,
              passionate about technology and travel, recognized the gap between traditional booking methods and modern
              traveler expectations.
            </p>
            <p className="text-gray-600 mb-6">
              Starting with a small team of developers and travel enthusiasts, we built our platform from the ground up,
              focusing on user experience, safety, and reliability. Today, we connect thousands of travelers with
              verified drivers and expert guides across Sri Lanka.
            </p>
            <p className="text-gray-600">
              Our commitment to innovation, customer satisfaction, and supporting local communities drives everything we
              do. We're not just a booking platform – we're your trusted travel companion in Sri Lanka.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <CardTitle>Customer First</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Every decision we make is guided by what's best for our customers. Your satisfaction and safety are
                  our top priorities.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Award className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <CardTitle>Excellence</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  We strive for excellence in everything we do, from our technology platform to customer service and
                  partner relationships.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Globe className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <CardTitle>Community</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  We believe in supporting local communities, empowering drivers and guides, and contributing to Sri
                  Lanka's tourism industry.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Leadership Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader className="text-center">
                <div className="w-24 h-24 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="w-12 h-12 text-blue-600" />
                </div>
                <CardTitle>Rajesh Fernando</CardTitle>
                <CardDescription>CEO & Co-Founder</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 text-center">
                  15+ years in technology and travel industry. Passionate about innovation and customer experience.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <div className="w-24 h-24 bg-green-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="w-12 h-12 text-green-600" />
                </div>
                <CardTitle>Priya Wickramasinghe</CardTitle>
                <CardDescription>CTO & Co-Founder</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 text-center">
                  Expert in mobile and web technologies with a focus on scalable platform development.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <div className="w-24 h-24 bg-purple-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="w-12 h-12 text-purple-600" />
                </div>
                <CardTitle>Samantha Perera</CardTitle>
                <CardDescription>Head of Operations</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 text-center">
                  Operations expert ensuring smooth service delivery and maintaining high quality standards.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
