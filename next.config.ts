import createMDX from "@next/mdx";
import type { NextConfig } from "next";
import path from "path";
import remarkGfm from "remark-gfm";
const nextConfig: NextConfig = {
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  sassOptions: {
    includePaths: [path.join(__dirname, "node_modules")],
  },
};

const withMDX = createMDX({
  // Add markdown plugins here, as desired
  options: {
    remarkPlugins: [remarkGfm],
  },
});

export default withMDX(nextConfig);
