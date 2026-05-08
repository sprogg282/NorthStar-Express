export function TosSection() {
  const sections = [
    {
      title: "1. Membership Acceptance",
      content:
        "By applying to NorthStar Express, you agree to abide by our internal regulations and maintain professional conduct within all TruckersMP and simulation platforms.",
    },
    {
      title: "2. Code of Conduct",
      content:
        "Drivers must operate with respect toward all other virtual trucking community members. Discrimination, harassment, or intentional disruption of simulations is grounds for immediate termination of membership.",
    },
    {
      title: "3. Media & Assets",
      content:
        "All NorthStar Express liveries, logos, and proprietary software are for official member use only. Unauthorized distribution of company assets is strictly prohibited.",
    },
    {
      title: "4. Activity Requirements",
      content:
        "To ensure a vibrant fleet, we expect members to participate in at least one official company event per month, unless prior notice is given to HR.",
    },
    {
      title: "5. LOA Requirements",
      content:
        "If you are in need of LOA or you know you are going to be inactive for so long. We ask you to create a support ticket and let one of our HR+ Know.",
    },
    {
      title: "6. Liveries Requirements",
      content:
        "All NorthStar Express drivers must use our company colours on the truck and trailer. Failure to do so could lead to a training course or derank.",
    },
  ];

  return (
    <section id="tos" className="container mx-auto px-8 py-24 max-w-4xl">
      <h2 className="text-4xl font-bold mb-8">Terms of Service</h2>
      <div className="space-y-10 text-muted-foreground">
        {sections.map((section) => (
          <div key={section.title}>
            <h3 className="text-xl font-bold text-primary mb-4">
              {section.title}
            </h3>
            <p>{section.content}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
