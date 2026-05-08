"use client";

import { useState } from "react";
import Link from "next/link";
import {
  BarChart3,
  Users,
  Eye,
  TrendingUp,
  Globe,
  Clock,
  ArrowLeft,
  Activity,
  MousePointerClick,
  Smartphone,
  Monitor,
  Tablet,
} from "lucide-react";
import { StatsCard } from "./stats-card";
import { ChartCard } from "./chart-card";
import { DeviceChart } from "./device-chart";
import { TopPagesCard } from "./top-pages-card";
import { GeoCard } from "./geo-card";

// Simulated analytics data - in production, this would come from Vercel Analytics API
const mockAnalyticsData = {
  totalPageViews: 12847,
  uniqueVisitors: 4231,
  avgSessionDuration: "3m 24s",
  bounceRate: "42.3%",
  pageViewsTrend: 12.5,
  visitorsTrend: 8.2,
  sessionTrend: -2.1,
  bounceTrend: -5.4,
  dailyViews: [
    { date: "May 1", views: 423, visitors: 142 },
    { date: "May 2", views: 512, visitors: 178 },
    { date: "May 3", views: 489, visitors: 156 },
    { date: "May 4", views: 634, visitors: 212 },
    { date: "May 5", views: 587, visitors: 195 },
    { date: "May 6", views: 721, visitors: 248 },
    { date: "May 7", views: 698, visitors: 231 },
  ],
  topPages: [
    { path: "/", views: 5234, percentage: 40.7 },
    { path: "/#apply", views: 2847, percentage: 22.2 },
    { path: "/#about", views: 1923, percentage: 15.0 },
    { path: "/#departments", views: 1456, percentage: 11.3 },
    { path: "/#partnership", views: 1387, percentage: 10.8 },
  ],
  deviceBreakdown: [
    { device: "Desktop", value: 58, color: "#74B6fB" },
    { device: "Mobile", value: 35, color: "#B7E8FB" },
    { device: "Tablet", value: 7, color: "#0f2233" },
  ],
  topCountries: [
    { country: "United Kingdom", visitors: 1245, flag: "GB" },
    { country: "Germany", visitors: 892, flag: "DE" },
    { country: "United States", visitors: 756, flag: "US" },
    { country: "Netherlands", visitors: 534, flag: "NL" },
    { country: "France", visitors: 423, flag: "FR" },
  ],
};

export function AdminDashboard() {
  const [timeRange, setTimeRange] = useState("7d");

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="glass border-b sticky top-0 z-50">
        <div className="container mx-auto px-8 py-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex items-center gap-4">
              <Link
                href="/"
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span className="text-sm font-medium">Back to Site</span>
              </Link>
              <div className="h-6 w-px bg-border" />
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 bg-primary flex items-center justify-center rounded">
                  <BarChart3 className="w-5 h-5 text-[#0f2233]" />
                </div>
                <div>
                  <h1 className="text-xl font-bold">Analytics Dashboard</h1>
                  <p className="text-xs text-muted-foreground">
                    NorthStar Express
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <select
                value={timeRange}
                onChange={(e) => setTimeRange(e.target.value)}
                className="input-field py-2 px-4 text-sm"
              >
                <option value="24h">Last 24 hours</option>
                <option value="7d">Last 7 days</option>
                <option value="30d">Last 30 days</option>
                <option value="90d">Last 90 days</option>
              </select>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <Activity className="w-4 h-4 text-emerald-500" />
                <span>Live</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-8 py-8">
        {/* Key Metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatsCard
            title="Total Page Views"
            value={mockAnalyticsData.totalPageViews.toLocaleString()}
            icon={Eye}
            trend={mockAnalyticsData.pageViewsTrend}
            description="vs. previous period"
          />
          <StatsCard
            title="Unique Visitors"
            value={mockAnalyticsData.uniqueVisitors.toLocaleString()}
            icon={Users}
            trend={mockAnalyticsData.visitorsTrend}
            description="vs. previous period"
          />
          <StatsCard
            title="Avg. Session Duration"
            value={mockAnalyticsData.avgSessionDuration}
            icon={Clock}
            trend={mockAnalyticsData.sessionTrend}
            description="vs. previous period"
          />
          <StatsCard
            title="Bounce Rate"
            value={mockAnalyticsData.bounceRate}
            icon={TrendingUp}
            trend={mockAnalyticsData.bounceTrend}
            description="vs. previous period"
            invertTrend
          />
        </div>

        {/* Charts Row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <div className="lg:col-span-2">
            <ChartCard
              title="Traffic Overview"
              description="Page views and visitors over time"
              data={mockAnalyticsData.dailyViews}
            />
          </div>
          <DeviceChart data={mockAnalyticsData.deviceBreakdown} />
        </div>

        {/* Bottom Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <TopPagesCard pages={mockAnalyticsData.topPages} />
          <GeoCard countries={mockAnalyticsData.topCountries} />
        </div>

        {/* Footer Info */}
        <div className="mt-12 text-center">
          <p className="text-xs text-muted-foreground">
            Analytics powered by{" "}
            <a
              href="https://vercel.com/analytics"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Vercel Web Analytics
            </a>
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            Data is automatically collected and privacy-friendly. No cookies required.
          </p>
        </div>
      </main>
    </div>
  );
}
