"use client";

interface ChartCardProps {
  title: string;
  description: string;
  data: { date: string; views: number; visitors: number }[];
}

export function ChartCard({ title, description, data }: ChartCardProps) {
  const maxViews = Math.max(...data.map((d) => d.views));

  return (
    <div className="card p-6 rounded-xl h-full">
      <div className="mb-6">
        <h3 className="text-lg font-bold">{title}</h3>
        <p className="text-xs text-muted-foreground">{description}</p>
      </div>

      {/* Legend */}
      <div className="flex gap-6 mb-6">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-primary" />
          <span className="text-xs text-muted-foreground">Page Views</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-accent" />
          <span className="text-xs text-muted-foreground">Visitors</span>
        </div>
      </div>

      {/* Chart */}
      <div className="relative h-48">
        <div className="absolute inset-0 flex items-end justify-between gap-2">
          {data.map((item, index) => (
            <div
              key={index}
              className="flex-1 flex flex-col items-center gap-1"
            >
              <div className="w-full flex gap-1 items-end justify-center h-40">
                {/* Views Bar */}
                <div
                  className="w-4 bg-primary rounded-t transition-all duration-500 hover:opacity-80"
                  style={{
                    height: `${(item.views / maxViews) * 100}%`,
                  }}
                  title={`${item.views} views`}
                />
                {/* Visitors Bar */}
                <div
                  className="w-4 bg-accent rounded-t transition-all duration-500 hover:opacity-80"
                  style={{
                    height: `${(item.visitors / maxViews) * 100}%`,
                  }}
                  title={`${item.visitors} visitors`}
                />
              </div>
              <span className="text-[10px] text-muted-foreground">
                {item.date.split(" ")[1]}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Totals */}
      <div className="mt-6 pt-4 border-t border-border flex justify-between">
        <div>
          <p className="text-xs text-muted-foreground">Total Views</p>
          <p className="text-lg font-bold text-primary">
            {data.reduce((sum, d) => sum + d.views, 0).toLocaleString()}
          </p>
        </div>
        <div className="text-right">
          <p className="text-xs text-muted-foreground">Total Visitors</p>
          <p className="text-lg font-bold text-accent">
            {data.reduce((sum, d) => sum + d.visitors, 0).toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  );
}
