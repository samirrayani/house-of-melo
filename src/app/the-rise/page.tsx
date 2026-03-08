import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SectionHeader from "../components/SectionHeader";
import StatBlock from "../components/StatBlock";
import PullQuote from "../components/PullQuote";

export const metadata: Metadata = {
  title: "The Rise",
  description:
    "From Towson Catholic to Oak Hill Academy to Syracuse — how Carmelo Anthony became the most electrifying prospect in the 2003 NBA Draft.",
};

export default function TheRise() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[70vh] md:min-h-[80vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/rafters.gif"
            alt="Syracuse Orange banner raised to the rafters"
            fill
            className="object-cover object-center opacity-30"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/70 to-bg/40" />
        </div>

        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 pb-16 md:pb-24">
          {/* Previous section link */}
          <Link
            href="/baltimore"
            className="inline-flex items-center gap-3 mb-12 group"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              className="text-text-muted group-hover:text-primary group-hover:-translate-x-1 transition-all"
            >
              <path
                d="M16 10H4M8 6l-4 4 4 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="font-mono text-xs uppercase tracking-widest text-text-muted group-hover:text-primary transition-colors">
              Previous: Baltimore
            </span>
          </Link>

          <SectionHeader number="02" label="The Path" title="The Rise" />
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 md:py-32">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-lg md:text-xl text-text-muted leading-relaxed mb-8">
              Before the NBA knew his name, Carmelo Anthony was already
              rewriting the script. A kid from Baltimore who carried his
              city&rsquo;s toughness like armor, he moved through the
              high school ranks with a singular purpose &mdash; and arrived
              at Syracuse University ready to do something no freshman had
              ever done.
            </p>
            <div className="section-divider" />
          </div>
        </div>
      </section>

      {/* High School Journey */}
      <section className="py-20 md:py-32 bg-bg-elevated">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 md:gap-24">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.4em] text-primary mb-6">
                The Prep Years
              </p>
              <h2 className="font-display text-3xl md:text-5xl italic leading-[1.1] mb-8">
                Towson Catholic to Oak Hill Academy
              </h2>
              <p className="text-text-muted leading-relaxed mb-6">
                At Towson Catholic High School in Baltimore, Melo first
                announced himself as something special. A raw but
                undeniable talent, he averaged 25 points per game and
                earned attention from every major program in the country.
              </p>
              <p className="text-text-muted leading-relaxed mb-6">
                He transferred to Oak Hill Academy in Virginia for his
                senior year &mdash; the proving ground that had shaped
                future pros for decades. At Oak Hill, Melo dominated.
                The Warriors went 32&ndash;1, and he was named a
                McDonald&rsquo;s All-American and USA Today First Team
                All-USA.
              </p>
              <p className="text-text-muted leading-relaxed">
                The question was never whether he&rsquo;d make the NBA.
                The question was how quickly he could change whatever
                program was lucky enough to land him first.
              </p>
            </div>

            <div className="flex flex-col gap-8 justify-center">
              <StatBlock value="25.0" label="PPG at Towson Catholic" />
              <StatBlock value="32-1" label="Oak Hill Academy Record" />
              <StatBlock value="No. 1" label="Ranked HS Player (2002)" />
            </div>
          </div>
        </div>
      </section>

      {/* Syracuse Championship */}
      <section className="py-20 md:py-32">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center">
            <div className="relative aspect-[3/4] overflow-hidden order-2 md:order-1">
              <Image
                src="/melo-desert-2.jpg"
                alt="Carmelo Anthony"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            <div className="order-1 md:order-2">
              <p className="font-mono text-xs uppercase tracking-[0.4em] text-primary mb-6">
                Syracuse Orange &mdash; 2002&ndash;03
              </p>
              <h2 className="font-display text-3xl md:text-5xl italic leading-[1.1] mb-8">
                One Season. One Championship. Forever.
              </h2>
              <p className="text-text-muted leading-relaxed mb-6">
                Carmelo Anthony played a single season of college
                basketball. That was all Syracuse needed. Wearing number
                15 for Jim Boeheim&rsquo;s Orange, he averaged 22.2
                points and 10.0 rebounds per game as a freshman &mdash;
                numbers that would have been remarkable for a senior,
                let alone a teenager.
              </p>
              <p className="text-text-muted leading-relaxed mb-6">
                In the 2003 NCAA Tournament, Melo elevated. He carried
                Syracuse through six wins, including a dominant
                championship game performance against Kansas in New
                Orleans. The Orange won 81&ndash;78, capturing the
                program&rsquo;s first and only national title.
              </p>
              <p className="text-text-muted leading-relaxed">
                Melo was named the NCAA Tournament&rsquo;s Most
                Outstanding Player. At 18, he had delivered a city and a
                university their greatest basketball moment. His number
                15 jersey now hangs in the Carrier Dome rafters &mdash;
                retired, untouchable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Syracuse Stats */}
      <section className="border-y border-border py-12 md:py-16">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <StatBlock value="22.2" label="Points Per Game" />
            <StatBlock value="10.0" label="Rebounds Per Game" />
            <StatBlock value="30-5" label="Season Record" />
            <StatBlock value="MOP" label="Tournament Most Outstanding" />
          </div>
        </div>
      </section>

      {/* Pull Quote */}
      <section className="py-20 md:py-28">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <PullQuote
              quote="I knew I had one year to do something special. I wasn't going to waste it. I came to Syracuse to win a championship, and that's exactly what we did."
              attribution="Carmelo Anthony"
            />
          </div>
        </div>
      </section>

      {/* 2003 NBA Draft */}
      <section className="py-20 md:py-32 bg-bg-elevated">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="max-w-3xl">
            <p className="font-mono text-xs uppercase tracking-[0.4em] text-primary mb-6">
              June 26, 2003
            </p>
            <h2 className="font-display text-3xl md:text-5xl italic leading-[1.1] mb-8">
              The 2003 NBA Draft
            </h2>
            <p className="text-text-muted leading-relaxed mb-6">
              The 2003 NBA Draft is widely considered the greatest draft
              class in league history. LeBron James went first. Darko
              Milicic went second. And with the third overall pick, the
              Denver Nuggets selected Carmelo Anthony.
            </p>
            <p className="text-text-muted leading-relaxed mb-6">
              Unlike most rookies who need time to adjust, Melo arrived
              in the NBA fully formed. He averaged 21.0 points per game
              in his first season &mdash; the kind of production that
              typically takes years to develop. He led the Nuggets from
              17 wins the previous season to 43, the largest single-season
              turnaround in franchise history at the time.
            </p>
            <p className="text-text-muted leading-relaxed mb-8">
              Denver had found its cornerstone. The basketball world had
              found its next great scorer. And a kid from Baltimore&rsquo;s
              Red Hook projects had proven that where you start doesn&rsquo;t
              determine where you finish. He would go on to wear the
              iconic number 7 during his legendary tenure with the
              New York Knicks &mdash; but in Denver, wearing number 15,
              the story began.
            </p>

            <div className="section-divider mb-10" />

            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <StatBlock value="3rd" label="Overall Pick" />
              <StatBlock value="21.0" label="Rookie PPG" />
              <StatBlock value="+26" label="Team Win Improvement" />
            </div>
          </div>
        </div>
      </section>

      {/* Jersey Numbers */}
      <section className="py-20 md:py-28">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <div className="section-divider mx-auto mb-10" />
            <div className="flex items-center justify-center gap-12 md:gap-20 mb-10">
              <div>
                <p className="font-display text-6xl md:text-8xl italic text-primary">
                  15
                </p>
                <p className="font-mono text-xs uppercase tracking-widest text-text-muted mt-2">
                  Syracuse / Denver
                </p>
              </div>
              <div className="w-px h-20 bg-border" />
              <div>
                <p className="font-display text-6xl md:text-8xl italic text-primary">
                  7
                </p>
                <p className="font-mono text-xs uppercase tracking-widest text-text-muted mt-2">
                  New York Knicks
                </p>
              </div>
            </div>
            <p className="text-text-muted text-sm leading-relaxed max-w-lg mx-auto">
              Two numbers. Two eras. Both belong to Melo. The 15 hangs in
              the Carrier Dome rafters. The 7 became synonymous with
              Madison Square Garden.
            </p>
          </div>
        </div>
      </section>

      {/* Next Section */}
      <section className="border-t border-border py-16 md:py-24">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="flex flex-col items-end text-right">
            <p className="font-mono text-xs uppercase tracking-widest text-text-muted mb-4">
              Continue the Archive
            </p>
            <Link href="/greatness" className="group flex items-center gap-4">
              <span className="font-display text-3xl md:text-5xl italic text-text group-hover:text-primary transition-colors">
                Next: Greatness
              </span>
              <svg
                width="28"
                height="28"
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
            <div className="section-divider mt-8" />
          </div>
        </div>
      </section>
    </>
  );
}
