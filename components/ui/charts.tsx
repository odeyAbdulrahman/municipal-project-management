"use client"

import React from "react"
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts"

// Sample data for charts
export const projectProgressData = [
  { month: "يناير", completed: 12, active: 18, delayed: 3 },
  { month: "فبراير", completed: 15, active: 22, delayed: 2 },
  { month: "مارس", completed: 18, active: 25, delayed: 4 },
  { month: "أبريل", completed: 22, active: 28, delayed: 3 },
  { month: "مايو", completed: 25, active: 30, delayed: 2 },
  { month: "يونيو", completed: 28, active: 32, delayed: 1 },
]

export const budgetData = [
  { month: "يناير", planned: 2500000, actual: 2300000 },
  { month: "فبراير", planned: 2800000, actual: 2650000 },
  { month: "مارس", planned: 3200000, actual: 3100000 },
  { month: "أبريل", planned: 3500000, actual: 3400000 },
  { month: "مايو", planned: 3800000, actual: 3750000 },
  { month: "يونيو", planned: 4200000, actual: 4100000 },
]

export const projectTypeData = [
  { name: "بنية تحتية", value: 35, color: "#0f766e" },
  { name: "تطوير وتحسين", value: 28, color: "#059669" },
  { name: "خدمات عامة", value: 22, color: "#0ea5e9" },
  { name: "صيانة", value: 15, color: "#f59e0b" },
]

export const municipalityPerformanceData = [
  { name: "بلدية الشارقة", projects: 45, completion: 85 },
  { name: "بلدية خورفكان", projects: 18, completion: 78 },
  { name: "بلدية كلباء", projects: 22, completion: 82 },
  { name: "بلدية دبا الحصن", projects: 16, completion: 75 },
  { name: "بلدية الذيد", projects: 12, completion: 70 },
]

interface ChartCardProps {
  title: string
  description?: string
  children: React.ReactNode
  className?: string
}

export function ChartCard({ title, description, children, className }: ChartCardProps) {
  return (
    <div dir="rtl" className={`relative bg-white/90 backdrop-blur border-0 shadow-sm hover:shadow-md transition-shadow duration-300 rounded-4xl p-6 ${className}`}>
      {/* Colored accent bar at the top, matching card radius */}
      <div className="absolute top-0 right-0 left-0 h-1 bg-gradient-to-l from-primary-500 via-accent-blue to-primary-400 rounded-t-3xl rounded-b-none" />
      <div className="mb-4 pt-2">
        <h3 className="text-lg font-semibold text-gray-900 font-cairo">{title}</h3>
        {description && <p className="text-sm text-gray-600 font-cairo">{description}</p>}
      </div>
      <div className="h-64">
        {children}
      </div>
    </div>
  )
}

export function ProjectProgressChart() {
  return (
    <ChartCard 
      title="تقدم المشاريع الشهري" 
      description="مقارنة المشاريع المكتملة والنشطة والمتأخرة"
    >
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={projectProgressData}>
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
          <XAxis 
            dataKey="month" 
            tick={{ fontSize: 12, fill: '#6b7280' }}
            axisLine={{ stroke: '#e5e7eb' }}
          />
          <YAxis 
            tick={{ fontSize: 12, fill: '#6b7280' }}
            axisLine={{ stroke: '#e5e7eb' }}
          />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: 'white', 
              border: '1px solid #e5e7eb',
              borderRadius: '8px',
              fontFamily: 'Cairo, sans-serif'
            }}
          />
          <Legend />
          <Bar dataKey="completed" fill="#059669" name="مكتملة" radius={[4, 4, 0, 0]} isAnimationActive={true} />
          <Bar dataKey="active" fill="#0ea5e9" name="نشطة" radius={[4, 4, 0, 0]} isAnimationActive={true} />
          <Bar dataKey="delayed" fill="#ef4444" name="متأخرة" radius={[4, 4, 0, 0]} isAnimationActive={true} />
        </BarChart>
      </ResponsiveContainer>
    </ChartCard>
  )
}

