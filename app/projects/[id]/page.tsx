"use client"
import Link from "next/link"
import { useParams } from "next/navigation"
import { AppLayout } from "@/components/layout/app-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { Edit, Download, ArrowRight, CheckCircle, AlertTriangle, XCircle, User, GripVertical } from "lucide-react"
import { useState, useEffect } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from "@/components/ui/tooltip";
import { FileText, FileSpreadsheet, Phone, Mail, PlusCircle, Eye } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, ResponsiveContainer, Legend, AreaChart, Area } from 'recharts';
import { DragDropContext, Droppable, Draggable, DropResult } from "@hello-pangea/dnd"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"

// Client-side component for date formatting
function FormattedDate({ date }: { date: string }) {
  const [formattedDate, setFormattedDate] = useState<string>("")
  const [hasMounted, setHasMounted] = useState(false)

  useEffect(() => {
    setHasMounted(true)
    const formatDate = () => {
      return new Date(date).toLocaleDateString("ar-AE", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    }
    setFormattedDate(formatDate())
  }, [date])

  return hasMounted ? formattedDate : date
}

// Client-side component for number formatting
function FormattedNumber({ value }: { value: string | number }) {
  const [formattedValue, setFormattedValue] = useState<string>("")
  const [hasMounted, setHasMounted] = useState(false)

  useEffect(() => {
    setHasMounted(true)
    const formatNumber = () => {
      const num = typeof value === 'string' ? parseFloat(value.replace(/,/g, '')) : value
      return num.toLocaleString('ar-AE')
    }
    setFormattedValue(formatNumber())
  }, [value])

  return hasMounted ? formattedValue : value.toString()
}

export default function ProjectDetailsPage() {
  const params = useParams()
  const projectId = params.id

  // Mock project data (should be fetched in real app)
  const project = {
    id: 1,
    name: "تطوير الحديقة المركزية",
    description:
      "مشروع تطوير وتجديد الحديقة المركزية في وسط المدينة لتحسين البيئة الحضرية وتوفير مساحات ترفيهية للمواطنين مع إضافة مرافق حديثة ونظام ري ذكي",
    municipality: "بلدية الشارقة",
    department: "قسم الحدائق والتشجير",
    progress: 75,
    status: "قيد التنفيذ",
    priority: "عالية",
    type: "تطوير وتحسين",
    dueDate: "2024-03-15",
    startDate: "2024-01-10",
    budget: "2,500,000",
    spent: "1,875,000",
    manager: "أحمد محمد",
    team: 8,
    phases: 4,
    completedPhases: 3,
    tasks: 24,
    completedTasks: 18,
    location: "حي الملز، الشارقة",
    area: "15,000 متر مربع",
    contractor: "شركة الشارقة للمقاولات",
    consultant: "مكتب الخليج للاستشارات الهندسية",
    qualityScore: 92,
    approved: false, // Municipality director approval
    departmentApproved: false, // Department manager approval
  }

  function handleDirectorApprove() {
    alert("تمت الموافقة من مدير البلدية!");
  }
  function handleDepartmentApprove() {
    alert("تمت الموافقة من مدير القسم!");
  }

  // Sample chart data
  const budgetData = [
    { month: "يناير", spent: 450000 },
    { month: "فبراير", spent: 650000 },
    { month: "مارس", spent: 775000 },
  ];
  // Risks data
  const risks = [
    { id: 1, name: "تأخير في توريد النباتات", probability: "متوسط", impact: "متوسط", status: "نشط", mitigation: "التعاقد مع مورد احتياطي", owner: "نورا أحمد" },
    { id: 2, name: "تغيير الطقس", probability: "منخفض", impact: "عالي", status: "مراقب", mitigation: "جدولة أعمال الزراعة حسب الطقس", owner: "أحمد محمد" },
    { id: 3, name: "زيادة في التكاليف", probability: "منخفض", impact: "متوسط", status: "مغلق", mitigation: "تم تثبيت الأسعار مع الموردين", owner: "أحمد محمد" },
  ];
  // Quality metrics
  const qualityMetrics = [
    { name: "جودة التصميم", score: 95, target: 90, status: "ممتاز" },
    { name: "جودة التنفيذ", score: 88, target: 85, status: "جيد جداً" },
    { name: "الالتزام بالمواصفات", score: 92, target: 90, status: "ممتاز" },
    { name: "رضا العميل", score: 90, target: 85, status: "ممتاز" },
  ];
  // Team members
  const teamMembers = [
    { name: "أحمد محمد", role: "مدير المشروع", phone: "0501234567", email: "ahmed@municipality.gov.sa", experience: "15 سنة" },
    { name: "فاطمة علي", role: "مهندس تصميم", phone: "0507654321", email: "fatima@municipality.gov.sa", experience: "8 سنوات" },
    { name: "محمد سالم", role: "مشرف تنفيذ", phone: "0509876543", email: "mohammed@municipality.gov.sa", experience: "12 سنة" },
    { name: "نورا أحمد", role: "مهندس زراعي", phone: "0502468135", email: "nora@municipality.gov.sa", experience: "6 سنوات" },
    { name: "خالد العتيبي", role: "مشرف أعمال", phone: "0508642097", email: "khalid@municipality.gov.sa", experience: "10 سنوات" },
  ];

  // Add more sample data for phases, files, communication, reports
  const phases = [
    { id: 1, name: "التخطيط والتصميم", status: "مكتمل", progress: 100 },
    { id: 2, name: "الحصول على التراخيص", status: "مكتمل", progress: 100 },
    { id: 3, name: "أعمال الحفر والتسوية", status: "قيد التنفيذ", progress: 80 },
    { id: 4, name: "الزراعة والتشجير", status: "لم يبدأ", progress: 0 },
  ];
  const files = [
    { name: "مشروع_التطوير.pdf", size: "2.5 MB", type: "pdf" },
    { name: "المواصفات_الفنية.docx", size: "1.8 MB", type: "word" },
    { name: "الميزانية_2024.xlsx", size: "3.2 MB", type: "excel" },
  ];
  const communications = [
    { id: 1, type: "اجتماع", title: "اجتماع مراجعة التقدم الأسبوعي", date: "2024-02-20", summary: "مراجعة تقدم المرحلة الثالثة ومناقشة التحديات" },
    { id: 2, type: "مكالمة", title: "مكالمة مع المقاول", date: "2024-02-19", summary: "مناقشة جدولة أعمال المرحلة القادمة" },
  ];
  const reports = [
    { id: 1, type: "تقرير أسبوعي", date: "2024-02-25", status: "مكتمل" },
    { id: 2, type: "تقرير أسبوعي", date: "2024-02-18", status: "مكتمل" },
  ];

  // Add sample data for the second chart
  const progressTrendData = [
    { month: "يناير", progress: 10 },
    { month: "فبراير", progress: 25 },
    { month: "مارس", progress: 40 },
    { month: "أبريل", progress: 55 },
    { month: "مايو", progress: 70 },
    { month: "يونيو", progress: 80 },
    { month: "يوليو", progress: 90 },
    { month: "أغسطس", progress: 100 },
  ];

  // Add sample data for the area chart
  const qualityTrendData = [
    { month: "يناير", quality: 80 },
    { month: "فبراير", quality: 85 },
    { month: "مارس", quality: 90 },
    { month: "أبريل", quality: 92 },
    { month: "مايو", quality: 94 },
    { month: "يونيو", quality: 93 },
    { month: "يوليو", quality: 95 },
    { month: "أغسطس", quality: 96 },
  ];

  // Generate 100+ mock tasks for demo
  const assignees = ["أحمد محمد", "فاطمة علي", "محمد سالم", "نورا أحمد", "خالد العتيبي"];
  const statusKeys = ["قيد التنفيذ", "مكتمل", "متأخر", "لم يبدأ"];
  const phaseIds = [1, 2, 3, 4];
  const baseTitles = [
    "إعداد المخططات", "شراء المواد", "تنفيذ أعمال الحفر", "تسليم المرحلة الأولى", "تركيب نظام الري", "تشجير المنطقة الشرقية",
    "مراجعة التصاميم النهائية", "توقيع العقود مع المقاول", "إعداد تقرير التقدم", "اختبار نظام الري", "تدريب الفريق على المعدات",
    "تسليم المرحلة الثانية", "تجهيز موقع الزراعة", "مراجعة المواصفات الفنية", "تحديث خطة العمل", "إعداد خطة الطوارئ",
    "مراجعة العقود القانونية", "تسليم المعدات للموقع", "تدقيق الميزانية", "تدريب إضافي للفريق", "تسليم المرحلة الثالثة",
    "تجهيز معدات الزراعة", "مراجعة خطة العمل", "تحديث خطة الطوارئ", "تسليم الموقع النهائي", "إعداد تقرير الجودة",
    "مراجعة خطة الطوارئ", "تسليم معدات إضافية", "تدقيق خطة العمل", "تدريب جديد للفريق", "تسليم المرحلة الرابعة",
    "تجهيز معدات إضافية", "مراجعة خطة الطوارئ النهائية", "تحديث خطة الطوارئ النهائية", "تسليم الموقع النهائي الثاني"
  ];
  const tasks = Array.from({ length: 120 }).map((_, i) => ({
    id: i + 1,
    title: baseTitles[i % baseTitles.length] + ` #${i + 1}`,
    status: statusKeys[i % statusKeys.length],
    assignee: assignees[i % assignees.length],
    dueDate: `2024-03-${(i % 28 + 1).toString().padStart(2, '0')}`,
    phaseId: phaseIds[i % phaseIds.length],
  }));
  const statusGroups = [
    { key: "قيد التنفيذ", color: "bg-blue-100", title: "المهام قيد التنفيذ" },
    { key: "مكتمل", color: "bg-green-100", title: "المهام المكتملة" },
    { key: "متأخر", color: "bg-red-100", title: "المهام المتأخرة" },
    { key: "لم يبدأ", color: "bg-gray-100", title: "المهام التي لم تبدأ" },
  ];

  const [tasksState, setTasksState] = useState(tasks)

  function onDragEnd(result: DropResult) {
    if (!result.destination) return;
    // droppableId format: phaseId-status
    const [sourcePhaseId, sourceStatus] = result.source.droppableId.split("-");
    const [destPhaseId, destStatus] = result.destination.droppableId.split("-");
    if (sourcePhaseId === destPhaseId && sourceStatus === destStatus) {
      // Reorder within the same status/phase
      const items = Array.from(tasksState.filter(t => t.phaseId.toString() === sourcePhaseId && t.status === sourceStatus));
      const [removed] = items.splice(result.source.index, 1);
      items.splice(result.destination.index, 0, removed);
      // Merge back into tasksState
      const newTasks = tasksState.filter(t => !(t.phaseId.toString() === sourcePhaseId && t.status === sourceStatus));
      setTasksState([
        ...newTasks,
        ...items.map(t => ({ ...t, phaseId: Number(sourcePhaseId), status: sourceStatus }))
      ]);
    } else {
      // Move to another status/phase
      const sourceItems = Array.from(tasksState.filter(t => t.phaseId.toString() === sourcePhaseId && t.status === sourceStatus));
      const destItems = Array.from(tasksState.filter(t => t.phaseId.toString() === destPhaseId && t.status === destStatus));
      const [removed] = sourceItems.splice(result.source.index, 1);
      removed.status = destStatus;
      removed.phaseId = Number(destPhaseId);
      destItems.splice(result.destination.index, 0, removed);
      const newTasks = tasksState.filter(t => !((t.phaseId.toString() === sourcePhaseId && t.status === sourceStatus) || (t.phaseId.toString() === destPhaseId && t.status === destStatus)));
      setTasksState([
        ...newTasks,
        ...sourceItems,
        ...destItems
      ]);
    }
  }

  return (
    <AppLayout
      title={project.name}
      description={project.description}
      actions={
        <div className="flex flex-row-reverse items-center w-full">
          <div className="flex flex-row-reverse gap-3 mr-auto">
            <Badge className="bg-blue-100 text-blue-800 border-blue-200 border font-medium font-cairo rounded-full px-3 py-1">قيد التنفيذ</Badge>
            <Badge className="bg-red-100 text-red-800 border-red-200 border font-medium font-cairo rounded-full px-3 py-1">عالية</Badge>
          </div>
          <div className="flex flex-row-reverse gap-3">
            {!project.approved && (
              <Button className="bg-green-600 hover:bg-green-700 text-white font-cairo" onClick={handleDirectorApprove}>
                <CheckCircle className="h-4 w-4 ml-2" />
                موافقة مدير البلدية
              </Button>
            )}
            {!project.departmentApproved && (
              <Button className="bg-blue-600 hover:bg-blue-700 text-white font-cairo" onClick={handleDepartmentApprove}>
                <CheckCircle className="h-4 w-4 ml-2" />
                موافقة مدير القسم
              </Button>
            )}
            <Button className="bg-primary-500 hover:bg-primary-600 text-white font-cairo">
              <Download className="h-4 w-4 ml-2" />
              تصدير التقرير
            </Button>
            <Button variant="outline" className="font-cairo border-blue-200 text-gray-900">
              <Edit className="h-4 w-4 ml-2" /> تعديل المشروع
            </Button>
            <Link href="/projects">
              <Button variant="outline" className="font-cairo border-gray-200 text-gray-900">
                <ArrowRight className="h-4 w-4 ml-2" /> العودة للمشاريع
              </Button>
            </Link>
          </div>
        </div>
      }
    >
      <div className="p-8">
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-9 bg-white/60 backdrop-blur-sm border border-gray-200/50 shadow-sm flex-row-reverse" style={{ direction: 'rtl' }}>
            <TabsTrigger value="overview" className="data-[state=active]:bg-primary-500 data-[state=active]:text-white font-cairo">نظرة عامة</TabsTrigger>
            <TabsTrigger value="tasks" className="data-[state=active]:bg-primary-500 data-[state=active]:text-white font-cairo">المهام</TabsTrigger>
            <TabsTrigger value="phases" className="data-[state=active]:bg-primary-500 data-[state=active]:text-white font-cairo">مراحل المشروع</TabsTrigger>
            <TabsTrigger value="team" className="data-[state=active]:bg-primary-500 data-[state=active]:text-white font-cairo">الفريق</TabsTrigger>
            <TabsTrigger value="risks" className="data-[state=active]:bg-primary-500 data-[state=active]:text-white font-cairo">المخاطر</TabsTrigger>
            <TabsTrigger value="quality" className="data-[state=active]:bg-primary-500 data-[state=active]:text-white font-cairo">الجودة</TabsTrigger>
            <TabsTrigger value="files" className="data-[state=active]:bg-primary-500 data-[state=active]:text-white font-cairo">الملفات</TabsTrigger>
            <TabsTrigger value="communications" className="data-[state=active]:bg-primary-500 data-[state=active]:text-white font-cairo">التواصل</TabsTrigger>
            <TabsTrigger value="reports" className="data-[state=active]:bg-primary-500 data-[state=active]:text-white font-cairo">التقارير</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview">
            <div dir="rtl">
              {/* Project Overview */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <Card className="border-0 shadow-sm hover:shadow-md transition-shadow duration-300 bg-white/80 backdrop-blur-sm">
              <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50 border-b border-blue-100">
                    <CardTitle className="text-xl text-gray-900 font-cairo">نظرة عامة على المشروع</CardTitle>
                    <CardDescription className="text-gray-600 mt-1 font-cairo">{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-6">
                  <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg">
                        <div className="text-2xl font-bold text-blue-900 font-cairo">{project.progress}%</div>
                        <div className="text-sm text-blue-700 font-cairo">التقدم</div>
                  </div>
                  <div className="text-center p-4 bg-gradient-to-br from-green-50 to-green-100 rounded-lg">
                        <div className="text-2xl font-bold text-green-900 font-cairo">{project.completedPhases}/{project.phases}</div>
                        <div className="text-sm text-green-700 font-cairo">المراحل</div>
                  </div>
                  <div className="text-center p-4 bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg">
                        <div className="text-2xl font-bold text-purple-900 font-cairo">{project.completedTasks}/{project.tasks}</div>
                        <div className="text-sm text-purple-700 font-cairo">المهام</div>
                  </div>
                  <div className="text-center p-4 bg-gradient-to-br from-amber-50 to-amber-100 rounded-lg">
                        <div className="text-2xl font-bold text-amber-900 font-cairo">{project.team}</div>
                        <div className="text-sm text-amber-700 font-cairo">الفريق</div>
                  </div>
                  <div className="text-center p-4 bg-gradient-to-br from-red-50 to-red-100 rounded-lg">
                        <div className="text-2xl font-bold text-red-900 font-cairo">75%</div>
                        <div className="text-sm text-red-700 font-cairo">الميزانية</div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                        <div className="flex justify-between text-sm mb-2 font-cairo">
                      <span className="text-gray-600">التقدم الإجمالي</span>
                      <span className="font-semibold text-gray-900">{project.progress}%</span>
                    </div>
                    <Progress value={project.progress} className="h-3" />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-gray-100">
                        <div className="flex items-center gap-2 text-sm font-cairo">
                          <span className="text-gray-600">تاريخ البداية:</span>
                          <span className="font-medium"><FormattedDate date={project.startDate} /></span>
                    </div>
                        <div className="flex items-center gap-2 text-sm font-cairo">
                          <span className="text-gray-600">تاريخ الانتهاء:</span>
                          <span className="font-medium"><FormattedDate date={project.dueDate} /></span>
                    </div>
                        <div className="flex items-center gap-2 text-sm font-cairo">
                          <span className="text-gray-600">الميزانية:</span>
                          <span className="font-medium"><FormattedNumber value={project.budget} /> ريال</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

                {/* Project Info */}
                <Card className="border-0 shadow-sm hover:shadow-md transition-shadow duration-300 bg-white/80 backdrop-blur-sm">
              <CardHeader className="bg-gradient-to-r from-green-50 to-emerald-50 border-b border-green-100">
                    <CardTitle className="text-lg text-gray-900 flex items-center font-cairo">معلومات المشروع</CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-4">
                    <div className="space-y-3 text-sm font-cairo">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">البلدية:</span>
                    <span className="font-medium">{project.municipality}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">القسم:</span>
                    <span className="font-medium">{project.department}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">مدير المشروع:</span>
                    <span className="font-medium">{project.manager}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">المقاول:</span>
                    <span className="font-medium">{project.contractor}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">الاستشاري:</span>
                    <span className="font-medium">{project.consultant}</span>
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                        <span className="text-gray-600">الموقع:</span>
                        <span className="font-medium">{project.location}</span>
                  </div>
                  <div className="flex items-center justify-between">
                        <span className="text-gray-600">المساحة:</span>
                        <span className="font-medium">{project.area}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
                  </div>
            {/* Add two charts side by side below cards */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="border-0 shadow-sm hover:shadow-md transition-shadow duration-300 bg-white/80 backdrop-blur-sm">
                <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50 border-b border-blue-100">
                  <CardTitle className="text-lg text-gray-900 flex items-center font-cairo">تطور التقدم الشهري</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <ResponsiveContainer width="100%" height={250}>
                    <BarChart data={progressTrendData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis tickFormatter={v => `${v}%`} />
                      <RechartsTooltip formatter={v => `${v}%`} />
                      <Legend />
                      <Bar dataKey="progress" fill="#0ea5e9" name="نسبة التقدم" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
              </CardContent>
            </Card>
              <Card className="border-0 shadow-sm hover:shadow-md transition-shadow duration-300 bg-white/80 backdrop-blur-sm">
                <CardHeader className="bg-gradient-to-r from-green-50 to-emerald-50 border-b border-green-100">
                  <CardTitle className="text-lg text-gray-900 flex items-center font-cairo">تطور الجودة الشهرية</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                  <ResponsiveContainer width="100%" height={250}>
                    <AreaChart data={qualityTrendData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis tickFormatter={v => `${v}%`} />
                      <RechartsTooltip formatter={v => `${v}%`} />
                      <Legend />
                      <Area type="monotone" dataKey="quality" stroke="#22c55e" fill="#bbf7d0" name="نسبة الجودة" />
                    </AreaChart>
                  </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>
        </div>
          </TabsContent>

          {/* Risks Tab */}
          <TabsContent value="risks">
            <div dir="rtl">
              <Card className="border-0 shadow-sm hover:shadow-md transition-shadow duration-300 bg-white/80 backdrop-blur-sm mb-8">
                <CardHeader className="bg-gradient-to-r from-red-50 to-orange-50 border-b border-red-100">
                  <CardTitle className="text-lg text-gray-900 flex items-center font-cairo">المخاطر</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <table className="w-full text-right font-cairo border-separate border-spacing-y-2" dir="rtl">
                  <thead>
                    <tr className="text-gray-700 bg-gray-50">
                      <th className="p-2 text-right">المخاطرة</th>
                      <th className="p-2 text-right">الاحتمالية</th>
                      <th className="p-2 text-right">الأثر</th>
                      <th className="p-2 text-right">الحالة</th>
                      <th className="p-2 text-right">الإجراء الوقائي</th>
                      <th className="p-2 text-right">المسؤول</th>
                      <th className="p-2 text-right">التقدم</th>
                    </tr>
                  </thead>
                  <tbody>
                    {risks.map((risk, i) => (
                      <tr key={i} className="bg-white shadow-sm">
                        <td className="p-2 font-medium text-right">{risk.name}</td>
                        <td className="p-2 text-right">{risk.probability}</td>
                        <td className="p-2 text-right">{risk.impact}</td>
                        <td className="p-2 text-right">
                          {risk.status === "نشط" && <span className="inline-flex items-center gap-1 bg-red-100 text-red-700 px-2 py-1 rounded-full"><AlertTriangle className="inline h-4 w-4" /> نشط</span>}
                          {risk.status === "مراقب" && <span className="inline-flex items-center gap-1 bg-yellow-100 text-yellow-700 px-2 py-1 rounded-full"><User className="inline h-4 w-4" /> مراقب</span>}
                          {risk.status === "مغلق" && <span className="inline-flex items-center gap-1 bg-green-100 text-green-700 px-2 py-1 rounded-full"><CheckCircle className="inline h-4 w-4" /> مغلق</span>}
                        </td>
                        <td className="p-2 text-right">
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <span className="underline cursor-pointer text-blue-700">عرض</span>
                              </TooltipTrigger>
                              <TooltipContent>{risk.mitigation}</TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </td>
                        <td className="p-2 text-right">{risk.owner}</td>
                        <td className="p-2 text-right">
                          <div className="w-24 bg-gray-100 rounded-full h-2 overflow-hidden">
                            <div className={`h-2 rounded-full ${risk.status === "مغلق" ? 'bg-green-600' : risk.status === "مراقب" ? 'bg-yellow-600' : 'bg-red-600'}`} style={{ width: `${risk.status === "مغلق" ? 100 : risk.status === "مراقب" ? 60 : 30}%` }}></div>
                        </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </CardContent>
            </Card>
            </div>
          </TabsContent>

          {/* Quality Tab */}
          <TabsContent value="quality">
            <div dir="rtl">
              <Card className="border-0 shadow-sm hover:shadow-md transition-shadow duration-300 bg-white/80 backdrop-blur-sm mb-8">
              <CardHeader className="bg-gradient-to-r from-purple-50 to-pink-50 border-b border-purple-100">
                  <CardTitle className="text-lg text-gray-900 flex items-center font-cairo">الجودة</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                  <table className="w-full text-right font-cairo border-separate border-spacing-y-2" dir="rtl">
                    <thead>
                      <tr className="text-gray-700 bg-gray-50">
                        <th className="p-2 text-right">المعيار</th>
                        <th className="p-2 text-right">النتيجة</th>
                        <th className="p-2 text-right">المستهدف</th>
                        <th className="p-2 text-right">الحالة</th>
                      </tr>
                    </thead>
                    <tbody>
                      {qualityMetrics.map((q, i) => (
                        <tr key={i} className="bg-white shadow-sm">
                          <td className="p-2 font-medium text-right">{q.name}</td>
                          <td className="p-2 text-right">
                            <div className="w-32 bg-gray-100 rounded-full h-2 overflow-hidden">
                              <div className={`h-2 rounded-full ${q.score >= q.target ? 'bg-green-600' : q.score >= q.target - 10 ? 'bg-yellow-600' : 'bg-red-600'}`} style={{ width: `${q.score}%` }}></div>
                        </div>
                            <span className="text-xs text-gray-700 font-cairo">{q.score}%</span>
                          </td>
                          <td className="p-2 text-right">{q.target}%</td>
                          <td className="p-2 text-right">
                            {q.status === "ممتاز" && <span className="inline-flex items-center gap-1 text-green-700"><CheckCircle className="inline h-4 w-4" /> ممتاز</span>}
                            {q.status === "جيد جداً" && <span className="inline-flex items-center gap-1 text-blue-700"><User className="inline h-4 w-4" /> جيد جداً</span>}
                            {q.status === "ممتاز" && <span className="inline-flex items-center gap-1 text-red-700"><XCircle className="inline h-4 w-4" /> ممتاز</span>}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
              </CardContent>
            </Card>
            </div>
          </TabsContent>

          {/* Team Tab */}
          <TabsContent value="team">
            <div dir="rtl">
              <Card className="border-0 shadow-sm hover:shadow-md transition-shadow duration-300 bg-white/80 backdrop-blur-sm mb-8">
                <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50 border-b border-blue-100">
                  <CardTitle className="text-lg text-gray-900 flex items-center font-cairo">الفريق</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                  <table className="w-full text-right font-cairo border-separate border-spacing-y-2" dir="rtl">
                    <thead>
                      <tr className="text-gray-700 bg-gray-50">
                        <th className="p-2 text-right">الاسم</th>
                        <th className="p-2 text-right">الدور</th>
                        <th className="p-2 text-right">الهاتف</th>
                        <th className="p-2 text-right">البريد الإلكتروني</th>
                        <th className="p-2 text-right">الخبرة</th>
                      </tr>
                    </thead>
                    <tbody>
                      {teamMembers.map((member, i) => (
                        <tr key={i} className="bg-white shadow-sm">
                          <td className="p-2 font-medium text-right">
                            <div className="flex items-center gap-2">
                              <Avatar className="h-8 w-8">
                                <AvatarFallback className="text-xs font-bold">
                                  {member.name.charAt(0)}
                            </AvatarFallback>
                          </Avatar>
                              <span>{member.name}</span>
                              </div>
                          </td>
                          <td className="p-2 text-right">
                            <Badge variant="secondary">{member.role}</Badge>
                          </td>
                          <td className="p-2 text-right">{member.phone}</td>
                          <td className="p-2 text-right">{member.email}</td>
                          <td className="p-2 text-right">{member.experience}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
              </CardContent>
            </Card>
                              </div>
          </TabsContent>

          {/* Phases Tab */}
          <TabsContent value="phases">
            <div dir="rtl">
              <Card className="border-0 shadow-sm hover:shadow-md transition-shadow duration-300 bg-white/80 backdrop-blur-sm mb-8">
                <CardHeader className="bg-gradient-to-r from-amber-50 to-orange-50 border-b border-amber-100">
                  <CardTitle className="text-lg text-gray-900 flex items-center font-cairo">مراحل المشروع</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                  <table className="w-full text-right font-cairo border-separate border-spacing-y-2" dir="rtl">
                    <thead>
                      <tr className="text-gray-700 bg-gray-50">
                        <th className="p-2 text-right">المرحلة</th>
                        <th className="p-2 text-right">الحالة</th>
                        <th className="p-2 text-right">التقدم</th>
                      </tr>
                    </thead>
                    <tbody>
                      {phases.map((phase, i) => (
                        <tr key={phase.id} className="bg-white shadow-sm">
                          <td className="p-2 font-medium text-right">{phase.name}</td>
                          <td className="p-2 text-right">
                            {phase.status === "مكتمل" && <span className="inline-flex items-center gap-1 text-green-700"><CheckCircle className="inline h-4 w-4" /> مكتمل</span>}
                            {phase.status === "قيد التنفيذ" && <span className="inline-flex items-center gap-1 text-blue-700"><AlertTriangle className="inline h-4 w-4" /> قيد التنفيذ</span>}
                            {phase.status === "لم يبدأ" && <span className="inline-flex items-center gap-1 text-gray-500"><XCircle className="inline h-4 w-4" /> لم يبدأ</span>}
                          </td>
                          <td className="p-2 text-right">
                            <div className="w-32 bg-gray-100 rounded-full h-2 overflow-hidden">
                              <div className={`h-2 rounded-full ${phase.progress === 100 ? 'bg-green-600' : phase.progress > 0 ? 'bg-blue-600' : 'bg-gray-400'}`} style={{ width: `${phase.progress}%` }}></div>
                          </div>
                            <span className="text-xs text-gray-700 font-cairo">{phase.progress}%</span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
              </CardContent>
            </Card>
            </div>
          </TabsContent>

          {/* Files Tab */}
          <TabsContent value="files">
            <div dir="rtl">
              <Card className="border-0 shadow-sm hover:shadow-md transition-shadow duration-300 bg-white/80 backdrop-blur-sm mb-8">
                <CardHeader className="bg-gradient-to-r from-green-50 to-emerald-50 border-b border-green-100">
                  <CardTitle className="text-lg text-gray-900 flex items-center font-cairo">الملفات</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                  <table className="w-full text-right font-cairo border-separate border-spacing-y-2" dir="rtl">
                    <thead>
                      <tr className="text-gray-700 bg-gray-50">
                        <th className="p-2 text-right">اسم الملف</th>
                        <th className="p-2 text-right">الحجم</th>
                        <th className="p-2 text-right">النوع</th>
                      </tr>
                    </thead>
                    <tbody>
                      {files.map((file, i) => (
                        <tr key={i} className="bg-white shadow-sm">
                          <td className="p-2 font-medium text-right">
                            {file.type === "pdf" && <FileText className="inline h-5 w-5 mr-1 text-red-600" />}
                            {file.type === "word" && <FileText className="inline h-5 w-5 mr-1 text-blue-600" />}
                            {file.type === "excel" && <FileSpreadsheet className="inline h-5 w-5 mr-1 text-green-600" />}
                            {file.name}
                          </td>
                          <td className="p-2 text-right">{file.size}</td>
                          <td className="p-2 text-right">{file.type}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
              </CardContent>
            </Card>
            </div>
          </TabsContent>

          {/* Communications Tab */}
          <TabsContent value="communications">
            <div dir="rtl">
              <Card className="border-0 shadow-sm hover:shadow-md transition-shadow duration-300 bg-white/80 backdrop-blur-sm mb-8">
                <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50 border-b border-blue-100">
                  <CardTitle className="text-lg text-gray-900 flex items-center font-cairo">التواصل</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                  <table className="w-full text-right font-cairo border-separate border-spacing-y-2" dir="rtl">
                    <thead>
                      <tr className="text-gray-700 bg-gray-50">
                        <th className="p-2 text-right">النوع</th>
                        <th className="p-2 text-right">العنوان</th>
                        <th className="p-2 text-right">التاريخ</th>
                        <th className="p-2 text-right">الملخص</th>
                      </tr>
                    </thead>
                    <tbody>
                      {communications.map((c, i) => (
                        <tr key={i} className="bg-white shadow-sm">
                          <td className="p-2 font-medium text-right">
                            {c.type === "اجتماع" && <Eye className="inline h-5 w-5 mr-1 text-blue-600" />}
                            {c.type === "مكالمة" && <Phone className="inline h-5 w-5 mr-1 text-green-600" />}
                            {c.type}
                          </td>
                          <td className="p-2 text-right">{c.title}</td>
                          <td className="p-2 text-right">
                            <Badge variant="secondary">{c.date}</Badge>
                          </td>
                          <td className="p-2 text-right">{c.summary}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <div className="flex justify-end mt-4">
                    <Button className="bg-sharjah-orange hover:bg-orange-600 shadow-sm hover:shadow-md transition-all duration-300 font-cairo">
                      <PlusCircle className="h-4 w-4 mr-2" /> إضافة تواصل جديد
                    </Button>
                </div>
              </CardContent>
            </Card>
            </div>
          </TabsContent>

          {/* Reports Tab */}
          <TabsContent value="reports">
            <div dir="rtl">
              <Card className="border-0 shadow-sm hover:shadow-md transition-shadow duration-300 bg-white/80 backdrop-blur-sm mb-8">
                <CardHeader className="bg-gradient-to-r from-purple-50 to-pink-50 border-b border-purple-100">
                  <CardTitle className="text-lg text-gray-900 flex items-center font-cairo">التقارير</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                  <table className="w-full text-right font-cairo border-separate border-spacing-y-2" dir="rtl">
                    <thead>
                      <tr className="text-gray-700 bg-gray-50">
                        <th className="p-2 text-right">النوع</th>
                        <th className="p-2 text-right">التاريخ</th>
                        <th className="p-2 text-right">الحالة</th>
                      </tr>
                    </thead>
                    <tbody>
                      {reports.map((r, i) => (
                        <tr key={i} className="bg-white shadow-sm">
                          <td className="p-2 font-medium text-right">
                            {r.type === "تقرير أسبوعي" && <FileText className="inline h-5 w-5 mr-1 text-purple-600" />}
                            {r.type}
                          </td>
                          <td className="p-2 text-right">{r.date}</td>
                          <td className="p-2 text-right">
                            {r.status === "مكتمل" && <span className="inline-flex items-center gap-1 bg-green-100 text-green-700 px-2 py-1 rounded-full"><CheckCircle className="inline h-4 w-4" /> مكتمل</span>}
                            {r.status === "مكتمل" && <span className="inline-flex items-center gap-1 bg-blue-100 text-blue-700 px-2 py-1 rounded-full"><Eye className="inline h-4 w-4" /> عرض</span>}
                            {r.status === "مكتمل" && <span className="inline-flex items-center gap-1 bg-red-100 text-red-700 px-2 py-1 rounded-full"><Download className="inline h-4 w-4" /> تنزيل</span>}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
              </CardContent>
            </Card>
            </div>
          </TabsContent>

          {/* Tasks Tab */}
          <TabsContent value="tasks">
            <div dir="rtl" className="space-y-6">
              <DragDropContext onDragEnd={onDragEnd}>
                <Accordion type="single" defaultValue={phases[0]?.id.toString()} className="space-y-4" collapsible>
                  {phases.map((phase) => (
                    <AccordionItem value={phase.id.toString()} key={phase.id} className="bg-white/80 backdrop-blur-sm rounded-xl shadow-sm border border-gray-100">
                      <AccordionTrigger className="font-bold text-xl font-cairo text-primary-700 px-6 py-4">{phase.name}</AccordionTrigger>
                      <AccordionContent className="px-6 pb-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                          {statusGroups.map((group) => (
                            <Droppable droppableId={`${phase.id}-${group.key}`} key={group.key} direction="vertical">
                              {(provided, snapshot) => (
                                <div
                                  ref={provided.innerRef}
                                  {...provided.droppableProps}
                                  className={`rounded-xl shadow-sm p-4 ${group.color} min-h-[200px] transition-all duration-200
                                    ${snapshot.isDraggingOver ? 'ring-4 ring-primary-400 bg-primary-50/80' : ''}`}
                                >
                                  <div className="font-bold text-lg mb-3 font-cairo">{group.title}</div>
                                  <ul className="space-y-3">
                                    {tasksState.filter((t) => t.phaseId === phase.id && t.status === group.key).length === 0 && (
                                      <li className="text-gray-400 text-sm font-cairo">لا توجد مهام</li>
                                    )}
                                    {tasksState.filter((t) => t.phaseId === phase.id && t.status === group.key)
                                      .sort((a, b) => new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime())
                                      .map((task, idx) => (
                                        <Draggable draggableId={task.id.toString()} index={idx} key={task.id}>
                                          {(provided, snapshot) => (
                                            <li
                                              ref={provided.innerRef}
                                              {...provided.draggableProps}
                                              {...provided.dragHandleProps}
                                              className={`bg-white rounded-lg p-3 shadow flex flex-col gap-1 border border-gray-100 transition-all duration-200 relative
                                                ${snapshot.isDragging ? 'ring-4 ring-primary-400 scale-105 shadow-2xl z-20' : ''}`}
                                              aria-roledescription="قائمة المهام"
                                              aria-label={`مهمة: ${task.title}`}
                                            >
                                              <div className="flex items-center justify-between">
                                                <span className="font-cairo font-semibold text-gray-900">{task.title}</span>
                                                <span className="text-xs text-gray-500 font-cairo">{task.dueDate}</span>
                                              </div>
                                              <div className="flex items-center justify-between text-xs text-gray-600 font-cairo">
                                                <span>المسؤول: {task.assignee}</span>
                                                <span className="rounded px-2 py-0.5 bg-gray-50 border text-gray-500">{task.status}</span>
                                              </div>
                                              <span
                                                {...provided.dragHandleProps}
                                                className="absolute left-2 top-2 cursor-grab text-gray-400 hover:text-primary-500"
                                                aria-label="اسحب لتحريك المهمة"
                                                tabIndex={0}
                                                role="button"
                                              >
                                                <GripVertical className="h-4 w-4" />
                                              </span>
                                            </li>
                                          )}
                                        </Draggable>
                                      ))}
                                    {provided.placeholder}
                                  </ul>
                                </div>
                              )}
                            </Droppable>
                          ))}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </DragDropContext>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </AppLayout>
  );
}
