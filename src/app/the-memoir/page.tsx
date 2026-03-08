import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SectionHeader from "../components/SectionHeader";
import PullQuote from "../components/PullQuote";

export const metadata: Metadata = {
  title: "The Memoir",
  description:
    "Where Tomorrows Aren\u2019t Promised \u2014 Carmelo Anthony\u2019s New York Times bestselling memoir. A raw, intimate account of growing up in Red Hook, Brooklyn and Baltimore, published by Simon & Schuster.",
};

export default function TheMemoirPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-32 md:pt-40 pb-16 md:pb-24">
        <div className="max-w-[1400px] mx-auto px-6">
          <SectionHeader
            number="06"
            label="The Book"
            title="Where Tomorrows Aren&rsquo;t Promised"
          />
          <div className="max-w-2xl">
            <p className="text-text-muted text-lg md:text-xl leading-relaxed font-light">
              The most personal chapter of the archive. A memoir that strips
              away the jersey, the fame, and the accolades &mdash; and returns
              to where it all began.
            </p>
          </div>
        </div>
      </section>

      {/* Book Cover */}
      <section className="py-16 md:py-24">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="flex justify-center">
            <div className="relative w-full max-w-sm md:max-w-md">
              <div className="relative aspect-[2/3] overflow-hidden rounded-sm shadow-[0_25px_60px_-12px_rgba(0,0,0,0.7)]">
                <Image
                  src="/book.jpg"
                  alt="Where Tomorrows Aren&rsquo;t Promised by Carmelo Anthony &mdash; book cover"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 80vw, 400px"
                  priority
                />
              </div>
              <div className="mt-6 text-center">
                <p className="font-mono text-xs uppercase tracking-widest text-text-muted">
                  New York Times Bestseller
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Narrative */}
      <section className="py-16 md:py-24">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="max-w-3xl mx-auto space-y-8">
            <p className="text-text text-lg leading-relaxed">
              Before the scoring titles, before the Olympic gold, before
              Madison Square Garden chanted his name, Carmelo Anthony was a
              kid trying to survive. <em>Where Tomorrows Aren&rsquo;t Promised</em> is
              the story of that kid &mdash; told in his own words, without
              filter or apology.
            </p>
            <p className="text-text-muted text-lg leading-relaxed">
              Published by Simon &amp; Schuster and debuting on the New York
              Times bestseller list, the memoir traces Carmelo&rsquo;s earliest
              years in Red Hook, Brooklyn &mdash; a neighborhood where poverty
              was ordinary and violence was never far away &mdash; before his
              family moved to Baltimore, where the stakes grew even higher.
            </p>
            <p className="text-text-muted text-lg leading-relaxed">
              He writes about the friends he lost to the streets. About the
              funerals that came too often and too early. About a mother who
              worked relentlessly to keep her family together, and about the
              quiet fear of wondering whether tomorrow would come at all.
            </p>
          </div>
        </div>
      </section>

      {/* Pull Quote */}
      <section className="py-16 md:py-24 bg-bg-elevated">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <PullQuote
              quote="Where I come from, tomorrows aren&rsquo;t promised. You learn that early. And once you know it, everything changes &mdash; how you move, how you love, how you fight."
              attribution="Carmelo Anthony"
            />
          </div>
        </div>
      </section>

      {/* Continued Narrative */}
      <section className="py-16 md:py-24">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="max-w-3xl mx-auto space-y-8">
            <p className="text-text text-lg leading-relaxed">
              But this is not a story about despair. It is a story about what
              happens when a young man refuses to accept the life that was
              written for him. Basketball became more than a game &mdash; it
              became his way out. The court was the one place where the noise
              fell away, where his talent could speak louder than his
              circumstances.
            </p>
            <p className="text-text-muted text-lg leading-relaxed">
              Through the Murphy Homes housing projects, through the
              gymnasiums of Baltimore, through the obstacles of poverty and
              the weight of loss, Carmelo carried a quiet determination that
              would eventually carry him to Syracuse, to the NBA, and to a
              career that placed him among the greatest to ever play.
            </p>
            <p className="text-text-muted text-lg leading-relaxed">
              The memoir is unflinching in its honesty. It does not
              romanticize hardship or dress survival in comfortable language.
              It is a book about what it costs to make it &mdash; and about
              the people and places that stay with you long after you do.
            </p>
          </div>
        </div>
      </section>

      {/* Book Details */}
      <section className="py-16 md:py-24 border-t border-border">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
              <div>
                <p className="font-mono text-xs uppercase tracking-widest text-text-muted mb-2">
                  Publisher
                </p>
                <p className="text-text text-base">Simon &amp; Schuster</p>
              </div>
              <div>
                <p className="font-mono text-xs uppercase tracking-widest text-text-muted mb-2">
                  Author
                </p>
                <p className="text-text text-base">Carmelo Anthony with D. Watkins</p>
              </div>
              <div>
                <p className="font-mono text-xs uppercase tracking-widest text-text-muted mb-2">
                  Category
                </p>
                <p className="text-text text-base">Memoir / Autobiography</p>
              </div>
              <div>
                <p className="font-mono text-xs uppercase tracking-widest text-text-muted mb-2">
                  Recognition
                </p>
                <p className="text-text text-base">New York Times Bestseller</p>
              </div>
            </div>

            <div className="section-divider mb-12" />

            <div className="text-center">
              <a
                href="https://www.amazon.com/Where-Tomorrows-Arent-Promised-Survival/dp/1982160594"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block border border-primary text-primary px-8 py-4 font-mono text-sm uppercase tracking-widest hover:bg-primary hover:text-bg transition-colors"
              >
                Read the Book
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Next Section Navigation */}
      <section className="border-t border-border">
        <div className="max-w-[1400px] mx-auto px-6">
          <Link
            href="/exhibition"
            className="group flex items-center justify-between py-12 md:py-16"
          >
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-text-muted mb-2">
                Next
              </p>
              <p className="font-display text-3xl md:text-5xl italic text-text group-hover:text-primary transition-colors">
                The Exhibition
              </p>
            </div>
            <svg
              width="32"
              height="32"
              viewBox="0 0 20 20"
              fill="none"
              className="text-text-muted group-hover:text-primary group-hover:translate-x-2 transition-all"
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
        </div>
      </section>
    </>
  );
}
