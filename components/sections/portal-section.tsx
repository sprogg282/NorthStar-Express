import { Clock } from "lucide-react";

export function PortalSection() {
  return (
    <section id="portal" className="container mx-auto px-8 py-24">
      <div className="max-w-md mx-auto py-12">
        <div className="card p-10 rounded-xl portal-grid border-t-4 border-t-primary shadow-2xl">
          <div className="text-center">
            <div className="inline-block p-4 bg-primary/10 rounded-full mb-6">
              <Clock className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-3xl font-bold tracking-tight">Coming soon!</h2>
            <p className="text-base text-muted-foreground mt-4 leading-relaxed font-medium">
              Our dev team is planning something big.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
