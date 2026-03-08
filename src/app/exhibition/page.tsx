import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SectionHeader from "../components/SectionHeader";
import PullQuote from "../components/PullQuote";

export const metadata: Metadata = {
  title: "The Exhibition",
  description:
    "House of Melo: Where Tomorrows Are Promised — the interactive tribute and community empowerment symposium honoring Carmelo Anthony at the Enoch Pratt Free Library in Baltimore, MD.",
};

const pressCoverage = [
  {
    outlet: "Business Insider",
    headline:
      "Hall of Famer Carmelo Anthony honored with career-spanning exhibit at Baltimore's Enoch Pratt Free Library",
  },
  {
    outlet: "Blavity",
    headline:
      "Carmelo Anthony Giving Back to Baltimore Community Through Contest",
  },
  {
    outlet: "Sports Illustrated",
    headline: "Baltimore Honors New York Knicks Legend Carmelo Anthony",
  },
  {
    outlet: "Complex",
    headline:
      "Inside Carmelo Anthony's House of Melo Exhibition in Baltimore",
  },
];

export default function ExhibitionPage() {
  return (
    <>
      {/* Hero Image */}
      <section className="relative h-[50vh] md:h-[70vh]">
        <Image
          src="/legacy.png"
          alt="House of Melo exhibition at the Enoch Pratt Free Library"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/60 to-bg/20" />
      </section>

      {/* Section Header */}
      <section className="pt-16 md:pt-24 pb-8">
        <div className="max-w-[1400px] mx-auto px-6">
          <SectionHeader
            number="07"
            label="The Experience"
            title="The Exhibition"
          />
        </div>
      </section>

      {/* Opening Narrative */}
      <section className="pb-20 md:pb-28">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-xl md:text-2xl text-text leading-relaxed font-light mb-8">
              <span className="font-display italic text-accent">
                House of Melo: Where Tomorrows Are Promised
              </span>{" "}
              &mdash; an interactive tribute and community empowerment symposium
              that transformed the Enoch Pratt Free Library into a living
              monument to Carmelo Anthony&rsquo;s journey, his craft, and his
              bond with Baltimore.
            </p>
            <p className="text-lg text-text-muted leading-relaxed mb-8">
              Located at the Central Library in Baltimore, MD, the exhibition
              brought together rare artifacts, personal collections, and
              cultural mementos spanning Carmelo&rsquo;s life &mdash; from the
              courts of West Baltimore to Olympic podiums, NBA arenas, and
              beyond. Every item on display carried a story. Every room was a
              chapter.
            </p>
            <p className="text-lg text-text-muted leading-relaxed">
              Curated by D. Watkins and Khalilah Beavers, the exhibit was
              designed not merely as a retrospective but as an invitation
              &mdash; a space where Baltimore could walk through the life of
              one of its own and see their own possibilities reflected back.
            </p>
          </div>
        </div>
      </section>

      {/* Exhibition Details */}
      <section className="border-y border-border py-12 md:py-16">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-text-muted mb-2">
                Venue
              </p>
              <p className="font-display text-lg italic text-text">
                Enoch Pratt Free Library
              </p>
              <p className="text-sm text-text-muted mt-1">
                Central Library, Baltimore, MD
              </p>
            </div>
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-text-muted mb-2">
                Curated By
              </p>
              <p className="font-display text-lg italic text-text">
                D. Watkins
              </p>
              <p className="text-sm text-text-muted mt-1">
                &amp; Khalilah Beavers
              </p>
            </div>
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-text-muted mb-2">
                Format
              </p>
              <p className="font-display text-lg italic text-text">
                Interactive Tribute
              </p>
              <p className="text-sm text-text-muted mt-1">
                &amp; Community Symposium
              </p>
            </div>
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-text-muted mb-2">
                Collection
              </p>
              <p className="font-display text-lg italic text-text">
                Rare Artifacts
              </p>
              <p className="text-sm text-text-muted mt-1">
                &amp; Cultural Mementos
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Inside the Exhibition */}
      <section className="py-20 md:py-28">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-start">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.4em] text-primary mb-6">
                Inside the Exhibit
              </p>
              <h2 className="font-display text-3xl md:text-5xl italic leading-[1.1] mb-8">
                Where tomorrows are promised
              </h2>
              <div className="section-divider mb-8" />
              <p className="text-text-muted text-lg leading-relaxed mb-6">
                Visitors stepped through carefully constructed rooms that
                mirrored the arc of Carmelo&rsquo;s life. From the concrete
                playgrounds of Murphy Homes to the gleam of championship
                trophies, each section was a world unto itself &mdash; filled
                with game-worn jerseys, handwritten notes, family photographs,
                and pieces of memorabilia that had never been displayed publicly
                before.
              </p>
              <p className="text-text-muted text-lg leading-relaxed mb-6">
                The personal collections revealed the man behind the player.
                Childhood keepsakes. Letters from mentors. The small, quiet
                things that a career in the spotlight so often obscures. The
                exhibition made them visible again, placing them alongside the
                accolades and achievements in a way that gave each artifact
                equal weight.
              </p>
              <p className="text-text-muted text-lg leading-relaxed">
                Among the most celebrated features were the special
                limited-edition library cards created exclusively for the
                exhibit &mdash; a fitting tribute held within the walls of one
                of America&rsquo;s most historic public library systems, and a
                keepsake that connected Carmelo&rsquo;s story to the broader
                mission of knowledge and access.
              </p>
            </div>

            <div className="relative aspect-[3/4] overflow-hidden">
              <Image
                src="/melo-desert-1.jpg"
                alt="Carmelo Anthony"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Pull Quote */}
      <section className="py-16 md:py-24 bg-bg-elevated">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <PullQuote
              quote="This is bigger than basketball. This is about showing every kid in Baltimore that their story matters, that where they come from is something to be proud of."
              attribution="Carmelo Anthony"
            />
          </div>
        </div>
      </section>

      {/* Community Empowerment Symposium */}
      <section className="py-20 md:py-28">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <p className="font-mono text-xs uppercase tracking-[0.4em] text-primary mb-6">
              Beyond the Walls
            </p>
            <h2 className="font-display text-3xl md:text-5xl italic leading-[1.1] mb-8">
              The Community Empowerment Symposium
            </h2>
            <div className="section-divider mb-10" />
            <p className="text-text-muted text-lg leading-relaxed mb-6">
              The House of Melo was never intended to be a passive experience.
              Alongside the exhibit, the House of Melo Community Empowerment
              Symposium brought together speakers, educators, and community
              leaders for programming that extended the exhibition&rsquo;s
              mission beyond its walls.
            </p>
            <p className="text-text-muted text-lg leading-relaxed mb-6">
              Panel discussions on youth mentorship. Workshops on creative
              entrepreneurship. Conversations about what it means to invest in
              the communities that raised you. The symposium turned the library
              into a gathering place &mdash; not just for reflection, but for
              action.
            </p>
            <p className="text-text-muted text-lg leading-relaxed">
              It was, in every sense, a homecoming. Not just for Carmelo, but
              for a city that has always understood the relationship between
              where you start and what you build. The exhibition stood as proof
              that Baltimore&rsquo;s stories deserve to be told on the largest
              stages, preserved with the same care given to any great work of
              art.
            </p>
          </div>
        </div>
      </section>

      {/* Visit Link */}
      <section className="border-y border-border py-12 md:py-16">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-text-muted mb-2">
                Enoch Pratt Free Library
              </p>
              <p className="font-display text-2xl md:text-3xl italic text-text">
                Explore the exhibit at Pratt Library
              </p>
            </div>
            <a
              href="https://www.prattlibrary.org/carmelo-anthony"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 border border-primary text-primary font-mono text-sm uppercase tracking-widest hover:bg-primary hover:text-bg transition-colors"
            >
              <span>Visit Pratt Library</span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                className="flex-shrink-0"
              >
                <path
                  d="M4 12L12 4M12 4H6M12 4V10"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Press Coverage */}
      <section className="py-20 md:py-28">
        <div className="max-w-[1400px] mx-auto px-6">
          <p className="font-mono text-xs uppercase tracking-[0.4em] text-primary mb-6">
            In the Press
          </p>
          <h2 className="font-display text-3xl md:text-5xl italic leading-[1.1] mb-12">
            Coverage
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {pressCoverage.map((item) => (
              <div
                key={item.outlet}
                className="bg-bg-card border border-border p-8 md:p-10 group hover:border-primary/40 transition-colors"
              >
                <p className="font-mono text-xs uppercase tracking-widest text-primary mb-4">
                  {item.outlet}
                </p>
                <p className="font-display text-xl md:text-2xl italic leading-snug text-text">
                  {item.headline}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Press Contact */}
      <section className="bg-bg-elevated py-12 md:py-16">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-text-muted mb-2">
                Press Inquiries
              </p>
              <p className="text-text-muted text-lg">
                For media requests and press materials, contact:
              </p>
            </div>
            <a
              href="mailto:Katie@PressOnComms.Biz"
              className="font-mono text-sm text-primary hover:text-accent transition-colors"
            >
              Katie@PressOnComms.Biz
            </a>
          </div>
        </div>
      </section>

      {/* Closing Statement */}
      <section className="py-20 md:py-28">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <p className="font-mono text-xs uppercase tracking-[0.4em] text-primary mb-8">
              The Final Room
            </p>
            <h2 className="font-display text-3xl md:text-5xl italic leading-[1.1] mb-8 text-accent">
              A legacy preserved. A city celebrated. A tomorrow, promised.
            </h2>
            <div className="w-12 h-px bg-primary mx-auto mb-8" />
            <p className="text-text-muted text-lg leading-relaxed">
              The House of Melo is more than an exhibit. It is the evidence
              &mdash; that a kid from Murphy Homes can stand among legends, and
              carry an entire city with him when he does.
            </p>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="border-t border-border" />
      </div>

      {/* Return to Archive */}
      <section className="py-20 md:py-28">
        <div className="max-w-[1400px] mx-auto px-6">
          <Link href="/" className="group block">
            <div className="flex items-center gap-4 mb-4">
              <span className="font-mono text-xs text-text-muted">
                Return to archive
              </span>
              <div className="section-divider" />
            </div>
            <div className="flex items-baseline justify-between gap-8">
              <span className="font-display text-4xl md:text-6xl italic text-text group-hover:text-primary transition-colors">
                House of Melo
              </span>
              <svg
                width="32"
                height="32"
                viewBox="0 0 20 20"
                fill="none"
                className="text-text-muted group-hover:text-primary group-hover:translate-x-2 transition-all flex-shrink-0"
              >
                <path
                  d="M4 10h12M12 6l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <p className="text-text-muted mt-4 text-lg">
              The Carmelo Anthony Archive
            </p>
          </Link>
        </div>
      </section>
    </>
  );
}
