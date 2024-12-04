import { tailwindFonts } from "./classes";

export default function TailwindFonts() {
  return (
    <>
      <div className="space-y-4 max-h-[500px] overflow-y-auto">
        {tailwindFonts.map((className) => (
          <div key={className} className={className}>
            {className}
          </div>
        ))}
      </div>
    </>
  );
}
