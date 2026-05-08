"use client";

import { Monitor, Smartphone, Tablet } from "lucide-react";

interface DeviceChartProps {
  data: { device: string; value: number; color: string }[];
}

const deviceIcons: Record<string, typeof Monitor> = {
  Desktop: Monitor,
  Mobile: Smartphone,
  Tablet: Tablet,
};

export function DeviceChart({ data }: DeviceChartProps) {
  const total = data.reduce((sum, d) => sum + d.value, 0);

  return (
    <div className="card p-6 rounded-xl">
      <div className="mb-6">
        <h3 className="text-lg font-bold">Device Breakdown</h3>
        <p className="text-xs text-muted-foreground">
          Visitors by device type
        </p>
      </div>

      {/* Donut Chart Visual */}
      <div className="relative w-40 h-40 mx-auto mb-6">
        <svg viewBox="0 0 100 100" className="transform -rotate-90">
          {data.reduce(
            (acc, item, index) => {
              const percentage = (item.value / total) * 100;
              const dashArray = `${percentage} ${100 - percentage}`;
              const offset = acc.offset;

              acc.elements.push(
                <circle
                  key={index}
                  cx="50"
                  cy="50"
                  r="40"
                  fill="none"
                  stroke={item.color}
                  strokeWidth="20"
                  strokeDasharray={dashArray}
                  strokeDashoffset={-offset}
                  className="transition-all duration-500"
                />
              );

              acc.offset += percentage;
              return acc;
            },
            { elements: [] as JSX.Element[], offset: 0 }
          ).elements}
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <p className="text-2xl font-bold">{total}%</p>
            <p className="text-[10px] text-muted-foreground">Total</p>
          </div>
        </div>
      </div>

      {/* Legend */}
      <div className="space-y-3">
        {data.map((item, index) => {
          const Icon = deviceIcons[item.device] || Monitor;
          return (
            <div key={index} className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: item.color }}
                />
                <Icon className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm">{item.device}</span>
              </div>
              <span className="text-sm font-bold">{item.value}%</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
