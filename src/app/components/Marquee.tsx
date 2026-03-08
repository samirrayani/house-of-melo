export default function Marquee() {
  const words = [
    "Grit",
    "Character",
    "Accountability",
    "Determination",
    "Dream",
    "Joy",
    "Leadership",
    "Fame",
  ];

  const repeated = [...words, ...words, ...words, ...words];

  return (
    <div className="bg-accent overflow-hidden py-4 md:py-5">
      <div className="animate-marquee flex whitespace-nowrap">
        {repeated.map((word, i) => (
          <span
            key={i}
            className="font-display text-lg md:text-xl uppercase tracking-[0.3em] text-white mx-6 md:mx-10"
          >
            {word}
            <span className="ml-6 md:ml-10 text-white/40">/</span>
          </span>
        ))}
      </div>
    </div>
  );
}
