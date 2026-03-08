interface PullQuoteProps {
  quote: string;
  attribution?: string;
}

export default function PullQuote({ quote, attribution }: PullQuoteProps) {
  return (
    <blockquote className="border-l-2 border-primary pl-8 py-4">
      <p className="font-display text-2xl md:text-3xl italic leading-relaxed text-accent">
        &ldquo;{quote}&rdquo;
      </p>
      {attribution && (
        <cite className="block mt-4 font-mono text-xs uppercase tracking-widest text-text-muted not-italic">
          {attribution}
        </cite>
      )}
    </blockquote>
  );
}
