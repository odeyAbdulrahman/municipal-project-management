"use client"

import { AppLayout } from "@/components/layout/app-layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle, AlertTriangle, Info } from "lucide-react"

export default function TestSidebar() {
  return (
    <AppLayout
      title="اختبار الشريط الجانبي"
      description="صفحة اختبار للتحقق من عمل الشريط الجانبي"
    >
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2 space-x-reverse">
              <CheckCircle className="h-5 w-5 text-green-500" />
              <span>اختبار الشريط الجانبي</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-4">
              إذا كنت ترى هذه الصفحة، فهذا يعني أن الشريط الجانبي يعمل بشكل صحيح.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 space-x-reverse">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span className="text-sm">تم تحميل مكونات الشريط الجانبي</span>
              </div>
              <div className="flex items-center space-x-2 space-x-reverse">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span className="text-sm">تم تحميل مكونات القائمة المنسدلة</span>
              </div>
              <div className="flex items-center space-x-2 space-x-reverse">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span className="text-sm">تم تحميل مكونات التخطيط</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-sm">الوظائف المتاحة</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li>• التنقل بين الصفحات</li>
                <li>• طي وفتح الشريط الجانبي</li>
                <li>• عرض الإحصائيات</li>
                <li>• إدارة الملف الشخصي</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-sm">التصميم المتجاوب</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li>• شاشة سطح المكتب</li>
                <li>• شاشة الجهاز اللوحي</li>
                <li>• شاشة الهاتف المحمول</li>
                <li>• دعم RTL</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-sm">الميزات المتقدمة</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li>• تأثيرات زجاجية</li>
                <li>• تدرجات لونية</li>
                <li>• رسوم متحركة سلسة</li>
                <li>• إمكانية الوصول</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2 space-x-reverse">
              <Info className="h-5 w-5 text-blue-500" />
              <span>معلومات إضافية</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">
              تم تطوير الشريط الجانبي باستخدام React و TypeScript مع دعم كامل للغة العربية
              وتصميم متجاوب. يستخدم مكونات Radix UI للقوائم المنسدلة و Tailwind CSS للتصميم.
            </p>
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  )
} 