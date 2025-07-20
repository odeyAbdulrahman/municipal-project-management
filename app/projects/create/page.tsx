"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { AppLayout } from "@/components/layout/app-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Save, CalendarIcon, Plus, Trash2, Upload, Building2, Users, Target, FileText, Download, Search, Eye } from "lucide-react"
import { format } from "date-fns"
import { ar } from "date-fns/locale"

// Client-side only component to prevent hydration issues
function ClientOnly({ children }: { children: React.ReactNode }) {
  const [hasMounted, setHasMounted] = useState(false)

  useEffect(() => {
    setHasMounted(true)
  }, [])

  if (!hasMounted) {
    return null
  }

  return <>{children}</>
}

export default function CreateProjectPage() {
  const router = useRouter()
  const [startDate, setStartDate] = useState<Date>()
  const [endDate, setEndDate] = useState<Date>()
  const [phases, setPhases] = useState([
    { id: 1, name: "", description: "", startDate: "", endDate: "", estimatedDays: "" },
  ])

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    type: "",
    municipality: "",
    department: "",
    manager: "",
    priority: "",
    budget: "",
    objectives: "",
    scope: "",
  })

  const addPhase = () => {
    const newPhase = {
      id: phases.length + 1,
      name: "",
      description: "",
      startDate: "",
      endDate: "",
      estimatedDays: "",
    }
    setPhases([...phases, newPhase])
  }

  const removePhase = (id: number) => {
    if (phases.length > 1) {
      setPhases(phases.filter((phase) => phase.id !== id))
    }
  }

  const updatePhase = (id: number, field: string, value: string) => {
    setPhases(phases.map((phase) => (phase.id === id ? { ...phase, [field]: value } : phase)))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the data to your backend
    console.log("Project data:", { ...formData, startDate, endDate, phases })
    // Redirect to projects list or the new project page
    router.push("/projects")
  }

  return (
    <AppLayout
      title="إنشاء مشروع جديد"
      description="إضافة مشروع جديد إلى النظام"
      actions={
        <Button
          onClick={handleSubmit}
          className="bg-sharjah-orange hover:bg-orange-600 shadow-sm hover:shadow-md transition-all duration-300 font-cairo"
        >
          <Save className="h-4 w-4 ml-2" />
          إنشاء المشروع
        </Button>
      }
    >
      <div className="p-8">
        {/* Enhanced Filters - Horizontal Layout */}
        <Card className="mb-8 border-0 shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden bg-white/80 backdrop-blur-sm">
          <div className="h-1 bg-gradient-to-r from-sharjah-orange via-sharjah-blue to-sharjah-purple" />
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              {/* Export Button */}
              <Button
                variant="outline"
                className="bg-white/50 backdrop-blur-sm border-gray-200 hover:bg-orange-50 font-cairo whitespace-nowrap"
              >
                <Download className="h-4 w-4 ml-2" />
                تصدير القالب
                </Button>

              {/* Project Type Dropdown */}
              <Select
                value={formData.type}
                onValueChange={(value) => setFormData({ ...formData, type: value })}
              >
                <SelectTrigger className="w-40 bg-white/50 backdrop-blur-sm border-gray-200 font-cairo">
                  <SelectValue placeholder="نوع المشروع" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="infrastructure">بنية تحتية</SelectItem>
                  <SelectItem value="development">تطوير وتحسين</SelectItem>
                  <SelectItem value="services">خدمات عامة</SelectItem>
                  <SelectItem value="maintenance">صيانة</SelectItem>
                  <SelectItem value="construction">إنشاءات</SelectItem>
                </SelectContent>
              </Select>

              {/* Priority Dropdown */}
              <Select
                value={formData.priority}
                onValueChange={(value) => setFormData({ ...formData, priority: value })}
              >
                <SelectTrigger className="w-40 bg-white/50 backdrop-blur-sm border-gray-200 font-cairo">
                  <SelectValue placeholder="الأولوية" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="high">عالية</SelectItem>
                  <SelectItem value="medium">متوسطة</SelectItem>
                  <SelectItem value="low">منخفضة</SelectItem>
                </SelectContent>
              </Select>

              {/* Search Input */}
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input
                    placeholder="البحث في القوالب..."
                    className="pr-10 bg-white/50 backdrop-blur-sm border-gray-200 font-cairo"
                  />
                </div>
              </div>

              {/* Save Draft Button */}
              <Button
                variant="outline"
                className="bg-white/50 backdrop-blur-sm border-gray-200 hover:bg-orange-50 font-cairo whitespace-nowrap"
              >
                <Save className="h-4 w-4 ml-2" />
                حفظ كمسودة
              </Button>
            </div>
          </CardContent>
        </Card>

        <form onSubmit={handleSubmit}>
          <Tabs defaultValue="basic" className="space-y-6">
            <TabsList className="grid w-full grid-cols-4 bg-white/60 backdrop-blur-sm border border-gray-200/50 shadow-sm">
              <TabsTrigger value="files" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white font-cairo">
                الملفات
              </TabsTrigger>
              <TabsTrigger value="phases" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white font-cairo">
                المراحل
              </TabsTrigger>
              <TabsTrigger value="details" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white font-cairo">
                التفاصيل
              </TabsTrigger>
              <TabsTrigger value="basic" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white font-cairo">
                المعلومات الأساسية
              </TabsTrigger>
            </TabsList>

            {/* Basic Information Tab */}
            <TabsContent value="basic">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8" style={{ direction: 'rtl' }}>
                {/* Right Column - Project Information */}
                <Card className="border-0 shadow-sm hover:shadow-md transition-shadow duration-300 bg-white/80 backdrop-blur-sm">
                  <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50 border-b border-blue-100">
                    <CardTitle className="flex items-center text-xl text-gray-900 font-cairo">
                      <Building2 className="h-5 w-5 ml-3" />
                      معلومات المشروع
                    </CardTitle>
                    <CardDescription className="font-cairo">المعلومات الأساسية للمشروع</CardDescription>
                  </CardHeader>
                  <CardContent className="p-6 space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="font-cairo">اسم المشروع *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="أدخل اسم المشروع"
                        className="font-cairo"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="description" className="font-cairo">وصف المشروع *</Label>
                      <Textarea
                        id="description"
                        value={formData.description}
                        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                        placeholder="وصف مفصل للمشروع وأهدافه"
                        className="font-cairo"
                        rows={4}
                        required
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="type" className="font-cairo">نوع المشروع *</Label>
                        <Select
                          value={formData.type}
                          onValueChange={(value) => setFormData({ ...formData, type: value })}
                        >
                          <SelectTrigger className="font-cairo">
                            <SelectValue placeholder="اختر نوع المشروع" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="infrastructure">بنية تحتية</SelectItem>
                            <SelectItem value="development">تطوير وتحسين</SelectItem>
                            <SelectItem value="services">خدمات عامة</SelectItem>
                            <SelectItem value="maintenance">صيانة</SelectItem>
                            <SelectItem value="construction">إنشاءات</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="priority" className="font-cairo">الأولوية *</Label>
                        <Select
                          value={formData.priority}
                          onValueChange={(value) => setFormData({ ...formData, priority: value })}
                        >
                          <SelectTrigger className="font-cairo">
                            <SelectValue placeholder="اختر الأولوية" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="high">عالية</SelectItem>
                            <SelectItem value="medium">متوسطة</SelectItem>
                            <SelectItem value="low">منخفضة</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="budget" className="font-cairo">الميزانية المقدرة (ريال) *</Label>
                      <Input
                        id="budget"
                        type="number"
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        placeholder="0"
                        className="font-cairo"
                        required
                      />
                    </div>
                  </CardContent>
                </Card>

                {/* Left Column - Executing Entity */}
                <Card className="border-0 shadow-sm hover:shadow-md transition-shadow duration-300 bg-white/80 backdrop-blur-sm">
                  <CardHeader className="bg-gradient-to-r from-green-50 to-emerald-50 border-b border-green-100">
                    <CardTitle className="flex items-center text-xl text-gray-900 font-cairo">
                      <Users className="h-5 w-5 ml-3" />
                      الجهة المنفذة
                    </CardTitle>
                    <CardDescription className="font-cairo">معلومات البلدية والقسم المسؤول</CardDescription>
                  </CardHeader>
                  <CardContent className="p-6 space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="municipality" className="font-cairo">البلدية *</Label>
                      <Select
                        value={formData.municipality}
                        onValueChange={(value) => setFormData({ ...formData, municipality: value })}
                      >
                        <SelectTrigger className="font-cairo">
                          <SelectValue placeholder="اختر البلدية" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="sharjah">بلدية الشارقة</SelectItem>
                          <SelectItem value="khorfakkan">بلدية خورفكان</SelectItem>
                          <SelectItem value="kalba">بلدية كلباء</SelectItem>
                          <SelectItem value="dibba">بلدية دبا الحصن</SelectItem>
                          <SelectItem value="al-dhaid">بلدية الذيد</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="department" className="font-cairo">القسم/الإدارة *</Label>
                      <Select
                        value={formData.department}
                        onValueChange={(value) => setFormData({ ...formData, department: value })}
                      >
                        <SelectTrigger className="font-cairo">
                          <SelectValue placeholder="اختر القسم" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="gardens">قسم الحدائق والتشجير</SelectItem>
                          <SelectItem value="roads">قسم الطرق والنقل</SelectItem>
                          <SelectItem value="water">قسم المياه والصرف</SelectItem>
                          <SelectItem value="electricity">قسم الكهرباء والإنارة</SelectItem>
                          <SelectItem value="planning">قسم التخطيط العمراني</SelectItem>
                          <SelectItem value="health">قسم الخدمات الصحية</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="manager" className="font-cairo">مدير المشروع *</Label>
                      <Select
                        value={formData.manager}
                        onValueChange={(value) => setFormData({ ...formData, manager: value })}
                      >
                        <SelectTrigger className="font-cairo">
                          <SelectValue placeholder="اختر مدير المشروع" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="ahmed">أحمد محمد</SelectItem>
                          <SelectItem value="fatima">فاطمة علي</SelectItem>
                          <SelectItem value="mohammed">محمد سالم</SelectItem>
                          <SelectItem value="nora">نورا أحمد</SelectItem>
                          <SelectItem value="khalid">خالد العتيبي</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label className="font-cairo">تاريخ البداية *</Label>
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button
                              variant="outline"
                              className="w-full justify-start text-right font-normal bg-transparent font-cairo"
                            >
                              <CalendarIcon className="ml-2 h-4 w-4" />
                              <ClientOnly>
                              {startDate ? format(startDate, "PPP", { locale: ar }) : "اختر التاريخ"}
                              </ClientOnly>
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0" align="start">
                            <Calendar mode="single" selected={startDate} onSelect={setStartDate} initialFocus />
                          </PopoverContent>
                        </Popover>
                      </div>

                      <div className="space-y-2">
                        <Label className="font-cairo">تاريخ الانتهاء المتوقع *</Label>
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button
                              variant="outline"
                              className="w-full justify-start text-right font-normal bg-transparent font-cairo"
                            >
                              <CalendarIcon className="ml-2 h-4 w-4" />
                              <ClientOnly>
                              {endDate ? format(endDate, "PPP", { locale: ar }) : "اختر التاريخ"}
                              </ClientOnly>
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0" align="start">
                            <Calendar mode="single" selected={endDate} onSelect={setEndDate} initialFocus />
                          </PopoverContent>
                        </Popover>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Details Tab */}
            <TabsContent value="details">
              <div style={{ direction: 'rtl' }}>
                <Card className="border-0 shadow-sm hover:shadow-md transition-shadow duration-300 bg-white/80 backdrop-blur-sm">
                <CardHeader className="bg-gradient-to-r from-purple-50 to-pink-50 border-b border-purple-100">
                  <CardTitle className="flex items-center text-xl text-gray-900 font-cairo">
                    <Target className="h-5 w-5 ml-3" />
                    تفاصيل المشروع
                  </CardTitle>
                  <CardDescription className="font-cairo">الأهداف والنطاق والمتطلبات التفصيلية</CardDescription>
                </CardHeader>
                <CardContent className="p-6 space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="objectives">أهداف المشروع</Label>
                    <Textarea
                      id="objectives"
                      value={formData.objectives}
                      onChange={(e) => setFormData({ ...formData, objectives: e.target.value })}
                      placeholder="اذكر الأهداف الرئيسية للمشروع"
                      rows={4}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="scope">نطاق العمل</Label>
                    <Textarea
                      id="scope"
                      value={formData.scope}
                      onChange={(e) => setFormData({ ...formData, scope: e.target.value })}
                      placeholder="حدد نطاق العمل والأنشطة المطلوبة"
                      rows={4}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Card className="border border-gray-200">
                      <CardHeader className="pb-3">
                        <CardTitle className="text-lg">المخرجات المتوقعة</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <Textarea placeholder="اذكر المخرجات والنتائج المتوقعة" rows={3} />
                      </CardContent>
                    </Card>

                    <Card className="border border-gray-200">
                      <CardHeader className="pb-3">
                        <CardTitle className="text-lg">المتطلبات الخاصة</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <Textarea placeholder="أي متطلبات أو اشتراطات خاصة" rows={3} />
                      </CardContent>
                    </Card>
                  </div>
                </CardContent>
              </Card>
              </div>
            </TabsContent>

            {/* Phases Tab */}
            <TabsContent value="phases">
              <div style={{ direction: 'rtl' }}>
                <Card className="border-0 shadow-sm hover:shadow-md transition-shadow duration-300 bg-white/80 backdrop-blur-sm">
                <CardHeader className="bg-gradient-to-r from-amber-50 to-orange-50 border-b border-amber-100">
                  <div className="flex items-center justify-between">
                    <div>
                        <CardTitle className="flex items-center text-xl text-gray-900 font-cairo">
                        <Target className="h-5 w-5 ml-3" />
                        مراحل المشروع
                      </CardTitle>
                        <CardDescription className="font-cairo">تقسيم المشروع إلى مراحل زمنية</CardDescription>
                    </div>
                    <Button
                      type="button"
                      onClick={addPhase}
                      variant="outline"
                        className="hover:bg-amber-50 border-amber-200 bg-transparent font-cairo"
                    >
                      <Plus className="h-4 w-4 ml-2" />
                      إضافة مرحلة
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-6">
                    {phases.map((phase, index) => (
                        <Card key={phase.id} className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300">
                        <CardHeader className="pb-3">
                          <div className="flex items-center justify-between">
                              <CardTitle className="text-lg font-cairo">المرحلة {index + 1}</CardTitle>
                            {phases.length > 1 && (
                              <Button
                                type="button"
                                variant="outline"
                                size="sm"
                                onClick={() => removePhase(phase.id)}
                                  className="text-red-600 hover:bg-red-50 border-red-200 bg-transparent font-cairo"
                              >
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            )}
                          </div>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label className="font-cairo">اسم المرحلة</Label>
                              <Input
                                value={phase.name}
                                onChange={(e) => updatePhase(phase.id, "name", e.target.value)}
                                placeholder="أدخل اسم المرحلة"
                                  className="font-cairo"
                              />
                            </div>
                            <div className="space-y-2">
                                <Label className="font-cairo">المدة المقدرة (أيام)</Label>
                              <Input
                                type="number"
                                value={phase.estimatedDays}
                                onChange={(e) => updatePhase(phase.id, "estimatedDays", e.target.value)}
                                placeholder="0"
                                  className="font-cairo"
                              />
                            </div>
                          </div>
                          <div className="space-y-2">
                              <Label className="font-cairo">وصف المرحلة</Label>
                            <Textarea
                              value={phase.description}
                              onChange={(e) => updatePhase(phase.id, "description", e.target.value)}
                              placeholder="وصف الأنشطة والمهام في هذه المرحلة"
                                className="font-cairo"
                              rows={3}
                            />
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>
              </div>
            </TabsContent>

            {/* Files Tab */}
            <TabsContent value="files">
              <div style={{ direction: 'rtl' }}>
                <Card className="border-0 shadow-sm hover:shadow-md transition-shadow duration-300 bg-white/80 backdrop-blur-sm">
                <CardHeader className="bg-gradient-to-r from-green-50 to-emerald-50 border-b border-green-100">
                    <CardTitle className="flex items-center text-xl text-gray-900 font-cairo">
                    <FileText className="h-5 w-5 ml-3" />
                    الملفات والمستندات
                  </CardTitle>
                    <CardDescription className="font-cairo">رفع الملفات والمستندات المرتبطة بالمشروع</CardDescription>
                </CardHeader>
                <CardContent className="p-6">
                    {/* Upload Area */}
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-12 text-center hover:border-green-400 transition-colors bg-gray-50/50">
                    <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                      <h3 className="text-lg font-medium text-gray-900 mb-2 font-cairo">رفع الملفات</h3>
                      <p className="text-gray-600 mb-4 font-cairo">اسحب الملفات هنا أو انقر للاختيار</p>
                      <div className="flex items-center justify-center gap-3">
                        <Button variant="outline" className="hover:bg-green-50 border-green-200 bg-transparent font-cairo">
                      <Upload className="h-4 w-4 ml-2" />
                      اختيار الملفات
                    </Button>
                        <Button variant="outline" className="hover:bg-blue-50 border-blue-200 bg-transparent font-cairo">
                          <FileText className="h-4 w-4 ml-2" />
                          إضافة مجلد
                        </Button>
                      </div>
                  </div>

                    {/* File Types */}
                  <div className="mt-6">
                      <h4 className="font-medium text-gray-900 mb-3 font-cairo">أنواع الملفات المقبولة:</h4>
                      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2">
                        <Badge variant="outline" className="font-cairo text-center">PDF</Badge>
                        <Badge variant="outline" className="font-cairo text-center">Word</Badge>
                        <Badge variant="outline" className="font-cairo text-center">Excel</Badge>
                        <Badge variant="outline" className="font-cairo text-center">PowerPoint</Badge>
                        <Badge variant="outline" className="font-cairo text-center">الصور</Badge>
                        <Badge variant="outline" className="font-cairo text-center">AutoCAD</Badge>
                      </div>
                    </div>

                    {/* Uploaded Files Preview */}
                    <div className="mt-8">
                      <h4 className="font-medium text-gray-900 mb-4 font-cairo">الملفات المرفوعة:</h4>
                      <div className="space-y-3">
                        {/* Sample uploaded files */}
                        <div className="flex items-center justify-between p-3 bg-white rounded-lg border border-gray-200 shadow-sm">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                              <FileText className="h-5 w-5 text-red-600" />
                            </div>
                            <div>
                              <p className="font-medium text-gray-900 font-cairo">مشروع_التطوير.pdf</p>
                              <p className="text-sm text-gray-500 font-cairo">2.5 MB</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <Button variant="outline" size="sm" className="text-blue-600 hover:bg-blue-50 border-blue-200 bg-transparent font-cairo">
                              <Eye className="h-4 w-4 ml-1" />
                              عرض
                            </Button>
                            <Button variant="outline" size="sm" className="text-red-600 hover:bg-red-50 border-red-200 bg-transparent font-cairo">
                              <Trash2 className="h-4 w-4 ml-1" />
                              حذف
                            </Button>
                          </div>
                        </div>

                        <div className="flex items-center justify-between p-3 bg-white rounded-lg border border-gray-200 shadow-sm">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                              <FileText className="h-5 w-5 text-green-600" />
                            </div>
                            <div>
                              <p className="font-medium text-gray-900 font-cairo">المواصفات_الفنية.docx</p>
                              <p className="text-sm text-gray-500 font-cairo">1.8 MB</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <Button variant="outline" size="sm" className="text-blue-600 hover:bg-blue-50 border-blue-200 bg-transparent font-cairo">
                              <Eye className="h-4 w-4 ml-1" />
                              عرض
                            </Button>
                            <Button variant="outline" size="sm" className="text-red-600 hover:bg-red-50 border-red-200 bg-transparent font-cairo">
                              <Trash2 className="h-4 w-4 ml-1" />
                              حذف
                            </Button>
                          </div>
                        </div>

                        <div className="flex items-center justify-between p-3 bg-white rounded-lg border border-gray-200 shadow-sm">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                              <FileText className="h-5 w-5 text-blue-600" />
                            </div>
                            <div>
                              <p className="font-medium text-gray-900 font-cairo">الميزانية_2024.xlsx</p>
                              <p className="text-sm text-gray-500 font-cairo">3.2 MB</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <Button variant="outline" size="sm" className="text-blue-600 hover:bg-blue-50 border-blue-200 bg-transparent font-cairo">
                              <Eye className="h-4 w-4 ml-1" />
                              عرض
                            </Button>
                            <Button variant="outline" size="sm" className="text-red-600 hover:bg-red-50 border-red-200 bg-transparent font-cairo">
                              <Trash2 className="h-4 w-4 ml-1" />
                              حذف
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Upload Progress */}
                    <div className="mt-6">
                      <h4 className="font-medium text-gray-900 mb-3 font-cairo">تقدم الرفع:</h4>
                      <div className="space-y-3">
                        <div className="p-3 bg-white rounded-lg border border-gray-200 shadow-sm">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-sm font-medium text-gray-900 font-cairo">رفع الملفات...</span>
                            <span className="text-sm text-gray-500 font-cairo">75%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div className="bg-green-600 h-2 rounded-full" style={{ width: '75%' }}></div>
                          </div>
                        </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              </div>
            </TabsContent>
          </Tabs>
        </form>
      </div>
    </AppLayout>
  )
}
