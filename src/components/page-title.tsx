export function PageTitle({ title }: { title: string }) {
  return (
    <div className="py-10 text-center sm:py-14">
      <h1 className="font-display text-2xl font-light tracking-widest sm:text-3xl md:text-4xl">
        {title.toUpperCase()}
      </h1>
    </div>
  );
}
