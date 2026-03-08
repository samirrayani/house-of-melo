import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SectionHeader from "../components/SectionHeader";
import PullQuote from "../components/PullQuote";

export const metadata: Metadata = {
  title: "Beyond the Court",
  description:
    "Carmelo Anthony's second act — entrepreneur, content creator, wine connoisseur, and NBA analyst. Explore the ventures that define Melo beyond basketball.",
};

const ventures = [
  {
    id: "creative-7",
    label: "Exhibit A",
    name: "Creative 7",
    category: "Content & Media",
    founded: "2020",
    description:
      "A multi-platform content company built to tell stories that matter. Creative 7 spans television, film, audio, and digital storytelling, giving voice to narratives rooted in culture, community, and lived experience. Under Melo's leadership, the company has developed projects across major networks and streaming platforms, positioning Anthony as a force behind the camera as much as he ever was in front of it.",
    detail: "TV / Film / Audio / Digital",
  },
  {
    id: "viin",
    label: "Exhibit B",
    name: "VII(N) The Seventh Estate",
    category: "Wine & Spirits",
    founded: "2021",
    description:
      "A global wine estate brand co-founded with Asani Swann that reflects Anthony's appreciation for craftsmanship and the finer details. VII(N) sources from premier vineyards around the world, blending Old World tradition with a distinctly modern, culture-forward sensibility. The brand has quickly established itself as a serious player in the premium wine space, driven by the same standard of excellence Melo brought to the court.",
    detail: "Co-founded with Asani Swann",
  },
  {
    id: "stayme7o",
    label: "Exhibit C",
    name: "STAYME7O",
    category: "Lifestyle Brand",
    founded: "2016",
    description:
      "More than a brand, STAYME7O is a personal mantra made tangible. Born from the mindset that carried Anthony through two decades of professional basketball, the lifestyle label embodies focus, perseverance, and authenticity. The name itself became a rallying cry across social media and culture, a reminder to stay true to who you are regardless of the noise.",
    detail: "Personal mantra turned brand",
  },
  {
    id: "7pm-brooklyn",
    label: "Exhibit D",
    name: "7pm in Brooklyn",
    category: "Digital Media",
    founded: "2023",
    description:
      "A digital series where basketball meets culture, with Melo as executive producer and host. Named after the tip-off time at Barclays Center, the show brings together athletes, artists, and cultural figures for unfiltered conversations that go far beyond the game. It has become a destination for fans who understand that basketball has always been inseparable from music, fashion, and community.",
    detail: "Executive Producer & Host",
  },
  {
    id: "nbc-sports",
    label: "Exhibit E",
    name: "NBC Sports",
    category: "Broadcasting",
    founded: "2025",
    description:
      "In the fall of 2025, Anthony joined NBC Sports as an NBA analyst, bringing decades of elite-level experience and an insider's understanding of the game to a national audience. His transition from player to commentator has been seamless, offering a perspective shaped by 19 NBA seasons, three Olympic gold medals, and a basketball IQ that few in the history of the sport can match.",
    detail: "NBA Analyst, Fall 2025",
  },
  {
    id: "investments",
    label: "Exhibit F",
    name: "Investment Portfolio & Advisory",
    category: "Venture Capital",
    founded: "Ongoing",
    description:
      "Anthony has built a diverse investment portfolio spanning technology, wellness, sports, and consumer brands. His approach mirrors his playing style: calculated, patient, and decisive when the moment is right. Beyond capital, Melo brings strategic advisory relationships and a network cultivated over two decades in the global spotlight, lending credibility and cultural intelligence to the companies he backs.",
    detail: "Tech / Wellness / Sports / Consumer",
  },
];

