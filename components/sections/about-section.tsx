import Image from "next/image";

export function AboutSection() {
  return (
    <section id="about" className="container mx-auto px-8 py-24">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 flex items-center">
          <span className="w-12 h-1 bg-primary mr-6" />
          Corporate Mission
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <div className="space-y-6">
            <p className="text-muted-foreground leading-loose">
              Established in 2024, NorthStar Express was founded on the principle
              of providing a structured, realistic, and welcoming environment for
              virtual trucking enthusiasts.
            </p>
            <p className="text-muted-foreground leading-loose">
              Our &quot;Driver-First&quot; approach ensures that while we maintain high
              corporate standards, we never lose sight of the people who make our
              fleet successful.
            </p>
            <div className="pt-6 h-64 img-container">
              <Image
                src="/Images/bales.png"
                alt="Operational Insight"
                width={400}
                height={256}
                className="w-full h-full object-cover"
              />
              <div className="img-label">Operational Insight</div>
            </div>
          </div>
          <div className="space-y-4">
            <div className="card p-6 rounded-lg">
              <h4 className="font-bold mb-2">Professional Standards</h4>
              <p className="text-sm text-muted-foreground">
                We maintain a strict code of conduct and simulation rules to
                ensure the highest quality environment for all participants.
              </p>
            </div>
            <div className="card p-6 rounded-lg">
              <h4 className="font-bold mb-2">Global Operations</h4>
              <p className="text-sm text-muted-foreground">
                From the highways of Europe to the interstates of America, our
                fleet operations span across multiple simulation platforms.
              </p>
            </div>
            <div className="card p-6 rounded-lg border-l-4 border-l-primary">
              <h4 className="font-bold mb-2">Driver Growth</h4>
              <p className="text-sm text-muted-foreground">
                We offer internal promotion tracks for those interested in
                management, training, or Express dispatch.
              </p>
            </div>
            <div className="card p-6 rounded-lg border-l-4 border-l-primary">
              <h4 className="font-bold mb-2">Staff Support</h4>
              <p className="text-sm text-muted-foreground">
                We offer 24/7 support. This means if there any issue to report a
                driver or player or needing to request LOA.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
