import { tailwindFonts } from "./classes"

export default function TailwindFonts() {
  return (
    <>
      <div className="max-h-[500px] space-y-4 overflow-y-auto">
        {tailwindFonts.map((className) => (
          <div key={className} className={className}>
            {className}
          </div>
        ))}
      </div>
    </>
  )
}
