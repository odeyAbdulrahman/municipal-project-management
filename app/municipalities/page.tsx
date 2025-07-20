"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { AppLayout } from "@/components/layout/app-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import {
  Search,
  MapPin,
  Phone,
  Mail,
  Globe,
  Users,
  Building2,
  Calendar,
  TrendingUp,
  Eye,
  Edit,
  Plus,
  Download,
  Filter,
  Star,
  Activity,
  CheckCircle,
  AlertTriangle,
  Clock,
  Target,
  DollarSign,
  FileText,
  Settings,
  ArrowRight,
} from "lucide-react"
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "@/components/ui/select"

// Client-side component to format numbers safely
function FormattedNumber({ value }: { value: number }) {
  const [formattedValue, setFormattedValue] = useState<string>("")
  const [hasMounted, setHasMounted] = useState(false)

  useEffect(() => {
    setHasMounted(true)
    const formatNumber = () => {
      try {
        const formatted = value.toLocaleString()
        setFormattedValue(formatted)
      } catch (error) {
        setFormattedValue(value.toString()) // Fallback to string representation
      }
    }
    formatNumber()
  }, [value])

  // Return the original value during SSR to prevent hydration mismatch
  return hasMounted ? formattedValue : value.toString()
}

export default function MunicipalitiesPage() {
  const router = useRouter()
  const [searchTerm, setSearchTerm] = useState("")

  const municipalities = [
    {
      id: 1,
      name: "بلدية الشارقة",
      nameEn: "Sharjah Municipality",
      region: "مدينة الشارقة",
      established: "1962",
      population: "1,800,000",
      area: "2,590 كم²",
      departments: 8,
      projects: 45,
      employees: 320,
      activeProjects: 28,
      completedProjects: 156,
      budget: "850,000,000",
      phone: "+971-6-5631111",
      email: "info@shjmun.gov.ae",
      address: "شارع الملك فيصل، الشارقة، دولة الإمارات العربية المتحدة",
      website: "www.shjmun.gov.ae",
      mayor: "سعادة ثابت سالم الطريفي",
      status: "نشط",
      rating: 4.8,
      color: "from-blue-500 to-blue-600",
      bgColor: "from-blue-50 to-blue-100",
      services: [
        "إدارة النفايات والتنظيف",
        "صيانة الطرق والبنية التحتية",
        "تنسيق الحدائق والمساحات الخضراء",
        "إصدار التراخيص التجارية",
        "الخدمات الصحية والبيئية",
        "التخطيط العمراني والإسكان",
        "الخدمات الثقافية والتراثية",
        "إدارة المرافق العامة"
      ],
    },
    {
      id: 2,
      name: "بلدية خورفكان",
      nameEn: "Khorfakkan Municipality",
      region: "الساحل الشرقي",
      established: "1952",
      population: "42,000",
      area: "158 كم²",
      departments: 6,
      projects: 18,
      employees: 95,
      activeProjects: 12,
      completedProjects: 67,
      budget: "180,000,000",
      phone: "+971-9-2370000",
      email: "info@khorfakkan.gov.ae",
      address: "كورنيش خورفكان، خورفكان، الشارقة",
      website: "www.khorfakkan.gov.ae",
      mayor: "سعادة محمد سالم الكعبي",
      status: "نشط",
      rating: 4.6,
      color: "from-green-500 to-green-600",
      bgColor: "from-green-50 to-green-100",
      services: [
        "إدارة الموانئ والمرافق البحرية",
        "السياحة الساحلية والبيئة البحرية",
        "صيانة الطرق الجبلية",
        "الخدمات السياحية والفندقية",
        "إدارة الشواطئ والمنتجعات",
        "الخدمات البيئية والمحميات الطبيعية"
      ],
    },
    {
      id: 3,
      name: "بلدية كلباء",
      nameEn: "Kalba Municipality",
      region: "الساحل الشرقي",
      established: "1951",
      population: "48,000",
      area: "223 كم²",
      departments: 5,
      projects: 22,
      employees: 78,
      activeProjects: 15,
      completedProjects: 89,
      budget: "220,000,000",
      phone: "+971-9-2770000",
      email: "info@kalba.gov.ae",
      address: "شارع الشيخ خليفة، كلباء، الشارقة",
      website: "www.kalba.gov.ae",
      mayor: "سعادة أحمد عبدالله المنصوري",
      status: "نشط",
      rating: 4.7,
      color: "from-purple-500 to-purple-600",
      bgColor: "from-purple-50 to-purple-100",
      services: [
        "إدارة المحميات الطبيعية",
        "السياحة البيئية والتراثية",
        "صيد الأسماك والثروة البحرية",
        "الخدمات الزراعية والري",
        "إدارة الغابات والمانجروف",
        "الخدمات البيطرية والحيوانية"
      ],
    },
    {
      id: 4,
      name: "بلدية دبا الحصن",
      nameEn: "Dibba Al-Hisn Municipality",
      region: "الساحل الشرقي",
      established: "1953",
      population: "35,000",
      area: "102 كم²",
      departments: 5,
      projects: 16,
      employees: 65,
      activeProjects: 10,
      completedProjects: 54,
      budget: "150,000,000",
      phone: "+971-9-2440000",
      email: "info@dibbalhisn.gov.ae",
      address: "شارع الكورنيش، دبا الحصن، الشارقة",
      website: "www.dibbalhisn.gov.ae",
      mayor: "سعادة سالم محمد الشامسي",
      status: "نشط",
      rating: 4.5,
      color: "from-orange-500 to-orange-600",
      bgColor: "from-orange-50 to-orange-100",
      services: [
        "إدارة الموانئ وصيد الأسماك",
        "السياحة الجبلية والساحلية",
        "الخدمات الحدودية والجمركية",
        "إدارة الأسواق التراثية",
        "الخدمات الزراعية والرعوية",
        "صيانة الطرق الساحلية"
      ],
    },
    {
      id: 5,
      name: "بلدية الذيد",
      nameEn: "Al Dhaid Municipality",
      region: "المنطقة الوسطى",
      established: "1955",
      population: "85,000",
      area: "680 كم²",
      departments: 6,
      projects: 28,
      employees: 125,
      activeProjects: 18,
      completedProjects: 98,
      budget: "320,000,000",
      phone: "+971-6-8820000",
      email: "info@aldhaid.gov.ae",
      address: "شارع الشيخ زايد، الذيد، الشارقة",
      website: "www.aldhaid.gov.ae",
      mayor: "سعادة علي محمد الشامسي",
      status: "نشط",
      rating: 4.4,
      color: "from-red-500 to-red-600",
      bgColor: "from-red-50 to-red-100",
      services: [
        "الخدمات الزراعية والري",
        "إدارة الأسواق المركزية",
        "الخدمات البيطرية والحيوانية",
        "صيانة الطرق الريفية",
        "إدارة المراعي والغابات",
        "الخدمات البيئية والتنمية المستدامة"
      ],
    },
  ]

  const filteredMunicipalities = municipalities.filter((municipality) =>
    municipality.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    municipality.nameEn.toLowerCase().includes(searchTerm.toLowerCase()) ||
    municipality.region.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const handleViewMunicipality = (id: number) => {
    router.push(`/municipalities/${id}`)
  }

  const handleEditMunicipality = (id: number) => {
    router.push(`/municipalities/${id}/edit`)
  }

  const handleCreateMunicipality = () => {
    router.push("/municipalities/create")
  }

  const handleExport = () => {
    // Export functionality
    console.log("Exporting municipalities data...")
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "نشط":
        return "bg-green-100 text-green-800 border-green-200"
      case "غير نشط":
        return "bg-red-100 text-red-800 border-red-200"
      case "قيد التطوير":
        return "bg-yellow-100 text-yellow-800 border-yellow-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "نشط":
        return <CheckCircle className="h-3 w-3" />
      case "غير نشط":
        return <AlertTriangle className="h-3 w-3" />
      case "قيد التطوير":
        return <Clock className="h-3 w-3" />
      default:
        return <Activity className="h-3 w-3" />
    }
  }

  return (
    <AppLayout
      title="إدارة البلديات"
      description="إدارة وتنظيم البلديات والخدمات البلدية"
      
    >
      <div className="w-full px-4 sm:px-6 lg:px-8 py-8">
        {/* Search and Filters */}
        <Card className="mb-8 border-0 shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden bg-white/80 backdrop-blur-sm">
          <div className="h-1 bg-gradient-to-r from-primary-500 via-accent-blue to-primary-400" />
          <CardContent className="p-6">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:gap-4">
              <Button
                onClick={handleCreateMunicipality}
                className="bg-primary-500 hover:bg-primary-600 text-white font-cairo whitespace-nowrap order-1 lg:order-none"
              >
                <Plus className="h-4 w-4 ml-2" />
                إضافة بلدية
              </Button>
              <div className="flex-1 order-2 lg:order-none">
                <div className="relative">
                  <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input
                    placeholder="البحث في البلديات..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pr-10"
                  />
                </div>
              </div>
              <div className="flex gap-2 order-3 lg:order-none">
                <Select defaultValue="all">
                  <SelectTrigger className="w-40 bg-white/50 backdrop-blur-sm border-gray-200 font-cairo">
                    <SelectValue placeholder="جميع الأدوار" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">جميع الأدوار</SelectItem>
                    <SelectItem value="mayor">رئيس البلدية</SelectItem>
                    <SelectItem value="manager">مدير</SelectItem>
                    <SelectItem value="employee">موظف</SelectItem>
                  </SelectContent>
                </Select>
                <Select defaultValue="all">
                  <SelectTrigger className="w-40 bg-white/50 backdrop-blur-sm border-gray-200 font-cairo">
                    <SelectValue placeholder="جميع الحالات" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">جميع الحالات</SelectItem>
                    <SelectItem value="active">نشط</SelectItem>
                    <SelectItem value="inactive">غير نشط</SelectItem>
                    <SelectItem value="developing">قيد التطوير</SelectItem>
                  </SelectContent>
                </Select>
                <Select defaultValue="all">
                  <SelectTrigger className="w-40 bg-white/50 backdrop-blur-sm border-gray-200 font-cairo">
                    <SelectValue placeholder="جميع الأولويات" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">جميع الأولويات</SelectItem>
                    <SelectItem value="high">عالية</SelectItem>
                    <SelectItem value="medium">متوسطة</SelectItem>
                    <SelectItem value="low">منخفضة</SelectItem>
                  </SelectContent>
                </Select>
                <Button variant="outline" onClick={handleExport} className="hover:bg-gray-50 bg-transparent">
                  <Download className="h-4 w-4 ml-2" />
                  تصدير
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 font-cairo">إجمالي البلديات</p>
                  <p className="text-2xl font-bold text-gray-900 font-cairo">{municipalities.length}</p>
                </div>
                <div className="h-12 w-12 bg-sharjah-orange/10 rounded-lg flex items-center justify-center">
                  <Building2 className="h-6 w-6 text-sharjah-orange" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 font-cairo">المشاريع النشطة</p>
                  <p className="text-2xl font-bold text-gray-900 font-cairo">
                    {municipalities.reduce((sum, m) => sum + m.activeProjects, 0)}
                  </p>
                </div>
                <div className="h-12 w-12 bg-sharjah-blue/10 rounded-lg flex items-center justify-center">
                  <Activity className="h-6 w-6 text-sharjah-blue" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 font-cairo">إجمالي الموظفين</p>
                  <p className="text-2xl font-bold text-gray-900 font-cairo">
                    {municipalities.reduce((sum, m) => sum + m.employees, 0)}
                  </p>
                </div>
                <div className="h-12 w-12 bg-sharjah-green/10 rounded-lg flex items-center justify-center">
                  <Users className="h-6 w-6 text-sharjah-green" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 font-cairo">الميزانية الإجمالية</p>
                  <p className="text-2xl font-bold text-gray-900 font-cairo">
                    <FormattedNumber value={municipalities.reduce((sum, m) => sum + parseInt(m.budget.replace(/,/g, "")), 0)} />
                  </p>
                </div>
                <div className="h-12 w-12 bg-sharjah-purple/10 rounded-lg flex items-center justify-center">
                  <DollarSign className="h-6 w-6 text-sharjah-purple" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Municipalities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredMunicipalities.map((municipality) => (
            <Card
              key={municipality.id}
              className="group hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm border-0 shadow-sm cursor-pointer card-hover"
              onClick={() => handleViewMunicipality(municipality.id)}
            >
              <CardHeader className="relative overflow-hidden">
                {/* Background gradient */}
                <div
                  className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${municipality.color} rounded-full -translate-y-16 translate-x-16 opacity-10`}
                />

                <div className="flex items-start justify-between relative z-10">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <CardTitle className="text-lg font-bold text-gray-900 group-hover:text-sharjah-orange transition-colors line-clamp-1 font-cairo">
                        {municipality.name}
                      </CardTitle>
                      <Badge
                        className={`${getStatusColor(municipality.status)} border font-medium text-xs shadow-sm font-cairo`}
                      >
                        {getStatusIcon(municipality.status)}
                        {municipality.status}
                      </Badge>
                    </div>
                    <CardDescription className="text-gray-600 line-clamp-2 mb-3 font-cairo">
                      {municipality.nameEn}
                    </CardDescription>
                    <div className="flex items-center text-sm text-gray-600">
                      <MapPin className="h-4 w-4 ml-2 text-sharjah-orange" />
                      <span className="font-cairo">{municipality.region}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={(e) => {
                        e.stopPropagation()
                        handleEditMunicipality(municipality.id)
                      }}
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={(e) => {
                        e.stopPropagation()
                        handleViewMunicipality(municipality.id)
                      }}
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <Eye className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Contact Info */}
                <div className="space-y-3">
                  <div className="flex items-center text-sm text-gray-600">
                    <Phone className="h-4 w-4 ml-2 text-sharjah-blue" />
                    <span className="font-cairo">{municipality.phone}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Mail className="h-4 w-4 ml-2 text-sharjah-green" />
                    <span className="font-cairo">{municipality.email}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Globe className="h-4 w-4 ml-2 text-sharjah-purple" />
                    <span className="font-cairo">{municipality.website}</span>
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-100">
                  <div className="text-center">
                    <div className="text-lg font-bold text-gray-900 font-cairo">
                      {municipality.activeProjects}
                    </div>
                    <div className="text-xs text-gray-600 font-cairo">مشاريع نشطة</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-gray-900 font-cairo">
                      {municipality.employees}
                    </div>
                    <div className="text-xs text-gray-600 font-cairo">موظف</div>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center justify-between pt-4">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 text-yellow-500 fill-current" />
                    <span className="text-sm font-medium text-gray-900 font-cairo">
                      {municipality.rating}
                    </span>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={(e) => {
                      e.stopPropagation()
                      handleViewMunicipality(municipality.id)
                    }}
                    className="hover:bg-blue-50 hover:border-blue-200 bg-white/50 backdrop-blur-sm font-cairo"
                  >
                    <ArrowRight className="h-4 w-4 ml-2" />
                    عرض التفاصيل
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredMunicipalities.length === 0 && (
          <Card className="border-0 shadow-sm bg-white/80 backdrop-blur-sm">
            <CardContent className="p-12 text-center">
              <div className="text-gray-400 mb-4">
                <Search className="h-12 w-12 mx-auto" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2 font-cairo">لا توجد بلديات</h3>
              <p className="text-gray-600 font-cairo">لم يتم العثور على بلديات تطابق معايير البحث</p>
            </CardContent>
          </Card>
        )}
      </div>
    </AppLayout>
  )
}
