import { Metadata } from "next";
import { AdminDashboard } from "@/components/admin/admin-dashboard";

export const metadata: Metadata = {
  title: "Admin Dashboard | NorthStar Express",
  description: "Analytics and visitor tracking dashboard",
  robots: "noindex, nofollow",
};

export default function AdminStatsPage() {
  return <AdminDashboard />;
}
