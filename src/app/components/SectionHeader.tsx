interface SectionHeaderProps {
  number: string;
  label: string;
  title: string;
}

export default function SectionHeader({
  number,
  label,
  title,
}: SectionHeaderProps) {
  return (
    <div className="mb-12 md:mb-16">
      <div className="flex items-center gap-4 mb-6">
        <span className="font-mono text-xs text-primary">{number}</span>
        <div className="section-divider" />
        <span className="font-mono text-xs uppercase tracking-widest text-text-muted">
          {label}
        </span>
      </div>
      <h1 className="font-display text-4xl md:text-6xl lg:text-7xl italic leading-[1.05]">
        {title}
      </h1>
    </div>
  );
}
