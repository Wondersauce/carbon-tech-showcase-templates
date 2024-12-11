import { cn } from "@/lib/utils";
import { tailwindBgColors, tailwindColorGroups } from "./classes";

export default function TailwindColors() {
  return (
    <>
      <div className="space-y-4">
        {tailwindColorGroups.map((group) => (
          <div key={group}>
            <h3 className="capitalize">{group}</h3>
            <div className="flex flex-wrap">
              {tailwindBgColors
                .filter((className) => className.startsWith(`bg-${group}`))
                .map((className) => (
                  <div key={className}>
                    <div
                      className={cn("h-24 w-24", className, {
                        "border border-black-100 border-solid":
                          group === "white" || group === "transparent",
                      })}
                    />
                    <span className="opacity-90 font-caption-02">
                      {className.replace("bg-", "")}
                    </span>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
