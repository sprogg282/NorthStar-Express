import { LucideIcon, TrendingUp, TrendingDown } from "lucide-react";

interface StatsCardProps {
  title: string;
  value: string;
  icon: LucideIcon;
  trend: number;
  description: string;
  invertTrend?: boolean;
}

export function StatsCard({
  title,
  value,
  icon: Icon,
  trend,
  description,
  invertTrend = false,
}: StatsCardProps) {
  const isPositive = invertTrend ? trend < 0 : trend > 0;
  const TrendIcon = trend > 0 ? TrendingUp : TrendingDown;

  return (
    <div className="card p-6 rounded-xl">
      <div className="flex items-start justify-between mb-4">
        <div className="p-3 bg-primary/10 rounded-lg">
          <Icon className="w-5 h-5 text-primary" />
        </div>
        <div
          className={`flex items-center gap-1 text-xs font-medium ${
            isPositive ? "text-emerald-500" : "text-red-500"
          }`}
        >
          <TrendIcon className="w-3 h-3" />
          <span>{Math.abs(trend)}%</span>
        </div>
      </div>
      <div className="space-y-1">
        <p className="text-2xl font-bold tracking-tight">{value}</p>
        <p className="text-xs text-muted-foreground uppercase tracking-wider font-medium">
          {title}
        </p>
        <p className="text-[10px] text-muted-foreground">{description}</p>
      </div>
    </div>
  );
}
