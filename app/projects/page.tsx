"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { AppLayout } from "@/components/layout/app-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import {
  Plus,
  Search,
  Download,
  Eye,
  Edit,
  MoreVertical,
  MapPin,
  Target,
  Users,
  Clock,
  AlertTriangle,
  CheckCircle,
  Activity,
  FileText,
  Building2,
  FolderOpen,
  Settings,
  BarChart3,
} from "lucide-react"

// Client-side component to calculate days remaining
function DaysRemaining({ dueDate }: { dueDate: string }) {
  const [daysRemaining, setDaysRemaining] = useState<number>(0)
  const [hasMounted, setHasMounted] = useState(false)

  useEffect(() => {
    setHasMounted(true)
    const calculateDays = () => {
      const due = new Date(dueDate).getTime()
      const now = new Date().getTime()
      const diff = due - now
      const days = Math.ceil(diff / (1000 * 60 * 60 * 24))
      setDaysRemaining(days)
    }
    
    calculateDays()
    // Update every minute
    const interval = setInterval(calculateDays, 60000)
    return () => clearInterval(interval)
  }, [dueDate])

  // Return 0 during SSR to prevent hydration mismatch
  return hasMounted ? daysRemaining : 0
}

export default function ProjectsPage() {
  const router = useRouter()
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [priorityFilter, setPriorityFilter] = useState("all")

  const projects = [
    {
      id: 1,
      name: "تطوير الحديقة المركزية",
      description: "مشروع تطوير وتجديد الحديقة المركزية في وسط المدينة",
      municipality: "بلدية الشارقة",
      department: "قسم الحدائق والتشجير",
      progress: 75,
      status: "قيد التنفيذ",
      priority: "عالية",
      dueDate: "2024-03-15",
      startDate: "2024-01-10",
      budget: "2,500,000",
      spent: "1,875,000",
      manager: "أحمد محمد",
      team: ["أ", "ف", "م", "ن"],
      phases: 4,
      completedPhases: 3,
      tasks: 24,
      completedTasks: 18,
      type: "تطوير وتحسين",
      attachments: 12,
      color: "from-green-500 to-emerald-600",
    },
    {
      id: 2,
      name: "مشروع إنارة الشوارع",
      description: "تركيب وصيانة أنظمة الإنارة الحديثة في الأحياء السكنية",
      municipality: "بلدية خورفكان",
      department: "قسم الكهرباء والإنارة",
      progress: 45,
      status: "متأخر",
      priority: "متوسطة",
      dueDate: "2024-02-28",
      startDate: "2023-12-01",
      budget: "1,800,000",
      spent: "810,000",
      manager: "فاطمة علي",
      team: ["ف", "س", "ع"],
      phases: 3,
      completedPhases: 1,
      tasks: 18,
      completedTasks: 8,
      type: "بنية تحتية",
      attachments: 8,
      color: "from-blue-500 to-cyan-600",
    },
    {
      id: 3,
      name: "تطوير البنية التحتية",
      description: "تحديث شبكات المياه والصرف الصحي في المنطقة الشمالية",
      municipality: "بلدية كلباء",
      department: "قسم المياه والصرف",
      progress: 90,
      status: "قيد التنفيذ",
      priority: "عالية",
      dueDate: "2024-04-10",
      startDate: "2023-10-15",
      budget: "5,200,000",
      spent: "4,680,000",
      manager: "محمد سالم",
      team: ["م", "ع", "ر", "ل", "ك"],
      phases: 5,
      completedPhases: 4,
      tasks: 35,
      completedTasks: 31,
      type: "بنية تحتية",
      attachments: 15,
      color: "from-purple-500 to-indigo-600",
    },
    {
      id: 4,
      name: "مشروع تجميل المدينة",
      description: "تجميل الواجهات والميادين العامة وتطوير المساحات الخضراء",
      municipality: "بلدية دبا الحصن",
      department: "قسم التخطيط العمراني",
      progress: 30,
      status: "قيد التنفيذ",
      priority: "منخفضة",
      dueDate: "2024-05-20",
      startDate: "2024-02-01",
      budget: "3,100,000",
      spent: "930,000",
      manager: "نورا أحمد",
      team: ["ن", "ه", "ي"],
      phases: 6,
      completedPhases: 2,
      tasks: 28,
      completedTasks: 8,
      type: "تطوير وتحسين",
      attachments: 6,
      color: "from-orange-500 to-red-600",
    },
    {
      id: 5,
      name: "مشروع الطرق والجسور",
      description: "إنشاء وصيانة الطرق الرئيسية وبناء جسور جديدة",
      municipality: "بلدية الذيد",
      department: "قسم الطرق والنقل",
      progress: 60,
      status: "قيد التنفيذ",
      priority: "عالية",
      dueDate: "2024-06-30",
      startDate: "2023-11-20",
      budget: "8,500,000",
      spent: "5,100,000",
      manager: "خالد العتيبي",
      team: ["خ", "ز", "ط", "ق", "و"],
      phases: 4,
      completedPhases: 2,
      tasks: 42,
      completedTasks: 25,
      type: "بنية تحتية",
      attachments: 20,
      color: "from-teal-500 to-blue-600",
    },
    {
      id: 6,
      name: "مشروع المراكز الصحية",
      description: "بناء وتجهيز مراكز صحية جديدة في الأحياء النائية",
      municipality: "بلدية مليحة",
      department: "قسم الخدمات الصحية",
      progress: 15,
      status: "قيد التنفيذ",
      priority: "عالية",
      dueDate: "2024-08-15",
      startDate: "2024-01-15",
      budget: "6,200,000",
      spent: "930,000",
      manager: "سارة الأحمد",
      team: ["س", "ت", "ث"],
      phases: 5,
      completedPhases: 1,
      tasks: 38,
      completedTasks: 6,
      type: "خدمات عامة",
      attachments: 9,
      color: "from-pink-500 to-rose-600",
    },
  ]

  // Navigation functions
  const handleViewProject = (projectId: number) => {
    router.push(`/projects/${projectId}`)
  }

  const handleEditProject = (projectId: number) => {
    router.push(`/projects/${projectId}/edit`)
  }

  const handleCreateProject = () => {
    router.push("/projects/create")
  }

  const handleExport = () => {
    console.log("Exporting projects...")
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "عالية":
        return "bg-red-100 text-sharjah-red border-red-200"
      case "متوسطة":
        return "bg-orange-100 text-sharjah-orange border-orange-200"
      case "منخفضة":
        return "bg-green-100 text-sharjah-green border-green-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "قيد التنفيذ":
        return "bg-blue-100 text-sharjah-blue border-blue-200"
      case "متأخر":
        return "bg-red-100 text-sharjah-red border-red-200"
      case "مكتمل":
        return "bg-green-100 text-sharjah-green border-green-200"
      case "متوقف":
        return "bg-gray-100 text-gray-800 border-gray-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "قيد التنفيذ":
        return <Activity className="h-3 w-3" />
      case "متأخر":
        return <AlertTriangle className="h-3 w-3" />
      case "مكتمل":
        return <CheckCircle className="h-3 w-3" />
      default:
        return <Clock className="h-3 w-3" />
    }
  }

  const filteredProjects = projects.filter((project) => {
    const matchesSearch =
      project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.municipality.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === "all" || project.status === statusFilter
    const matchesPriority = priorityFilter === "all" || project.priority === priorityFilter

    return matchesSearch && matchesStatus && matchesPriority
  })

  return (
    <AppLayout
      title="إدارة المشاريع"
      description="متابعة وإدارة جميع المشاريع البلدية"
    >
      <div className="p-8">
          {/* Enhanced Filters - Horizontal Layout */}
          <Card className="mb-8 border-0 shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden bg-white/80 backdrop-blur-sm">
            <div className="h-1 bg-gradient-to-r from-sharjah-orange via-sharjah-blue to-sharjah-purple" />
            <CardContent className="p-6">
              
              <div className="flex items-center gap-4">
                                {/* Add Project Button */}
                                <Button
                  onClick={handleCreateProject}
                  className="bg-primary-500 hover:bg-primary-600 text-white shadow-sm hover:shadow-md transition-all duration-300 font-cairo whitespace-nowrap"
                >
                  <Plus className="h-4 w-4 ml-2" />
                  إضافة مشروع
                </Button>
               

                {/* Search Input */}
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                    <Input
                      placeholder="البحث في المشاريع..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pr-10 bg-white/50 backdrop-blur-sm border-gray-200 font-cairo"
                    />
                  </div>
                </div>


                {/* Priority Dropdown */}
                <Select value={priorityFilter} onValueChange={setPriorityFilter}>
                  <SelectTrigger className="w-40 bg-white/50 backdrop-blur-sm border-gray-200 font-cairo">
                    <SelectValue placeholder="جميع الأولويات" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">جميع الأولويات</SelectItem>
                    <SelectItem value="عالية">عالية</SelectItem>
                    <SelectItem value="متوسطة">متوسطة</SelectItem>
                    <SelectItem value="منخفضة">منخفضة</SelectItem>
                  </SelectContent>
                </Select>

                {/* Status Dropdown */}
                <Select value={statusFilter} onValueChange={setStatusFilter}>
                  <SelectTrigger className="w-40 bg-white/50 backdrop-blur-sm border-gray-200 font-cairo">
                    <SelectValue placeholder="جميع الحالات" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">جميع الحالات</SelectItem>
                    <SelectItem value="قيد التنفيذ">قيد التنفيذ</SelectItem>
                    <SelectItem value="متأخر">متأخر</SelectItem>
                    <SelectItem value="مكتمل">مكتمل</SelectItem>
                    <SelectItem value="متوقف">متوقف</SelectItem>
                  </SelectContent>
                </Select>

                
 {/* Export Button */}
 <Button
                  variant="outline"
                  onClick={handleExport}
                  className="bg-white/50 backdrop-blur-sm border-gray-200 hover:bg-orange-50 font-cairo whitespace-nowrap"
                >
                  <Download className="h-4 w-4 ml-2" />
                  تصدير
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Enhanced Projects Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <Card
                key={project.id}
                className="border-0 shadow-sm hover:shadow-md transition-all duration-500 hover:-translate-y-2 overflow-hidden cursor-pointer group bg-white/80 backdrop-blur-sm"
                onClick={() => handleViewProject(project.id)}
              >
                <div className={`h-2 bg-gradient-to-r ${project.color}`} />

                <CardHeader className="pb-4 relative">
                  <div
                    className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${project.color} rounded-full -translate-y-16 translate-x-16 opacity-10`}
                  />

                  <div className="flex items-start justify-between relative z-10">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <CardTitle className="text-lg font-bold text-gray-900 group-hover:text-sharjah-orange transition-colors line-clamp-1 font-cairo">
                          {project.name}
                        </CardTitle>
                        <Badge
                          className={`${getPriorityColor(project.priority)} border font-medium text-xs shadow-sm font-cairo`}
                        >
                          {project.priority}
                        </Badge>
                      </div>
                      <CardDescription className="text-gray-600 line-clamp-2 mb-3 font-cairo">
                        {project.description}
                      </CardDescription>
                      <div className="flex items-center text-sm text-gray-600">
                        <MapPin className="h-4 w-4 ml-2 text-sharjah-orange" />
                        <span className="font-cairo">{project.municipality}</span>
                      </div>
                    </div>

                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={(e) => e.stopPropagation()}
                          className="opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          <MoreVertical className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem
                          onClick={(e) => {
                            e.stopPropagation()
                            handleViewProject(project.id)
                          }}
                        >
                          <Eye className="h-4 w-4 ml-2" />
                          عرض التفاصيل
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          onClick={(e) => {
                            e.stopPropagation()
                            handleEditProject(project.id)
                          }}
                        >
                          <Edit className="h-4 w-4 ml-2" />
                          تعديل
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  {/* Progress Section */}
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-gray-600 font-medium font-cairo">التقدم الإجمالي</span>
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

                  {/* Team and Stats */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3 space-x-reverse">
                      <div className="flex -space-x-2 space-x-reverse">
                        {project.team.slice(0, 4).map((member, idx) => (
                          <Avatar key={idx} className="h-8 w-8 ring-2 ring-white shadow-sm">
                            <AvatarFallback
                              className={`bg-gradient-to-br ${project.color} text-white text-xs font-semibold font-cairo`}
                            >
                              {member}
                            </AvatarFallback>
                          </Avatar>
                        ))}
                        {project.team.length > 4 && (
                          <div className="h-8 w-8 rounded-full bg-gray-100 border-2 border-white flex items-center justify-center">
                            <span className="text-xs font-semibold text-gray-600 font-cairo">
                              +{project.team.length - 4}
                            </span>
                          </div>
                        )}
                      </div>
                      <span className="text-sm text-gray-600 font-cairo">{project.team.length} أعضاء</span>
                    </div>

                    <div className="flex items-center space-x-4 space-x-reverse text-sm text-gray-600">
                      <div className="flex items-center">
                        <FileText className="h-4 w-4 ml-1 text-sharjah-blue" />
                        <span className="font-cairo">{project.attachments}</span>
                      </div>
                      <div className="flex items-center">
                        <Target className="h-4 w-4 ml-1 text-sharjah-green" />
                        <span className="font-cairo">
                          {project.completedTasks}/{project.tasks}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-100">
                    <div className="text-center">
                      <div className="text-lg font-bold text-gray-900 font-cairo">
                        {project.completedPhases}/{project.phases}
                      </div>
                      <div className="text-xs text-gray-600 font-cairo">المراحل</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-gray-900 font-cairo">
                        {Math.round(
                          (Number.parseInt(project.spent.replace(/,/g, "")) /
                            Number.parseInt(project.budget.replace(/,/g, ""))) *
                            100,
                        )}
                        %
                      </div>
                      <div className="text-xs text-gray-600 font-cairo">الميزانية</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-gray-900 font-cairo">
                        <DaysRemaining dueDate={project.dueDate} />
                      </div>
                      <div className="text-xs text-gray-600 font-cairo">يوم متبقي</div>
                    </div>
                  </div>

                  {/* Status and Actions */}
                  <div className="flex items-center justify-between pt-4">
                    <Badge
                      className={`${getStatusColor(project.status)} border font-medium flex items-center gap-1 shadow-sm font-cairo`}
                    >
                      {getStatusIcon(project.status)}
                      {project.status}
                    </Badge>
                    <div className="flex justify-end gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={(e) => {
                          e.stopPropagation()
                          handleViewProject(project.id)
                        }}
                        className="hover:bg-blue-50 hover:border-blue-200 bg-white/50 backdrop-blur-sm font-cairo"
                      >
                        <Eye className="h-4 w-4 ml-2" />
                        عرض
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={(e) => {
                          e.stopPropagation()
                          handleEditProject(project.id)
                        }}
                        className="hover:bg-green-50 hover:border-green-200 bg-white/50 backdrop-blur-sm font-cairo"
                      >
                        <Edit className="h-4 w-4 ml-2" />
                        تعديل
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <Card className="border-0 shadow-sm hover:shadow-md transition-shadow duration-300 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-12 text-center">
                <div className="text-gray-400 mb-4">
                  <Search className="h-12 w-12 mx-auto" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 font-cairo">لا توجد مشاريع</h3>
                <p className="text-gray-600 font-cairo">لم يتم العثور على مشاريع تطابق معايير البحث</p>
              </CardContent>
            </Card>
          )}
        </div>
      </AppLayout>
    )
}
