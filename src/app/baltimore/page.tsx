import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SectionHeader from "../components/SectionHeader";
import PullQuote from "../components/PullQuote";
import StatBlock from "../components/StatBlock";

export const metadata: Metadata = {
  title: "Baltimore",
  description:
    "From the Murphy Homes housing projects in West Baltimore, Carmelo Anthony's roots shaped the Hall of Famer he would become. The city made him, and he never forgot it.",
};

export default function BaltimorePage() {
  return (
    <>
      {/* Hero Image */}
      <section className="relative h-[50vh] md:h-[70vh]">
        <Image
          src="/melo-portrait.jpg"
          alt="Carmelo Anthony — Baltimore"
          fill
          className="object-cover object-top"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/50 to-bg/30" />
      </section>

      {/* Section Header */}
      <section className="pt-16 md:pt-24 pb-8">
        <div className="max-w-[1400px] mx-auto px-6">
          <SectionHeader
            number="01"
            label="The Beginning"
            title="Baltimore"
          />
        </div>
      </section>

      {/* Opening Narrative */}
      <section className="pb-20 md:pb-28">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-xl md:text-2xl text-text leading-relaxed font-light mb-8">
              Carmelo Kyam Anthony was born on May 29, 1984, in the Red Hook
              housing projects of Brooklyn, New York. But it was Baltimore
              &mdash; the city he moved to as a young child &mdash; that forged
              the man the world would come to know.
            </p>
            <p className="text-lg text-text-muted leading-relaxed mb-8">
              After the death of his father when Carmelo was just two years old,
              his mother, Mary Anthony, moved the family to Baltimore in search
              of a fresh start. They settled in the Murphy Homes housing
              projects in West Baltimore &mdash; a place where survival was
              earned, never given. Seventeen high-rise towers. Concrete and
              iron. A community forged under pressure.
            </p>
            <p className="text-lg text-text-muted leading-relaxed">
              It was here, in the corridors of Murphy Homes, on the cracked
              asphalt courts, under flickering streetlights, that Carmelo
              Anthony first picked up a basketball. And it was here that
              Baltimore began to shape him.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Row */}
      <section className="border-y border-border py-12 md:py-16">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <StatBlock value="1984" label="Born in Brooklyn" />
            <StatBlock value="8" label="Age when he found basketball" />
            <StatBlock value="West" label="Baltimore, Maryland" />
          </div>
        </div>
      </section>

      {/* The Streets Section */}
      <section className="py-20 md:py-28">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-start">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.4em] text-primary mb-6">
                Murphy Homes
              </p>
              <h2 className="font-display text-3xl md:text-5xl italic leading-[1.1] mb-8">
                The streets taught what no classroom could
              </h2>
              <div className="section-divider mb-8" />
              <p className="text-text-muted text-lg leading-relaxed mb-6">
                West Baltimore in the late 1980s and early 1990s was unforgiving.
                The crack epidemic was devastating communities. Violence was
                routine. For kids growing up in Murphy Homes, the world outside
                those towers could feel impossibly far away.
              </p>
              <p className="text-text-muted text-lg leading-relaxed mb-6">
                But the streets also taught lessons that would define Carmelo
                forever &mdash; toughness, awareness, loyalty, and the
                understanding that nobody was coming to save you. You had to
                save yourself.
              </p>
              <p className="text-text-muted text-lg leading-relaxed">
                Basketball became the way out and the way forward. On those
                outdoor courts, Carmelo developed the jab step, the mid-range
                pull-up, the relentless will to score from anywhere. He played
                against older kids, grown men, anyone who would run. Every game
                was a proving ground.
              </p>
            </div>

            <div className="relative aspect-[3/4] overflow-hidden">
              <Image
                src="/melo-desert-2.jpg"
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
              quote="Some people hope for better days. When you're from Baltimore, you make them."
              attribution="Carmelo Anthony"
            />
          </div>
        </div>
      </section>

      {/* Baltimore's Influence */}
      <section className="py-20 md:py-28">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <p className="font-mono text-xs uppercase tracking-[0.4em] text-primary mb-6">
              A City in His Blood
            </p>
            <h2 className="font-display text-3xl md:text-5xl italic leading-[1.1] mb-8">
              Baltimore made Melo. Melo never forgot Baltimore.
            </h2>
            <div className="section-divider mb-10" />
            <p className="text-text-muted text-lg leading-relaxed mb-6">
              Baltimore gave Carmelo more than grit. It gave him identity. The
              city&rsquo;s rhythm &mdash; its resilience, its culture, its
              unapologetic pride &mdash; became part of who he was on and off
              the court. The way he carried himself, the loyalty he showed to
              the people who were there before the fame, the refusal to ever
              act like he was better than where he came from.
            </p>
            <p className="text-text-muted text-lg leading-relaxed mb-6">
              Even after Syracuse. Even after being drafted third overall. Even
              after All-Star games and Olympic gold medals. Carmelo always came
              back. He built basketball courts. He funded community centers. He
              walked the same blocks and greeted the same people. Baltimore
              wasn&rsquo;t a chapter in his story &mdash; it was the whole
              foundation.
            </p>
            <p className="text-text-muted text-lg leading-relaxed mb-6">
              The community that raised him was not a single family but an
              entire neighborhood. Coaches who volunteered their time. Older
              players who saw his talent and pushed him harder. A mother who
              worked multiple jobs so her son could have a chance. Baltimore
              raised Carmelo collectively, the way cities raise their own.
            </p>
            <p className="text-text-muted text-lg leading-relaxed">
              That bond between a man and his city &mdash; tested by distance,
              deepened by time &mdash; became one of the defining threads of
              Carmelo Anthony&rsquo;s life. He wore Baltimore on his back long
              before any jersey number.
            </p>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="border-t border-border" />
      </div>

      {/* Next Chapter */}
      <section className="py-20 md:py-28">
        <div className="max-w-[1400px] mx-auto px-6">
          <Link href="/the-rise" className="group block">
            <div className="flex items-center gap-4 mb-4">
              <span className="font-mono text-xs text-text-muted">
                Next chapter
              </span>
              <div className="section-divider" />
            </div>
            <div className="flex items-baseline justify-between gap-8">
              <div>
                <span className="font-mono text-xs text-primary mr-4">02</span>
                <span className="font-display text-4xl md:text-6xl italic text-text group-hover:text-primary transition-colors">
                  The Rise
                </span>
              </div>
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
              Syracuse to the NBA Draft
            </p>
          </Link>
        </div>
      </section>
    </>
  );
}
