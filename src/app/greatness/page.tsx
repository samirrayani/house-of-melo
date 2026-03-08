import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SectionHeader from "../components/SectionHeader";
import StatBlock from "../components/StatBlock";
import PullQuote from "../components/PullQuote";

export const metadata: Metadata = {
  title: "Greatness",
  description:
    "Carmelo Anthony's NBA career achievements — 10x All-Star, scoring champion, top-10 all-time scorer, 3x Olympic Gold Medalist, and 2025 Basketball Hall of Fame inductee.",
};

const careerStats = [
  { value: "28,289", label: "Career Points" },
  { value: "10x", label: "NBA All-Star" },
  { value: "28.7", label: "PPG Scoring Title" },
  { value: "3x", label: "Olympic Gold" },
  { value: "62", label: "Career-High Points" },
  { value: "19", label: "NBA Seasons" },
];

const olympicRecord = [
  { value: "4", label: "Olympic Games" },
  { value: "3", label: "Gold Medals" },
  { value: "1", label: "Bronze Medal" },
  { value: "#1", label: "USA Basketball All-Time Scorer" },
];

const teams = [
  { name: "Denver Nuggets", years: "2003 \u2013 2011" },
  { name: "New York Knicks", years: "2011 \u2013 2017" },
  { name: "Oklahoma City Thunder", years: "2017 \u2013 2018" },
  { name: "Houston Rockets", years: "2018 \u2013 2019" },
  { name: "Portland Trail Blazers", years: "2019 \u2013 2021" },
  { name: "Los Angeles Lakers", years: "2021 \u2013 2022" },
];

