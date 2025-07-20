"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
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
  Plus,
  Search,
  Eye,
  MapPin,
  Activity,
  Zap,
} from "lucide-react"

export function SharjahThemeDemo() {
  return (
    <div className="p-8 bg-secondary-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-primary-500 mb-4 font-cairo">
            نظام إدارة مشاريع البلديات
          </h1>
          <p className="text-lg text-dark-400 font-neue-frutiger-arabic">
            الحل المتكامل لإدارة وتنظيم المشاريع البلدية
          </p>
        </div>

        {/* Color Palette Demo */}
        <Card className="mb-8 border-0 shadow-xl bg-white/80 backdrop-blur-sm">
          <CardHeader className="bg-gradient-to-r from-primary-500 via-accent-blue to-primary-400">
            <CardTitle className="text-white text-2xl font-bold font-cairo">
              لوحة ألوان الشارقة الرقمية
            </CardTitle>
            <CardDescription className="text-primary-100 font-cairo">
              الألوان الرسمية لإمارة الشارقة
            </CardDescription>
          </CardHeader>
          <CardContent className="p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {/* Primary Colors */}
              <div className="space-y-3">
                <h3 className="font-bold text-dark-500 font-cairo">الألوان الأساسية</h3>
                <div className="space-y-2">
                  <div className="flex items-center space-x-3 space-x-reverse">
                    <div className="w-8 h-8 bg-primary-500 rounded-lg"></div>
                    <span className="text-sm font-cairo">Primary 500</span>
                  </div>
                  <div className="flex items-center space-x-3 space-x-reverse">
                    <div className="w-8 h-8 bg-primary-400 rounded-lg"></div>
                    <span className="text-sm font-cairo">Primary 400</span>
                  </div>
                  <div className="flex items-center space-x-3 space-x-reverse">
                    <div className="w-8 h-8 bg-primary-300 rounded-lg"></div>
                    <span className="text-sm font-cairo">Primary 300</span>
                  </div>
                </div>
              </div>

              {/* Secondary Colors */}
              <div className="space-y-3">
                <h3 className="font-bold text-dark-500 font-cairo">الألوان الثانوية</h3>
                <div className="space-y-2">
                  <div className="flex items-center space-x-3 space-x-reverse">
                    <div className="w-8 h-8 bg-secondary-50 rounded-lg border"></div>
                    <span className="text-sm font-cairo">Secondary 50</span>
                  </div>
                  <div className="flex items-center space-x-3 space-x-reverse">
                    <div className="w-8 h-8 bg-secondary-500 rounded-lg"></div>
                    <span className="text-sm font-cairo">Secondary 500</span>
                  </div>
                  <div className="flex items-center space-x-3 space-x-reverse">
                    <div className="w-8 h-8 bg-secondary-900 rounded-lg"></div>
                    <span className="text-sm font-cairo">Secondary 900</span>
                  </div>
                </div>
              </div>

              {/* Dark Colors */}
              <div className="space-y-3">
                <h3 className="font-bold text-dark-500 font-cairo">الألوان الداكنة</h3>
                <div className="space-y-2">
                  <div className="flex items-center space-x-3 space-x-reverse">
                    <div className="w-8 h-8 bg-dark-500 rounded-lg"></div>
                    <span className="text-sm font-cairo">Dark 500</span>
                  </div>
                  <div className="flex items-center space-x-3 space-x-reverse">
                    <div className="w-8 h-8 bg-dark-400 rounded-lg"></div>
                    <span className="text-sm font-cairo">Dark 400</span>
                  </div>
                  <div className="flex items-center space-x-3 space-x-reverse">
                    <div className="w-8 h-8 bg-dark-300 rounded-lg"></div>
                    <span className="text-sm font-cairo">Dark 300</span>
                  </div>
                </div>
              </div>

              {/* Accent Colors */}
              <div className="space-y-3">
                <h3 className="font-bold text-dark-500 font-cairo">ألوان التمييز</h3>
                <div className="space-y-2">
                  <div className="flex items-center space-x-3 space-x-reverse">
                    <div className="w-8 h-8 bg-accent-blue rounded-lg"></div>
                    <span className="text-sm font-cairo">Accent Blue</span>
                  </div>
                  <div className="flex items-center space-x-3 space-x-reverse">
                    <div className="w-8 h-8 bg-accent-orange rounded-lg"></div>
                    <span className="text-sm font-cairo">Accent Orange</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Typography Demo */}
        <Card className="mb-8 border-0 shadow-xl bg-white/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-primary-500 font-cairo">
              الخطوط والطباعة
            </CardTitle>
            <CardDescription className="text-dark-400 font-cairo">
              خطوط الشارقة الرقمية
            </CardDescription>
          </CardHeader>
          <CardContent className="p-8">
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-bold text-dark-500 mb-3 font-cairo">خط Cairo</h3>
                <div className="space-y-2">
                  <p className="text-4xl font-bold text-primary-500 font-cairo">العنوان الرئيسي</p>
                  <p className="text-2xl font-semibold text-dark-500 font-cairo">العنوان الفرعي</p>
                  <p className="text-lg font-medium text-dark-400 font-cairo">النص العادي</p>
                  <p className="text-sm text-dark-300 font-cairo">النص الصغير</p>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-bold text-dark-500 mb-3 font-cairo">خط Neue Frutiger Arabic</h3>
                <div className="space-y-2">
                  <p className="text-lg font-neue-frutiger-arabic text-dark-400">
                    هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة
                  </p>
                  <p className="text-sm font-neue-frutiger-arabic text-dark-300">
                    نص أصغر للوصف والتفاصيل
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Component Demo */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Buttons */}
          <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-primary-500 font-cairo">
                الأزرار
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-4">
                <Button className="bg-primary-500 hover:bg-primary-600 text-white font-cairo">
                  زر أساسي
                </Button>
                <Button variant="outline" className="border-primary-500 text-primary-500 hover:bg-primary-50 font-cairo">
                  زر ثانوي
                </Button>
                <Button variant="ghost" className="text-primary-500 hover:bg-primary-50 font-cairo">
                  زر شفاف
                </Button>
                <Button size="sm" className="bg-accent-orange hover:bg-accent-orange/90 text-white font-cairo">
                  زر صغير
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Badges */}
          <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-primary-500 font-cairo">
                الشارات
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-primary-500 text-white font-cairo">أساسي</Badge>
                  <Badge variant="secondary" className="bg-secondary-100 text-dark-500 font-cairo">ثانوي</Badge>
                  <Badge className="bg-accent-orange text-white font-cairo">تحذير</Badge>
                  <Badge className="bg-accent-blue text-white font-cairo">معلومات</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Progress */}
          <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-primary-500 font-cairo">
                شريط التقدم
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-dark-500 font-cairo">مشروع قيد التنفيذ</span>
                    <span className="text-primary-500 font-bold font-cairo">75%</span>
                  </div>
                  <Progress value={75} className="h-3 bg-secondary-200" />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-dark-500 font-cairo">مشروع مكتمل</span>
                    <span className="text-primary-500 font-bold font-cairo">100%</span>
                  </div>
                  <Progress value={100} className="h-3 bg-secondary-200" />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Cards */}
          <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-primary-500 font-cairo">
                البطاقات
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-4">
                <Card className="bg-secondary-50 border-secondary-200">
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-3 space-x-reverse">
                      <div className="p-2 bg-primary-100 rounded-lg">
                        <Building2 className="h-5 w-5 text-primary-500" />
                      </div>
                      <div>
                        <h4 className="font-bold text-dark-500 font-cairo">مشروع البنية التحتية</h4>
                        <p className="text-sm text-dark-400 font-cairo">قيد التنفيذ</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Stats Demo */}
        <Card className="mt-8 border-0 shadow-xl bg-white/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-primary-500 font-cairo">
              إحصائيات المشاريع
            </CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center p-6 bg-primary-50 rounded-xl">
                <div className="w-12 h-12 bg-primary-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <FolderOpen className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-primary-500 mb-2 font-cairo">156</h3>
                <p className="text-dark-400 font-cairo">إجمالي المشاريع</p>
              </div>

              <div className="text-center p-6 bg-blue-50 rounded-xl">
                <div className="w-12 h-12 bg-accent-blue rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Activity className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-accent-blue mb-2 font-cairo">89</h3>
                <p className="text-dark-400 font-cairo">المشاريع النشطة</p>
              </div>

              <div className="text-center p-6 bg-green-50 rounded-xl">
                <div className="w-12 h-12 bg-primary-400 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-primary-400 mb-2 font-cairo">67</h3>
                <p className="text-dark-400 font-cairo">المشاريع المكتملة</p>
              </div>

              <div className="text-center p-6 bg-orange-50 rounded-xl">
                <div className="w-12 h-12 bg-accent-orange rounded-lg flex items-center justify-center mx-auto mb-4">
                  <AlertTriangle className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-accent-orange mb-2 font-cairo">12</h3>
                <p className="text-dark-400 font-cairo">المشاريع المتأخرة</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
} 