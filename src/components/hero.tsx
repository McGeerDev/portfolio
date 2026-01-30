export function Hero({
  title = "Devan McGeer",
  subtitle = "Site Reliability Engineer",
}: {
  title?: string;
  subtitle?: string;
}) {
  return (
    <div className="py-16 text-center sm:py-24">
      <h1 className="font-display text-4xl leading-tight font-light tracking-widest sm:text-6xl md:text-7xl">
        {title.toUpperCase()}
      </h1>
      <p className="mt-6 text-lg tracking-[0.3em] text-gray-700 sm:text-xl sm:tracking-[0.4em] md:text-2xl">
        {subtitle.toUpperCase()}
      </p>
    </div>
  );
}