export default function GreatnessPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-32 md:pt-40 pb-16 md:pb-24">
        <div className="max-w-[1400px] mx-auto px-6">
          <SectionHeader
            number="03"
            label="The Career"
            title="Greatness"
          />
          <p className="text-text-muted text-lg md:text-xl leading-relaxed max-w-3xl">
            Some players score points. Carmelo Anthony made scoring an art
            form. Over nineteen seasons, he etched his name among the greatest
            to ever play the game &mdash; a pure scorer whose brilliance
            transcended eras, rosters, and borders.
          </p>
        </div>
      </section>

      {/* Career Stats Grid — The Commanding Wall */}
      <section className="border-y border-border py-16 md:py-24 bg-bg-elevated">
        <div className="max-w-[1400px] mx-auto px-6">
          <p className="font-mono text-xs uppercase tracking-[0.4em] text-primary mb-10">
            Career Numbers
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
            {careerStats.map((stat) => (
              <StatBlock
                key={stat.label}
                value={stat.value}
                label={stat.label}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Hall of Fame */}
      <section className="py-24 md:py-32">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.4em] text-primary mb-6">
                Class of 2025
              </p>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl italic leading-[1.1] mb-8">
                Hall of Famer
              </h2>
              <p className="text-text-muted text-lg leading-relaxed mb-6">
                In 2025, Carmelo Anthony was inducted into the Naismith
                Memorial Basketball Hall of Fame &mdash; the definitive
                recognition of a career spent at the highest level of the
                game. From the third overall pick in the 2003 NBA Draft to
                28,289 career points, every chapter of his journey led to
                Springfield.
              </p>
              <p className="text-text-muted text-lg leading-relaxed">
                A top-10 all-time scorer, a decade of All-Star selections,
                and a scoring title that showcased the purest offensive
                repertoire of his generation. The Hall didn&rsquo;t just
                welcome Melo &mdash; it was waiting for him.
              </p>
            </div>

            <div className="relative">
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src="/rafters.gif"
                  alt="Carmelo Anthony's jersey being retired and raised to the rafters"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  unoptimized
                />
              </div>
              <p className="font-mono text-xs text-text-muted mt-4 uppercase tracking-widest">
                Jersey retirement ceremony
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Scoring Title */}
      <section className="py-16 md:py-24 bg-bg-elevated">
        <div className="max-w-[1400px] mx-auto px-6">
          <PullQuote
            quote="When Melo got going, there was no stopping him. He could score from anywhere on the floor, in any situation. That's a gift very few have ever had."
            attribution="Mike Breen, ESPN"
          />
        </div>
      </section>

      {/* Scoring Crown + 62-Point Game */}
      <section className="py-24 md:py-32">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 md:gap-24">
            {/* Scoring Title */}
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.4em] text-primary mb-6">
                2012 &ndash; 13 Season
              </p>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl italic leading-[1.1] mb-8">
                The Scoring Champion
              </h2>
              <p className="text-text-muted text-lg leading-relaxed mb-8">
                During the 2012&ndash;13 season, Carmelo averaged 28.7 points
                per game to claim the NBA scoring title &mdash; the
                culmination of a relentless offensive skill set that blended
                mid-range mastery, post-up artistry, and three-point range.
                He carried the Knicks to 54 wins and the second seed in the
                Eastern Conference, their best season in over a decade.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <StatBlock value="28.7" label="Points Per Game" />
                <StatBlock value="54" label="Team Wins" />
              </div>
            </div>

            {/* 62-Point Game */}
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.4em] text-primary mb-6">
                January 24, 2014
              </p>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl italic leading-[1.1] mb-8">
                62 Points at The Garden
              </h2>
              <p className="text-text-muted text-lg leading-relaxed mb-8">
                On a freezing January night at Madison Square Garden, Carmelo
                Anthony set the building on fire. 62 points against the
                Charlotte Bobcats &mdash; a single-game scoring record at
                MSG that still stands. He shot 23-for-35 from the field and
                hit six three-pointers. It was the kind of performance that
                defines a scorer&rsquo;s legacy: pure, unstoppable,
                unforgettable.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <StatBlock value="62" label="Points Scored" />
                <StatBlock value="23-35" label="Field Goals" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Olympic Legacy */}
      <section className="border-y border-border py-16 md:py-24 bg-bg-elevated">
        <div className="max-w-[1400px] mx-auto px-6">
          <p className="font-mono text-xs uppercase tracking-[0.4em] text-primary mb-6">
            International Stage
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl italic leading-[1.1] mb-6">
            Olympic Legend
          </h2>
          <p className="text-text-muted text-lg leading-relaxed max-w-3xl mb-12">
            No American basketball player has done more on the Olympic stage
            than Carmelo Anthony. Four Olympic Games. Three gold medals.
            The all-time leading scorer in USA Basketball history. While
            some stars skipped the Olympics, Melo answered every call
            &mdash; carrying the flag and carrying his country.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-16">
            {olympicRecord.map((stat) => (
              <StatBlock
                key={stat.label}
                value={stat.value}
                label={stat.label}
              />
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="border border-border p-6">
              <p className="font-mono text-xs text-text-muted uppercase tracking-widest mb-2">
                Athens 2004
              </p>
              <p className="font-display text-2xl md:text-3xl italic text-accent">
                Bronze
              </p>
            </div>
            <div className="border border-primary p-6">
              <p className="font-mono text-xs text-text-muted uppercase tracking-widest mb-2">
                Beijing 2008
              </p>
              <p className="font-display text-2xl md:text-3xl italic text-primary">
                Gold
              </p>
            </div>
            <div className="border border-primary p-6">
              <p className="font-mono text-xs text-text-muted uppercase tracking-widest mb-2">
                London 2012
              </p>
              <p className="font-display text-2xl md:text-3xl italic text-primary">
                Gold
              </p>
            </div>
            <div className="border border-primary p-6">
              <p className="font-mono text-xs text-text-muted uppercase tracking-widest mb-2">
                Rio 2016
              </p>
              <p className="font-display text-2xl md:text-3xl italic text-primary">
                Gold
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Teams / The Journey */}
      <section className="py-24 md:py-32">
        <div className="max-w-[1400px] mx-auto px-6">
          <p className="font-mono text-xs uppercase tracking-[0.4em] text-primary mb-6">
            The Journey
          </p>
          <h2 className="font-display text-3xl md:text-5xl italic leading-[1.1] mb-12">
            Six Franchises, One Legacy
          </h2>

          <div className="flex flex-col">
            {teams.map((team) => (
              <div
                key={team.name}
                className="flex items-baseline justify-between py-5 border-b border-border"
              >
                <span className="font-display text-xl md:text-3xl italic text-text">
                  {team.name}
                </span>
                <span className="font-mono text-xs md:text-sm text-text-muted tracking-wider">
                  {team.years}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Legacy Image */}
      <section className="relative h-[50vh] md:h-[70vh]">
        <Image
          src="/legacy.png"
          alt="Carmelo Anthony legacy"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-16">
          <p className="font-display text-3xl md:text-5xl italic text-text max-w-2xl">
            The numbers tell the story. The game remembers the art.
          </p>
        </div>
      </section>

      {/* Next Section Navigation */}
      <section className="py-16 md:py-24 border-t border-border">
        <div className="max-w-[1400px] mx-auto px-6">
          <Link
            href="/beyond"
            className="group flex items-center justify-between"
          >
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.4em] text-text-muted mb-3">
                Next Chapter
              </p>
              <p className="font-display text-3xl md:text-5xl italic text-text group-hover:text-primary transition-colors">
                Beyond the Court
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
