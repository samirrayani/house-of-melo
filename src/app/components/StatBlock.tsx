interface StatBlockProps {
  value: string;
  label: string;
}

export default function StatBlock({ value, label }: StatBlockProps) {
  return (
    <div className="border-l border-primary pl-6 py-2">
      <p className="font-display text-3xl md:text-4xl italic text-primary">
        {value}
      </p>
      <p className="font-mono text-xs uppercase tracking-widest text-text-muted mt-1">
        {label}
      </p>
    </div>
  );
}
