"use client"

import { useState } from "react"
import { AppLayout } from "@/components/layout/app-layout"
import { Card, CardContent, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "@/components/ui/select"
import { Search, Plus, Download } from "lucide-react"

export default function ReportsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [type, setType] = useState("all")
  const [status, setStatus] = useState("all")
  const [date, setDate] = useState("all")

  return (
    <AppLayout
      title="التقارير"
      description="إدارة وعرض تقارير المشاريع والبلديات. يمكنك تصفية، تصدير، أو إضافة تقارير جديدة."
    >
      <div dir="rtl" className="w-full px-4 sm:px-6 lg:px-8 py-8 text-right">
        <Card className="mb-8 border-0 shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden bg-white/80 backdrop-blur-sm">
          <div className="h-1 bg-gradient-to-r from-primary-500 via-accent-blue to-primary-400" />
          <CardContent className="p-6">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:gap-4">
              <Button className="bg-primary-500 hover:bg-primary-600 text-white font-cairo whitespace-nowrap order-1 lg:order-none">
                <Plus className="h-4 w-4 ml-2" />
                إضافة تقرير جديد
              </Button>
              <div className="flex-1 order-2 lg:order-none">
                <div className="relative">
                  <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input
                    placeholder="البحث في التقارير..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pr-10"
                  />
                </div>
              </div>
              <div className="flex gap-2 order-3 lg:order-none">
                <Select value={type} onValueChange={setType}>
                  <SelectTrigger className="w-40 bg-white/50 backdrop-blur-sm border-gray-200 font-cairo">
                    <SelectValue placeholder="جميع الأنواع" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">جميع الأنواع</SelectItem>
                    <SelectItem value="project">مشاريع</SelectItem>
                    <SelectItem value="municipality">بلديات</SelectItem>
                  </SelectContent>
                </Select>
                <Select value={status} onValueChange={setStatus}>
                  <SelectTrigger className="w-40 bg-white/50 backdrop-blur-sm border-gray-200 font-cairo">
                    <SelectValue placeholder="جميع الحالات" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">جميع الحالات</SelectItem>
                    <SelectItem value="completed">مكتمل</SelectItem>
                    <SelectItem value="pending">قيد الانتظار</SelectItem>
                    <SelectItem value="inprogress">قيد التنفيذ</SelectItem>
                  </SelectContent>
                </Select>
                <Select value={date} onValueChange={setDate}>
                  <SelectTrigger className="w-40 bg-white/50 backdrop-blur-sm border-gray-200 font-cairo">
                    <SelectValue placeholder="كل التواريخ" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">كل التواريخ</SelectItem>
                    <SelectItem value="today">اليوم</SelectItem>
                    <SelectItem value="week">هذا الأسبوع</SelectItem>
                    <SelectItem value="month">هذا الشهر</SelectItem>
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
        {/* Placeholder for reports table/list */}
        <Card className="border-0 shadow-sm bg-white/80 backdrop-blur-sm">
          <CardTitle className="p-6 text-xl font-bold text-gray-900 font-cairo">قائمة التقارير</CardTitle>
          <CardContent className="p-6 text-gray-500 font-cairo text-center">
            <div className="py-12">لا توجد تقارير متاحة حالياً.</div>
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  )
} 