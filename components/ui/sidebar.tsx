"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useIsMobile } from "@/hooks/use-mobile"
import { cn } from "@/lib/utils"
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
  Home,
  MapPin,
  FileText,
  Download,
  Upload,
  Plus,
  Search,
  Eye,
  Edit,
  MoreVertical,
  ChevronLeft,
  ChevronRight,
  User,
  LogOut,
  HelpCircle,
  Info,
  Star,
  Zap,
  Target,
  Clock,
  DollarSign,
  Activity,
  MessageSquare,
  Phone,
  Mail,
  Wrench,
  Shield,
  Award,
  Heart,
  Leaf,
  Car,
  Building,
  Home as HomeIcon,
  TreePine,
  Droplets,
  Sun,
  Moon,
  Cloud,
  Wind,
  Package,
  Menu,
  X,
} from "lucide-react"
import { useRouter } from "next/navigation"
import { usePathname } from "next/navigation"
import { Skeleton } from "@/components/ui/skeleton"

const SIDEBAR_COOKIE_NAME = "sidebar-state"
const SIDEBAR_COOKIE_MAX_AGE = 60 * 60 * 24 * 365 // 1 year

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
  isCollapsed?: boolean
  setIsCollapsed?: (collapsed: boolean) => void
}

export function Sidebar({ className, isCollapsed, setIsCollapsed }: SidebarProps) {
  const isMobile = useIsMobile()
  const router = useRouter()
  const pathname = usePathname()
  const [isOpen, setIsOpen] = React.useState(true)

  // Prevent body scrolling when mobile sidebar is open
  React.useEffect(() => {
    if (isMobile && isOpen) {
      document.body.classList.add('sidebar-open')
    } else {
      document.body.classList.remove('sidebar-open')
    }

    return () => {
      document.body.classList.remove('sidebar-open')
    }
  }, [isMobile, isOpen])

  // Navigation items with enhanced features
  const navigationItems = [
    {
      title: "لوحة التحكم",
      icon: Home,
      href: "/",
      badge: null,
      description: "نظرة عامة على المشاريع",
    },
    {
      title: "المشاريع",
      icon: FolderOpen,
      href: "/projects",
      badge: "156",
      description: "إدارة جميع المشاريع",
    },
    {
      title: "المستخدمين",
      icon: Users,
      href: "/users",
      badge: "24",
      description: "إدارة المستخدمين والصلاحيات",
    },
    {
      title: "البلديات",
      icon: Building2,
      href: "/municipalities",
      badge: "8",
      description: "إدارة البلديات والمناطق",
    },
    {
      title: "التقارير",
      icon: BarChart3,
      href: "/reports",
      badge: null,
      description: "التقارير والإحصائيات",
    },
    {
      title: "الإعدادات",
      icon: Settings,
      href: "/system",
      badge: null,
      description: "إعدادات النظام",
    },
  ]

  // Quick actions
  const quickActions = [
    {
      title: "مشروع جديد",
      icon: Plus,
      action: () => router.push("/projects/create"),
      color: "bg-[#F59E42] hover:bg-[#e88b1a]",
    },
    {
      title: "تقرير سريع",
      icon: FileText,
      action: () => router.push("/reports/quick"),
      color: "bg-accent-blue hover:bg-accent-blue/90",
    },
    {
      title: "إشعارات",
      icon: Bell,
      action: () => router.push("/notifications"),
      color: "bg-[#E53935] hover:bg-[#b71c1c]",
    },
  ]

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



  // Statistics cards
  const statsCards = [
    {
      title: "المشاريع النشطة",
      value: "89",
      icon: Activity,
      color: "bg-primary-500",
      change: "+12%",
      trend: "up",
    },
    {
      title: "المشاريع المكتملة",
      value: "67",
      icon: CheckCircle,
      color: "bg-green-500",
      change: "+8%",
      trend: "up",
    },
    {
      title: "المشاريع المتأخرة",
      value: "12",
      icon: AlertTriangle,
      color: "bg-accent-orange",
      change: "-3%",
      trend: "down",
    },
  ]

  const handleNavigation = (href: string) => {
    router.push(href)
    if (isMobile) {
      setIsOpen(false)
    }
  }

  const handleLogout = () => {
    // Implement logout logic
    router.push("/login")
    }

    return (
    <>
      {/* Mobile overlay */}
      {isMobile && isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
          style={{ touchAction: 'none' }}
        />
      )}

      {/* Sidebar */}
        <div
          className={cn(
            "fixed right-0 top-0 z-50 h-full w-80 bg-[#005834] text-white transition-transform duration-300 ease-in-out lg:translate-x-0 overflow-hidden",
            isMobile && !isOpen && "translate-x-full",
            !isMobile && isCollapsed && "w-20",
            className
          )}
          style={{ touchAction: 'pan-y', backgroundColor: '#005834' }}
        >
        <div className="flex h-full flex-col">
          {/* Header */}
          <div className="flex-shrink-0 flex items-center justify-between p-6 border-b border-white/10">
            <div className="flex items-center space-x-3 space-x-reverse">
              <div className="flex items-center justify-center w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl shadow-lg">
                <Building2 className="h-6 w-6 text-white" />
              </div>
              {!isCollapsed && (
                <div>
                  <h1 className="text-xl font-bold text-white font-cairo">نظام البلديات</h1>
                  <p className="text-primary-200 text-sm font-cairo">إمارة الشارقة</p>
                </div>
              )}
            </div>
            <div className="flex items-center space-x-2 space-x-reverse">
              {!isMobile && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsCollapsed?.(!isCollapsed)}
                  className="text-white hover:bg-white/10"
                >
                  {isCollapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
                </Button>
              )}
              {isMobile && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsOpen(false)}
                  className="text-white hover:bg-white/10"
                >
                  <X className="h-4 w-4" />
                </Button>
              )}
            </div>
          </div>

          {/* Navigation */}
          <ScrollArea className="flex-1 px-4 py-6 overflow-y-auto">
            <div className="space-y-6">
              {/* Main Navigation */}
              <div>
                <h3 className="text-xs font-semibold text-primary-200 mb-3 font-cairo">القائمة الرئيسية</h3>
                <nav className="space-y-2 text-right">
                  {navigationItems.map((item) => (
                    <Button
                      key={item.href}
                      variant="ghost"
                      className={cn(
                        "w-full flex flex-row-reverse justify-end items-center text-white hover:bg-white/10 hover:text-white font-cairo text-right",
                        pathname === item.href && "bg-white/20 text-white"
                      )}
                      onClick={() => handleNavigation(item.href)}
                    >
                      <item.icon className="h-5 w-5 ml-0 mr-3" />
                      {!isCollapsed && (
                        <div className="flex flex-row-reverse items-center justify-between w-full">
                          <span>{item.title}</span>
                          {item.badge && (
                            <Badge variant="secondary" className="bg-white/20 text-white text-xs">
                              {item.badge}
                            </Badge>
                          )}
                        </div>
                      )}
                    </Button>
                  ))}
                </nav>
              </div>

              {/* Quick Actions */}
              {!isCollapsed && (
                <div dir="rtl">
                  <h3 className="text-xs font-semibold text-primary-200 mb-3 font-cairo text-right">إجراءات سريعة</h3>
                  <div className="space-y-2">
                    {quickActions.map((action) => (
                      <Button
                        key={action.title}
                        className={cn("w-full justify-between flex-row-reverse text-white font-cairo", action.color)}
                        onClick={action.action}
                      >
                        <span>{action.title}</span>
                        <action.icon className="h-5 w-5" />
                      </Button>
                    ))}
                  </div>
                </div>
              )}

              {/* Statistics Cards */}
              {
                <div dir="rtl">
                  <h3 className="text-xs font-semibold text-primary-200 mb-3 font-cairo text-right">إحصائيات سريعة</h3>
                  <div className="space-y-3">
                    {statsCards.map((stat) => (
                      <div key={stat.title} className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
                        <div className="flex items-center justify-between mb-2 flex-row-reverse">
                          <div className="flex items-center space-x-2 space-x-reverse flex-row-reverse">
                            <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${stat.color}`}>
                              <stat.icon className="h-4 w-4 text-white" />
                            </div>
                            <span className="text-sm font-medium pl-2">{stat.title}</span>
                          </div>
                          <div className="flex items-center space-x-1 space-x-reverse flex-row-reverse">
                            <span className="text-lg font-bold">{stat.value}</span>
                            <span className={cn("text-xs", stat.trend === "up" ? "text-green-400" : "text-red-400")}>{stat.change}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              }


            </div>
          </ScrollArea>

          {/* User Profile */}
          <div className="flex-shrink-0 border-t border-white/10 p-4">
            <div className="flex items-center space-x-3 space-x-reverse">
              <Avatar className="h-12 w-12 ring-2 ring-white/30">
                <AvatarFallback className="bg-primary-500 text-white font-semibold text-lg font-cairo">
                  {userProfile.avatar}
                </AvatarFallback>
              </Avatar>
              {!isCollapsed && (
                <div className="flex-1">
                  <div className="flex items-center space-x-2 space-x-reverse">
                    <p className="text-white font-medium font-cairo">{userProfile.name}</p>
                    <Badge className="bg-green-500 text-white text-xs">متصل</Badge>
                  </div>
                  <p className="text-primary-200 text-sm font-cairo">{userProfile.role}</p>
                  <p className="text-primary-300 text-xs">{userProfile.lastLogin}</p>
                </div>
              )}
              {!isCollapsed && (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="sm" className="text-white hover:bg-white/10">
                      <MoreVertical className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-56">
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
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu button */}
      {isMobile && (
    <Button
      variant="ghost"
          size="sm"
          onClick={() => setIsOpen(true)}
          className="fixed top-4 right-4 z-50 lg:hidden bg-primary-500 text-white hover:bg-primary-600"
        >
          <Menu className="h-5 w-5" />
    </Button>
      )}
    </>
  )
}

// Sidebar Menu Skeleton for loading states
export function SidebarMenuSkeleton() {
  return (
    <div className="space-y-4 p-4" aria-busy="true" aria-label="Loading sidebar menu...">
      {Array.from({ length: 6 }).map((_, i) => (
        <div key={i} className="flex items-center space-x-3 space-x-reverse">
          <Skeleton className="w-10 h-10 rounded-lg" />
          <div className="flex-1">
            <Skeleton className="h-4 rounded mb-2" />
            <Skeleton className="h-3 rounded w-2/3" />
          </div>
        </div>
      ))}
    </div>
  )
}

// Sidebar Provider for managing sidebar state
interface SidebarContextType {
  isCollapsed: boolean
  setIsCollapsed: (collapsed: boolean) => void
}

const SidebarContext = React.createContext<SidebarContextType | undefined>(undefined)

export function SidebarProvider({ children }: { children: React.ReactNode }) {
  const [isCollapsed, setIsCollapsed] = React.useState(false)

  return (
    <SidebarContext.Provider value={{ isCollapsed, setIsCollapsed }}>
      {children}
    </SidebarContext.Provider>
  )
}

export function useSidebar() {
  const context = React.useContext(SidebarContext)
  if (context === undefined) {
    throw new Error("useSidebar must be used within a SidebarProvider")
  }
  return context
}
