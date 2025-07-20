"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { AppLayout } from "@/components/layout/app-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { 
  ProjectProgressChart, 
  BudgetComparisonChart, 
  ProjectTypePieChart, 
  MunicipalityPerformanceChart,
  ProjectTrendChart 
} from "@/components/ui/charts"
import {
  Building2,
  Users,
  FolderOpen,
  Settings,
  Bell,
  Calendar,
  TrendingUp,
  AlertTriangle,
  CheckCircle,
  BarChart3,
  FileText,
  Plus,
  Search,
  Eye,
  MapPin,
  Activity,
  Zap,
  Download,
  Clock,
  DollarSign,
} from "lucide-react"

export default function Dashboard() {
  const router = useRouter()
  const [notifications] = useState([
    {
      id: 1,
      title: "مشروع تطوير الحديقة المركزية",
      message: "تم الانتهاء من المرحلة الأولى",
      type: "success",
      time: "منذ ساعتين",
      avatar: "ح",
    },
    {
      id: 2,
      title: "مشروع إنارة الشوارع",
      message: "تأخير في الجدول الزمني",
      type: "warning",
      time: "منذ 4 ساعات",
      avatar: "إ",
    },
    {
      id: 3,
      title: "مشروع تطوير البنية التحتية",
      message: "بحاجة لموافقة على التعديلات",
      type: "info",
      time: "أمس",
      avatar: "ب",
    },
  ])

  const projects = [
    {
      id: 1,
      name: "تطوير الحديقة المركزية",
      municipality: "بلدية الشارقة",
      progress: 75,
      status: "قيد التنفيذ",
      dueDate: "2024-03-15",
      budget: "2,500,000",
      manager: "أحمد محمد",
      priority: "عالية",
      team: ["أ", "ف", "م"],
      attachments: 12,
      color: "from-green-500 to-emerald-600",
    },
    {
      id: 2,
      name: "مشروع إنارة الشوارع",
      municipality: "بلدية خورفكان",
      progress: 45,
      status: "متأخر",
      dueDate: "2024-02-28",
      budget: "1,800,000",
      manager: "فاطمة علي",
      priority: "متوسطة",
      team: ["ف", "س", "ع"],
      attachments: 8,
      color: "from-blue-500 to-cyan-600",
    },
    {
      id: 3,
      name: "تطوير البنية التحتية",
      municipality: "بلدية كلباء",
      progress: 90,
      status: "قيد التنفيذ",
      dueDate: "2024-04-10",
      budget: "5,200,000",
      manager: "محمد سالم",
      priority: "عالية",
      team: ["م", "ع", "ر", "ل"],
      attachments: 15,
      color: "from-purple-500 to-indigo-600",
    },
    {
      id: 4,
      name: "مشروع تجميل المدينة",
      municipality: "بلدية الذيد",
      progress: 30,
      status: "قيد التنفيذ",
      dueDate: "2024-05-20",
      budget: "3,100,000",
      manager: "نورا أحمد",
      priority: "منخفضة",
      team: ["ن", "ه", "ي"],
      attachments: 6,
      color: "from-orange-500 to-red-600",
    },
  ]

  const stats = [
    {
      title: "إجمالي المشاريع",
      value: "156",
      icon: FolderOpen,
      change: "+12%",
      color: "bg-primary-500",
      bgColor: "bg-primary-50",
      iconColor: "text-primary-500",
      description: "مشروع نشط",
    },
    {
      title: "المشاريع النشطة",
      value: "89",
      icon: Activity,
      change: "+5%",
      color: "bg-accent-blue",
      bgColor: "bg-blue-50",
      iconColor: "text-accent-blue",
      description: "قيد التنفيذ",
    },
    {
      title: "المشاريع المكتملة",
      value: "67",
      icon: CheckCircle,
      change: "+8%",
      color: "bg-primary-400",
      bgColor: "bg-primary-50",
      iconColor: "text-primary-400",
      description: "مكتمل بنجاح",
    },
    {
      title: "المشاريع المتأخرة",
      value: "12",
      icon: AlertTriangle,
      change: "-3%",
      color: "bg-accent-orange",
      bgColor: "bg-orange-50",
      iconColor: "text-accent-orange",
      description: "يحتاج متابعة",
    },
  ]

  // Navigation functions
  const handleNavigateToProjects = () => {
    router.push("/projects")
  }

  const handleViewProject = (projectId: number) => {
    router.push(`/projects/${projectId}`)
  }

  const handleCreateProject = () => {
    router.push("/projects/create")
  }

  const handleNavigateToUsers = () => {
    router.push("/users")
  }

  const handleNavigateToMunicipalities = () => {
    router.push("/municipalities")
  }

  const handleNavigateToSystem = () => {
    router.push("/system")
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "عالية":
        return "bg-red-100 text-red-600 border-red-200"
      case "متوسطة":
        return "bg-orange-100 text-accent-orange border-orange-200"
      case "منخفضة":
        return "bg-green-100 text-primary-500 border-green-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "قيد التنفيذ":
        return "bg-blue-100 text-blue-800 border-blue-200"
      case "مكتمل":
        return "bg-green-100 text-green-800 border-green-200"
      case "متأخر":
        return "bg-red-100 text-red-800 border-red-200"
      case "معلق":
        return "bg-yellow-100 text-yellow-800 border-yellow-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "قيد التنفيذ":
        return <Activity className="h-4 w-4" />
      case "مكتمل":
        return <CheckCircle className="h-4 w-4" />
      case "متأخر":
        return <AlertTriangle className="h-4 w-4" />
      case "معلق":
        return <Clock className="h-4 w-4" />
      default:
        return <Activity className="h-4 w-4" />
    }
  }

  return (
    <AppLayout
      title="لوحة التحكم"
      description="نظرة عامة على مشاريع البلديات"
      actions={
        <div className="flex items-center space-x-4 space-x-reverse">
          <Button onClick={handleCreateProject} className="bg-primary-500 hover:bg-primary-600 text-white">
            <Plus className="h-4 w-4 ml-2" />
            مشروع جديد
          </Button>
          <Button variant="outline">
            <Download className="h-4 w-4 ml-2" />
            تصدير التقرير
          </Button>
        </div>
      }
    >
      <div className="space-y-6" dir="rtl">
        {/* Enhanced Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="relative overflow-hidden border-0 shadow-sm hover:shadow-md transition-all duration-500 hover:-translate-y-2 cursor-pointer group bg-white/90 backdrop-blur rounded-2xl p-6"
              onClick={handleNavigateToProjects}
            >
              {/* Colored accent bar at the top */}
              <div className={`absolute top-0 right-0 left-0 h-1 ${stat.color} rounded-t-2xl`} />
              <CardHeader className="relative z-10 pb-2">
                <div className="flex items-center justify-between">
                  <div className={`p-4 rounded-2xl ${stat.bgColor} shadow-md border border-white/20 flex items-center justify-center`}>
                    <stat.icon className={`h-6 w-6 ${stat.iconColor}`} />
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-gray-900 mb-1 font-cairo flex items-center gap-2">
                      {stat.value}
                      {/* Mini trend line (placeholder) */}
                      <span className="inline-block w-12 h-4 bg-gradient-to-r from-green-300 to-green-500 rounded-full opacity-40 ml-2"></span>
                    </div>
                    <div className="flex items-center text-sm">
                      {stat.change.startsWith("+") ? (
                        <TrendingUp className="h-3 w-3 text-green-500 ml-1" />
                      ) : (
                        <TrendingUp className="h-3 w-3 text-red-500 ml-1 rotate-180" />
                      )}
                      <span className={stat.change.startsWith("+") ? "text-green-500" : "text-red-500" + " font-medium font-cairo"}>{stat.change}</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="relative z-10">
                <CardTitle className="text-lg font-semibold text-gray-800 mb-1 font-cairo flex items-center gap-2">
                  {stat.title}
                  {/* Icon for quick visual cue */}
                  <stat.icon className={`h-4 w-4 ${stat.iconColor}`} />
                </CardTitle>
                <p className="text-sm text-gray-600 font-cairo">{stat.description}</p>
                {/* Last updated time */}
                <p className="text-xs text-gray-400 mt-2 font-cairo">آخر تحديث: قبل دقيقة</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Charts Section */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 font-cairo">التحليلات والرسوم البيانية</h2>
              <p className="text-gray-600 font-cairo">نظرة شاملة على أداء المشاريع والميزانيات</p>
            </div>
            <div className="flex items-center space-x-3 space-x-reverse">
              <Button variant="outline" className="bg-white/50 backdrop-blur-sm font-cairo">
                <Download className="h-4 w-4 ml-2" />
                تصدير التقارير
              </Button>
              <Button className="bg-primary-500 hover:bg-primary-600 text-white font-cairo">
                <BarChart3 className="h-4 w-4 ml-2" />
                تحليل متقدم
              </Button>
            </div>
          </div>

          {/* Main Charts Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <ProjectProgressChart />
            <BudgetComparisonChart />
          </div>

          {/* Secondary Charts Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <ProjectTypePieChart />
            <MunicipalityPerformanceChart />
            <ProjectTrendChart />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Enhanced Recent Projects */}
          <Card className="lg:col-span-2 border-0 shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden bg-white/80 backdrop-blur-sm">
            <div className="h-1 bg-gradient-to-r from-primary-500 via-accent-blue to-primary-400" />
            <CardHeader className="bg-gradient-to-r from-orange-50 via-blue-50 to-purple-50 border-b border-gray-100">
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-2xl font-bold text-gray-900 flex items-center font-cairo">
                    <FolderOpen className="h-6 w-6 ml-3 text-primary-500" />
                    المشاريع الحديثة
                  </CardTitle>
                  <CardDescription className="text-gray-600 mt-1 font-cairo">
                    آخر المشاريع المضافة والمحدثة
                  </CardDescription>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="bg-white/50 backdrop-blur-sm hover:bg-orange-50 border-orange-200 font-cairo"
                  onClick={handleNavigateToProjects}
                >
                  <Eye className="h-4 w-4 ml-2" />
                  عرض الكل
                </Button>
              </div>
            </CardHeader>
            <CardContent className="p-6">
              <div className="grid gap-6">
                {projects.slice(0, 3).map((project) => (
                  <div
                    key={project.id}
                    className="group p-6 rounded-2xl bg-gradient-to-r from-white via-gray-50 to-white border border-gray-100 hover:shadow-md hover:border-orange-200 transition-all duration-300 cursor-pointer"
                    onClick={() => handleViewProject(project.id)}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h4 className="font-bold text-lg text-gray-900 group-hover:text-primary-500 transition-colors mb-2 font-cairo">
                          {project.name}
                        </h4>
                        <div className="flex items-center text-sm text-gray-600 mb-3">
                          <MapPin className="h-4 w-4 ml-2 text-primary-500" />
                          <span className="font-cairo">{project.municipality}</span>
                        </div>
                      </div>
                      <Badge className={`${getStatusColor(project.status)} border font-medium shadow-sm font-cairo`}>
                        {project.status}
                      </Badge>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between text-sm mb-2">
                          <span className="text-gray-600 font-medium font-cairo">التقدم</span>
                          <span className="font-bold text-gray-900 font-cairo">{project.progress}%</span>
                        </div>
                        <div className="relative">
                          <Progress value={project.progress} className="h-3 bg-gray-100" />
                          <div
                            className={`absolute inset-0 bg-gradient-to-r ${project.color} rounded-full opacity-80`}
                            style={{ width: `${project.progress}%` }}
                          />
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2 space-x-reverse">
                          <div className="flex -space-x-2 space-x-reverse">
                            {project.team.map((member, idx) => (
                              <Avatar key={idx} className="h-8 w-8 ring-2 ring-white">
                                <AvatarFallback
                                  className={`bg-gradient-to-br ${project.color} text-white text-xs font-semibold font-cairo`}
                                >
                                  {member}
                                </AvatarFallback>
                              </Avatar>
                            ))}
                          </div>
                          <div className="text-sm text-gray-600 font-cairo">
                            <span className="font-medium">{project.manager}</span>
                          </div>
                        </div>
                        <div className="flex items-center space-x-4 space-x-reverse text-sm">
                          <div className="flex items-center space-x-1 space-x-reverse">
                            <Calendar className="h-4 w-4 text-gray-400" />
                            <span className="text-gray-600 font-cairo">{project.dueDate}</span>
                          </div>
                          <div className="flex items-center space-x-1 space-x-reverse">
                            <DollarSign className="h-4 w-4 text-gray-400" />
                            <span className="text-gray-600 font-cairo">{project.budget} ريال</span>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                        <Badge className={`${getPriorityColor(project.priority)} border font-medium text-xs font-cairo`}>
                          {project.priority}
                        </Badge>
                        <div className="flex items-center space-x-4 space-x-reverse text-sm text-gray-500">
                          <div className="flex items-center space-x-1 space-x-reverse">
                            <FileText className="h-4 w-4" />
                            <span className="font-cairo">{project.attachments} ملف</span>
                          </div>
                          <div className="flex items-center space-x-1 space-x-reverse">
                            <Users className="h-4 w-4" />
                            <span className="font-cairo">{project.team.length} عضو</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Enhanced Notifications */}
          <Card className="border-0 shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden bg-white/80 backdrop-blur-sm">
            <div className="h-1 bg-gradient-to-r from-accent-orange to-accent-blue" />
            <CardHeader className="bg-gradient-to-r from-orange-50 to-blue-50 border-b border-gray-100">
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-xl font-bold text-gray-900 flex items-center font-cairo">
                    <Bell className="h-5 w-5 ml-2 text-accent-orange" />
                    الإشعارات الحديثة
                  </CardTitle>
                  <CardDescription className="text-gray-600 mt-1 font-cairo">
                    آخر التحديثات والإشعارات
                  </CardDescription>
                </div>
                <Badge className="bg-accent-orange text-white text-xs">3 جديد</Badge>
              </div>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-4">
                {notifications.map((notification) => (
                  <div
                    key={notification.id}
                    className="group p-4 rounded-xl bg-gradient-to-r from-white via-gray-50 to-white border border-gray-100 hover:shadow-sm transition-all duration-300 cursor-pointer"
                  >
                    <div className="flex items-start space-x-3 space-x-reverse">
                      <Avatar className="h-10 w-10 ring-2 ring-white">
                        <AvatarFallback
                          className={`${
                            notification.type === "success"
                              ? "bg-green-500"
                              : notification.type === "warning"
                                ? "bg-accent-orange"
                                : "bg-blue-500"
                          } text-white font-semibold text-sm font-cairo`}
                        >
                          {notification.avatar}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 mb-1 font-cairo">{notification.title}</h4>
                        <p className="text-sm text-gray-600 mb-2 font-cairo">{notification.message}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-gray-500 font-cairo">{notification.time}</span>
                          <Badge
                            className={`text-xs ${
                              notification.type === "success"
                                ? "bg-green-100 text-green-800"
                                : notification.type === "warning"
                                  ? "bg-orange-100 text-orange-800"
                                  : "bg-blue-100 text-blue-800"
                            } font-cairo`}
                          >
                            {notification.type === "success"
                              ? "نجح"
                              : notification.type === "warning"
                                ? "تحذير"
                                : "معلومات"}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </AppLayout>
  )
}
