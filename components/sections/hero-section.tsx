import Image from "next/image";

export function HeroSection() {
  return (
    <section id="home" className="container mx-auto px-8">
      <div className="flex flex-col lg:flex-row items-center gap-16 py-12">
        <div className="flex-1 space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold tracking-widest uppercase">
            <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
            <span>Welcome to the new Future of Express</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.1] text-balance">
            Reliable Service. <br />
            <span className="text-primary">Proven Results.</span>
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed max-w-xl">
            At NorthStar Express, we value every driver. Whether you are a veteran
            of the road or just starting your journey, our professional framework
            is built to support your growth.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <a
              href="#apply"
              className="btn-corporate px-10 py-4 rounded uppercase text-sm"
            >
              Apply for Recruitment
            </a>
            <a
              href="#about"
              className="border border-current px-10 py-4 rounded uppercase text-sm font-bold hover:bg-white/5 transition-all"
            >
              Learn More
            </a>
          </div>
        </div>
        <div className="flex-1 w-full aspect-video lg:aspect-square max-h-[500px]">
          <div className="img-container bg-[#0a1824]">
            <Image
              src="/Images/team.png"
              alt="Fleet Hero"
              width={500}
              height={500}
              className="w-full h-full object-cover"
              priority
            />
            <div className="img-label">Fleet Showcase 01</div>
          </div>
        </div>
      </div>

      {/* Welcome Cards */}
      <div className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="card p-8 rounded-2xl space-y-4">
          <div className="h-40 img-container mb-6">
            <Image
              src="/Images/convoys.png"
              alt="Community"
              width={400}
              height={160}
              className="w-full h-full object-cover"
            />
            <div className="img-label">Community Events</div>
          </div>
          <h3 className="font-bold text-xl">A Vibrant Community</h3>
          <p className="text-sm text-muted-foreground">
            We host weekly convoys and training sessions to ensure all members
            feel connected and supported.
          </p>
        </div>
        <div className="card p-8 rounded-2xl space-y-4">
          <div className="h-40 img-container mb-6">
            <Image
              src="/Images/Trucking (2).png"
              alt="Livery"
              width={400}
              height={160}
              className="w-full h-full object-cover"
            />
            <div className="img-label">Custom Liveries</div>
          </div>
          <h3 className="font-bold text-xl">High Performance</h3>
          <p className="text-sm text-muted-foreground">
            Access our exclusive fleet skins and performance-tuned Express
            software to track your miles.
          </p>
        </div>
        <div className="card p-8 rounded-2xl space-y-4">
          <div className="h-40 img-container mb-6">
            <Image
              src="/Images/NSL_CLEAR_NO_TEXT.png"
              alt="Support"
              width={400}
              height={160}
              className="w-full h-full object-cover"
            />
            <div className="img-label">Driver Support</div>
          </div>
          <h3 className="font-bold text-xl">Expert Guidance</h3>
          <p className="text-sm text-muted-foreground">
            Our dispatch and training staff are available 24/7 to assist with any
            operational needs.
          </p>
        </div>
      </div>
    </section>
  );
}
