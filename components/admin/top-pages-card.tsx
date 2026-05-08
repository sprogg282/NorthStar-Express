import { FileText } from "lucide-react";

interface TopPagesCardProps {
  pages: { path: string; views: number; percentage: number }[];
}

export function TopPagesCard({ pages }: TopPagesCardProps) {
  return (
    <div className="card p-6 rounded-xl">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-bold">Top Pages</h3>
          <p className="text-xs text-muted-foreground">
            Most visited pages on your site
          </p>
        </div>
        <FileText className="w-5 h-5 text-muted-foreground" />
      </div>

      <div className="space-y-4">
        {pages.map((page, index) => (
          <div key={index} className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="text-xs font-bold text-muted-foreground w-4">
                  {index + 1}
                </span>
                <span className="text-sm font-medium truncate max-w-[200px]">
                  {page.path}
                </span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-sm text-muted-foreground">
                  {page.views.toLocaleString()} views
                </span>
                <span className="text-xs font-bold text-primary">
                  {page.percentage}%
                </span>
              </div>
            </div>
            <div className="h-1.5 bg-muted rounded-full overflow-hidden">
              <div
                className="h-full bg-primary rounded-full transition-all duration-500"
                style={{ width: `${page.percentage}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
