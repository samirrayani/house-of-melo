import Image from "next/image";
import Link from "next/link";

const sections = [
  { label: "Baltimore", href: "/baltimore" },
  { label: "The Rise", href: "/the-rise" },
  { label: "Greatness", href: "/greatness" },
  { label: "Beyond the Court", href: "/beyond" },
  { label: "Community", href: "/community" },
  { label: "The Memoir", href: "/the-memoir" },
  { label: "The Exhibition", href: "/exhibition" },
];

export default function Footer() {
  return (
    <footer className="bg-bg border-t border-border">
      <div className="max-w-[1400px] mx-auto px-6 py-16 md:py-24">
        <div className="grid md:grid-cols-3 gap-12 md:gap-16">
          {/* Brand */}
          <div className="space-y-6">
            <Image
              src="/logo.png"
              alt="House of Melo"
              width={140}
              height={56}
              className="h-14 w-auto opacity-80"
            />
            <p className="text-text-muted text-sm leading-relaxed max-w-xs">
              The definitive digital archive honoring 2025 NBA Hall of Famer
              Carmelo Anthony. From Baltimore to the Hall of Fame.
            </p>
          </div>

          {/* Archive Sections */}
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-primary mb-6">
              Archive
            </p>
            <nav className="flex flex-col gap-3">
              {sections.map((section) => (
                <Link
                  key={section.href}
                  href={section.href}
                  className="text-text-muted hover:text-text transition-colors text-sm"
                >
                  {section.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-primary mb-6">
              Contact
            </p>
            <div className="space-y-3 text-sm text-text-muted">
              <p>Enoch Pratt Free Library</p>
              <p>Baltimore, MD</p>
              <p className="pt-2">
                Press inquiries:{" "}
                <a
                  href="mailto:Katie@PressOnComms.Biz"
                  className="text-text hover:text-primary transition-colors"
                >
                  Katie@PressOnComms.Biz
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-text-muted/60">
            Website by{" "}
            <a
              href="https://treehaus.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-text transition-colors"
            >
              Treehaus
            </a>
          </p>
          <p className="text-xs text-text-muted/40">
            Where Tomorrows Are Promised
          </p>
        </div>
      </div>
    </footer>
  );
}
