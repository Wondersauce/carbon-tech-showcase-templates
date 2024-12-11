/** @type {import('next').NextConfig} */
import path from "path"
import { fileURLToPath } from "url"
import createMDX from "@next/mdx"
import remarkGfm from "remark-gfm"

// Convert import.meta.url to a file path
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const withMDX = createMDX({
  // Add markdown plugins here, as desired
  options: {
    remarkPlugins: [remarkGfm],
  },
})

export default withMDX({
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  sassOptions: {
    includePaths: [path.join(__dirname, "node_modules")],
  },
})
