"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
  User,
  FileText,
  CreditCard,
  Upload,
  Phone,
  Mail,
  MapPin,
  Calendar,
  CheckCircle,
  AlertCircle,
  Award,
} from "lucide-react"

export default function GuideSignupPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    // Personal Details
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    dateOfBirth: "",
    address: "",
    city: "",
    languages: [] as string[],
    experience: "",

    // Professional Details
    specializations: [] as string[],
    certifications: "",
    previousWork: "",
    profilePhoto: null as File | null,

    // Documents
    nationalId: null as File | null,
    certificates: null as File | null,

    // Bank Details
    bankName: "",
    accountNumber: "",
    accountHolderName: "",
    branchCode: "",

    // Agreements
    agreeTerms: false,
    agreeBackground: false,
    agreeAvailability: false,
  })

  const totalSteps = 4
  const progress = (currentStep / totalSteps) * 100

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleFileUpload = (field: string, file: File | null) => {
    setFormData((prev) => ({ ...prev, [field]: file }))
  }

  const handleLanguageChange = (language: string, checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      languages: checked ? [...prev.languages, language] : prev.languages.filter((l) => l !== language),
    }))
  }

  const handleSpecializationChange = (specialization: string, checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      specializations: checked
        ? [...prev.specializations, specialization]
        : prev.specializations.filter((s) => s !== specialization),
    }))
  }

  const handleSubmit = () => {
    console.log("Guide registration data:", formData)
    alert("Application submitted successfully! We'll review your application and get back to you within 24-48 hours.")
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <section className="py-12 px-4 bg-gradient-to-r from-purple-600 to-green-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <Badge className="mb-4 bg-white/20 text-white hover:bg-white/30">Join Our Team</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Become a Tour Guide</h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Share your knowledge of Sri Lanka's beauty and culture while earning with Gogo.lk's tour guide network.
          </p>
        </div>
      </section>

      {/* Progress Bar */}
      <section className="py-6 px-4 bg-white border-b">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold">Guide Application</h2>
            <span className="text-sm text-gray-600">
              Step {currentStep} of {totalSteps}
            </span>
          </div>
          <Progress value={progress} className="h-2" />
          <div className="flex justify-between mt-2 text-xs text-gray-500">
            <span>Personal Info</span>
            <span>Professional Details</span>
            <span>Documents & Bank</span>
            <span>Review & Submit</span>
          </div>
        </div>
      </section>

      {/* Form Content */}
      <section className="py-8 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Step 1: Personal Information */}
          {currentStep === 1 && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="w-5 h-5 text-purple-600" />
                  Personal Information
                </CardTitle>
                <CardDescription>Tell us about yourself and your background.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input
                      id="firstName"
                      placeholder="John"
                      value={formData.firstName}
                      onChange={(e) => setFormData((prev) => ({ ...prev, firstName: e.target.value }))}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input
                      id="lastName"
                      placeholder="Doe"
                      value={formData.lastName}
                      onChange={(e) => setFormData((prev) => ({ ...prev, lastName: e.target.value }))}
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        id="email"
                        type="email"
                        placeholder="john.doe@example.com"
                        className="pl-10"
                        value={formData.email}
                        onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+94 77 123 4567"
                        className="pl-10"
                        value={formData.phone}
                        onChange={(e) => setFormData((prev) => ({ ...prev, phone: e.target.value }))}
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="dateOfBirth">Date of Birth *</Label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        id="dateOfBirth"
                        type="date"
                        className="pl-10"
                        value={formData.dateOfBirth}
                        onChange={(e) => setFormData((prev) => ({ ...prev, dateOfBirth: e.target.value }))}
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="city">City *</Label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Select onValueChange={(value) => setFormData((prev) => ({ ...prev, city: value }))}>
                        <SelectTrigger className="pl-10">
                          <SelectValue placeholder="Select your city" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="colombo">Colombo</SelectItem>
                          <SelectItem value="kandy">Kandy</SelectItem>
                          <SelectItem value="galle">Galle</SelectItem>
                          <SelectItem value="jaffna">Jaffna</SelectItem>
                          <SelectItem value="negombo">Negombo</SelectItem>
                          <SelectItem value="anuradhapura">Anuradhapura</SelectItem>
                          <SelectItem value="trincomalee">Trincomalee</SelectItem>
                          <SelectItem value="batticaloa">Batticaloa</SelectItem>
                          <SelectItem value="matara">Matara</SelectItem>
                          <SelectItem value="kurunegala">Kurunegala</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="address">Full Address *</Label>
                  <Textarea
                    id="address"
                    placeholder="Enter your complete address"
                    value={formData.address}
                    onChange={(e) => setFormData((prev) => ({ ...prev, address: e.target.value }))}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label>Languages Spoken *</Label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {["English", "Sinhala", "Tamil", "German", "French", "Japanese", "Chinese", "Hindi"].map(
                      (language) => (
                        <div key={language} className="flex items-center space-x-2">
                          <Checkbox
                            id={language}
                            checked={formData.languages.includes(language)}
                            onCheckedChange={(checked) => handleLanguageChange(language, checked as boolean)}
                          />
                          <Label htmlFor={language} className="text-sm">
                            {language}
                          </Label>
                        </div>
                      ),
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="experience">Years of Experience *</Label>
                  <Select onValueChange={(value) => setFormData((prev) => ({ ...prev, experience: value }))}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select experience level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="0-1">0-1 Years</SelectItem>
                      <SelectItem value="2-3">2-3 Years</SelectItem>
                      <SelectItem value="4-5">4-5 Years</SelectItem>
                      <SelectItem value="6-10">6-10 Years</SelectItem>
                      <SelectItem value="10+">10+ Years</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Step 2: Professional Details */}
          {currentStep === 2 && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-green-600" />
                  Professional Details
                </CardTitle>
                <CardDescription>Share your expertise and specializations as a tour guide.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label>Tour Specializations *</Label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {[
                      "Cultural Tours",
                      "Historical Sites",
                      "Nature & Wildlife",
                      "Adventure Tours",
                      "Religious Sites",
                      "Beach Tours",
                      "City Tours",
                      "Food Tours",
                      "Photography Tours",
                      "Ayurveda & Wellness",
                    ].map((specialization) => (
                      <div key={specialization} className="flex items-center space-x-2">
                        <Checkbox
                          id={specialization}
                          checked={formData.specializations.includes(specialization)}
                          onCheckedChange={(checked) => handleSpecializationChange(specialization, checked as boolean)}
                        />
                        <Label htmlFor={specialization} className="text-sm">
                          {specialization}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="certifications">Certifications & Qualifications</Label>
                  <Textarea
                    id="certifications"
                    placeholder="List any tourism certifications, degrees, or relevant qualifications..."
                    value={formData.certifications}
                    onChange={(e) => setFormData((prev) => ({ ...prev, certifications: e.target.value }))}
                    rows={3}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="previousWork">Previous Work Experience</Label>
                  <Textarea
                    id="previousWork"
                    placeholder="Describe your previous experience in tourism, hospitality, or related fields..."
                    value={formData.previousWork}
                    onChange={(e) => setFormData((prev) => ({ ...prev, previousWork: e.target.value }))}
                    rows={4}
                  />
                </div>

                {/* Profile Photo Upload */}
                <div className="space-y-2">
                  <Label htmlFor="profilePhoto">Profile Photo *</Label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                    <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                    <div className="space-y-2">
                      <p className="text-sm text-gray-600">Upload a professional profile photo</p>
                      <p className="text-xs text-gray-500">Supported formats: JPG, PNG, JPEG (Max 5MB)</p>
                      <Input
                        id="profilePhoto"
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={(e) => handleFileUpload("profilePhoto", e.target.files?.[0] || null)}
                      />
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => document.getElementById("profilePhoto")?.click()}
                        className="bg-transparent"
                      >
                        Choose Photo
                      </Button>
                      {formData.profilePhoto && (
                        <p className="text-sm text-green-600 flex items-center justify-center gap-1">
                          <CheckCircle className="w-4 h-4" />
                          {formData.profilePhoto.name}
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-800 mb-2">Guide Requirements:</h4>
                  <ul className="text-sm text-purple-700 space-y-1">
                    <li>• Excellent communication skills in multiple languages</li>
                    <li>• Deep knowledge of Sri Lankan culture and history</li>
                    <li>• Professional appearance and friendly demeanor</li>
                    <li>• Ability to handle groups of various sizes</li>
                    <li>• Punctuality and reliability</li>
                    <li>• First aid knowledge (preferred)</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Step 3: Documents & Bank Details */}
          {currentStep === 3 && (
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="w-5 h-5 text-blue-600" />
                    Required Documents
                  </CardTitle>
                  <CardDescription>Upload clear photos or scans of the following documents.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* National ID */}
                    <div className="space-y-2">
                      <Label>National ID/Passport *</Label>
                      <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
                        <User className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                        <Input
                          type="file"
                          accept="image/*,.pdf"
                          className="hidden"
                          id="nationalId"
                          onChange={(e) => handleFileUpload("nationalId", e.target.files?.[0] || null)}
                        />
                        <Button
                          type="button"
                          variant="outline"
                          size="sm"
                          onClick={() => document.getElementById("nationalId")?.click()}
                          className="bg-transparent"
                        >
                          Upload ID
                        </Button>
                        {formData.nationalId && (
                          <p className="text-xs text-green-600 mt-1 flex items-center justify-center gap-1">
                            <CheckCircle className="w-3 h-3" />
                            {formData.nationalId.name}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Certificates */}
                    <div className="space-y-2">
                      <Label>Certificates (Optional)</Label>
                      <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
                        <Award className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                        <Input
                          type="file"
                          accept="image/*,.pdf"
                          className="hidden"
                          id="certificates"
                          onChange={(e) => handleFileUpload("certificates", e.target.files?.[0] || null)}
                        />
                        <Button
                          type="button"
                          variant="outline"
                          size="sm"
                          onClick={() => document.getElementById("certificates")?.click()}
                          className="bg-transparent"
                        >
                          Upload Certificates
                        </Button>
                        {formData.certificates && (
                          <p className="text-xs text-green-600 mt-1 flex items-center justify-center gap-1">
                            <CheckCircle className="w-3 h-3" />
                            {formData.certificates.name}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CreditCard className="w-5 h-5 text-orange-600" />
                    Bank Account Details
                  </CardTitle>
                  <CardDescription>Provide your bank details for payment processing.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="bankName">Bank Name *</Label>
                      <Select onValueChange={(value) => setFormData((prev) => ({ ...prev, bankName: value }))}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select your bank" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="boc">Bank of Ceylon</SelectItem>
                          <SelectItem value="peoples">People's Bank</SelectItem>
                          <SelectItem value="commercial">Commercial Bank</SelectItem>
                          <SelectItem value="sampath">Sampath Bank</SelectItem>
                          <SelectItem value="hnb">Hatton National Bank</SelectItem>
                          <SelectItem value="dfcc">DFCC Bank</SelectItem>
                          <SelectItem value="ndb">National Development Bank</SelectItem>
                          <SelectItem value="seylan">Seylan Bank</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="branchCode">Branch Code</Label>
                      <Input
                        id="branchCode"
                        placeholder="e.g., 001"
                        value={formData.branchCode}
                        onChange={(e) => setFormData((prev) => ({ ...prev, branchCode: e.target.value }))}
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="accountHolderName">Account Holder Name *</Label>
                      <Input
                        id="accountHolderName"
                        placeholder="Full name as per bank account"
                        value={formData.accountHolderName}
                        onChange={(e) => setFormData((prev) => ({ ...prev, accountHolderName: e.target.value }))}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="accountNumber">Account Number *</Label>
                      <Input
                        id="accountNumber"
                        placeholder="Bank account number"
                        value={formData.accountNumber}
                        onChange={(e) => setFormData((prev) => ({ ...prev, accountNumber: e.target.value }))}
                        required
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Step 4: Review & Submit */}
          {currentStep === 4 && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  Review & Submit
                </CardTitle>
                <CardDescription>
                  Please review your information and agree to the terms before submitting.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Summary */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="font-semibold text-gray-800">Personal Information</h3>
                    <div className="text-sm space-y-1">
                      <p>
                        <span className="font-medium">Name:</span> {formData.firstName} {formData.lastName}
                      </p>
                      <p>
                        <span className="font-medium">Email:</span> {formData.email}
                      </p>
                      <p>
                        <span className="font-medium">Phone:</span> {formData.phone}
                      </p>
                      <p>
                        <span className="font-medium">City:</span> {formData.city}
                      </p>
                      <p>
                        <span className="font-medium">Languages:</span> {formData.languages.join(", ")}
                      </p>
                      <p>
                        <span className="font-medium">Experience:</span> {formData.experience}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="font-semibold text-gray-800">Professional Details</h3>
                    <div className="text-sm space-y-1">
                      <p>
                        <span className="font-medium">Specializations:</span> {formData.specializations.join(", ")}
                      </p>
                      <p>
                        <span className="font-medium">Bank:</span> {formData.bankName}
                      </p>
                      <p>
                        <span className="font-medium">Account Holder:</span> {formData.accountHolderName}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Terms and Conditions */}
                <div className="space-y-4 border-t pt-6">
                  <h3 className="font-semibold text-gray-800">Terms and Agreements</h3>

                  <div className="space-y-3">
                    <div className="flex items-start space-x-2">
                      <Checkbox
                        id="agreeTerms"
                        checked={formData.agreeTerms}
                        onCheckedChange={(checked) =>
                          setFormData((prev) => ({ ...prev, agreeTerms: checked as boolean }))
                        }
                        required
                      />
                      <Label htmlFor="agreeTerms" className="text-sm leading-relaxed">
                        I agree to the <span className="text-blue-600 underline cursor-pointer">Terms of Service</span>{" "}
                        and
                        <span className="text-blue-600 underline cursor-pointer"> Privacy Policy</span> of Gogo.lk
                      </Label>
                    </div>

                    <div className="flex items-start space-x-2">
                      <Checkbox
                        id="agreeBackground"
                        checked={formData.agreeBackground}
                        onCheckedChange={(checked) =>
                          setFormData((prev) => ({ ...prev, agreeBackground: checked as boolean }))
                        }
                        required
                      />
                      <Label htmlFor="agreeBackground" className="text-sm leading-relaxed">
                        I consent to background verification checks and understand that false information may result in
                        application rejection
                      </Label>
                    </div>

                    <div className="flex items-start space-x-2">
                      <Checkbox
                        id="agreeAvailability"
                        checked={formData.agreeAvailability}
                        onCheckedChange={(checked) =>
                          setFormData((prev) => ({ ...prev, agreeAvailability: checked as boolean }))
                        }
                        required
                      />
                      <Label htmlFor="agreeAvailability" className="text-sm leading-relaxed">
                        I commit to maintaining professional standards and being available for confirmed bookings
                      </Label>
                    </div>
                  </div>
                </div>

                {/* What's Next */}
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-2 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4" />
                    What happens next?
                  </h4>
                  <ul className="text-sm text-green-700 space-y-1">
                    <li>• We'll review your application within 24-48 hours</li>
                    <li>• Background and qualification verification will be conducted</li>
                    <li>• You'll receive an email with the approval status</li>
                    <li>• Once approved, you can start accepting tour bookings</li>
                    <li>• Our team will provide comprehensive onboarding training</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8">
            <Button variant="outline" onClick={handlePrevious} disabled={currentStep === 1} className="bg-transparent">
              Previous
            </Button>

            {currentStep < totalSteps ? (
              <Button onClick={handleNext} className="bg-purple-600 hover:bg-purple-700">
                Next Step
              </Button>
            ) : (
              <Button
                onClick={handleSubmit}
                className="bg-green-600 hover:bg-green-700"
                disabled={!formData.agreeTerms || !formData.agreeBackground || !formData.agreeAvailability}
              >
                Submit Application
              </Button>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
