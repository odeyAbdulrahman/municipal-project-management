"use client"

import * as React from "react"
import { Sidebar, SidebarProvider, useSidebar } from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Separator } from "@/components/ui/separator"
import { useIsMobile } from "@/hooks/use-mobile"
import { cn } from "@/lib/utils"
import {
  Bell,
  Search,
  Menu,
  User,
  Settings,
  HelpCircle,
  LogOut,
  ChevronLeft,
  ChevronRight,
  Sun,
  Moon,
  MessageSquare,
  FileText,
  Activity,
  TrendingUp,
  AlertTriangle,
  CheckCircle,
  Building2,
  Users,
  FolderOpen,
  BarChart3,
  Plus,
  Eye,
  Download,
  Upload,
  MoreVertical,
  Phone,
  Mail,
  MapPin,
  Clock,
  DollarSign,
  Target,
  Shield,
  Award,
  Heart,
  Leaf,
  Car,
  Home,
  TreePine,
  Droplets,
  Cloud,
  Wind,
  Package,
  Zap,
  Star,
  Info,
} from "lucide-react"
import { useRouter } from "next/navigation"

interface AppLayoutProps {
  children: React.ReactNode
  showSidebar?: boolean
  title?: string
  description?: string
  actions?: React.ReactNode
}

function AppLayoutContent({ children, showSidebar = true, title, description, actions }: AppLayoutProps) {
  const { isCollapsed, setIsCollapsed } = useSidebar()
  const isMobile = useIsMobile()
  const router = useRouter()

  // User profile data
  const userProfile = {
    name: "أحمد محمد",
    role: "مدير النظام",
    avatar: "أ",
    email: "ahmed@municipality.gov.ae",
    phone: "050-123-4567",
    department: "قسم إدارة المشاريع",
    status: "متصل",
    lastLogin: "منذ 5 دقائق",
  }

  // Quick stats
  const quickStats = [
    {
      title: "المشاريع النشطة",
      value: "89",
      icon: Activity,
      color: "text-primary-500",
      change: "+12%",
      trend: "up",
    },
    {
      title: "المشاريع المكتملة",
      value: "67",
      icon: CheckCircle,
      color: "text-green-500",
      change: "+8%",
      trend: "up",
    },
    {
      title: "المشاريع المتأخرة",
      value: "12",
      icon: AlertTriangle,
      color: "text-accent-orange",
      change: "-3%",
      trend: "down",
    },
  ]

  // Recent notifications
  const notifications = [
    {
      id: 1,
      title: "مشروع جديد تم إنشاؤه",
      description: "مشروع تطوير الحديقة المركزية",
      time: "منذ 2 ساعة",
      type: "success",
    },
    {
      id: 2,
      title: "تحديث التقدم",
      description: "مشروع إنارة الشوارع - 75%",
      time: "منذ 4 ساعات",
      type: "info",
    },
    {
      id: 3,
      title: "تقرير متاح",
      description: "تقرير الأداء الشهري جاهز",
      time: "منذ 6 ساعات",
      type: "warning",
    },
  ]

  const handleLogout = () => {
    // Implement logout logic
    router.push("/login")
  }

  return (
    <div className="min-h-screen bg-secondary-50">
      {/* Sidebar */}
      {showSidebar && <Sidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />}

      {/* Main Content */}
      <div className={cn("transition-all duration-300", showSidebar && "mr-80", isCollapsed && "mr-20", "lg:mr-80", isCollapsed && "lg:mr-20")}>
        {/* Header */}
        <header className="bg-white/80 backdrop-blur-md border-b border-gray-200/50 sticky top-0 z-40">
          <div className="px-6 py-4">
            <div className="flex items-center justify-between">
              {/* Left side - Title and breadcrumb */}
              <div className="flex items-center space-x-4 space-x-reverse">
                {!isMobile && showSidebar && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setIsCollapsed(!isCollapsed)}
                    className="text-gray-600 hover:text-gray-900"
                  >
                    {isCollapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
                  </Button>
                )}
                <div>
                  {title && (
                    <h1 className="text-2xl font-bold text-gray-900 font-cairo">{title}</h1>
                  )}
                  {description && (
                    <p className="text-gray-600 font-cairo">{description}</p>
                  )}
                </div>
              </div>

              {/* Center - Search */}
              <div className="hidden md:flex flex-1 max-w-md mx-8">
                <div className="relative w-full">
                  <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input
                    placeholder="البحث في المشاريع..."
                    className="pr-10 bg-white/50 backdrop-blur-sm border-gray-200 font-cairo"
                  />
                </div>
              </div>

              {/* Right side - User profile and notifications */}
              <div className="flex items-center space-x-4 space-x-reverse">
                {/* Quick Stats */}
                {!isMobile && (
                  <div className="flex items-center space-x-3 space-x-reverse">
                    {quickStats.map((stat) => (
                      <div key={stat.title} className="text-center">
                        <div className="flex items-center space-x-1 space-x-reverse">
                          <stat.icon className={`h-4 w-4 ${stat.color}`} />
                          <span className="text-sm font-medium text-gray-900">{stat.value}</span>
                        </div>
                        <span className="text-xs text-gray-500">{stat.title}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Notifications */}
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="sm" className="relative">
                      <Bell className="h-5 w-5" />
                      <Badge className="absolute -top-1 -right-1 h-5 w-5 p-0 text-xs bg-red-500">
                        {notifications.length}
                      </Badge>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-80 z-[19999] bg-white">
                    <div className="p-3 border-b">
                      <h3 className="font-semibold text-gray-900 font-cairo">الإشعارات</h3>
                    </div>
                    <div className="max-h-96 overflow-y-auto">
                      {notifications.map((notification) => (
                        <DropdownMenuItem key={notification.id} className="p-3">
                          <div className="flex items-start space-x-3 space-x-reverse">
                            <div
                              className={`w-2 h-2 rounded-full mt-2 ${
                                notification.type === "success"
                                  ? "bg-green-500"
                                  : notification.type === "warning"
                                    ? "bg-accent-orange"
                                    : "bg-blue-500"
                              }`}
                            />
                            <div className="flex-1">
                              <p className="text-sm font-medium text-gray-900">{notification.title}</p>
                              <p className="text-xs text-gray-600">{notification.description}</p>
                              <p className="text-xs text-gray-500">{notification.time}</p>
                            </div>
                          </div>
                        </DropdownMenuItem>
                      ))}
                    </div>
                    <Separator />
                    <DropdownMenuItem className="text-center">
                      <span className="text-sm text-primary-500 font-cairo">عرض جميع الإشعارات</span>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>

                {/* User Profile */}
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="flex items-center space-x-3 space-x-reverse">
                      <Avatar className="h-8 w-8">
                        <AvatarFallback className="bg-primary-500 text-white font-semibold text-sm font-cairo">
                          {userProfile.avatar}
                        </AvatarFallback>
                      </Avatar>
                      {!isMobile && (
                        <div className="text-right">
                          <p className="text-sm font-medium text-gray-900 font-cairo">{userProfile.name}</p>
                          <p className="text-xs text-gray-500 font-cairo">{userProfile.role}</p>
                        </div>
                      )}
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-56 z-[19999] bg-white">
                    <div className="p-3 border-b">
                      <p className="text-sm font-medium text-gray-900 font-cairo">{userProfile.name}</p>
                      <p className="text-xs text-gray-500 font-cairo">{userProfile.email}</p>
                    </div>
                    <DropdownMenuItem>
                      <User className="h-4 w-4 ml-2" />
                      الملف الشخصي
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Settings className="h-4 w-4 ml-2" />
                      الإعدادات
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <HelpCircle className="h-4 w-4 ml-2" />
                      المساعدة
                    </DropdownMenuItem>
                    <Separator />
                    <DropdownMenuItem onClick={handleLogout}>
                      <LogOut className="h-4 w-4 ml-2" />
                      تسجيل الخروج
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>

            {/* Actions */}
            {actions && (
              <div className="mt-4 pt-4 border-t border-gray-200">
                {actions}
              </div>
            )}
          </div>
        </header>

        {/* Page Content */}
        <main className="p-6">
          {children}
        </main>
      </div>
    </div>
  )
}

export function AppLayout(props: AppLayoutProps) {
  return (
    <SidebarProvider>
      <AppLayoutContent {...props} />
    </SidebarProvider>
  )
} 