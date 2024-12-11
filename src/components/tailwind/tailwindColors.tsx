import { cn } from "@/lib/utils"

import { tailwindBgColors, tailwindColorGroups } from "./classes"

export default function TailwindFonts() {
  return (
    <>
      <div className="space-y-4">
        {tailwindColorGroups.map((group) => (
          <div key={group}>
            <h2 className="capitalize">{group}</h2>

            <div className="flex flex-wrap gap-4">
              {tailwindBgColors
                .filter((className) => className.startsWith(`bg-${group}`))
                .map((className) => (
                  <div key={className}>
                    <div className={cn("h-10 w-10", className)}></div>
                    <div className="text-xs">
                      {className.replace("bg-", "")}
                    </div>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
