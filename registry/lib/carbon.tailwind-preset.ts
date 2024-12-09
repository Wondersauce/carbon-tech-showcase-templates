// @ts-expect-error - No type definitions unavailable for @carbon/colors
import * as colors from "@carbon/colors";
// @ts-expect-error - No type definitions unavailable for @carbon/type
import * as type from "@carbon/type";
import plugin from "tailwindcss/plugin";

type CarbonStyles = Record<
  string,
  {
    breakpoints?: Record<
      string,
      {
        [key: string]: string;
      }
    >;
  }
>;

export const camelToDash = (str: string): string => {
  return str
    .replace(/([A-Z])|(\d+)/g, "-$&")
    .toLowerCase()
    .replace(/^-/, ""); // Remove leading dash if present
};

export const fontsUtilities = () => {
  const styles = type.styles as CarbonStyles;

  const utilities: Record<
    string,
    string | Record<string, Record<string, string> | string>
  > = {};
  Object.entries(styles).forEach(([key, value]) => {
    const dashKey = camelToDash(key);
    const { breakpoints, ...rest } = value;

    utilities[`.font-${dashKey}`] = {
      ...rest,
      ...(breakpoints?.md && {
        "@screen md": breakpoints.md,
      }),
      ...(breakpoints?.lg && {
        "@screen lg": breakpoints.lg,
      }),
    };
  });

  return utilities;
};

const typePlugin = plugin(({ addUtilities, matchUtilities, theme }) => {
  const utilities = fontsUtilities();

  matchUtilities(
    {
      "inset-block": (value) => ({
        insetBlock: value,
      }),
      "inset-inline": (value) => ({
        insetInline: value,
      }),
    },
    {
      supportsNegativeValues: true,
      values: theme("inset"),
    }
  );

  matchUtilities(
    {
      "block-start": (value) => ({
        insetBlockStart: value,
      }),
      "block-end": (value) => ({
        insetBlockEnd: value,
      }),
      "inline-start": (value) => ({
        insetInlineStart: value,
      }),
      "inline-end": (value) => ({
        insetInlineEnd: value,
      }),
    },
    {
      supportsNegativeValues: true,
      values: theme("inset"),
    }
  );
  addUtilities(utilities);
});

export const carbonPreset = {
  theme: {
    colors: { ...colors.colors, transparent: "transparent", white: "#fff" },
  },
  plugins: [typePlugin],
};

export default carbonPreset;
