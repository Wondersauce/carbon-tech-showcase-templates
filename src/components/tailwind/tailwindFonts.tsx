"use client";
import { tailwindFonts, tailwindFontsGroups } from "./classes";
import { cn } from "@/lib/utils";
import { Select, SelectItem } from "@carbon/react";
import { useState } from "react";

const EXAMPLE_COPY = "Lorem ipsum dolor sit amet, consectetur.";

const formatFontClassName = (group: string) =>
  `font-${group.replace(" ", "-")}`;

export default function TailwindFonts() {
  const [selectedFont, setSelectFont] = useState(
    formatFontClassName(tailwindFontsGroups[0])
  );

  const selectedExamples = tailwindFonts.filter((className) =>
    className.startsWith(selectedFont)
  );

  return (
    <>
      <div className="space-y-4">
        <Select
          onChange={(e) => setSelectFont(e.target.value)}
          id="select-1"
          labelText="Select a font to display"
          className="max-w-sm"
        >
          {tailwindFontsGroups.map((group) => (
            <SelectItem
              key={group}
              value={formatFontClassName(group)}
              text={group}
              className="capitalize"
            />
          ))}
        </Select>
        <ul className="list-none pl-0 space-y-6">
          {selectedExamples.map((className) => (
            <li className="pl-0 space-y-2" key={className}>
              <span className="opacity-90 font-caption-02">{className}</span>
              <span className={cn(className, "block")}>{EXAMPLE_COPY}</span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
