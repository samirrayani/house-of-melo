import Image from "next/image";
import Link from "next/link";
import StatBlock from "./components/StatBlock";

const sections = [
  {
    number: "01",
    title: "Baltimore",
    description: "Where tomorrows are made",
    href: "/baltimore",
  },
  {
    number: "02",
    title: "The Rise",
    description: "Syracuse to the NBA Draft",
    href: "/the-rise",
  },
  {
    number: "03",
    title: "Greatness",
    description: "Hall of Fame, Olympic Gold",
    href: "/greatness",
  },
  {
    number: "04",
    title: "Beyond the Court",
    description: "Entrepreneur, creator, analyst",
    href: "/beyond",
  },
  {
    number: "05",
    title: "Community",
    description: "Social change, philanthropy",
    href: "/community",
  },
  {
    number: "06",
    title: "The Memoir",
    description: "Where Tomorrows Aren\u2019t Promised",
    href: "/the-memoir",
  },
  {
    number: "07",
    title: "The Exhibition",
    description: "House of Melo at Pratt Library",
    href: "/exhibition",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-end justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-bg/80 via-transparent to-bg z-10" />

        <Image
          src="/hero.png"
          alt="Carmelo Anthony"
          fill
          className="object-contain object-bottom"
          priority
          sizes="100vw"
        />

        <div className="relative z-20 text-center pb-16 md:pb-24 px-6 max-w-4xl mx-auto">
          <p className="font-mono text-xs uppercase tracking-[0.4em] text-primary mb-6">
            The Carmelo Anthony Archive
          </p>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl italic leading-[0.95]">
            House of Melo
          </h1>
          <p className="mt-6 text-lg md:text-xl text-text-muted max-w-2xl mx-auto font-light leading-relaxed">
            From the streets of Baltimore to the Basketball Hall of Fame.
            A legacy preserved.
          </p>
          <div className="section-divider mx-auto mt-8" />
        </div>
      </section>

      {/* Stats Bar */}
      <section className="border-y border-border py-12 md:py-16">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <StatBlock value="2025" label="Hall of Famer" />
            <StatBlock value="10x" label="NBA All-Star" />
            <StatBlock value="3x" label="Olympic Gold" />
            <StatBlock value="28,289" label="Career Points" />
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-24 md:py-32">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.4em] text-primary mb-6">
                The Legacy
              </p>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl italic leading-[1.1] mb-8">
                Some people hope for better days. When you&rsquo;re from
                Baltimore, you make them.
              </h2>
              <p className="text-text-muted text-lg leading-relaxed">
                Carmelo Anthony didn&rsquo;t just play basketball &mdash; he
                redefined what it means to represent a city. A 10-time All-Star,
                three-time Olympic gold medalist, and one of the greatest
                scorers in NBA history, his journey from the Murphy Homes
                housing projects to the Hall of Fame is a testament to
                relentless determination.
              </p>
            </div>

            <div className="relative">
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src="/melo-portrait.jpg"
                  alt="Carmelo Anthony portrait"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="py-16 md:py-24 bg-bg-elevated">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <div className="section-divider mx-auto mb-8" />
            <blockquote className="font-display text-2xl md:text-4xl italic leading-relaxed text-accent">
              &ldquo;Carmelo embodies everything that makes Baltimore the best
              city in America. Determination, grit and deep sense of community
              pride.&rdquo;
            </blockquote>
            <cite className="block mt-6 font-mono text-xs uppercase tracking-widest text-text-muted not-italic">
              Baltimore Mayor Brandon M. Scott
            </cite>
          </div>
        </div>
      </section>

      {/* Archive Index */}
      <section className="py-24 md:py-32">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="mb-12 md:mb-16">
            <p className="font-mono text-xs uppercase tracking-[0.4em] text-primary mb-4">
              Explore the Archive
            </p>
            <h2 className="font-display text-3xl md:text-5xl italic">
              Seven Chapters of a Legacy
            </h2>
          </div>

          <div className="flex flex-col">
            {sections.map((section) => (
              <Link
                key={section.href}
                href={section.href}
                className="group flex items-baseline gap-6 py-6 border-b border-border hover:border-primary transition-colors"
              >
                <span className="font-mono text-xs text-text-muted group-hover:text-primary transition-colors">
                  {section.number}
                </span>
                <div className="flex-1">
                  <span className="font-display text-2xl md:text-4xl italic text-text group-hover:text-primary transition-colors">
                    {section.title}
                  </span>
                </div>
                <span className="hidden md:block text-sm text-text-muted group-hover:text-text transition-colors">
                  {section.description}
                </span>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  className="text-text-muted group-hover:text-primary group-hover:translate-x-1 transition-all"
                >
                  <path
                    d="M4 10h12M12 6l4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Desert Image */}
      <section className="relative h-[60vh] md:h-[80vh]">
        <Image
          src="/melo-desert-1.jpg"
          alt="Carmelo Anthony"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-16">
          <p className="font-display text-3xl md:text-5xl italic text-text max-w-xl">
            When you know what&rsquo;s possible, you can&rsquo;t be stopped.
          </p>
        </div>
      </section>
    </>
  );
}
