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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  DollarSign,
  Search,
  Download,
  CreditCard,
  TrendingUp,
  Clock,
  AlertTriangle,
  Eye,
  RefreshCw,
} from "lucide-react"

export default function PaymentsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [typeFilter, setTypeFilter] = useState("all")

  const payments = [
    {
      id: "PAY001",
      bookingId: "BK001",
      customer: "John Silva",
      provider: "Kamal Perera",
      amount: "Rs. 2,500",
      commission: "Rs. 375",
      providerEarning: "Rs. 2,125",
      method: "Credit Card",
      status: "Completed",
      date: "2024-01-20 14:30",
      type: "Taxi",
    },
    {
      id: "PAY002",
      bookingId: "BK002",
      customer: "Sarah Johnson",
      provider: "Priya Jayawardena",
      amount: "Rs. 8,500",
      commission: "Rs. 1,275",
      providerEarning: "Rs. 7,225",
      method: "Cash",
      status: "Pending",
      date: "2024-01-21 09:00",
      type: "Tour Guide",
    },
    {
      id: "PAY003",
      bookingId: "BK003",
      customer: "Mike Chen",
      provider: "Sunil Rajapaksa",
      amount: "Rs. 850",
      commission: "Rs. 128",
      providerEarning: "Rs. 722",
      method: "Digital Wallet",
      status: "Failed",
      date: "2024-01-21 16:00",
      type: "Taxi",
    },
    {
      id: "PAY004",
      bookingId: "BK004",
      customer: "Emma Wilson",
      provider: "Nimal Fernando",
      amount: "Rs. 12,000",
      commission: "Rs. 1,800",
      providerEarning: "Rs. 10,200",
      method: "Credit Card",
      status: "Completed",
      date: "2024-01-19 08:00",
      type: "Tour Guide",
    },
    {
      id: "PAY005",
      bookingId: "BK005",
      customer: "David Brown",
      provider: "Chaminda Silva",
      amount: "Rs. 1,800",
      commission: "Rs. 270",
      providerEarning: "Rs. 1,530",
      method: "Credit Card",
      status: "Refunded",
      date: "2024-01-22 11:30",
      type: "Taxi",
    },
  ]

  const payouts = [
    {
      id: "PO001",
      provider: "Kamal Perera",
      type: "Driver",
      amount: "Rs. 45,600",
      period: "Jan 15-21, 2024",
      status: "Processed",
      processedDate: "2024-01-22 10:00",
      bankAccount: "****1234",
    },
    {
      id: "PO002",
      provider: "Priya Jayawardena",
      type: "Guide",
      amount: "Rs. 67,800",
      period: "Jan 15-21, 2024",
      status: "Pending",
      processedDate: null,
      bankAccount: "****5678",
    },
    {
      id: "PO003",
      provider: "Nimal Fernando",
      type: "Guide",
      amount: "Rs. 89,400",
      period: "Jan 15-21, 2024",
      status: "Processed",
      processedDate: "2024-01-22 10:00",
      bankAccount: "****9012",
    },
  ]

  const filteredPayments = payments.filter((payment) => {
    const matchesSearch =
      payment.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      payment.provider.toLowerCase().includes(searchTerm.toLowerCase()) ||
      payment.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      payment.bookingId.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === "all" || payment.status.toLowerCase() === statusFilter
    const matchesType = typeFilter === "all" || payment.type.toLowerCase() === typeFilter

    return matchesSearch && matchesStatus && matchesType
  })

  const getStatusBadge = (status: string) => {
    switch (status.toLowerCase()) {
      case "completed":
        return <Badge className="bg-green-100 text-green-800 hover:bg-green-200">Completed</Badge>
      case "pending":
        return <Badge variant="secondary">Pending</Badge>
      case "failed":
        return <Badge variant="destructive">Failed</Badge>
      case "refunded":
        return <Badge className="bg-orange-100 text-orange-800 hover:bg-orange-200">Refunded</Badge>
      case "processed":
        return <Badge className="bg-green-100 text-green-800 hover:bg-green-200">Processed</Badge>
      default:
        return <Badge variant="outline">{status}</Badge>
    }
  }

  const totalRevenue = payments
    .filter((p) => p.status === "Completed")
    .reduce((sum, payment) => sum + Number.parseFloat(payment.amount.replace("Rs. ", "").replace(",", "")), 0)

  const totalCommission = payments
    .filter((p) => p.status === "Completed")
    .reduce((sum, payment) => sum + Number.parseFloat(payment.commission.replace("Rs. ", "").replace(",", "")), 0)

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
              <BreadcrumbPage>Payments</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </header>

      <div className="flex flex-1 flex-col gap-4 p-4">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Payment Management</h1>
            <p className="text-muted-foreground">Monitor payments, commissions, and provider payouts</p>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" className="bg-transparent">
              <RefreshCw className="mr-2 h-4 w-4" />
              Refresh
            </Button>
            <Button variant="outline" className="bg-transparent">
              <Download className="mr-2 h-4 w-4" />
              Export
            </Button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid gap-4 md:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">Rs. {totalRevenue.toLocaleString()}</div>
              <div className="flex items-center text-xs text-muted-foreground">
                <TrendingUp className="mr-1 h-3 w-3 text-green-500" />
                <span className="text-green-500">+12.5%</span>
                <span className="ml-1">from last month</span>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Commission Earned</CardTitle>
              <CreditCard className="h-4 w-4 text-green-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">Rs. {totalCommission.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground">15% average commission</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Pending Payments</CardTitle>
              <Clock className="h-4 w-4 text-yellow-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{payments.filter((p) => p.status === "Pending").length}</div>
              <p className="text-xs text-muted-foreground">Awaiting processing</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Failed Payments</CardTitle>
              <AlertTriangle className="h-4 w-4 text-red-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{payments.filter((p) => p.status === "Failed").length}</div>
              <p className="text-xs text-muted-foreground">Require attention</p>
            </CardContent>
          </Card>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="payments" className="space-y-4">
          <TabsList>
            <TabsTrigger value="payments">Payment Transactions</TabsTrigger>
            <TabsTrigger value="payouts">Provider Payouts</TabsTrigger>
          </TabsList>

          {/* Payment Transactions */}
          <TabsContent value="payments">
            <Card>
              <CardHeader>
                <CardTitle>Payment Transactions</CardTitle>
                <CardDescription>All payment transactions and their status</CardDescription>
              </CardHeader>
              <CardContent>
                {/* Filters */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="Search payments..."
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
                      <SelectItem value="pending">Pending</SelectItem>
                      <SelectItem value="failed">Failed</SelectItem>
                      <SelectItem value="refunded">Refunded</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select value={typeFilter} onValueChange={setTypeFilter}>
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

                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Payment ID</TableHead>
                      <TableHead>Customer</TableHead>
                      <TableHead>Provider</TableHead>
                      <TableHead>Amount</TableHead>
                      <TableHead>Commission</TableHead>
                      <TableHead>Method</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredPayments.map((payment) => (
                      <TableRow key={payment.id}>
                        <TableCell>
                          <div className="space-y-1">
                            <div className="font-medium">{payment.id}</div>
                            <div className="text-xs text-muted-foreground">{payment.bookingId}</div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="font-medium">{payment.customer}</div>
                          <div className="text-xs text-muted-foreground">{payment.type}</div>
                        </TableCell>
                        <TableCell>{payment.provider}</TableCell>
                        <TableCell>
                          <div className="font-medium">{payment.amount}</div>
                          <div className="text-xs text-muted-foreground">Provider: {payment.providerEarning}</div>
                        </TableCell>
                        <TableCell className="font-medium text-green-600">{payment.commission}</TableCell>
                        <TableCell>{payment.method}</TableCell>
                        <TableCell>{getStatusBadge(payment.status)}</TableCell>
                        <TableCell className="text-sm text-muted-foreground">{payment.date}</TableCell>
                        <TableCell className="text-right">
                          <Dialog>
                            <DialogTrigger asChild>
                              <Button variant="outline" size="sm" className="bg-transparent">
                                <Eye className="mr-2 h-4 w-4" />
                                View
                              </Button>
                            </DialogTrigger>
                            <DialogContent>
                              <DialogHeader>
                                <DialogTitle>Payment Details</DialogTitle>
                                <DialogDescription>Complete payment information for {payment.id}</DialogDescription>
                              </DialogHeader>
                              <div className="grid gap-4">
                                <div className="grid grid-cols-2 gap-4">
                                  <div>
                                    <h4 className="font-semibold mb-2">Transaction Details</h4>
                                    <div className="space-y-1 text-sm">
                                      <div>Payment ID: {payment.id}</div>
                                      <div>Booking ID: {payment.bookingId}</div>
                                      <div>Service Type: {payment.type}</div>
                                      <div>Payment Method: {payment.method}</div>
                                      <div>Date: {payment.date}</div>
                                    </div>
                                  </div>
                                  <div>
                                    <h4 className="font-semibold mb-2">Amount Breakdown</h4>
                                    <div className="space-y-1 text-sm">
                                      <div>Total Amount: {payment.amount}</div>
                                      <div>Commission (15%): {payment.commission}</div>
                                      <div>Provider Earning: {payment.providerEarning}</div>
                                      <div>Status: {payment.status}</div>
                                    </div>
                                  </div>
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                  <div>
                                    <h4 className="font-semibold mb-2">Customer</h4>
                                    <div className="text-sm">{payment.customer}</div>
                                  </div>
                                  <div>
                                    <h4 className="font-semibold mb-2">Service Provider</h4>
                                    <div className="text-sm">{payment.provider}</div>
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
          </TabsContent>

          {/* Provider Payouts */}
          <TabsContent value="payouts">
            <Card>
              <CardHeader>
                <CardTitle>Provider Payouts</CardTitle>
                <CardDescription>Weekly payouts to drivers and guides</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Payout ID</TableHead>
                      <TableHead>Provider</TableHead>
                      <TableHead>Type</TableHead>
                      <TableHead>Amount</TableHead>
                      <TableHead>Period</TableHead>
                      <TableHead>Bank Account</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Processed Date</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {payouts.map((payout) => (
                      <TableRow key={payout.id}>
                        <TableCell className="font-medium">{payout.id}</TableCell>
                        <TableCell>{payout.provider}</TableCell>
                        <TableCell>
                          <Badge variant="outline">{payout.type}</Badge>
                        </TableCell>
                        <TableCell className="font-medium">{payout.amount}</TableCell>
                        <TableCell className="text-sm">{payout.period}</TableCell>
                        <TableCell className="text-sm text-muted-foreground">{payout.bankAccount}</TableCell>
                        <TableCell>{getStatusBadge(payout.status)}</TableCell>
                        <TableCell className="text-sm text-muted-foreground">
                          {payout.processedDate || "Not processed"}
                        </TableCell>
                        <TableCell className="text-right">
                          {payout.status === "Pending" ? (
                            <Button size="sm">Process Payout</Button>
                          ) : (
                            <Button variant="outline" size="sm" className="bg-transparent">
                              View Details
                            </Button>
                          )}
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
