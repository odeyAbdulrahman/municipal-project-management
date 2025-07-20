"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { useParams, useRouter } from "next/navigation"
import { AppLayout } from "@/components/layout/app-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Save, Plus, Trash2, Upload, Building2, Users, Target, FileText, Download, Search, Eye, Edit } from "lucide-react"
import { format } from "date-fns"
import { ar } from "date-fns/locale"

function ClientOnly({ children }: { children: React.ReactNode }) {
  const [hasMounted, setHasMounted] = useState(false)
  useEffect(() => { setHasMounted(true) }, [])
  if (!hasMounted) return null
  return <>{children}</>
}

export default function EditProjectPage() {
  const params = useParams()
  const router = useRouter()
  const projectId = params.id

  // Prefilled project data (should be fetched in real app)
  const [formData, setFormData] = useState({
    name: "تطوير الحديقة المركزية",
    description: "مشروع تطوير وتجديد الحديقة المركزية في وسط المدينة لتحسين البيئة الحضرية وتوفير مساحات ترفيهية للمواطنين",
    type: "development",
    municipality: "sharjah",
    department: "gardens",
    manager: "ahmed",
    priority: "high",
    budget: "2500000",
    startDate: "2024-01-10",
    endDate: "2024-03-15",
    objectives: "تحسين البيئة الحضرية وتوفير مساحات ترفيهية للمواطنين",
    scope: "تطوير وتجديد الحديقة المركزية بما يشمل الزراعة والتشجير وتركيب المرافق",
  })
  const [phases, setPhases] = useState([
    { id: 1, name: "مرحلة التصميم", description: "تصميم المخططات", estimatedDays: "15" },
    { id: 2, name: "مرحلة التنفيذ", description: "تنفيذ الأعمال الإنشائية", estimatedDays: "30" },
  ])
  const [uploadedFiles, setUploadedFiles] = useState([
    { name: "مشروع_التطوير.pdf", size: "2.5 MB", type: "pdf" },
    { name: "المواصفات_الفنية.docx", size: "1.8 MB", type: "word" },
    { name: "الميزانية_2024.xlsx", size: "3.2 MB", type: "excel" },
  ])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Save logic here
    router.push(`/projects/${projectId}`)
  }
  const addPhase = () => setPhases([...phases, { id: phases.length + 1, name: "", description: "", estimatedDays: "" }])
  const removePhase = (id: number) => phases.length > 1 && setPhases(phases.filter((p) => p.id !== id))
  const updatePhase = (id: number, field: string, value: string) => setPhases(phases.map((p) => p.id === id ? { ...p, [field]: value } : p))

  return (
    <AppLayout
      title="تعديل المشروع"
      description={formData.name}
      actions={
        <Button onClick={handleSubmit} className="bg-sharjah-orange hover:bg-orange-600 shadow-sm hover:shadow-md transition-all duration-300 font-cairo">
          <Save className="h-4 w-4 ml-2" /> حفظ التغييرات
        </Button>
      }
    >
      <div className="p-8">
        <Tabs defaultValue="basic" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 bg-white/60 backdrop-blur-sm border border-gray-200/50 shadow-sm">
            <TabsTrigger value="files" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white font-cairo">الملفات</TabsTrigger>
            <TabsTrigger value="phases" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white font-cairo">المراحل</TabsTrigger>
            <TabsTrigger value="details" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white font-cairo">التفاصيل</TabsTrigger>
            <TabsTrigger value="basic" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white font-cairo">المعلومات الأساسية</TabsTrigger>
          </TabsList>

          {/* Basic Information Tab */}
          <TabsContent value="basic">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8" style={{ direction: 'rtl' }}>
              {/* Right Column - Project Information */}
              <Card className="border-0 shadow-sm hover:shadow-md transition-shadow duration-300 bg-white/80 backdrop-blur-sm">
                <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50 border-b border-blue-100">
                  <CardTitle className="flex items-center text-xl text-gray-900 font-cairo">
                    <Building2 className="h-5 w-5 ml-3" /> معلومات المشروع
                  </CardTitle>
                  <CardDescription className="font-cairo">تعديل المعلومات الأساسية للمشروع</CardDescription>
                </CardHeader>
                <CardContent className="p-6 space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="font-cairo">اسم المشروع *</Label>
                    <Input id="name" value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} className="font-cairo" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="description" className="font-cairo">وصف المشروع *</Label>
                    <Textarea id="description" value={formData.description} onChange={e => setFormData({ ...formData, description: e.target.value })} className="font-cairo" rows={4} required />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="type" className="font-cairo">نوع المشروع *</Label>
                      <Select value={formData.type} onValueChange={v => setFormData({ ...formData, type: v })}>
                        <SelectTrigger className="font-cairo"><SelectValue placeholder="اختر نوع المشروع" /></SelectTrigger>
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
                      <Select value={formData.priority} onValueChange={v => setFormData({ ...formData, priority: v })}>
                        <SelectTrigger className="font-cairo"><SelectValue placeholder="اختر الأولوية" /></SelectTrigger>
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
                    <Input id="budget" type="number" value={formData.budget} onChange={e => setFormData({ ...formData, budget: e.target.value })} className="font-cairo" required />
                  </div>
                </CardContent>
              </Card>
              {/* Left Column - Executing Entity */}
              <Card className="border-0 shadow-sm hover:shadow-md transition-shadow duration-300 bg-white/80 backdrop-blur-sm">
                <CardHeader className="bg-gradient-to-r from-green-50 to-emerald-50 border-b border-green-100">
                  <CardTitle className="flex items-center text-xl text-gray-900 font-cairo">
                    <Users className="h-5 w-5 ml-3" /> الجهة المنفذة
                  </CardTitle>
                  <CardDescription className="font-cairo">معلومات البلدية والقسم المسؤول</CardDescription>
                </CardHeader>
                <CardContent className="p-6 space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="municipality" className="font-cairo">البلدية *</Label>
                    <Select value={formData.municipality} onValueChange={v => setFormData({ ...formData, municipality: v })}>
                      <SelectTrigger className="font-cairo"><SelectValue placeholder="اختر البلدية" /></SelectTrigger>
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
                    <Select value={formData.department} onValueChange={v => setFormData({ ...formData, department: v })}>
                      <SelectTrigger className="font-cairo"><SelectValue placeholder="اختر القسم" /></SelectTrigger>
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
                    <Select value={formData.manager} onValueChange={v => setFormData({ ...formData, manager: v })}>
                      <SelectTrigger className="font-cairo"><SelectValue placeholder="اختر مدير المشروع" /></SelectTrigger>
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
                      <Input id="startDate" type="date" value={formData.startDate} onChange={e => setFormData({ ...formData, startDate: e.target.value })} className="font-cairo" />
                    </div>
                    <div className="space-y-2">
                      <Label className="font-cairo">تاريخ الانتهاء المتوقع *</Label>
                      <Input id="endDate" type="date" value={formData.endDate} onChange={e => setFormData({ ...formData, endDate: e.target.value })} className="font-cairo" />
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
                    <Edit className="h-5 w-5 ml-3" /> التفاصيل الإضافية
                  </CardTitle>
                  <CardDescription className="font-cairo">تحديث الأهداف والنطاق والتفاصيل الأخرى</CardDescription>
                </CardHeader>
                <CardContent className="p-6 space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="objectives" className="font-cairo">أهداف المشروع</Label>
                    <Textarea id="objectives" value={formData.objectives} onChange={e => setFormData({ ...formData, objectives: e.target.value })} className="font-cairo" rows={4} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="scope" className="font-cairo">نطاق العمل</Label>
                    <Textarea id="scope" value={formData.scope} onChange={e => setFormData({ ...formData, scope: e.target.value })} className="font-cairo" rows={4} />
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
                        <Target className="h-5 w-5 ml-3" /> مراحل المشروع
                      </CardTitle>
                      <CardDescription className="font-cairo">تقسيم المشروع إلى مراحل زمنية</CardDescription>
                    </div>
                    <Button type="button" onClick={addPhase} variant="outline" className="hover:bg-amber-50 border-amber-200 bg-transparent font-cairo">
                      <Plus className="h-4 w-4 ml-2" /> إضافة مرحلة
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
                              <Button type="button" variant="outline" size="sm" onClick={() => removePhase(phase.id)} className="text-red-600 hover:bg-red-50 border-red-200 bg-transparent font-cairo">
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            )}
                          </div>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <Label className="font-cairo">اسم المرحلة</Label>
                              <Input value={phase.name} onChange={e => updatePhase(phase.id, "name", e.target.value)} placeholder="أدخل اسم المرحلة" className="font-cairo" />
                            </div>
                            <div className="space-y-2">
                              <Label className="font-cairo">المدة المقدرة (أيام)</Label>
                              <Input type="number" value={phase.estimatedDays} onChange={e => updatePhase(phase.id, "estimatedDays", e.target.value)} placeholder="0" className="font-cairo" />
                            </div>
                          </div>
                          <div className="space-y-2">
                            <Label className="font-cairo">وصف المرحلة</Label>
                            <Textarea value={phase.description} onChange={e => updatePhase(phase.id, "description", e.target.value)} placeholder="وصف الأنشطة والمهام في هذه المرحلة" className="font-cairo" rows={3} />
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
                    <FileText className="h-5 w-5 ml-3" /> الملفات والمستندات
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
                        <Upload className="h-4 w-4 ml-2" /> اختيار الملفات
                      </Button>
                      <Button variant="outline" className="hover:bg-blue-50 border-blue-200 bg-transparent font-cairo">
                        <FileText className="h-4 w-4 ml-2" /> إضافة مجلد
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
                      {uploadedFiles.map((file, idx) => (
                        <div key={idx} className="flex items-center justify-between p-3 bg-white rounded-lg border border-gray-200 shadow-sm">
                          <div className="flex items-center gap-3">
                            <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${file.type === 'pdf' ? 'bg-red-100' : file.type === 'word' ? 'bg-green-100' : 'bg-blue-100'}`}>
                              <FileText className={`h-5 w-5 ${file.type === 'pdf' ? 'text-red-600' : file.type === 'word' ? 'text-green-600' : 'text-blue-600'}`} />
                            </div>
                            <div>
                              <p className="font-medium text-gray-900 font-cairo">{file.name}</p>
                              <p className="text-sm text-gray-500 font-cairo">{file.size}</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <Button variant="outline" size="sm" className="text-blue-600 hover:bg-blue-50 border-blue-200 bg-transparent font-cairo">
                              <Eye className="h-4 w-4 ml-1" /> عرض
                            </Button>
                            <Button variant="outline" size="sm" className="text-red-600 hover:bg-red-50 border-red-200 bg-transparent font-cairo" onClick={() => setUploadedFiles(uploadedFiles.filter((_, i) => i !== idx))}>
                              <Trash2 className="h-4 w-4 ml-1" /> حذف
                            </Button>
                          </div>
                        </div>
                      ))}
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
      </div>
    </AppLayout>
  )
}
