export function DepartmentsSection() {
  return (
    <section id="departments" className="container mx-auto px-8 py-24">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-4xl font-bold mb-6">Corporate Departments</h2>
        <p className="text-muted-foreground">
          Discover the hierarchy and dedicated teams that keep NorthStar Express
          running smoothly.
        </p>
      </div>

      <div className="space-y-12 max-w-5xl mx-auto">
        {/* Executive Board */}
        <div>
          <h3 className="text-xl font-bold text-primary mb-6 flex items-center uppercase tracking-widest text-[13px]">
            <span className="w-8 h-1 bg-primary mr-4" /> Executive Board
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card p-6 rounded-xl border-l-4 border-l-primary">
              <h4 className="font-bold text-lg mb-1">
                Ownership (Owner & Co-Owner)
              </h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
                The Executive team oversees all operations, manages partnerships,
                and sets the future vision for the entire NorthStar Express
                network.
              </p>
            </div>
            <div className="card p-6 rounded-xl border-l-4 border-l-accent">
              <h4 className="font-bold text-lg mb-1">Administration</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Handles high-level company logistics, financial tracking, and
                final decisions on company policy.
              </p>
            </div>
          </div>
        </div>

        {/* Management */}
        <div>
          <h3 className="text-xl font-bold text-primary mb-6 flex items-center uppercase tracking-widest text-[13px]">
            <span className="w-8 h-1 bg-primary mr-4" /> Management Team
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card p-6 rounded-xl">
              <h4 className="font-bold text-base mb-1">Human Resources</h4>
              <p className="text-[11px] text-muted-foreground leading-relaxed">
                Reviews applications, handles driver recruitment, and manages
                internal staff disputes or LOA requests.
              </p>
            </div>
            <div className="card p-6 rounded-xl">
              <h4 className="font-bold text-base mb-1">Community Manager</h4>
              <p className="text-[11px] text-muted-foreground leading-relaxed">
                Bridges the gap between the drivers and the staff, ensuring
                everyone has a voice and organizing social events.
              </p>
            </div>
            <div className="card p-6 rounded-xl">
              <h4 className="font-bold text-base mb-1">Event Management</h4>
              <p className="text-[11px] text-muted-foreground leading-relaxed">
                Plans, maps, and coordinates our weekly public and private
                convoys, ensuring smooth driving experiences.
              </p>
            </div>
          </div>
        </div>

        {/* Staff & Moderation */}
        <div>
          <h3 className="text-xl font-bold text-primary mb-6 flex items-center uppercase tracking-widest text-[13px]">
            <span className="w-8 h-1 bg-primary mr-4" /> Staff & Support
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card p-6 rounded-xl">
              <h4 className="font-bold text-base mb-1">Discord Moderation</h4>
              <p className="text-[11px] text-muted-foreground leading-relaxed">
                Keeps our Discord server safe, clean, and friendly. Enforces
                rules and assists users with basic server issues.
              </p>
            </div>
            <div className="card p-6 rounded-xl">
              <h4 className="font-bold text-base mb-1">Convoy Control (CC)</h4>
              <p className="text-[11px] text-muted-foreground leading-relaxed">
                Guides the convoy on the road, blocks intersections, and ensures
                everyone arrives safely at the destination.
              </p>
            </div>
          </div>
        </div>

        {/* The Fleet */}
        <div>
          <h3 className="text-xl font-bold text-primary mb-6 flex items-center uppercase tracking-widest text-[13px]">
            <span className="w-8 h-1 bg-primary mr-4" /> The Fleet
          </h3>
          <div className="grid grid-cols-1 gap-6">
            <div className="card p-6 rounded-xl bg-gradient-to-r from-white/5 to-transparent">
              <h4 className="font-bold text-lg mb-1">Official Drivers</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
                The backbone of NorthStar Express. Our drivers haul cargo across
                the map, representing the VTC with professionalism and pride.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
