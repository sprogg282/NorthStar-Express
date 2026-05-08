import Link from "next/link";

export function Footer() {
  return (
    <footer className="py-12 border-t border-border bg-[#0a1824]">
      <div className="container mx-auto px-8 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-6 md:mb-0">
          <p className="text-[11px] font-bold tracking-widest text-muted-foreground uppercase">
            NorthStar Express Group &copy; 2024
          </p>
        </div>
        <div className="flex gap-10 text-[11px] font-bold uppercase tracking-widest">
          <a
            href="https://discord.gg/2GNHKbJeDM"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            Discord
          </a>
          <Link
            href="#tos"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            Terms of Service
          </Link>
          <a
            href="https://truckersmp.com/vtc/86341"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            TruckersMP
          </a>
        </div>
      </div>
    </footer>
  );
}
