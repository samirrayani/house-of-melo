import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SectionHeader from "../components/SectionHeader";
import PullQuote from "../components/PullQuote";

export const metadata: Metadata = {
  title: "Community",
  description:
    "Carmelo Anthony's philanthropy, social impact, and lifelong commitment to Baltimore and the Black community through the Social Change Fund and beyond.",
};

export default function CommunityPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-32 md:pt-40 pb-16 md:pb-24">
        <div className="max-w-[1400px] mx-auto px-6">
          <SectionHeader
            number="05"
            label="The Impact"
            title="Community"
          />
          <div className="max-w-3xl">
            <p className="text-lg md:text-xl text-text-muted leading-relaxed">
              Social justice and equality have informed and continue to serve
              as the throughline for all of Anthony&rsquo;s endeavors. Long
              before it became fashionable for athletes to speak out, Carmelo
              was already doing the work &mdash; quietly, consistently, and
              with purpose.
            </p>
          </div>
        </div>
      </section>

      {/* The Social Change Fund */}
      <section className="py-16 md:py-24 border-t border-border">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 md:gap-24">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.4em] text-primary mb-6">
                Systemic Change
              </p>
              <h2 className="font-display text-3xl md:text-5xl italic leading-[1.1] mb-8">
                The Social Change Fund
              </h2>
              <div className="space-y-6 text-text-muted text-lg leading-relaxed">
                <p>
                  In 2020, Carmelo Anthony co-founded the Social Change Fund
                  alongside Dwyane Wade and Chris Paul &mdash; three fathers,
                  three Hall of Famers, united by a shared conviction that their
                  platforms carried a responsibility beyond the game.
                </p>
                <p>
                  The Social Change Fund was built to address racial injustice
                  at its roots. It invests in organizations working to dismantle
                  systemic barriers in voting rights, criminal justice reform,
                  and economic empowerment for the Black community. This was not
                  a moment. It was a commitment &mdash; one that continues to
                  shape policy, fund grassroots organizations, and amplify
                  voices that have gone unheard for too long.
                </p>
                <p>
                  For Carmelo, this work was never separate from who he is. It
                  is the natural extension of a life shaped by community, by
                  struggle, and by the understanding that real change demands
                  real investment.
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <div className="bg-bg-elevated border border-border p-8 md:p-12">
                <p className="font-mono text-xs uppercase tracking-[0.4em] text-primary mb-8">
                  Fund Pillars
                </p>
                <div className="space-y-8">
                  <div>
                    <h3 className="font-display text-xl italic text-accent mb-2">
                      Voting Rights
                    </h3>
                    <p className="text-text-muted leading-relaxed">
                      Protecting and expanding access to the ballot for
                      communities of color across the country.
                    </p>
                  </div>
                  <div className="section-divider" />
                  <div>
                    <h3 className="font-display text-xl italic text-accent mb-2">
                      Criminal Justice Reform
                    </h3>
                    <p className="text-text-muted leading-relaxed">
                      Challenging the systems that disproportionately impact
                      Black and Brown communities, from policing to sentencing.
                    </p>
                  </div>
                  <div className="section-divider" />
                  <div>
                    <h3 className="font-display text-xl italic text-accent mb-2">
                      Economic Empowerment
                    </h3>
                    <p className="text-text-muted leading-relaxed">
                      Building pathways to generational wealth and opportunity
                      for the Black community.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Baltimore Connection */}
      <section className="py-16 md:py-24 bg-bg-elevated">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <p className="font-mono text-xs uppercase tracking-[0.4em] text-primary mb-6">
              Always Baltimore
            </p>
            <h2 className="font-display text-3xl md:text-5xl italic leading-[1.1] mb-8">
              A city he never left behind
            </h2>
            <div className="space-y-6 text-text-muted text-lg leading-relaxed">
              <p>
                Baltimore made Carmelo Anthony. He has spent his life making
                sure Baltimore knows it. While his career took him to Syracuse,
                Denver, New York, and beyond, his investment in the city where
                he grew up has never wavered. It has only deepened.
              </p>
              <p>
                Carmelo&rsquo;s commitment to Baltimore is not symbolic. It is
                structural. He has funded youth basketball programs, supported
                community centers, and created opportunities for young people
                in the neighborhoods where he once played. He has walked those
                blocks. He knows those corners. And he has never stopped
                showing up.
              </p>
              <p>
                Through consistent, sustained investment &mdash; not
                one-time gestures, but years of presence and purpose &mdash;
                Carmelo has become more than Baltimore&rsquo;s most famous son.
                He has become one of its most dedicated advocates.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mayor Quote + Image */}
      <section className="py-16 md:py-24 border-t border-border">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center">
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src="/mayor.png"
                alt="Baltimore Mayor Brandon M. Scott"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div>
              <PullQuote
                quote="Carmelo embodies everything that makes Baltimore the best city in America. Determination, grit and deep sense of community pride."
                attribution="Baltimore Mayor Brandon M. Scott"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Youth Programs + Empowerment */}
      <section className="py-16 md:py-24 border-t border-border">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 md:gap-24">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.4em] text-primary mb-6">
                The Next Generation
              </p>
              <h2 className="font-display text-3xl md:text-5xl italic leading-[1.1] mb-8">
                Baltimore youth programs
              </h2>
              <div className="space-y-6 text-text-muted text-lg leading-relaxed">
                <p>
                  For Carmelo, the most important work has always been the work
                  closest to home. His youth programs in Baltimore are built on
                  a simple but powerful idea: every kid in this city deserves to
                  see a future they can believe in.
                </p>
                <p>
                  Through basketball camps, mentorship initiatives, and
                  educational partnerships, Carmelo has created spaces where
                  young people from Baltimore&rsquo;s toughest neighborhoods
                  can develop not just as athletes, but as leaders. These
                  programs are not about charity. They are about community
                  empowerment &mdash; giving young people the tools, the
                  confidence, and the networks to build their own paths.
                </p>
                <p>
                  He understands what it means to grow up in a place where
                  tomorrows are not promised. That understanding is what makes
                  his work different. It is personal. It is permanent.
                </p>
              </div>
            </div>
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.4em] text-primary mb-6">
                Using the Platform
              </p>
              <h2 className="font-display text-3xl md:text-5xl italic leading-[1.1] mb-8">
                Advocacy and change
              </h2>
              <div className="space-y-6 text-text-muted text-lg leading-relaxed">
                <p>
                  Carmelo Anthony was one of the first professional athletes
                  to march in protest following the death of Freddie Gray in
                  Baltimore in 2015. He did not issue a statement from a
                  distance. He went home. He walked with his city. He listened.
                </p>
                <p>
                  That moment crystallized what many already knew: Carmelo was
                  willing to use his platform not for performance, but for
                  purpose. In the years since, he has spoken at the United
                  Nations, advocated for police reform, and consistently used
                  his voice to challenge systems of inequality.
                </p>
                <p>
                  His advocacy is not a chapter in his story. It is the story.
                  Every business venture, every creative project, every public
                  appearance carries with it the weight of a man who believes
                  that influence without action is wasted.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Empowerment Symposium */}
      <section className="py-16 md:py-24 bg-bg-elevated">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <p className="font-mono text-xs uppercase tracking-[0.4em] text-primary mb-6">
              Gathering the Community
            </p>
            <h2 className="font-display text-3xl md:text-5xl italic leading-[1.1] mb-8">
              House of Melo Community Empowerment Symposium
            </h2>
            <div className="space-y-6 text-text-muted text-lg leading-relaxed text-left md:text-center">
              <p>
                The House of Melo Community Empowerment Symposium brings
                together leaders, activists, educators, and young people from
                Baltimore and beyond for a day of dialogue, connection, and
                action. It is a space where the conversations that matter most
                &mdash; about equity, about opportunity, about what we owe each
                other &mdash; are held with honesty and intention.
              </p>
              <p>
                The symposium is the living expression of everything Carmelo
                believes: that community is not just where you come from, but
                what you build. That empowerment is not given. It is created,
                together. And that the work of lifting each other up is never
                finished.
              </p>
            </div>
            <div className="section-divider mx-auto mt-12" />
          </div>
        </div>
      </section>

      {/* Closing Statement */}
      <section className="py-16 md:py-24 border-t border-border">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <p className="font-display text-2xl md:text-4xl italic leading-relaxed text-accent">
              The points will be remembered. The championships will be debated.
              But the lives changed &mdash; that is the legacy that endures.
            </p>
          </div>
        </div>
      </section>

      {/* Next Section Navigation */}
      <section className="border-t border-border">
        <div className="max-w-[1400px] mx-auto px-6">
          <Link
            href="/the-memoir"
            className="group flex items-center justify-between py-12 md:py-16"
          >
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.4em] text-text-muted mb-2">
                Next
              </p>
              <p className="font-display text-3xl md:text-5xl italic text-text group-hover:text-primary transition-colors">
                The Memoir
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
