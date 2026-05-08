import { Globe } from "lucide-react";

interface GeoCardProps {
  countries: { country: string; visitors: number; flag: string }[];
}

// Simple flag emoji mapping
const flagEmoji: Record<string, string> = {
  GB: "\u{1F1EC}\u{1F1E7}",
  DE: "\u{1F1E9}\u{1F1EA}",
  US: "\u{1F1FA}\u{1F1F8}",
  NL: "\u{1F1F3}\u{1F1F1}",
  FR: "\u{1F1EB}\u{1F1F7}",
};

export function GeoCard({ countries }: GeoCardProps) {
  const maxVisitors = Math.max(...countries.map((c) => c.visitors));

  return (
    <div className="card p-6 rounded-xl">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-bold">Top Countries</h3>
          <p className="text-xs text-muted-foreground">
            Where your visitors are from
          </p>
        </div>
        <Globe className="w-5 h-5 text-muted-foreground" />
      </div>

      <div className="space-y-4">
        {countries.map((item, index) => (
          <div key={index} className="flex items-center gap-4">
            <span className="text-lg">{flagEmoji[item.flag] || "🏳️"}</span>
            <div className="flex-1">
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm font-medium">{item.country}</span>
                <span className="text-sm text-muted-foreground">
                  {item.visitors.toLocaleString()}
                </span>
              </div>
              <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-500"
                  style={{ width: `${(item.visitors / maxVisitors) * 100}%` }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 pt-4 border-t border-border">
        <p className="text-xs text-muted-foreground text-center">
          {countries.reduce((sum, c) => sum + c.visitors, 0).toLocaleString()}{" "}
          total visitors from {countries.length} countries
        </p>
      </div>
    </div>
  );
}