export function BudgetComparisonChart() {
  return (
    <ChartCard 
      title="مقارنة الميزانية" 
      description="الميزانية المخططة مقابل الفعلية"
    >
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={budgetData}>
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
          <XAxis 
            dataKey="month" 
            tick={{ fontSize: 12, fill: '#6b7280' }}
            axisLine={{ stroke: '#e5e7eb' }}
          />
          <YAxis 
            tick={{ fontSize: 12, fill: '#6b7280' }}
            axisLine={{ stroke: '#e5e7eb' }}
            tickFormatter={(value) => `${(value / 1000000).toFixed(1)}M`}
          />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: 'white', 
              border: '1px solid #e5e7eb',
              borderRadius: '8px',
              fontFamily: 'Cairo, sans-serif'
            }}
            formatter={(value: number) => [`${(value / 1000000).toFixed(1)} مليون ريال`, '']}
          />
          <Legend />
          <Area 
            type="monotone" 
            dataKey="planned" 
            stackId="1" 
            stroke="#0f766e" 
            fill="#0f766e" 
            fillOpacity={0.3}
            name="مخططة"
            isAnimationActive={true}
          />
          <Area 
            type="monotone" 
            dataKey="actual" 
            stackId="1" 
            stroke="#059669" 
            fill="#059669" 
            fillOpacity={0.3}
            name="فعليه"
            isAnimationActive={true}
          />
        </AreaChart>
      </ResponsiveContainer>
    </ChartCard>
  )
}

export function ProjectTypePieChart() {
  return (
    <ChartCard 
      title="توزيع أنواع المشاريع" 
      description="نسبة كل نوع من المشاريع"
    >
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={projectTypeData}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {projectTypeData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip 
            contentStyle={{ 
              backgroundColor: 'white', 
              border: '1px solid #e5e7eb',
              borderRadius: '8px',
              fontFamily: 'Cairo, sans-serif'
            }}
            formatter={(value: number) => [`${value}%`, 'النسبة']}
          />
        </PieChart>
      </ResponsiveContainer>
    </ChartCard>
  )
}

export function MunicipalityPerformanceChart() {
  return (
    <ChartCard 
      title="أداء البلديات" 
      description="عدد المشاريع ونسبة الإنجاز"
    >
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={municipalityPerformanceData} layout="horizontal">
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
          <XAxis 
            type="number"
            tick={{ fontSize: 12, fill: '#6b7280' }}
            axisLine={{ stroke: '#e5e7eb' }}
          />
          <YAxis 
            dataKey="name" 
            type="category"
            tick={{ fontSize: 12, fill: '#6b7280' }}
            axisLine={{ stroke: '#e5e7eb' }}
            width={80}
          />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: 'white', 
              border: '1px solid #e5e7eb',
              borderRadius: '8px',
              fontFamily: 'Cairo, sans-serif'
            }}
          />
          <Legend />
          <Bar dataKey="projects" fill="#0ea5e9" name="المشاريع" radius={[0, 4, 4, 0]} isAnimationActive={true} />
          <Bar dataKey="completion" fill="#059669" name="نسبة الإنجاز %" radius={[0, 4, 4, 0]} isAnimationActive={true} />
        </BarChart>
      </ResponsiveContainer>
    </ChartCard>
  )
}

export function ProjectTrendChart() {
  return (
    <ChartCard 
      title="اتجاه المشاريع" 
      description="تطور عدد المشاريع عبر الأشهر"
    >
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={projectProgressData}>
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
          <XAxis 
            dataKey="month" 
            tick={{ fontSize: 12, fill: '#6b7280' }}
            axisLine={{ stroke: '#e5e7eb' }}
          />
          <YAxis 
            tick={{ fontSize: 12, fill: '#6b7280' }}
            axisLine={{ stroke: '#e5e7eb' }}
          />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: 'white', 
              border: '1px solid #e5e7eb',
              borderRadius: '8px',
              fontFamily: 'Cairo, sans-serif'
            }}
          />
          <Legend />
          <Line 
            type="monotone" 
            dataKey="completed" 
            stroke="#059669" 
            strokeWidth={3}
            name="مكتملة"
            dot={{ fill: '#059669', strokeWidth: 2, r: 4 }}
            isAnimationActive={true}
          />
          <Line 
            type="monotone" 
            dataKey="active" 
            stroke="#0ea5e9" 
            strokeWidth={3}
            name="نشطة"
            dot={{ fill: '#0ea5e9', strokeWidth: 2, r: 4 }}
            isAnimationActive={true}
          />
        </LineChart>
      </ResponsiveContainer>
    </ChartCard>
  )
} 