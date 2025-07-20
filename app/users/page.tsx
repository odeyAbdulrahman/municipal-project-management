"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { AppLayout } from "@/components/layout/app-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import {
  ArrowRight,
  Plus,
  Search,
  Download,
  Edit,
  Eye,
  Users,
  UserCheck,
  UserX,
  Shield,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Award,
  TrendingUp,
  BarChart3,
  Clock,
} from "lucide-react"
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "@/components/ui/select"

// Client-side component to format dates safely
function FormattedDate({ date }: { date: string }) {
  const [formattedDate, setFormattedDate] = useState<string>("")
  const [hasMounted, setHasMounted] = useState(false)

  useEffect(() => {
    setHasMounted(true)
    const formatDate = () => {
      try {
        const formatted = new Date(date).toLocaleDateString("ar-AE")
        setFormattedDate(formatted)
      } catch (error) {
        setFormattedDate(date) // Fallback to original date string
      }
    }
    formatDate()
  }, [date])

  // Return the original date during SSR to prevent hydration mismatch
  return hasMounted ? formattedDate : date
}

export default function UsersPage() {
  const router = useRouter()
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedRole, setSelectedRole] = useState("all")

  const users = [
    {
      id: 1,
      name: "أحمد محمد الزعابي",
      email: "ahmed.alzaabi@shjmun.gov.ae",
      phone: "+971-50-1234567",
      role: "مدير عام",
      department: "الإدارة العليا",
      municipality: "بلدية الشارقة",
      joinDate: "2018-03-15",
      lastActive: "منذ 5 دقائق",
      status: "نشط",
      avatar: "/placeholder.svg?height=40&width=40",
      experience: "15 سنة",
      projects: 45,
      completedTasks: 234,
      performance: 95,
      permissions: ["إدارة المشاريع", "إدارة المستخدمين", "التقارير", "الموافقات"],
      color: "from-blue-500 to-blue-600",
      bgColor: "from-blue-50 to-blue-100",
    },
    {
      id: 2,
      name: "فاطمة سالم الشامسي",
      email: "fatima.shamsi@shjmun.gov.ae",
      phone: "+971-50-2345678",
      role: "مدير مشاريع",
      department: "إدارة المشاريع",
      municipality: "بلدية خورفكان",
      joinDate: "2019-07-22",
      lastActive: "منذ 15 دقيقة",
      status: "نشط",
      avatar: "/placeholder.svg?height=40&width=40",
      experience: "12 سنة",
      projects: 32,
      completedTasks: 189,
      performance: 92,
      permissions: ["إدارة المشاريع", "التقارير", "المتابعة"],
      color: "from-green-500 to-green-600",
      bgColor: "from-green-50 to-green-100",
    },
    {
      id: 3,
      name: "محمد عبدالله المنصوري",
      email: "mohammed.mansouri@shjmun.gov.ae",
      phone: "+971-50-3456789",
      role: "مهندس أول",
      department: "الهندسة والتخطيط",
      municipality: "بلدية كلباء",
      joinDate: "2020-01-10",
      lastActive: "منذ ساعة",
      status: "نشط",
      avatar: "/placeholder.svg?height=40&width=40",
      experience: "8 سنوات",
      projects: 28,
      completedTasks: 156,
      performance: 88,
      permissions: ["التصميم الهندسي", "المراجعة الفنية", "التقارير"],
      color: "from-purple-500 to-purple-600",
      bgColor: "from-purple-50 to-purple-100",
    },
    {
      id: 4,
      name: "عائشة أحمد الكتبي",
      email: "aisha.ketbi@shjmun.gov.ae",
      phone: "+971-50-4567890",
      role: "محاسب أول",
      department: "الشؤون المالية",
      municipality: "بلدية دبا الحصن",
      joinDate: "2017-09-05",
      lastActive: "منذ 30 دقيقة",
      status: "نشط",
      avatar: "/placeholder.svg?height=40&width=40",
      experience: "18 سنة",
      projects: 15,
      completedTasks: 298,
      performance: 94,
      permissions: ["إدارة الميزانية", "التقارير المالية", "المراجعة"],
      color: "from-amber-500 to-amber-600",
      bgColor: "from-amber-50 to-amber-100",
    },
    {
      id: 5,
      name: "سعد محمد الحمادي",
      email: "saad.hammadi@shjmun.gov.ae",
      phone: "+971-50-5678901",
      role: "منسق مشاريع",
      department: "التنسيق والمتابعة",
      municipality: "بلدية الذيد",
      joinDate: "2021-04-18",
      lastActive: "منذ يوم",
      status: "غير متصل",
      avatar: "/placeholder.svg?height=40&width=40",
      experience: "5 سنوات",
      projects: 22,
      completedTasks: 134,
      performance: 85,
      permissions: ["متابعة المشاريع", "التنسيق", "التقارير"],
      color: "from-emerald-500 to-emerald-600",
      bgColor: "from-emerald-50 to-emerald-100",
    },
    {
      id: 6,
      name: "مريم خالد الطنيجي",
      email: "mariam.tunaiji@shjmun.gov.ae",
      phone: "+971-50-6789012",
      role: "أخصائي موارد بشرية",
      department: "الموارد البشرية",
      municipality: "بلدية مليحة",
      joinDate: "2019-11-12",
      lastActive: "منذ 3 ساعات",
      status: "نشط",
      avatar: "/placeholder.svg?height=40&width=40",
      experience: "9 سنوات",
      projects: 18,
      completedTasks: 167,
      performance: 90,
      permissions: ["إدارة الموظفين", "التوظيف", "التدريب"],
      color: "from-rose-500 to-rose-600",
      bgColor: "from-rose-50 to-rose-100",
    },
  ]

  const roles = [
    { value: "all", label: "جميع الأدوار", count: users.length },
    { value: "مدير عام", label: "مدير عام", count: users.filter((u) => u.role === "مدير عام").length },
    { value: "مدير مشاريع", label: "مدير مشاريع", count: users.filter((u) => u.role === "مدير مشاريع").length },
    { value: "مهندس أول", label: "مهندس أول", count: users.filter((u) => u.role === "مهندس أول").length },
    { value: "محاسب أول", label: "محاسب أول", count: users.filter((u) => u.role === "محاسب أول").length },
    { value: "منسق مشاريع", label: "منسق مشاريع", count: users.filter((u) => u.role === "منسق مشاريع").length },
    {
      value: "أخصائي موارد بشرية",
      label: "أخصائي موارد بشرية",
      count: users.filter((u) => u.role === "أخصائي موارد بشرية").length,
    },
  ]

  const handleBackToDashboard = () => {
    router.push("/")
  }

  const handleCreateUser = () => {
    router.push("/users/create")
  }

  const handleViewUser = (userId: number) => {
    router.push(`/users/${userId}`)
  }

  const handleEditUser = (userId: number) => {
    router.push(`/users/${userId}/edit`)
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "نشط":
        return "bg-green-100 text-green-800 border-green-200"
      case "غير متصل":
        return "bg-gray-100 text-gray-800 border-gray-200"
      case "معطل":
        return "bg-red-100 text-red-800 border-red-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  const getPerformanceColor = (performance: number) => {
    if (performance >= 90) return "text-green-600"
    if (performance >= 80) return "text-yellow-600"
    return "text-red-600"
  }

  const filteredUsers = users.filter((user) => {
    const matchesSearch =
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.department.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesRole = selectedRole === "all" || user.role === selectedRole

    return matchesSearch && matchesRole
  })

  return (
    <AppLayout
      title="إدارة المستخدمين"
      description="إدارة موظفي بلديات إمارة الشارقة والصلاحيات"
    >
 
      <div dir="rtl" className="w-full px-4 sm:px-6 lg:px-8 py-8 text-right">
      <Card className="mb-8 border-0 shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden bg-white/80 backdrop-blur-sm">
        <div className="h-1 bg-gradient-to-r from-primary-500 via-accent-blue to-primary-400" />
        <CardContent className="p-6">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:gap-4">
         
          <Button
              onClick={handleCreateUser}
              className="bg-primary-500 hover:bg-primary-600 text-white font-cairo whitespace-nowrap order-1 lg:order-none"
            >
              <Plus className="h-4 w-4 ml-2" />
              إضافة مستخدم جديد
            </Button>
            <div className="flex-1 order-2 lg:order-none">
              <div className="relative">
                <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="البحث في المستخدمين..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pr-10"
                />
              </div>
            </div>
            <div className="flex gap-2 order-3 lg:order-none">
              
            <Select value={selectedRole} onValueChange={setSelectedRole}>
                <SelectTrigger className="w-40 bg-white/50 backdrop-blur-sm border-gray-200 font-cairo">
                  <SelectValue placeholder="جميع الأدوار" />
                </SelectTrigger>
                <SelectContent>
                  {roles.map((role) => (
                    <SelectItem key={role.value} value={role.value}>
                      {role.label} ({role.count})
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select defaultValue="all">
                <SelectTrigger className="w-40 bg-white/50 backdrop-blur-sm border-gray-200 font-cairo">
                  <SelectValue placeholder="جميع الحالات" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">جميع الحالات</SelectItem>
                  <SelectItem value="active">نشط</SelectItem>
                  <SelectItem value="inactive">غير متصل</SelectItem>
                  <SelectItem value="disabled">معطل</SelectItem>
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
              <Button variant="outline" className="hover:bg-gray-50 bg-transparent">
                <Download className="h-4 w-4 ml-2" />
                تصدير
              </Button>
              
            </div>
          </div>
        </CardContent>
      </Card>

        <Tabs defaultValue="overview" className="space-y-6 mt-5">
          <TabsList dir="rtl" className="grid w-full grid-cols-4 bg-white/60 backdrop-blur-sm border border-gray-200/50 shadow-sm flex-row-reverse">
            <TabsTrigger value="overview" className="data-[state=active]:bg-primary-500 data-[state=active]:text-white">
              نظرة عامة
            </TabsTrigger>
            <TabsTrigger value="users" className="data-[state=active]:bg-primary-500 data-[state=active]:text-white">
              قائمة المستخدمين
            </TabsTrigger>
            <TabsTrigger value="roles" className="data-[state=active]:bg-primary-500 data-[state=active]:text-white">
              الأدوار والصلاحيات
            </TabsTrigger>
            <TabsTrigger value="analytics" className="data-[state=active]:bg-primary-500 data-[state=active]:text-white">
              التحليلات
            </TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" dir="rtl" className="space-y-6 text-right">
            {/* Statistics Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "إجمالي المستخدمين",
                  value: users.length.toString(),
                  icon: Users,
                  color: "text-blue-600",
                  bgColor: "bg-blue-50",
                },
                {
                  title: "المستخدمين النشطين",
                  value: users.filter((u) => u.status === "نشط").length.toString(),
                  icon: UserCheck,
                  color: "text-green-600",
                  bgColor: "bg-green-50",
                },
                {
                  title: "غير المتصلين",
                  value: users.filter((u) => u.status === "غير متصل").length.toString(),
                  icon: UserX,
                  color: "text-gray-600",
                  bgColor: "bg-gray-50",
                },
                {
                  title: "متوسط الأداء",
                  value: `${Math.round(users.reduce((acc, user) => acc + user.performance, 0) / users.length)}%`,
                  icon: TrendingUp,
                  color: "text-amber-600",
                  bgColor: "bg-amber-50",
                },
              ].map((stat, index) => (
                <Card key={index} className="relative border-0 shadow-sm hover:shadow-md transition-shadow duration-300 bg-white/90 backdrop-blur rounded-4xl p-6">
                  {/* Colored accent bar at the top */}
                  <div className={`absolute top-0 right-0 left-0 h-1 ${stat.bgColor} rounded-t-2xl`} />
                  <CardContent className="p-0 pt-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-600">{stat.title}</p>
                        <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                      </div>
                      <div className={`p-3 rounded-lg ${stat.bgColor}`}>
                        <stat.icon className={`h-6 w-6 ${stat.color}`} />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Top Performers */}
            <Card className="relative border-0 shadow-sm hover:shadow-md transition-shadow duration-300 bg-white/90 backdrop-blur rounded-4xl p-6">
              <div className="absolute top-0 right-0 left-0 h-1 bg-gradient-to-l from-primary-500 via-primary-400 to-primary-200 rounded-4xl" />
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Award className="h-5 w-5 ml-2" />
                  أفضل الموظفين أداءً
                </CardTitle>
                <CardDescription>ترتيب الموظفين حسب مؤشرات الأداء</CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  {users
                    .sort((a, b) => b.performance - a.performance)
                    .slice(0, 3)
                    .map((user, index) => (
                      <div
                        key={user.id}
                        className="flex items-center justify-between p-4 bg-gradient-to-r from-gray-50 to-white rounded-lg border border-gray-100"
                      >
                        <div className="flex items-center gap-4">
                          <div className="flex items-center justify-center w-8 h-8 bg-gradient-to-br from-primary-500 to-primary-600 text-white rounded-full font-bold">
                            {index + 1}
                          </div>
                          <Avatar className="h-10 w-10">
                            <AvatarImage src={user.avatar || "/placeholder.svg"} alt={user.name} />
                            <AvatarFallback>
                              {user.name.split(" ")[0][0]}
                              {user.name.split(" ")[1][0]}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <h3 className="font-semibold text-gray-900">{user.name}</h3>
                            <p className="text-sm text-gray-600">
                              {user.role} - {user.municipality}
                            </p>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className={`text-2xl font-bold ${getPerformanceColor(user.performance)}`}>
                            {user.performance}%
                          </div>
                          <div className="text-sm text-gray-600">نقاط الأداء</div>
                        </div>
                      </div>
                    ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Users List Tab */}
          <TabsContent value="users" dir="rtl" className="space-y-6 text-righ">
            {/* Search and Filters */}


            {/* Users Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 w-full">
              {filteredUsers.map((user) => (
                <Card
                  key={user.id}
                  className="border-0 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden cursor-pointer"
                  onClick={() => handleViewUser(user.id)}
                >
                  <div className={`h-2 bg-gradient-to-r ${user.color}`} />
                  <CardHeader className={`bg-gradient-to-br ${user.bgColor} border-b border-gray-100`}>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Avatar className="h-12 w-12">
                          <AvatarImage src={user.avatar || "/placeholder.svg"} alt={user.name} />
                          <AvatarFallback>
                            {user.name.split(" ")[0][0]}
                            {user.name.split(" ")[1][0]}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <CardTitle className="text-lg text-gray-900">{user.name}</CardTitle>
                          <CardDescription className="text-gray-600">{user.role}</CardDescription>
                        </div>
                      </div>
                      <Badge className={`${getStatusColor(user.status)} border font-medium`}>{user.status}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6 space-y-4">
                    {/* Contact Info */}
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center text-gray-600">
                        <Mail className="h-4 w-4 ml-2" />
                        {user.email}
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Phone className="h-4 w-4 ml-2" />
                        {user.phone}
                      </div>
                      <div className="flex items-center text-gray-600">
                        <MapPin className="h-4 w-4 ml-2" />
                        {user.department} - {user.municipality}
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Calendar className="h-4 w-4 ml-2" />
                        انضم في <FormattedDate date={user.joinDate} />
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Clock className="h-4 w-4 ml-2" />
                        آخر نشاط: {user.lastActive}
                      </div>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-3 gap-4 pt-2 border-t border-gray-100">
                      <div className="text-center">
                        <div className="text-lg font-bold text-gray-900">{user.projects}</div>
                        <div className="text-xs text-gray-600">المشاريع</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold text-gray-900">{user.completedTasks}</div>
                        <div className="text-xs text-gray-600">المهام المكتملة</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold text-gray-900">{user.experience}</div>
                        <div className="text-xs text-gray-600">الخبرة</div>
                      </div>
                    </div>

                    {/* Performance */}
                    <div className="pt-2 border-t border-gray-100">
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-gray-600">مؤشر الأداء</span>
                        <span className={`font-medium ${getPerformanceColor(user.performance)}`}>
                          {user.performance}%
                        </span>
                      </div>
                      <Progress value={user.performance} className="h-2" />
                    </div>

                    {/* Permissions */}
                    <div className="pt-2 border-t border-gray-100">
                      <h4 className="text-sm font-medium text-gray-900 mb-2">الصلاحيات:</h4>
                      <div className="flex flex-wrap gap-1">
                        {user.permissions.slice(0, 2).map((permission, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {permission}
                          </Badge>
                        ))}
                        {user.permissions.length > 2 && (
                          <Badge variant="outline" className="text-xs">
                            +{user.permissions.length - 2}
                          </Badge>
                        )}
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex justify-end gap-2 pt-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={(e) => {
                          e.stopPropagation()
                          handleViewUser(user.id)
                        }}
                        className="hover:bg-primary-50 hover:border-primary-200 bg-transparent"
                      >
                        <Eye className="h-4 w-4 ml-2" />
                        عرض
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={(e) => {
                          e.stopPropagation()
                          handleEditUser(user.id)
                        }}
                        className="hover:bg-blue-50 hover:border-blue-200 bg-transparent"
                      >
                        <Edit className="h-4 w-4 ml-2" />
                        تعديل
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Roles Tab */}
          <TabsContent value="roles" dir="rtl" className="space-y-6 text-right">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {roles
                .filter((role) => role.value !== "all")
                .map((role, index) => (
                  <Card
                    key={index}
                    className="border-0 shadow-md hover:shadow-xl transition-all duration-300 rounded-xl bg-white hover:-translate-y-1 overflow-hidden"
                  >
                    <CardHeader className="bg-gradient-to-br from-gray-50 to-gray-100 border-b border-gray-100">
                      <CardTitle className="flex items-center text-lg text-gray-900">
                        <Shield className="h-5 w-5 ml-3 text-primary-600" />
                        {role.label}
                      </CardTitle>
                      <CardDescription>عدد المستخدمين: {role.count}</CardDescription>
                    </CardHeader>
                    <CardContent className="p-6 space-y-4">
                      <div className="text-center p-4 bg-gray-50 rounded-lg">
                        <div className="text-2xl font-bold text-gray-900">{role.count}</div>
                        <div className="text-sm text-gray-600">مستخدم</div>
                      </div>
                      <Button variant="outline" className="w-full hover:bg-gray-50 border-gray-200 bg-transparent">
                        <Eye className="h-4 w-4 ml-2" />
                        عرض الصلاحيات
                      </Button>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </TabsContent>

          {/* Analytics Tab */}
          <TabsContent value="analytics" dir="rtl" className="space-y-6 text-right shadow-md rounded-xl bg-white">
            <Card className="border-0 shadow-md">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BarChart3 className="h-5 w-5 ml-2" />
                  تحليلات المستخدمين
                </CardTitle>
                <CardDescription>إحصائيات وتحليلات شاملة لأداء المستخدمين</CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-6">
                  {/* Performance Analysis */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg">
                      <h3 className="font-semibold text-gray-900 mb-4">توزيع الأداء</h3>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-600">ممتاز (90%+)</span>
                          <span className="font-medium text-green-600">
                            {users.filter((u) => u.performance >= 90).length} مستخدم
                          </span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-600">جيد (80-89%)</span>
                          <span className="font-medium text-yellow-600">
                            {users.filter((u) => u.performance >= 80 && u.performance < 90).length} مستخدم
                          </span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-600">يحتاج تحسين (&lt;80%)</span>
                          <span className="font-medium text-red-600">
                            {users.filter((u) => u.performance < 80).length} مستخدم
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="p-4 bg-gradient-to-br from-green-50 to-green-100 rounded-lg">
                      <h3 className="font-semibold text-gray-900 mb-4">توزيع البلديات</h3>
                      <div className="space-y-3">
                        {[...new Set(users.map((u) => u.municipality))].map((municipality) => (
                          <div key={municipality} className="flex justify-between items-center">
                            <span className="text-sm text-gray-600">{municipality}</span>
                            <span className="font-medium text-gray-900">
                              {users.filter((u) => u.municipality === municipality).length} مستخدم
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Detailed User Analytics */}
                  <div className="space-y-4">
                    <h3 className="font-semibold text-gray-900">تفاصيل أداء المستخدمين</h3>
                    {users.map((user) => (
                      <div key={user.id} className="p-4 bg-gray-50 rounded-lg">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center gap-3">
                            <Avatar className="h-8 w-8">
                              <AvatarImage src={user.avatar || "/placeholder.svg"} alt={user.name} />
                              <AvatarFallback>
                                {user.name.split(" ")[0][0]}
                                {user.name.split(" ")[1][0]}
                              </AvatarFallback>
                            </Avatar>
                            <div>
                              <h4 className="font-medium text-gray-900">{user.name}</h4>
                              <p className="text-sm text-gray-600">{user.role}</p>
                            </div>
                          </div>
                          <Badge
                            className={`${
                              user.performance >= 90
                                ? "bg-green-100 text-green-800 border-green-200"
                                : user.performance >= 80
                                  ? "bg-yellow-100 text-yellow-800 border-yellow-200"
                                  : "bg-red-100 text-red-800 border-red-200"
                            } border font-medium`}
                          >
                            {user.performance}%
                          </Badge>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm">
                          <div>
                            <span className="text-gray-600">المشاريع:</span>
                            <div className="font-medium">{user.projects}</div>
                          </div>
                          <div>
                            <span className="text-gray-600">المهام المكتملة:</span>
                            <div className="font-medium">{user.completedTasks}</div>
                          </div>
                          <div>
                            <span className="text-gray-600">سنوات الخبرة:</span>
                            <div className="font-medium">{user.experience}</div>
                          </div>
                          <div>
                            <span className="text-gray-600">البلدية:</span>
                            <div className="font-medium">{user.municipality}</div>
                          </div>
                        </div>
                        <div className="mt-4">
                          <Progress value={user.performance} className="h-2" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </AppLayout>
  )
}
