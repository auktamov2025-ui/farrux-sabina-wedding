interface SectionTitleProps {
  eyebrow: string;
  title: string;
  description: string;
}

export default function SectionTitle({ eyebrow, title, description }: SectionTitleProps) {
  return (
    <div className="max-w-2xl">
      <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#a56d1f]">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-3xl font-semibold tracking-[0.08em] text-[#4c2e14] sm:text-4xl">
        {title}
      </h2>
      <p className="mt-4 text-base leading-8 text-[#6b4b1b] sm:text-lg">{description}</p>
    </div>
  );
}
