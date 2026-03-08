import Image from "next/image";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Marquee from "./components/Marquee";

export default function Home() {
  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-end justify-center overflow-hidden bg-black">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black z-10" />

        <Image
          src="/hero.png"
          alt="Carmelo Anthony"
          fill
          className="object-contain object-bottom"
          priority
          sizes="100vw"
        />

        <div className="relative z-20 text-center pb-16 md:pb-24 px-6 max-w-4xl mx-auto">
          <p className="font-display text-sm md:text-base uppercase tracking-[0.4em] text-accent mb-4">
            Enoch Pratt Free Library &mdash; Baltimore, MD
          </p>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold uppercase tracking-[0.1em] leading-[0.95]">
            House of Melo
          </h1>
          <p className="mt-6 text-lg md:text-xl text-white/70 max-w-2xl mx-auto font-light leading-relaxed">
            An interactive tribute and community empowerment symposium honoring
            2025 NBA Hall of Famer, Carmelo Anthony, and his hometown Baltimore,
            MD.
          </p>
          <p className="mt-4 font-display text-sm uppercase tracking-[0.3em] text-accent/80">
            Where Tomorrows Are Promised
          </p>
        </div>
      </section>

      {/* Marquee */}
      <Marquee />

      {/* Legacy / Stats Section */}
      <section id="legacy" className="bg-black py-24 md:py-32">
        <div className="max-w-[1520px] mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center">
            <div>
              <p className="font-display text-sm uppercase tracking-[0.4em] text-accent mb-6">
                The Legacy
              </p>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold uppercase leading-[1.05] mb-10">
                Carmelo
                <br />
                Anthony
              </h2>

              <div className="grid grid-cols-2 gap-8">
                {[
                  { value: "2025", label: "Hall of Famer" },
                  { value: "10x", label: "NBA All-Star" },
                  { value: "3x", label: "Gold Olympian" },
                  { value: "28K+", label: "Career Points" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <p className="font-display text-4xl md:text-5xl font-bold text-accent">
                      {stat.value}
                    </p>
                    <p className="stat-label text-sm text-muted mt-1">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-10 flex flex-wrap gap-3">
                {["Entrepreneur", "Philanthropist", "Legend"].map((tag) => (
                  <span
                    key={tag}
                    className="font-display text-xs uppercase tracking-[0.2em] border border-white/20 px-4 py-2 text-white/60"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src="/melo-desert-1.jpg"
                  alt="Carmelo Anthony in the desert"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 md:-bottom-8 md:-left-8 bg-accent p-6 md:p-8 max-w-[280px]">
                <p className="font-display text-lg md:text-xl font-bold uppercase leading-tight">
                  &ldquo;Some people hope for better days. When you&rsquo;re
                  from Baltimore, you make them.&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="relative bg-black">
        <div className="max-w-[1520px] mx-auto">
          <div className="grid md:grid-cols-2 min-h-screen">
            <div className="relative aspect-square md:aspect-auto">
              <Image
                src="/melo-desert-2.jpg"
                alt="Carmelo Anthony"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            <div className="flex flex-col justify-center px-6 md:px-16 lg:px-24 py-16 md:py-24">
              <p className="font-display text-sm uppercase tracking-[0.4em] text-accent mb-6">
                The Experience
              </p>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold uppercase leading-[1.1] mb-8">
                When You Know What&rsquo;s Possible, You Can&rsquo;t Be Stopped
              </h2>
              <p className="text-lg text-white/60 leading-relaxed mb-8">
                That&rsquo;s when legacies are made. That&rsquo;s how tomorrows
                are promised. Step inside the House of Melo and experience the
                journey of one of basketball&rsquo;s greatest — from the streets
                of Baltimore to the Hall of Fame.
              </p>

              <a
                href="https://www.prattlibrary.org/carmelo-anthony"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-accent hover:bg-accent-dark transition-colors px-8 py-4 font-display text-sm uppercase tracking-[0.2em] text-white w-fit"
              >
                Visit the Experience
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  className="ml-1"
                >
                  <path
                    d="M3 8h10M9 4l4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>

              <div className="mt-16 border-l-2 border-accent pl-6">
                <p className="text-lg text-white/80 italic leading-relaxed">
                  &ldquo;Carmelo embodies everything that makes Baltimore the
                  best city in America. Determination, grit and deep sense of
                  community pride.&rdquo;
                </p>
                <p className="mt-4 font-display text-sm uppercase tracking-[0.2em] text-muted">
                  Baltimore Mayor Brandon M. Scott
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Book Section */}
      <section className="bg-black py-24 md:py-32 border-t border-white/5">
        <div className="max-w-[1520px] mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center max-w-5xl mx-auto">
            <div className="flex justify-center">
              <div className="relative w-[280px] md:w-[320px] shadow-2xl">
                <Image
                  src="/book.jpg"
                  alt="Where Tomorrows Aren't Promised by Carmelo Anthony"
                  width={320}
                  height={480}
                  className="w-full h-auto"
                />
              </div>
            </div>

            <div>
              <p className="font-display text-sm uppercase tracking-[0.4em] text-accent mb-6">
                The Memoir
              </p>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold uppercase leading-[1.1] mb-6">
                Where Tomorrows Aren&rsquo;t Promised
              </h2>
              <p className="text-lg text-white/60 leading-relaxed mb-8">
                A raw, intimate memoir chronicling Carmelo&rsquo;s journey from
                the streets of Baltimore to NBA stardom. A story of survival,
                determination, and the relentless pursuit of greatness.
              </p>
              <a
                href="https://www.amazon.com/Where-Tomorrows-Arent-Promised-Survival/dp/1982160594"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 border border-white/30 hover:border-white hover:bg-white/5 transition-all px-8 py-4 font-display text-sm uppercase tracking-[0.2em] text-white"
              >
                Get the Book
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  className="ml-1"
                >
                  <path
                    d="M3 8h10M9 4l4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Press Section */}
      <section
        id="press"
        className="bg-black py-24 md:py-32 border-t border-white/5"
      >
        <div className="max-w-[1520px] mx-auto px-6">
          <div className="text-center mb-16">
            <p className="font-display text-sm uppercase tracking-[0.4em] text-accent mb-4">
              In the News
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold uppercase">
              Coverage & Features
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                outlet: "Business Insider",
                headline:
                  "Hall of Famer Carmelo Anthony honored with career-spanning exhibit at Baltimore\u2019s Enoch Pratt Free Library",
              },
              {
                outlet: "Blavity",
                headline:
                  "Carmelo Anthony Giving Back to Baltimore Community Through Contest",
              },
              {
                outlet: "Sports Illustrated",
                headline:
                  "Baltimore Honors New York Knicks Legend Carmelo Anthony",
              },
              {
                outlet: "Complex",
                headline:
                  "Inside Carmelo Anthony\u2019s House of Melo Exhibition in Baltimore",
              },
            ].map((item) => (
              <div
                key={item.outlet}
                className="group border border-white/10 hover:border-accent/50 p-8 transition-all duration-300"
              >
                <p className="font-display text-xs uppercase tracking-[0.3em] text-accent mb-4">
                  {item.outlet}
                </p>
                <p className="text-white/70 text-sm leading-relaxed group-hover:text-white/90 transition-colors">
                  {item.headline}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-sm text-muted">
              For press inquiries:{" "}
              <a
                href="mailto:Katie@PressOnComms.Biz"
                className="text-white hover:text-accent transition-colors"
              >
                Katie@PressOnComms.Biz
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section
        id="partners"
        className="bg-black py-24 md:py-32 border-t border-white/5"
      >
        <div className="max-w-[1520px] mx-auto px-6">
          <div className="text-center mb-16">
            <p className="font-display text-sm uppercase tracking-[0.4em] text-accent mb-4">
              Made Possible By
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold uppercase">
              Partners & Sponsors
            </h2>
          </div>

          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-items-center opacity-60">
            {[
              "c6912202-ca7a-4ac6-9b4f-132a1a265b52/7.png",
              "58758fbc-e87d-4b56-9f27-86258ce8b3ef/4.png",
              "f9f6aa7b-e868-471a-bf1d-3da9c53da917/2.png",
              "f2b4ff7d-5e2e-4594-ae2a-cf901d83c6a8/3.png",
              "434d43db-46da-4014-9655-284406658fc7/4.png",
              "bc3108ac-8413-4eec-b110-034c2f45babe/25.png",
              "072eaf05-8e25-4940-8329-db2e268c8c93/5.png",
              "0c4d2f17-7c28-4a4b-90f4-e0d5fd3385c4/23.png",
              "7a55a30e-7c71-4ad8-b0b6-93d790003d82/3.png",
              "02d4cf53-0379-4fa8-a1e6-f6069624c36f/2.png",
              "19487014-0e25-4b3d-916f-1b252d1f9e7b/10.png",
              "5a5a81cf-e6b7-42e9-b9c3-742c74d9d434/1.png",
            ].map((path, i) => (
              <div
                key={i}
                className="w-24 h-24 md:w-28 md:h-28 flex items-center justify-center"
              >
                <Image
                  src={`https://images.squarespace-cdn.com/content/v1/68ab8535ef8df422d4fe58a9/${path}`}
                  alt="Partner logo"
                  width={100}
                  height={100}
                  className="w-full h-full object-contain invert"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
