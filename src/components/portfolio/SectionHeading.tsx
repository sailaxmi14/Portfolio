interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

const SectionHeading = ({ title, subtitle }: SectionHeadingProps) => (
  <div className="mb-10 text-center">
    <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-2">{title}</h2>
    {subtitle && <p className="font-body text-sm text-muted-foreground">{subtitle}</p>}
    <div className="w-12 h-0.5 bg-accent mx-auto mt-4" />
  </div>
);

export default SectionHeading;
