import Image from "next/image";

const partners = [
  {
    name: "Amethyst Trucking",
    image: "/partners/amethyst.png",
    description: "Official logistical partner for long-haul heavy cargo operations.",
  },
  {
    name: "Overseas Network Express",
    image: "/partners/overseas.png",
    description: "International freight coordination and cross-border logistics partner.",
  },
  {
    name: "ELITE 24 HOUR GROUP",
    image: "/partners/elite24.png",
    description: "Premium express delivery and round-the-clock dispatch operations.",
  },
  {
    name: "Spitefire Logistics",
    image: "/partners/spitfire.png",
    description: "Specialized freight handling and innovative delivery solutions.",
  },
  {
    name: "AJ Logistics",
    image: "/partners/ajlogistics.png",
    description: "Full-service trucking and fleet management solutions.",
  },
  {
    name: "H3°T",
    image: "/partners/h3ot.png",
    description: "Innovative logistics solutions for modern supply chains.",
  },
  {
    name: "Galaxy Convoy Service",
    image: "/partners/galaxy.png",
    description: "Large-scale convoy coordination and group transportation.",
  },
  {
    name: "FluxLine Cargo",
    image: "/partners/fluxline.png",
    description: "Dynamic cargo routing and expedited freight delivery.",
  },
];

export function PartnershipSection() {
  return (
    <section id="partnership" className="container mx-auto px-8 py-24">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-4xl font-bold mb-6">Strategic Partnerships</h2>
        <p className="text-muted-foreground">
          NorthStar Express collaborates with leading VTCs to facilitate
          large-scale Express operations and global events.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {partners.map((partner) => (
          <div
            key={partner.name}
            className="partner-card card p-5 rounded-xl flex flex-col gap-4"
          >
            <div className="logo-box">
              <Image
                src={partner.image}
                alt={partner.name}
                width={400}
                height={200}
                className="partner-logo"
              />
            </div>
            <div>
              <h4 className="font-bold text-sm tracking-tight mb-1">
                {partner.name}
              </h4>
              <p className="text-[11px] text-muted-foreground leading-relaxed">
                {partner.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