export default function BeyondTheCourt() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 md:pt-40 pb-16 md:pb-24">
        <div className="max-w-[1400px] mx-auto px-6">
          <SectionHeader
            number="04"
            label="The Entrepreneur"
            title="Beyond the Court"
          />

          <div className="grid md:grid-cols-2 gap-12 md:gap-24 mt-8">
            <div>
              <p className="text-lg md:text-xl text-text-muted leading-relaxed">
                The game gave Carmelo Anthony a platform. What he built with
                it &mdash; a portfolio of ventures spanning media, wine,
                lifestyle, and broadcasting &mdash; reveals the mind behind
                the scorer. A second act not as an afterthought, but as the
                natural extension of a career defined by vision.
              </p>
            </div>
            <div>
              <p className="text-text-muted leading-relaxed">
                For Anthony, retirement was never an ending. It was a pivot
                point. The same discipline that produced 28,289 career points
                now drives a business empire built on authenticity, cultural
                intelligence, and the conviction that athletes can be
                architects of industries, not just endorsers of them.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider mx-auto" />

      {/* Editorial Image */}
      <section className="py-16 md:py-24">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="relative aspect-[21/9] overflow-hidden">
            <Image
              src="/melo-desert-2.jpg"
              alt="Carmelo Anthony"
              fill
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-bg/60 to-transparent" />
            <div className="absolute bottom-0 left-0 p-6 md:p-12">
              <p className="font-mono text-xs uppercase tracking-[0.4em] text-primary mb-2">
                The Second Act
              </p>
              <p className="font-display text-2xl md:text-4xl italic text-text max-w-lg">
                From athlete to architect
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider mx-auto" />

      {/* Quote */}
      <section className="py-16 md:py-24">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="max-w-3xl">
            <PullQuote
              quote="I always knew I was more than basketball. The game was the vehicle, but the destination was always bigger."
              attribution="Carmelo Anthony"
            />
          </div>
        </div>
      </section>

      <div className="section-divider mx-auto" />

      {/* Ventures Index */}
      <section className="py-16 md:py-24">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="mb-12 md:mb-16">
            <p className="font-mono text-xs uppercase tracking-[0.4em] text-primary mb-4">
              The Portfolio
            </p>
            <h2 className="font-display text-3xl md:text-5xl italic">
              Six Ventures, One Vision
            </h2>
            <p className="text-text-muted mt-4 max-w-2xl leading-relaxed">
              Each venture in the Melo portfolio reflects a different facet
              of his identity &mdash; storyteller, tastemaker, strategist,
              cultural bridge. Together, they form a cohesive second chapter.
            </p>
          </div>

          <div className="grid gap-6">
            {ventures.map((venture, index) => (
              <article
                key={venture.id}
                className="bg-bg-card border border-border p-6 md:p-10 hover:border-primary/30 transition-colors group"
              >
                <div className="flex flex-col md:flex-row md:items-start gap-6 md:gap-12">
                  {/* Label & Meta */}
                  <div className="md:w-48 shrink-0">
                    <span className="font-mono text-xs text-primary">
                      {venture.label}
                    </span>
                    <div className="mt-3 space-y-1">
                      <p className="font-mono text-[10px] uppercase tracking-widest text-text-muted">
                        {venture.category}
                      </p>
                      <p className="font-mono text-[10px] uppercase tracking-widest text-text-muted">
                        Est. {venture.founded}
                      </p>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="font-display text-2xl md:text-3xl italic text-text group-hover:text-primary transition-colors">
                      {venture.name}
                    </h3>
                    <p className="font-mono text-xs text-primary/70 mt-2">
                      {venture.detail}
                    </p>
                    <p className="text-text-muted leading-relaxed mt-4">
                      {venture.description}
                    </p>
                  </div>

                  {/* Index Number */}
                  <div className="hidden lg:flex items-start">
                    <span className="font-display text-6xl italic text-border group-hover:text-primary/20 transition-colors">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider mx-auto" />

      {/* Thesis Section */}
      <section className="py-16 md:py-24 bg-bg-elevated">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 md:gap-24">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.4em] text-primary mb-6">
                The Thesis
              </p>
              <h2 className="font-display text-3xl md:text-4xl italic leading-tight">
                Athletes as owners, not endorsers.
                Creators, not content.
              </h2>
            </div>
            <div className="space-y-6">
              <p className="text-text-muted leading-relaxed">
                Anthony&rsquo;s post-playing career represents a broader
                shift in how athletes engage with business. Rather than
                lending his name to existing brands, he has chosen to build
                his own &mdash; creating platforms, products, and companies
                that carry his values and vision forward.
              </p>
              <p className="text-text-muted leading-relaxed">
                From a media company that tells culturally significant
                stories, to a wine brand rooted in global craftsmanship, to
                a broadcasting role that puts his basketball IQ on display
                nightly &mdash; every move is intentional. Every venture is
                connected to a larger narrative about what is possible when
                you refuse to be defined by a single chapter.
              </p>
              <div className="pt-4 border-t border-border">
                <div className="grid grid-cols-3 gap-6">
                  <div>
                    <p className="font-display text-2xl md:text-3xl italic text-primary">
                      6+
                    </p>
                    <p className="font-mono text-[10px] uppercase tracking-widest text-text-muted mt-1">
                      Active Ventures
                    </p>
                  </div>
                  <div>
                    <p className="font-display text-2xl md:text-3xl italic text-primary">
                      4
                    </p>
                    <p className="font-mono text-[10px] uppercase tracking-widest text-text-muted mt-1">
                      Industries
                    </p>
                  </div>
                  <div>
                    <p className="font-display text-2xl md:text-3xl italic text-primary">
                      1
                    </p>
                    <p className="font-mono text-[10px] uppercase tracking-widest text-text-muted mt-1">
                      Standard
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Next Section Navigation */}
      <section className="py-24 md:py-32">
        <div className="max-w-[1400px] mx-auto px-6">
          <Link
            href="/community"
            className="group flex items-center justify-between border-b border-border hover:border-primary pb-8 transition-colors"
          >
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.4em] text-text-muted mb-3">
                Next Chapter
              </p>
              <p className="font-display text-3xl md:text-5xl italic text-text group-hover:text-primary transition-colors">
                Community
              </p>
            </div>
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              className="text-text-muted group-hover:text-primary group-hover:translate-x-2 transition-all"
            >
              <path
                d="M6 16h20M20 10l6 6-6 6"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
